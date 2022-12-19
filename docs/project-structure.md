# 🗄️ Project Structure

Main structure:

```sh
public
  |
  +-- assets            # assets folder contain common static logo icon ( favicon, and homepage icon)

src
  |
  +-- assets                 # assets folder contain common static files e.g. icons
  |
  +-- components             # shared components used across the entire application
  |  |
  |  +-- UI                  # shared components small one
  |  |  |
  |  |  +-- Button
  |  |  |
  |  |  +-- Text..
  |  |
  |  +-- Layout               # shared components bigger components, characteristic for the layout
  |    |
  |    +-- Header
  |    |
  |    +-- Footer..
  |
  +-- api                     # all the global configuration and shared functions connected with API
  |
  +-- pages                   # feature : independent, often repetetive piece of the bigger component 
  |  |
  |  +-- HomePage             # main file for the features import below
  |  |  |  
  |  |  +-- Banner            # this will can be divided for smaller components
  |  |  |
  |  |  +-- SelectedSection.. # this will be divided for smaller components, can have structure with assets, providers etc.if needed    
  |  |
  |  +-- Gallery            
  |     |   
  |     +-- Single Card
  |     |
  |     +-- Gallery Layout..
  |  
  +-- providers              # all of the application providers
  |
  +-- routes                 # routes configuration
  |
  +-- styles                 # global styles
  |
  +-- test                   # test utilities and mock server
  |
  +-- types                  # base types used across the application
  |
  +-- utils                   # shared utility functions
```

Main folder: features repeat this structure, if needed + contain index.tsx file which represents each feature and group all subfeatures together.

A feature could have the following structure:

```sh
src/features/singleFeature
|
+-- /structure as above/       # structure as above, depends from the content
|
+-- index.ts                   # entry point for the feature, exports everything that should be used outside the feature
```
