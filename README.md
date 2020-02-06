[![Node.js CI](https://github.com/dotnetCarpenter/combine-img/workflows/Node.js%20CI/badge.svg)][1]

# combine-img

Combine images into pages of 2 images

Depends on [ImageMagick](https://imagemagick.org/) and runs in Node.js 12+.

```
Usage:
  node --experimental-modules index.mjs [-t|--type FILE_EXTENSION] PATH

  FILE_EXTENSION: Default is jpg but you can specify anything that ImageMagick
  support.

  PATH: The path to the folder which contains your images.

Options:
  --help      Show help                                                [boolean]
  --version   Show version number                                      [boolean]
  -t, --type                                                    [default: "jpg"]
```

_Note: Only meant to be used by a single user. Do not use this as a web service._

License: [GPL-3.0-or-later](https://spdx.org/licenses/GPL-3.0-or-later.html)

[1]: https://github.com/dotnetCarpenter/combine-img/actions?query=workflow%3A%22Node.js+CI%22