# Install Package

## Package installation

```shell
get install get_storage
```

When you run this command in your Flutter project, it will download and install the `get_storage` package and any other dependencies required by the package. After the installation is complete, you can import the "get_storage" library in your Dart code and start using it.

## Install specific version

```shell
get install get_storage:2.1.1
```

When you specify a version number after the package name like `get_storage:2.1.1`, the package manager will download and install that specific version of the package rather than the latest version. This can be useful if you need to maintain compatibility with a specific version of the package or if you want to avoid potential issues with new versions of the package that might introduce breaking changes.

## Development dependency

```shell
get install get_storage --dev
```

The `--dev` flag tells the package manager to install the package as a development dependency, rather than a regular dependency. Development dependencies are typically used for packages that are only required during the development phase, such as testing or debugging tools, and are not needed in the final deployed application.

```shell
get install get_storage:2.1.1 --dev
```

So, when you run this command in your Flutter project, it will download and install version 2.1.1 of the "get_storage" package as a development dependency. This version of the package will not be included in the final deployed application, but can be used during the development phase for testing or other purposes.

## Multiple package installation

```shell
get install http get_storage camera
```

When you run the `get install` command with multiple package names separated by spaces, like in this case, the package manager will download and install each package and any required dependencies.

```shell
get install http:0.13.5  get_storage:2.1.1 camera
```

In this case, the command will download and install version 0.13.5 of the `http` package, version 2.1.1 of the `get_storage` package, and the latest version of the `camera` package. Once installed, you can use the features and functionality provided by these specific versions of the packages in your Flutter application.
