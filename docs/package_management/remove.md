---
prev:
  text: 'Package Install'
  link: 'package_management/install.md'
next: false
---

# Remove Package

## Package removal

```shell
get remove get_storage
```

When you run the `get remove` command with the name of a package, the package manager will remove that package and any dependencies that are no longer needed. In this case, running this command will remove the "get_storage" package from your Flutter project, along with any dependencies that were installed specifically for that package.

## Multiple package removal

```shell
get remove http get_storage camera
```

Running this command will remove the `http` package, the `get_storage` package and the `camera` package from your Flutter project, along with any dependencies that were installed specifically for those packages.

Once these packages are removed, you will no longer be able to use their features and functionality in your Flutter application. If you decide to use any of these packages again in the future, you can simply run the "get install" command to reinstall them.
