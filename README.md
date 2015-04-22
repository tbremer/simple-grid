#simple-grid

SCSS Fluid Grid system compliant down to IE8.

- [simple-grid](#)
	- [Usage](#)
	- [Options](#)
			- [wrapper](#)
			- [attribute](#)
			- [column-count](#)
			- [max-width](#)
			- [margin-width](#)
			- [separate-rows](#)

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

## Options
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
default: `100%`

####separate-rows
description: should we separate the block level rows?
default: `true`

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*
