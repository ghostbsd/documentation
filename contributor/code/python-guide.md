# Python Development Guide

This guide outlines the Python coding standards for GhostBSD projects. Following these standards ensures code consistency, maintainability, and compatibility with our development tools.

## Code Style Standards

### PEP 8 Compliance
All Python code must follow PEP 8 standards with these specific configurations:

- **Line length**: Maximum 120 characters
- **Indentation**: 4 spaces (no tabs)
- **Imports**: Organize in three groups separated by blank lines:
  1. Standard library imports
  2. Related third-party imports  
  3. Local application/library imports

### Naming Conventions
- **Variables**: `snake_case` (e.g., `network_name`, `retry_count`)
- **Functions**: `snake_case` (e.g., `connect_to_network()`, `get_available_networks()`)
- **Methods**: `snake_case` (e.g., `self.setup_ui()`, `self._validate_input()`)
- **Classes**: `PascalCase` (e.g., `NetworkManager`, `ConfigDialog`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_ATTEMPTS`, `DEFAULT_TIMEOUT`)
- **Private attributes**: Single leading underscore `_private_var`
- **Protected attributes**: Double leading underscore `__protected_var`

### Code Formatting
- **String quotes**: Use double quotes `"` for user-facing strings, single quotes `'` for internal strings
- **Trailing commas**: Always use trailing commas in multi-line lists, tuples, and dictionaries
- **Blank lines**: Two blank lines between top-level functions and classes, one blank line between methods

## Pylint Configuration

Configure Pylint to match our standards by creating a `.pylintrc` file in your project root:

```ini
[MASTER]
extension-pkg-whitelist=gi

[FORMAT]
max-line-length=120
indent-string='    '

[MESSAGES CONTROL]
disable=missing-docstring,
        too-few-public-methods,
        import-error,
        no-member

[DESIGN]
max-args=8
max-locals=20
max-branches=15
```

## Internationalization with Gettext

All user-visible text must be internationalized using gettext. This ensures GhostBSD applications can be translated into multiple languages.

### Setting up Gettext

Import and configure gettext at the top of your Python files following the GhostBSD pattern:

```python
import gettext

# Set up translation (replace 'your-app-name' with your application name)
gettext.bindtextdomain('your-app-name', '/usr/local/share/locale')
gettext.textdomain('your-app-name')
_ = gettext.gettext
```

### Marking Translatable Strings

Wrap all user-visible strings with the `_()` function:

```python
# Good - translatable
error_message = _("Unable to connect to network")
dialog.set_title(_("Network Settings"))
button.set_label(_("Apply Changes"))

# Bad - not translatable
error_message = "Unable to connect to network"
dialog.set_title("Network Settings")
```

### String Formatting with Gettext

Use format strings properly with translations:

```python
# Good - proper formatting
message = _("Connected to {network_name}").format(network_name=ssid)
count_text = _("Found {count} networks").format(count=len(networks))

# Bad - formatting outside translation
message = _("Connected to") + f" {ssid}"
```

### Pluralization

Handle plural forms correctly:

```python
import ngettext

# Proper pluralization
count_message = ngettext(
    "Found {count} network",
    "Found {count} networks", 
    network_count
).format(count=network_count)
```

## Documentation Standards

### Docstrings
Use Google-style docstrings for all public functions, classes, and modules:

```python
def connect_to_network(ssid, password=None):
    """Connect to a wireless network.
    
    Args:
        ssid (str): The network SSID to connect to
        password (str, optional): Network password. Defaults to None.
        
    Returns:
        bool: True if connection successful, False otherwise
        
    Raises:
        NetworkError: If the network interface is not available
    """
    pass
```

### Type Hints
Use type hints for function parameters and return values:

```python
def get_available_networks() -> list[dict[str, str]]:
    """Get list of available wireless networks.
    
    Returns:
        List of dictionaries containing network information
    """
    pass

def connect_to_network(ssid: str, password: str | None = None) -> bool:
    """Connect to specified network."""
    pass
```

## Type Annotations

Type annotations are required for all new code. Python 3.11+ provides modern syntax without importing from `typing`.

### Basic Types
Use built-in types directly:

```python
def process_config(name: str, port: int, enabled: bool) -> None:
    """Process configuration with basic types."""
    pass

def get_timeout() -> float:
    """Return timeout value in seconds."""
    return 30.5
```

### Collection Types
Use built-in collection types directly:

```python
def get_network_list() -> list[str]:
    """Return list of network names."""
    return ["WiFi-1", "WiFi-2"]

def get_network_config() -> dict[str, str]:
    """Return network configuration mapping."""
    return {"ssid": "MyNetwork", "security": "WPA2"}

def get_coordinates() -> tuple[int, int]:
    """Return x, y coordinates."""
    return (100, 200)

def get_unique_names() -> set[str]:
    """Return set of unique network names."""
    return {"WiFi-1", "WiFi-2"}
```

### Optional and Union Types
Use modern union syntax with `|`:

```python
def connect_with_password(password: str | None = None) -> bool:
    """Connect to network with optional password."""
    if password is None:
        return connect_without_auth()
    return connect_with_auth(password)

def parse_value(data: str | int) -> str:
    """Parse value that can be string or integer."""
    return str(data)

def get_config_value(key: str) -> str | int | bool:
    """Get configuration value of various types."""
    pass
```

### Class Annotations
Annotate class attributes and methods:

```python
class NetworkManager:
    """Network management class with type annotations."""
    
    MAX_RETRIES: int = 3  # Class variable
    
    def __init__(self, interface: str) -> None:
        # Instance variables
        self.interface: str = interface
        self.connected: bool = False
        self.current_network: str | None = None
        self._retry_count: int = 0
    
    def get_networks(self) -> list[dict[str, str]]:
        """Get available networks."""
        return []
    
    def connect(self, ssid: str, password: str | None = None) -> bool:
        """Connect to specified network."""
        self.current_network = ssid
        return True
```

### Complex Collections
Handle nested collections properly:

```python
def get_network_details() -> dict[str, list[str]]:
    """Get network names mapped to their properties."""
    return {
        "WiFi-1": ["WPA2", "5GHz", "Strong"],
        "WiFi-2": ["WPA3", "2.4GHz", "Weak"]
    }

def process_connections(
    connections: list[tuple[str, bool]]
) -> dict[str, bool]:
    """Process list of connection tuples."""
    return dict(connections)
```

## Error Handling

### Exception Handling
Use specific exception types and provide translatable error messages:

```python
try:
    result = network_operation()
except NetworkNotFoundError:
    error_dialog(_("Network not found. Please check the network name."))
except PermissionError:
    error_dialog(_("Permission denied. Please run as administrator."))
except Exception as e:
    logger.error("Unexpected error: %s", str(e))
    error_dialog(_("An unexpected error occurred. Please try again."))
```

### Logging
Use the standard logging module with appropriate levels:

```python
import logging

logger = logging.getLogger(__name__)

def process_network_config():
    logger.info(_("Starting network configuration"))
    try:
        # Process configuration
        logger.debug("Configuration data: %s", config_data)
    except ConfigError as e:
        logger.error(_("Configuration error: %s"), str(e))
        raise
```

## GTK3 Integration

### Widget Creation
Follow consistent patterns when creating GTK widgets:

```python
import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk

class NetworkDialog(Gtk.Dialog):
    def __init__(self, parent=None):
        super().__init__(
            title=_("Network Settings"),
            parent=parent,
            modal=True
        )
        
        # Add buttons with translatable labels
        self.add_button(_("Cancel"), Gtk.ResponseType.CANCEL)
        self.add_button(_("Apply"), Gtk.ResponseType.OK)
        
        self._setup_ui()
    
    def _setup_ui(self):
        """Set up the dialog user interface."""
        pass
```

### Signal Connections
Use descriptive callback names and handle errors appropriately:

```python
def _on_connect_button_clicked(self, button):
    """Handle connect button click event."""
    try:
        ssid = self.ssid_entry.get_text()
        if not ssid:
            self._show_error(_("Please enter a network name"))
            return
            
        self._connect_to_network(ssid)
    except Exception as e:
        logger.error("Connection failed: %s", str(e))
        self._show_error(_("Connection failed. Please try again."))
```

## Tools Integration

### IDE Recommendation
PyCharm Community Edition is recommended for GhostBSD Python development. It provides excellent built-in code analysis, debugging capabilities, and seamless integration with the coding standards outlined above.

Install PyCharm on GhostBSD:
```bash
sudo pkg install pycharm-ce
```

PyCharm's default settings align well with these standards, providing automatic code formatting, linting, and error detection that matches our requirements.

### Pre-commit Hooks
Consider setting up pre-commit hooks to automatically check code style:

```bash
# Install pre-commit
pip install pre-commit

# Create .pre-commit-config.yaml
pre-commit install
```

Following these standards helps maintain high code quality and ensures your contributions integrate smoothly with the existing GhostBSD codebase.