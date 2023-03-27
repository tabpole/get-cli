---
prev:
  text: 'View'
  link: 'commands/view.md'
next:
  text: 'Page'
  link: 'commands/page.md'
---

# Create controller

The "get create controller" command can be used to generate a new Dart file containing a template for a Flutter controller class. To generate a new controller class for a dialog in a file named "dialog_controller.dart" in the "your_folder" directory of your Flutter project, you can run the following command.

```shell
get create controller:dialog on your_folder
```

This command tells "get" to generate a new controller class template for a dialog in a file named "dialog_controller.dart" located at "your_folder/dialog_controller". The generated file will contain a basic template for a controller class that you can customize to fit your specific needs.

The "get create controller" command can be used to generate a new Dart file containing a template for a Flutter controller class. To generate a new controller class for authentication with a template file named "authcontroller.dart" in the "your_folder" directory of your Flutter project, you can run the following command.

```shell
  get create controller:auth with examples/authcontroller.dart on your_folder
```

This command tells "get" to generate a new controller class template for authentication in a file named "authcontroller.dart" located at "your_folder/authcontroller". The "--sample" flag indicates that a sample file should be used as a template for the generated class. In this case, the sample file is located at "examples/authcontroller.dart" in the "get_cli" package.
