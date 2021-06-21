# Grid System 2(Beta)
Grid System 2(Beta) is a responsive and desktop project and is based on sass and typescript.   



## Github   
<https://github.com/w3labkr/grid-system/>   



## Document   
Please see [Document](https://w3labkr.github.io/grid-system/) for more information.   



## Structure   
```
o
|-- dist
|   |-- component/
|   |-- essential/
|   |-- slim/
|   |-- grid-system-component.min.css
|   |-- grid-system-essential.min.css
|   |-- grid-system-slim.min.css
|   |-- grid-system.min.css
|   `-- grid-system.min.js
|-- LICENSE
|-- CHANGELOG
`-- README.md
```


## Installation   
```
| filename               | filesize | breakpoint | component | rules | selectors |
|------------------------|----------|------------|-----------|-------|-----------|
| grid-system.min.css    | 37.1kb   | o          | o         | 1325  | 1604      |
| grid-essential.min.css | 37.1kb   | o          | x         | 1325  | 1604      |
| grid-slim.min.css      | 8.4kb    | x          | x         | 1321  | 1604      |
| grid-component.min.css | 1.05kb   | x          | o         | 27    | 158       |
```


Link:   
```
<link rel="stylesheet" href="path/to/grid-system.min.css" />
<link rel="stylesheet" href="path/to/grid-system-component.min.css" />
<link rel="stylesheet" href="path/to/grid-system-essential.min.css" />
<link rel="stylesheet" href="path/to/grid-system-slim.min.css" />
```

CDN:   
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/w3labkr/grid-system/dist/grid-system.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/w3labkr/grid-system/dist/grid-system-component.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/w3labkr/grid-system/dist/grid-system-essential.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/w3labkr/grid-system/dist/grid-system-slim.min.css" />
```



## Usage   

### Breakpoints   
```
| breakpoints | classes     |
|-------------|-------------|
| 1920px      | .desktop-*  |
| 1440px      | .notebook-* |
| 1024px      | .tablet-*   |
| 767px       | .mobile-*   |
```



### Layout      

usage:   
```
| layout       | class                          | required | value           | increase |
|--------------|--------------------------------|----------|-----------------|----------|
| gutter       | .gutter-{value}                | -        | between 0 to 50 | 5        |
| container    | .container, .container-{value} | -        | fluid           | -        |
| column       | .columns                       | -        | -               | -        |
| column-count | .column-count-{value}          | .columns | between 1 to 12 | 1        |
| column       | .column-{value}                | .columns | between 1 to 12 | 1        |
| cell         | .cells                         | -        | -               | -        |
| cell         | .cell-{value}                  | .cells   | between 1 to 12 | 1        |
| cell-count   | .cell-count-{value}            | .cells   | between 1 to 12 | 1        |
| field        | .fields                        | -        | -               | -        |
| field        | .field-{value}                 | .fields  | between 1 to 12 | 1        |
| field-count  | .field-count-{value}           | .fields  | between 1 to 12 | 1        |
| row          | .rows                          | -        | -               | -        |
| row          | .row-{value}                   | .rows    | between 1 to 12 | 1        |
| row-count    | .row-count-{value}             | .rows    | between 1 to 12 | 1        |
| order        | .orders                        | -        | -               | -        |
| order        | .order-{value}                 | .orders  | between 1 to 12 | 1        |
```

example:   

```
<div class="columns gutter-10 column-count-4 mobile-column-count-2">
  <div class="column">content</div>
  <div class="column">content</div>
  <div class="column">content</div>
  <div class="column">content</div>
</div>
```



### Alignment   

usage:   
```
| alignment  | class              | required    | value                                 |
|------------|--------------------|-------------|---------------------------------------|
| text       | .text-{value}      |             | left, center, right, justify          |
| horizontal | .align-{value}     |             | left, center, right, none             |
| vertical   | .aligns            |             | -                                     |
| vertical   | .align-{value}     | .aligns     | top, middle, bottom                   |
| transform  | .translates        |             | -                                     |
| transform  | .translate-{value} | .translates | topleft, topcenter, topright          |
|            |                    |             | middleleft, middlecenter, middleright |
|            |                    |             | bottomleft, bottomcenter, bottomright |
```

example:   
```
<div class="aligns vh-100">
  <div class="align-middle">
    ...
  </div>
</div>
```


### Display   

usage:   
```
| display             | property   | value                                                                        |
|---------------------|------------|------------------------------------------------------------------------------|
| .display            | display    | block                                                                        |
| .display-{value}    | display    | block, inline, inline-block, flex, inline-flex, table, table-row, table-cell |
| .hide               | display    | none                                                                         |
| .visible            | visibility | visible                                                                      |
| .invisible, .hidden | visibility | hidden                                                                       |
```



### A11y   

usage:   
```
| A11y          | class               |
|---------------|---------------------|
| Disabled      | .disabled           |
| IR Method     | .ir-phark           |
| Ellipsis      | .ellipsis           |
| Accessibility | .screen-reader-text |
```



### Font   

font-size:   
```
| font         | value            | increase |
|--------------|------------------|----------|
| font-0       | 0                | 0        |
| font-{value} | between 10 to 20 | 1        |
| font-{value} | between 20 to 30 | 2        |
| font-{value} | between 30 to 50 | 3        |
| font-{value} | between 50 to 90 | 5        |
```

font-weight:   
```
| font-{value} | property                                          |
|--------------|---------------------------------------------------|
| font-100     | Thin / Hairline                                   |
| font-200     | Extra Light / Ultra Light                         |
| font-300     | Light / Book                                      |
| font-400     | Normal / Regular / Plain                          |
| font-500     | Medium                                            |
| font-600     | Semi Bold / Demi Bold                             |
| font-700     | Bold                                              |
| font-800     | Extra / Extra Bold / Ultra Bold                   |
| font-900     | Black / Heavy / Ultra / Extra-black / Ultra-black |
```
For more information [www.w3.org](https://www.w3.org/TR/css3-fonts/)   



### Util   

#### width   

syntax:   
```
{unit}-{value}
```

property:   
1. w: px   
2. pw: %   
3. vw: vw    

usage:   
```
| class      | unit | value               | increase |
|------------|------|---------------------|----------|
| w          | px   | auto                | -        |
| w-{value}  | px   | between 0 to 100    | 5        |
| w-{value}  | px   | between 100 to 1000 | 50       |
| pw         | %    | auto                | -        |
| pw-{value} | %    | between 0 to 100    | 5        |
| vw         | vw   | auto                | -        |
| vw-{value} | vw   | between 0 to 100    | 5        |
```

example:   
```
<div class"w"></div>
<div class"w-100"></div>
```


#### height   

syntax:   
```
{unit}-{value}
```

property:   
1. h: px   
2. ph: %   
3. vh: vh    

usage:   
```
| class      | unit | value               | increase |
|------------|------|---------------------|----------|
| h          | px   | auto                | -        |
| h-{value}  | px   | between 0 to 100    | 5        |
| h-{value}  | px   | between 100 to 1000 | 50       |
| ph         | %    | auto                | -        |
| ph-{value} | %    | between 0 to 100    | 5        |
| vh         | vh   | auto                | -        |
| vh-{value} | vh   | between 0 to 100    | 5        |
```

example:   
```
<div class"h"></div>
<div class"h-100"></div>
```


#### min-width   

syntax:   
```
min-{unit}-{value}
```

property:   
1. w: px   
2. pw: %   
3. vw: vw    

usage:   
```
| class          | unit | value               | increase |
|----------------|------|---------------------|----------|
| min-w          | px   | 0                   | -        |
| min-w-{value}  | px   | between 0 to 100    | 5        |
| min-w-{value}  | px   | between 100 to 1000 | 50       |
| min-pw         | %    | 0                   | -        |
| min-pw-{value} | %    | between 0 to 100    | 5        |
| min-vw         | vw   | 0                   | -        |
| min-vw-{value} | vw   | between 0 to 100    | 5        |
```

example:   
```
<div class"min-w"></div>
<div class"min-w-100"></div>
```


#### min-height   

syntax:   
```
min-{unit}-{value}
```

property:   
1. h: px   
2. ph: %   
3. vh: vh    

usage:   
```
| class          | unit | value               | increase |
|----------------|------|---------------------|----------|
| min-h          | px   | 0                   | -        |
| min-h-{value}  | px   | between 0 to 100    | 5        |
| min-h-{value}  | px   | between 100 to 1000 | 50       |
| min-ph         | %    | 0                   | -        |
| min-ph-{value} | %    | between 0 to 100    | 5        |
| min-vh         | vh   | 0                   | -        |
| min-vh-{value} | vh   | between 0 to 100    | 5        |
```

example:   
```
<div class"min-h"></div>
<div class"min-h-100"></div>
```


#### max-width   

syntax:   
```
max-{unit}-{value}
```

property:   
1. w: px   
2. pw: %   
3. vw: vw    

usage:   
```
| class          | unit | value               | increase |
|----------------|------|---------------------|----------|
| max-w          | px   | none                | -        |
| max-w-{value}  | px   | between 0 to 100    | 5        |
| max-w-{value}  | px   | between 100 to 1000 | 50       |
| max-pw         | %    | none                | -        |
| max-pw-{value} | %    | between 0 to 100    | 5        |
| max-vw         | vw   | none                | -        |
| max-vw-{value} | vw   | between 0 to 100    | 5        |
```

example:   
```
<div class"max-w"></div>
<div class"max-w-100"></div>
```


#### max-height   

syntax:   
```
max-{unit}-{value}
```

property:   
1. h: px   
2. ph: %   
3. vh: vh    

usage:   
```
| class          | unit | value               | increase |
|----------------|------|---------------------|----------|
| max-h          | px   | none                | -        |
| max-h-{value}  | px   | between 0 to 100    | 5        |
| max-h-{value}  | px   | between 100 to 1000 | 50       |
| max-ph         | %    | none                | -        |
| max-ph-{value} | %    | between 0 to 100    | 5        |
| max-vh         | vh   | none                | -        |
| max-vh-{value} | vh   | between 0 to 100    | 5        |
```

example:   
```
<div class"max-h"></div>
<div class"max-h-100"></div>
```


#### margin and padding   

syntax:   
```
{property}{direcation}-{value}
```

property:   
1. m: margin   
2. p: padding  
 
direction:   
1. t: top   
2. r: right   
3. b: bottom   
4. l: left   
5. x: left, right   
6. y: top, bottom   

usage:   
```
| class                            | value               | increase |
|----------------------------------|---------------------|----------|
| {m, p}{t, r, b, l, x, y}         | auto                | -        |
| {m, p}{t, r, b, l, x, y}-{value} | between 0 to 100    | 5        |
| {m, p}{t, r, b, l, x, y}-{value} | between 100 to 1000 | 50       |
```

example:   
```
<div class="mt"></div>
<div class="mr-10"></div>
```



## Browser Support   
IE9+, Edge, Chrome, Firefox, Opera, Safari   



## Changelog   
Please see [CHANGELOG](CHANGELOG) for more information what has changed recently.   



## License   
Grid System 2(Beta) is licensed under the [MIT LICENSE](LICENSE)   