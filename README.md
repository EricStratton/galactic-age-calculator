## Test Table

| Test | Input | Output |
| :------------| :---------------| :-----------|
| Calculate Mercury age |
| Calculate age on Mercury relative to Earth | 25 | 104.166667 |
| Calulate Venus age |
| Calculate age on Venus relative to Earth | 25 | 40.3225806 |

## Specs

Describe: calcMercuryAge();

Test: "It will calculate users age on Mercury relative to their age on Earth"
Expect(Age.calcMercuryAge(25).toEqual(104.16667))

Describe: calcVenusAge();

Test: "It will calculate users age on Venus relative to their age on Earth"
Expect(Age.calcVenusAge(25).toEqual(40.3225806))