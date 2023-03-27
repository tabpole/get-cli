---
prev:
  text: 'Screen'
  link: 'commands/screen.md'
next:
  text: 'Package installation'
  link: 'package_management/install.md'
---

# Locale

The "get generate locales" command can be used to generate localization files for your Flutter project. To generate localization files for your project in a directory named "locales" located in the "assets" directory of your Flutter project, you can run the following command.

```shell
get generate locales assets/locales
```

This command tells "get" to generate localization files in the "assets/locales" directory of your project. The generated files will contain message translations for the specified locales, and you can customize them to add your own translations. By default, the command generates localization files for the "en_US" locale, but you can customize this by adding the "--locales" flag followed by a comma-separated list of locales you want to generate files for.
