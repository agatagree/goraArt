# 🗄️ Project Structure

Main structure:

```sh
public
  |
  +-- assets                    # assets folder contain common static logo icon ( favicon, and homepage icon)

src
  |
  +-- components                # shared components used across the entire application
  |  |
  |  +-- common                    # shared components small one
  |  |  |
  |  |  +-- Button
  |  |  |
  |  |  +-- Text..
  |  |
  |  +-- layout                 # shared components bigger components, characteristic for the layout
  |    |
  |    +-- Header
  |    |
  |    +-- Footer..
  |
  +-- api                       # all the global configuration and shared functions connected with API
  |
  +-- pages                     # single pages of the web: routing mirror
  |  |
  |  +-- HomePage               # single page component
  |  |  |  
  |  |  +-- Banner              # bigger piece of the page
  |  |  |
  |  |  +-- SelectedSection..    
  |  |
  |  +-- Gallery            
  |     |   
  |     +-- Single Card
  |     |
  |     +-- Gallery Layout..
  |  
  +-- providers                 # all of the application providers, context api
  |
  +-- routes                    # app routs
  |
  +-- styles                    # global styles
  |
  +-- test                      # test utilities and mock server
  |
  +-- utils                     # shared utility functions, types etc.
```

Main folder: features repeat this structure, if needed + contain index.tsx file which represents each feature and group all subfeatures together.

A feature could have the following structure:

```sh
src/features/singleFeature
|
+-- /structure as above/          # structure as above, depends from the content
|
+-- index.ts                      # entry point for the feature, exports everything that should be used outside the feature
```
