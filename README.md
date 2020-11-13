## Test Table

| Test | Input | Output |
| :------------| :---------------| :-----------|
| Mercury info |
| Calculate age on Mercury relative to Earth | 25 | 104.166667 |
| Calculate remaining lifespan on Mercury based on Earth life expectancy | 75.3 | -28.866667 |
| Calulate Venus age |
| Calculate age on Venus relative to Earth | 25 | 40.3225806 |
| Calculate Mars age |
| Calculate age on Mars relative to Earth | 25 | 13.2978723 |
| Calculate Jupiter age |
| Calculate age on Jupiter relative to Earth | 25 | 2.1079258 |

## Specs

Describe: MercuryInfo();

Test: "It will calculate users age on Mercury relative to their age on Earth"
Expect(Age.calcMercuryAge(25).toEqual(104.16667))

Test: "It will calculate difference between user's Mercury age and their Earth life expectantcy"
Expect(Age.mercuryAge.calcYearsLeft(25).toEqual(-28.866667))

Describe: calcVenusAge();

Test: "It will calculate users age on Venus relative to their age on Earth"
Expect(Age.calcVenusAge(25).toEqual(40.3225806))

Describe calcMarsAge();

Test: "It will calculate users age on Mars relative to their age on Earth"
Expect(Age.calcMarsAge(25).toEqual(13.2978723))

Describe calcJupiterAge();

Test: "It will calculate users age on Jupiter relative to their age on Earth"
Expect(Age.calcJupiterAge(25).toEqual(2.1079258))
