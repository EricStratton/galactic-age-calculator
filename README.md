## Test Table

| Test | Input | Output |
| :------------| :---------------| :-----------|
| Mercury info |
| Calculate age on Mercury relative to Earth | 25 | 104.166667 |
| Calculate remaining lifespan in Mercury years based on life expectancy in Earth years | 75.3 | 209.583333 |
| Venus Info |
| Calculate age on Venus relative to Earth | 25 | 40.3225806 |
| Calculate remaining lifespan on Venus based on Earth life expectancy | 75.3 | 34.9774194 |
| Mars Info |
| Calculate age on Mars relative to Earth | 25 | 13.2978723 |
| Calculate remaining lifespan on Mars based on Earth life expectancy | 75.3 | 62.0021277 |
| Jupiter Info |
| Calculate age on Jupiter relative to Earth | 25 | 2.1079258 |
| Calculate remaining lifespan in Jupiter years based on life expectancy in Earth years | (25, 75.3) | 4.24114671

## Specs

Describe: MercuryInfo();

Test: "It will calculate users age on Mercury relative to their age on Earth"
Expect(Age.calcMercuryAge(25).toEqual(104.16667))

Test: "It will calculate numbers of Mercury years user has left to live based on their life expectancy in Earth years"
Expect(Age.mercuryAge.calcYearsLeft(75.3).toEqual(209.583333))

Describe: VenusInfo();

Test: "It will calculate users age on Venus relative to their age on Earth"
Expect(Age.calcVenusAge(25).toEqual(40.3225806))

Test: "It will calculate difference between user's Venus age and their Earth life expectancy"
Expect(Age.venusAge.calcYearsLeft(25).toEqual(34.9774194))

Describe MarsInfo();

Test: "It will calculate users age on Mars relative to their age on Earth"
Expect(Age.calcMarsAge(25).toEqual(13.2978723))

Test: ""It will calculate difference between user's Mars age and their Earth life expectancy"
Expect(Age.marsAge.calcYearsLeft(25).toEqual(62.0021277))

Describe JupiterInfo();

Test: "It will calculate users age on Jupiter relative to their age on Earth"
Expect(Age.calcJupiterAge(25).toEqual(2.1079258))

Test: "It will calculate numbers of Jupiter years user has left to live based on their life expectancy in Earth years"
Expect(Age.jupiterAge.calcYearsLeft(75.3).toEqual(4.24114671))
