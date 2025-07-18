# Python Tool Translation Guide

This guide covers translating GhostBSD Python applications using the standard workflow implemented in update-station.

## Prerequisites

- Python development environment
- Git access to the repository
- Text editor for .po files
- gettext tools: `sudo pkg install gettext-tools`

## Setup.py Implementation

GhostBSD Python tools use these custom setuptools commands (based on update-station):

```python
import os
import glob
from setuptools import setup, Command
from DistUtilsExtra.command.build_extra import build_extra
from DistUtilsExtra.command.build_i18n import build_i18n
from DistUtilsExtra.command.clean_i18n import clean_i18n

class UpdateTranslationsCommand(Command):
    """Custom command to extract messages and update .po files."""
    description = 'Extract messages to .pot and update .po'
    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        pot_file = 'po/[tool-name].pot'
        po_files = glob.glob('po/*.po')
        
        # Extract messages to .pot file
        print("Extracting messages to .pot file...")
        os.system(f'xgettext --from-code=UTF-8 -L Python -o {pot_file} [tool_directory]/*.py [main-script]')
        
        # Update .po files
        print("Updating .po files with new translations...")
        for po_file in po_files:
            print(f"Updating {po_file}...")
            os.system(f'msgmerge -U {po_file} {pot_file}')
        print("Translation update complete.")

class CreateTranslationCommand(Command):
    """Custom command to create a new .po file for a specific language."""
    description = 'Create a new .po file for the specified language'
    user_options = [
        ('locale=', 'l', 'Locale code for the new translation (e.g., fr_FR, pt_BR)')
    ]

    def initialize_options(self):
        self.locale = None

    def finalize_options(self):
        if self.locale is None:
            raise Exception("You must specify the locale code (e.g., --locale=fr_FR)")

    def run(self):
        pot_file = 'po/[tool-name].pot'
        po_dir = 'po'
        po_file = os.path.join(po_dir, f'{self.locale}.po')
        
        # Create .pot file if needed
        if not os.path.exists(pot_file):
            print("Extracting messages to .pot file...")
            os.system(f'xgettext --from-code=UTF-8 -L Python -o {pot_file} [tool_directory]/*.py [main-script]')
        
        # Create new .po file
        if not os.path.exists(po_file):
            print(f"Creating new {po_file} for locale '{self.locale}'...")
            os.makedirs(po_dir, exist_ok=True)
            os.system(f'msginit --locale={self.locale} --input={pot_file} --output-file={po_file}')
        else:
            print(f"PO file for locale '{self.locale}' already exists: {po_file}")

setup(
    cmdclass={
        'create_translation': CreateTranslationCommand,
        'update_translations': UpdateTranslationsCommand,
        'build': build_extra,
        'build_i18n': build_i18n,
        'clean': clean_i18n
    }
)
```

## Translation Workflow

### 1. Clone Repository
```bash
git clone https://github.com/ghostbsd/[tool-name]
cd [tool-name]
```

### 2. Create New Translation
```bash
python setup.py create_translation --locale=fr_FR
```

Creates `po/fr_FR.po` with proper locale settings.

### 3. Update Translations
After code changes:
```bash
python setup.py update_translations
```

Updates all .po files with new/changed strings.

### 4. Edit Translations
Edit the .po file:
```po
#: update_station/main.py:45
msgid "Network Manager"
msgstr "Gestionnaire de R�seau"
```

### 5. Build and Test
```bash
python setup.py build
LANG=fr_FR.UTF-8 python3 [main-script]
```

## Directory Structure

```
repository/
   po/
      [tool-name].pot    # Template (generated)
      fr_FR.po           # French (France)
      fr_CA.po           # French (Canada)
      pt_BR.po           # Portuguese (Brazil)
   build/
      lib/
          locale/        # Compiled .mo files
   setup.py               # Translation commands
```

## Locale Format

Use full locale format `language_COUNTRY` following install-station standard:

### Supported Locales (from install-station)
- `ar_EG` - Arabic (Egypt)
- `bg_BG` - Bulgarian (Bulgaria)
- `bn_BD` - Bengali (Bangladesh)
- `ca_ES` - Catalan (Spain)
- `cs_CZ` - Czech (Czech Republic)
- `da_DK` - Danish (Denmark)
- `de_DE` - German (Germany)
- `el_GR` - Greek (Greece)
- `en_GB` - English (United Kingdom)
- `en_US` - English (United States)
- `es_ES` - Spanish (Spain)
- `es_MX` - Spanish (Mexico)
- `et_EE` - Estonian (Estonia)
- `eu_ES` - Basque (Spain)
- `fi_FI` - Finnish (Finland)
- `fr_CA` - French (Canada)
- `fr_FR` - French (France)
- `gl_ES` - Galician (Spain)
- `he_IL` - Hebrew (Israel)
- `hi_IN` - Hindi (India)
- `hr_HR` - Croatian (Croatia)
- `hu_HU` - Hungarian (Hungary)
- `id_ID` - Indonesian (Indonesia)
- `is_IS` - Icelandic (Iceland)
- `it_IT` - Italian (Italy)
- `ja_JP` - Japanese (Japan)
- `ko_KR` - Korean (South Korea)
- `lt_LT` - Lithuanian (Lithuania)
- `lv_LV` - Latvian (Latvia)
- `mk_MK` - Macedonian (North Macedonia)
- `nb_NO` - Norwegian Bokmål (Norway)
- `nl_NL` - Dutch (Netherlands)
- `nn_NO` - Norwegian Nynorsk (Norway)
- `pl_PL` - Polish (Poland)
- `pt_BR` - Portuguese (Brazil)
- `pt_PT` - Portuguese (Portugal)
- `ro_RO` - Romanian (Romania)
- `ru_RU` - Russian (Russia)
- `sk_SK` - Slovak (Slovakia)
- `sl_SI` - Slovenian (Slovenia)
- `sr_RS` - Serbian (Serbia)
- `sv_SE` - Swedish (Sweden)
- `th_TH` - Thai (Thailand)
- `tr_TR` - Turkish (Turkey)
- `uk_UA` - Ukrainian (Ukraine)
- `vi_VN` - Vietnamese (Vietnam)
- `zh_CN` - Chinese (China)
- `zh_TW` - Chinese (Taiwan)

## Repository Status

### Tools Using This Standard
- **update-station** - Reference implementation
- **install-station** - Same implementation

### Tools Needing Implementation
- **networkmgr** - Needs migration to standard commands
- **setup-station** - Needs translation commands added
- **station-tweak** - Needs translation commands added  
- **software-station** - Needs translation commands added
- **backup-station** - Needs migration from DistUtilsExtra
- **gbi** - Needs translation commands added

## Best Practices

- Use full `language_COUNTRY` locale format
- Keep UI text concise for interface constraints
- Test translations in actual application
- Use consistent terminology across GhostBSD tools
- Commit only .po files (not .pot or .mo files)
- Run `update_translations` regularly after code changes

## Contributing

1. Fork repository
2. Create/update translations: `python setup.py create_translation --locale=fr_FR`
3. Edit .po files with translations
4. Build and test: `python setup.py build`
5. Commit only .po files
6. Submit pull request