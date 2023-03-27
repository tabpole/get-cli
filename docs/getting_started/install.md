---
prev:
  text: 'Overview'
  link: '/getting_started/overview.md'
next:
  text: 'Project'
  link: 'commands/project.md'
---

# Installation

## Windows

To install Dart on Windows, you can download the Dart SDK installer from the official Dart website, and then follow the instructions provided by the installer to complete the installation. The installer usually adds the Dart SDK's bin directory to the system's PATH environment variable, so you should be able to use the "dart" command in a command prompt or PowerShell window after the installation is complete.

Once you have Dart installed, open a command prompt or PowerShell window and run the following command to install the "get_cli" package.

```shell
pub global activate get_cli
# or
flutter pub global activate get_cli
```

Add Dart's bin directory to the system's PATH environment variable:
After installing "get_cli", you need to add the path to the Dart SDK's bin directory to the system's PATH environment variable. This is necessary so that you can use the "dart" and "get" commands from any location in your file system. You can do this by opening the System Properties dialog, selecting the "Advanced" tab, and clicking the "Environment Variables" button. Then, in the "System Variables" section, select the "Path" variable and click the "Edit" button. Add the path to the Dart SDK's bin directory (usually C:\Users`username`\AppData\Roaming\Pub\Cache\bin) to the end of the "Variable value" field, separated by a semicolon.

Finally, you can test that the installation was successful by opening a new command prompt or PowerShell window and running the following command.

```shell
get help
```

If the installation was successful, you should see the help documentation for the `get` command-line interface, which includes the commands and options provided by `get_cli`.

## Linux

Install Dart or Flutter on your Linux system by following the instructions provided in the official Dart documentation for Linux.

Once you have Dart installed, you can install the "get_cli" package by running the following command in your terminal:

```shell
pub global activate get_cli
# or
flutter pub global activate get_cli
```

After running the above command, make sure that the path to the Dart executable's bin directory is added to your system's PATH environment variable. You can add it to your PATH by running the following command:

```shell
export PATH="$PATH":"~/.pub-cache/bin"
```

Finally, you can test that the installation was successful by running the following command in your terminal:

```shell
get help
```

If the installation was successful, you should see the help documentation for the `get` command-line interface, which includes the commands and options provided by `get_cl`.
