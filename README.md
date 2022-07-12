Task: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/graphql-service/assignment.md
Task Score:  https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/graphql-service/score.md
Deadline: 10.07.2022 23:59
Score: 330 / 490

To run the application: 
1. Download and run microservices that were provided: https://github.com/rolling-scopes-school/node-graphql-service
  - Download Docker desktop
  - Download Mongo (Optionally)
  - In the root there is a docker compose file that to run stack.yml with all necessary parameters for .env in modules: docker-compose -f stack.yml up
  - run the microcervises as it is given in Readme 
2. Run the root 
  - run: npm install
  - comment or delete line 15 in app/modules/bands/schema/schema.js: members: [Member] (otherwise program throw error)
  - run server by: npm run start (Listening on port 4000)
  
To check the program:
- as OS and IDE I used Windows 10 x64, VS code
- to accomplish the task I used apollo-server and apollo-datasource-rest
- to check every query and mutation I used https://studio.apollographql.com (there will be a link in the console after running the program)
  
  
## Basic Scope

- [x] **+20** The repository with the application contains a `Readme.md` file containing detailed instructions for installing, running and using the application
- [x] **+20** The application code that worked with `Users` instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- [x] **+20** The application code that worked with `Tracks` instance instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- [x] **+20** The application code that worked with `Albums` instance instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- [x] **+20** The application code that worked with `Artists` instance instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- [x] **+20** The application code that worked with `Favorites` instance instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- [x] **+20** The application code that worked with `Genres` instance instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- [x] **+20** The application code that worked with `Bands` instance instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)

## **+10** Every implemented query/mutation:

### Queries:
  - [x] **+10** artist
  - [x] **+10** artists
  - [x] **+10** genre
  - [x] **+10** genres
  - [x] **+10** track
  - [x] **+10** tracks
  - [x] **+10** band
  - [x] **+10** bands
  - [x] **+10** album
  - [x] **+10** albums
  - [x] **+10** jwt 
  - [x] **+10** user
  - [x] **+10** favourites (available only for logged in user)

### Mutations:

- Artists
  - [ ] **+10** createArtist
  - [ ] **+10** deleteArtist
  - [ ] **+10** updateArtist
- Genres
  - [x] **+10** createGenre
  - [x] **+10** deleteGenre
  - [x] **+10** updateGenre
- Bands
  - [ ] **+10** createBand
  - [ ] **+10** deleteBand
  - [ ] **+10** updateBand
- Tracks
  - [ ] **+10** createTrack
  - [ ] **+10** deleteTrack
  - [ ] **+10** updateTrack
- Albums
  - [ ] **+10** createAlbum
  - [ ] **+10** deleteAlbum
  - [ ] **+10** updateAlbum
- Users
  - [x] **+10** register
- Favourites
  - [ ] **+10** addTrackToFavourites
  - [ ] **+10** addBandToFavourites
  - [ ] **+10** addArtistToFavourites
  - [ ] **+10** addGenreToFavourites

## Forfeits

- **-30% of max task score** Commits after deadline (except commits that affect only Readme.md, .gitignore, etc.)
- **-20** No separate development branch
- **-20** No Pull Request
- **-10** Pull Request description is incorrect
- **-20** Less than 3 commits in the development branch, not including commits that make changes only to `Readme.md` or similar files (`tsconfig.json`, `.gitignore`, `.prettierrc.json`, etc.)
