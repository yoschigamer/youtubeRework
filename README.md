# Pimpe your Youtube!

## new functionality 
- moderne scrollbar
- rounded border
- transparency effect

now you can change the color of the progress bar and and a little gif

![enter image description here](https://zupimages.net/up/23/06/voro.png)

 From this :
 
[![HkSd5yG.md.png](https://iili.io/HkSd5yG.md.png)](https://freeimage.host/i/HkSd5yG)
 To this :

[![Hk8bogf.md.png](https://iili.io/Hk8bogf.md.png)](https://freeimage.host/i/Hk8bogf)

# Oraganization

```mermaid
graph 
0((Extension))
A{manifest.json}
B[Background.js]
D(CurrentTabs)

B'[CSS]

B_isOpen{index.html}
C_isOpen[foreground.js]

0 --> A -- injecting css --> B' --> D
0 --> A -- Run Always in Background --> B -- inject Script --> D
0 --> A -- Open extension --> B_isOpen --> C_isOpen -- send Data --> B
```

Not Endded.png)

# Oraganization

```mermaid
graph 
0((Extension))
A{manifest.json}
B[Background.js]
D(CurrentTabs)

B'[CSS]

B_isOpen{index.html}
C_isOpen[foreground.js]

0 --> A -- injecting css --> B' --> D
0 --> A -- Run Always in Background --> B -- inject Script --> D
0 --> A -- Open extension --> B_isOpen --> C_isOpen -- send Data --> B
```

Not Endded
