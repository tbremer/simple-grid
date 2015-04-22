#simple-grid
----
SCSS Fluid Grid system compliant down to IE8.

1. No configuring! (*but you can if that's your thing…*)
2. Debug mode!
3. Works in all major browsers
4. Light weight
    - 47 lines
    - only 1kb out of the box.
    - .8kb when compressed

#### Usage
```sass
@import 'simple-grid/grid';

@include simple-grid;
```

#### Options
name: `wrapper`
description: class name for the block level rows
default: `row`

name: `attribute`
description: class name for the block level rows
default: `col-span`

```scss
$default-grid-settings: (
    'wrapper': 'row', //
    'attribute': 'col-span',
    // COL CONFIG
    'column-count': 12,

    // SIZING
    'max-width': 100%,
    'margin-width': 1.6%,

    // MISC CONFIGS
    'separate-rows': false
);
```

#### Why Attribute Selectors
