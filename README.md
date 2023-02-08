# Pimpe your Youtube!

#new functionality 

change the color of the progress bar and and a little gif

 From this :
 
![enter image description here](https://zupimages.net/up/23/05/tmbq.png)
To this :

![enter image description here](https://zupimages.net/up/23/05/bctx.png)

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
