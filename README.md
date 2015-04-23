#simple-grid

SCSS Fluid Grid system compliant down to IE8.

- [Why](#why)
- [Usage](#usage)
- [Options](#options)
	- [wrapper](#wrapper)
	- [attribute](#attribute)
	- [column-count](#column-count)
	- [max-width](#max-width)
	- [margin-width](#margin-width)
	- [separate-rows](#separate-rows)

##Why
1. No configuring! (*but you can if that's your thing…*)
2. Debug mode!
3. Works in all major browsers
4. Light weight
    - 47 lines
    - only 1kb out of the box.
    - .8kb when compressed

##Usage
```sass
@import 'simple-grid/grid';

@include simple-grid;
```

```html
<section class=“row”>
    <div col-span=“4”>4 columns!</div>
    <div col-span=“6”>6 columns!</div>
    <div col-span=“2”>2 columns!</div>
</section>
```

## Options
*options passed as  SASS Map example below*
####wrapper
description: class name for the block level rows
default: `row`

####attribute
description: class name for the block level rows
default: `col-span`

####column-count
description: how many columns make up a 'filled' row
default: `12`

####max-width
description: how full is full
default: `100%`

####margin-width
description: space between columns (gutters)
default: `1.6%`

####separate-rows
description: should we separate the block level rows?
default: `true`

####options example
```scss
$grid-options: (
    wrapper: 'row',
    attribute: 'col-span',
    column-count: 12,
    max-width: 100%,
    margin-width: 1.6%,
    separate-rows: false
);
```

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*
**Edited with** [stackedit](https://stackedit.io/)
