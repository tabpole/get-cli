---
prev:
  text: 'Project'
  link: 'commands/project.md'
next:
  text: 'View'
  link: 'commands/view.md'
---

# Generate model from Json

The "get generate model" command can be used to generate a Dart model class based on a JSON file. To generate a model class for the "user.json" file located in the "assets/models" directory of your Flutter project, you can run the following command from the root directory of your project.

```shell
get generate model on home with assets/models/user.json
```

This command tells "get" to generate a model class named "User" based on the contents of the "user.json" file located at "assets/models/user.json". The generated class will be saved in the "lib/app/data/models" directory of your project.
