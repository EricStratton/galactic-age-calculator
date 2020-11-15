## Testing -- Galactic Calender

### _Business Logic for calculating user's age on different planets, vs: 11/13/2020_

### _Created by: Eric Stratton_

## Description

This business logic calculates user's age in different planetry years and compares with their life expectancy.

## Setup/Instillation

### Requirements:

- Internet browser
- Code editor if you wish to view/edit the code (recommended)
- Node.js 

### Node:

- Node is a requirement for running this applcation, if you need to install it visit <https://nodejs.org/en/download/> and download the applicable version for your system

### Download: 

- Download this repository by clicking the green 'Code' icon and selecting download zip
- Use your favorite zip.file opener to extract files to your local device

### Terminal:

- Open command terminal on local device
- Navigate to desktop in terminal using `$ cd desktop`
- Copy repository link by clicking on green 'Code' icon and clicking the clipboard to the right of the url
- Use command `$ git clone {specific_repository_URL}`
- From desktop, run command `$ cd {newly-downloaded-directory}` to navigate to the installed directory
- Run command `code .` to open directory in default code editor
- Once inside code editor, run `npm install` to download necessary packages to run app

## Test Table

| Test | Input | Output |
| :------------| :---------------| :-----------|
| Mercury info |
| Calculate age on Mercury relative to Earth | 25 | 104.166667 |
| Calculate user's remaining lifespan in Mercury years based on life expectancy in Earth years | 75.3 | 209.583333 |
| If user has passed their life expectancy, calculate how far past in Mercury years | (80, 75.3) | 19.583333 |
| If user has not passed their life expectancy, return 0 | (25, 75.3) | 0 |
| Venus Info |
| Calculate age on Venus relative to Earth | 25 | 40.3225806 |
| Calculate user's remaining lifespan in Venus years based on life expectancy in Earth years | 75.3 | 81.1290323 |
| Mars Info |
| Calculate age on Mars relative to Earth | 25 | 13.2978723 |
| Calculate user's remaining lifespan in Mars years based on life expectancy in Earth years | 75.3 | 26.7553192 |
| Jupiter Info |
| Calculate age on Jupiter relative to Earth | 25 | 2.1079258 |
| Calculate user's remaining lifespan in Jupiter years based on life expectancy in Earth years | 75.3 | 4.24114671 |

## Specs

Describe: MercuryInfo();

Test: "It will calculate users age on Mercury relative to their age on Earth"
Expect(Age.calcMercuryAge(25).toEqual(104.16667))

Test: "It will calculate numbers of Mercury years user has left to live based on their life expectancy in Earth years"
Expect(Age.mercuryAge.calcYearsLeft(75.3).toEqual(209.583333))

Test: "It will calculate number of Mercury years passed life expectancy if user has passed their demographics life expectancy"
Expect(Age.mercuryDifference(80, 75.3).toEqual(19.583333))

Test: "It will return 0 if user has not passed their demographics life expectancy"
Expect(Age.mercuryDifference(25, 75.3).toEqual(0))

Describe: VenusInfo();

Test: "It will calculate users age on Venus relative to their age on Earth"
Expect(Age.calcVenusAge(25).toEqual(40.3225806))

Test: "It will calculate numbers of Venus years user has left to live based on their life expectancy in Earth years"
Expect(Age.venusAge.calcYearsLeft(75.3).toEqual(81.1290323))

Describe MarsInfo();

Test: "It will calculate users age on Mars relative to their age on Earth"
Expect(Age.calcMarsAge(25).toEqual(13.2978723))

Test: "It will calculate numbers of Mars years user has left to live based on their life expectancy in Earth years"
Expect(Age.marsAge.calcYearsLeft(75.3).toEqual(26.7553192))

Describe JupiterInfo();

Test: "It will calculate users age on Jupiter relative to their age on Earth"
Expect(Age.calcJupiterAge(25).toEqual(2.1079258))

Test: "It will calculate numbers of Jupiter years user has left to live based on their life expectancy in Earth years"
Expect(Age.jupiterAge.calcYearsLeft(75.3).toEqual(4.24114671))

## Known Bugs

Application is not yet complete at this time.

## Support & Contact Details

Do not hesitate to contact me at:

<strattonericj@gmail.com>

# Technologies

- HTML
- CSS
- JavaScript
- Node.js
- jQuery
- Bootstrap
- Git
- GitHub

## Licensing

Copyright (c) 2020 Eric Stratton

This software is licensed under the MIT license