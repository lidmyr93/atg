export default {
  "@type": ".Game",
  id: "V86_2024-09-25_40_1",
  status: "results",
  pools: {
    V86: {
      "@type": ".MarkingBetPool",
      id: "V86_2024-09-25_40_1",
      status: "results",
      timestamp: "2024-09-25 22:16:45",
      turnover: 2649464200,
      result: {
        "@type": ".MarkingBetResult",
        payouts: {
          "6": {
            systems: 31380,
            payout: 21900,
          },
          "7": {
            systems: 1367,
            payout: 251700,
          },
          "8": {
            systems: 26,
            payout: 26396000,
          },
        },
      },
      betType: "V86",
      harry: false,
      systemCount: 872604,
      payouts: {
        "6": 688860700,
        "7": 344430300,
        "8": 688860700,
      },
      potentialPayoutRaceId: "2024-09-25_5_10",
    },
  },
  races: [
    {
      id: "2024-09-25_6_6",
      name: "Treåringslopp",
      date: "2024-09-25",
      number: 6,
      distance: 1640,
      startMethod: "auto",
      startTime: "2024-09-25T20:30:15",
      scheduledStartTime: "2024-09-25T20:30:00",
      prize:
        "Pris: 50.000-25.000-17.500-12.500-8.000-5.500-5.500-5.500 kr (8 prisplacerade). Lägst 1.500 kr till alla tävlande. Prispengar max total: 135.500 kr.",
      terms: [
        "3-åriga 1.500 - 95.000 kr. Körsvenskrav kat. 2. Körsvenner födda 060925 eller tidigare.",
        "Hederspris till segrande hästs ägare och körsven.",
        "1640 m. Autostart. 12 startande.",
      ],
      sport: "trot",
      track: {
        id: 6,
        name: "Åby",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "2 längder",
        scratchings: [5],
      },
      status: "results",
      mediaId: "1904756293038",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2024-09-25_6_6",
          status: "results",
          timestamp: "2024-09-25 20:34:40",
          turnover: 57158400,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 4,
                odds: 815,
              },
            ],
          },
          betType: "vinnare",
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2024-09-25_6_6",
          status: "results",
          timestamp: "2024-09-25 20:34:40",
          turnover: 57158400,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 4,
                  odds: 208,
                },
              ],
              second: [
                {
                  number: 6,
                  odds: 135,
                },
              ],
              third: [
                {
                  number: 11,
                  odds: 126,
                },
              ],
            },
          },
          betType: "plats",
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2024-09-25_6_6",
          status: "results",
          timestamp: "2024-09-25 20:37:38",
          turnover: 57158400,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [4, 6],
                odds: 810,
              },
            ],
          },
          betType: "tvilling",
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2024-09-25_6_6",
          status: "results",
          timestamp: "2024-09-25 20:37:38",
          turnover: 57158400,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [4, 6],
                odds: 2392,
              },
            ],
          },
          betType: "komb",
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2024-09-25_6_6",
          status: "results",
          timestamp: "2024-09-25 20:37:38",
          turnover: 57158400,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [4, 6, 11],
                odds: 6646,
              },
            ],
          },
          betType: "trio",
        },
        V86: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "59396",
            value: {
              amount: 11500,
            },
            winners: [4],
            reserveOrder: [11, 6, 3, 1, 8, 4, 10, 12, 9, 2, 5, 7],
          },
        },
      },
      starts: [
        {
          id: "2024-09-25_6_6_1",
          number: 1,
          postPosition: 1,
          distance: 1640,
          horse: {
            id: 785104,
            name: "Pirat Brodde",
            age: 3,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 4,
              },
            },
            trainer: {
              id: 56965,
              firstName: "Thomas",
              lastName: "Uhrberg",
              shortName: "Uhr Th",
              location: "Munka-Ljungby",
              birth: 1961,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare: träna, köra",
              silks: "Grön,vitt axelparti,vinkel och ärmr;silver",
              statistics: {
                years: {
                  "2023": {
                    starts: 221,
                    earnings: 388823600,
                    placement: {
                      "3": 31,
                      "2": 30,
                      "1": 34,
                    },
                    winPercentage: 1538,
                  },
                  "2024": {
                    starts: 162,
                    earnings: 263098500,
                    placement: {
                      "3": 19,
                      "2": 13,
                      "1": 16,
                    },
                    winPercentage: 987,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 51500,
            color: "brun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 246983,
              name: "Stall Lars Vegard HB",
              location: "Årjäng",
            },
            breeder: {
              id: 230444,
              name: "Brodda Stuteri AB",
              location: "Skurup",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 4,
                  earnings: 5150000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 4,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 4,
                earnings: 5150000,
                placement: {
                  "3": 0,
                  "2": 0,
                  "1": 1,
                },
                records: [
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 4,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 2500,
                placePercentage: 2500,
                earningsPerStart: 1287500,
                startPoints: 965,
              },
              lastFiveStarts: {
                averageOdds: 1797,
              },
            },
            pedigree: {
              father: {
                id: 553396,
                name: "S.J.'s Caviar",
                nationality: "US",
              },
              mother: {
                id: 674227,
                name: "Puma Brodda",
              },
              grandfather: {
                id: 561266,
                name: "Thai Tanic",
                nationality: "NO",
              },
            },
          },
          driver: {
            id: 56965,
            firstName: "Thomas",
            lastName: "Uhrberg",
            shortName: "Uhr Th",
            location: "Munka-Ljungby",
            birth: 1961,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Grön,vitt axelparti,vinkel och ärmr;silver",
            statistics: {
              years: {
                "2023": {
                  starts: 572,
                  earnings: 862501300,
                  placement: {
                    "3": 86,
                    "2": 71,
                    "1": 63,
                  },
                  winPercentage: 1101,
                },
                "2024": {
                  starts: 295,
                  earnings: 441347500,
                  placement: {
                    "3": 34,
                    "2": 26,
                    "1": 29,
                  },
                  winPercentage: 983,
                },
              },
            },
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 1,
            },
            prizeMoney: 5500,
            finalOdds: 21.48,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2148,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 375,
              maxOdds: 375,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 612,
            },
          },
          videos: [
            {
              mediaId: "1904604229228",
              timestamp: "2024-09-25T17:31:21",
            },
            {
              mediaId: "1904632389301",
              timestamp: "2024-09-25T17:42:46",
            },
            {
              mediaId: "1904643141279",
              timestamp: "2024-09-25T17:52:44",
            },
            {
              mediaId: "1904654405268",
              timestamp: "2024-09-25T18:03:10",
            },
            {
              mediaId: "1904661573161",
              timestamp: "2024-09-25T18:11:38",
            },
            {
              mediaId: "1904675909088",
              timestamp: "2024-09-25T18:21:43",
            },
          ],
        },
        {
          id: "2024-09-25_6_6_2",
          number: 2,
          postPosition: 2,
          distance: 1640,
          horse: {
            id: 784912,
            name: "Le Roi Mearas",
            age: 3,
            sex: "stallion",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 7,
              },
            },
            trainer: {
              id: 549496,
              firstName: "Johan",
              lastName: "Untersteiner",
              shortName: "Unt Jo",
              location: "Holm",
              birth: 1984,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit/röda axelklaffar; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 1224,
                    earnings: 3381797800,
                    placement: {
                      "3": 133,
                      "2": 183,
                      "1": 249,
                    },
                    winPercentage: 2034,
                  },
                  "2024": {
                    starts: 982,
                    earnings: 2186035700,
                    placement: {
                      "3": 121,
                      "2": 160,
                      "1": 172,
                    },
                    winPercentage: 1751,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 63500,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 820002,
              name: "Invexbo AB & AB Trotlite",
            },
            breeder: {
              id: 672733,
              name: "Snogarps Gård AB",
              location: "Ystad",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 6,
                  earnings: 6350000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 8,
                      },
                      place: 5,
                    },
                  ],
                },
              },
              life: {
                starts: 6,
                earnings: 6350000,
                placement: {
                  "3": 2,
                  "2": 0,
                  "1": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 8,
                    },
                    place: 5,
                    year: "2024",
                  },
                ],
                winPercentage: 0,
                placePercentage: 3333,
                earningsPerStart: 1058333,
                startPoints: 710,
              },
              lastFiveStarts: {
                averageOdds: 2722,
              },
            },
            pedigree: {
              father: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
              mother: {
                id: 775642,
                name: "Maria Deo",
                nationality: "US",
              },
              grandfather: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 42633,
            firstName: "Peter",
            lastName: "Untersteiner",
            shortName: "Unt Pe",
            location: "Halmstad",
            birth: 1960,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Röd, vita axelklaffar; röd",
            statistics: {
              years: {
                "2023": {
                  starts: 403,
                  earnings: 835165700,
                  placement: {
                    "3": 38,
                    "2": 52,
                    "1": 59,
                  },
                  winPercentage: 1464,
                },
                "2024": {
                  starts: 326,
                  earnings: 441115200,
                  placement: {
                    "3": 48,
                    "2": 48,
                    "1": 37,
                  },
                  winPercentage: 1134,
                },
              },
            },
          },
          result: {
            place: 8,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 3,
            },
            prizeMoney: 5500,
            finalOdds: 81.99,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 8199,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 935,
              maxOdds: 935,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 56,
            },
          },
          videos: [
            {
              mediaId: "1904733765121",
              timestamp: "2024-09-25T19:05:51",
            },
            {
              mediaId: "1904736837396",
              timestamp: "2024-09-25T19:23:55",
            },
            {
              mediaId: "1904739909185",
              timestamp: "2024-09-25T19:32:06",
            },
          ],
        },
        {
          id: "2024-09-25_6_6_3",
          number: 3,
          postPosition: 3,
          distance: 1640,
          horse: {
            id: 789016,
            name: "Getting Rid of",
            age: 3,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 6,
              },
            },
            trainer: {
              id: 549496,
              firstName: "Johan",
              lastName: "Untersteiner",
              shortName: "Unt Jo",
              location: "Holm",
              birth: 1984,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit/röda axelklaffar; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 1224,
                    earnings: 3381797800,
                    placement: {
                      "3": 133,
                      "2": 183,
                      "1": 249,
                    },
                    winPercentage: 2034,
                  },
                  "2024": {
                    starts: 982,
                    earnings: 2186035700,
                    placement: {
                      "3": 121,
                      "2": 160,
                      "1": 172,
                    },
                    winPercentage: 1751,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 66500,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 229595,
              name: "Stens Trot AB",
              location: "Nacka Strand",
            },
            breeder: {
              id: 36822,
              name: "Menhammar Stuteri AB",
              location: "Ekerö",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 5,
                  earnings: 6650000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 6,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 5,
                earnings: 6650000,
                placement: {
                  "3": 1,
                  "2": 1,
                  "1": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2024",
                  },
                ],
                winPercentage: 0,
                placePercentage: 4000,
                earningsPerStart: 1330000,
                startPoints: 1040,
              },
              lastFiveStarts: {
                averageOdds: 1101,
              },
            },
            pedigree: {
              father: {
                id: 762068,
                name: "Walner",
                nationality: "CA",
              },
              mother: {
                id: 695023,
                name: "Rub it Out",
              },
              grandfather: {
                id: 584617,
                name: "Going Kronos",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 549496,
            firstName: "Johan",
            lastName: "Untersteiner",
            shortName: "Unt Jo",
            location: "Holm",
            birth: 1984,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Grön,svart stjärna i vit rundel; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 829,
                  earnings: 2105582500,
                  placement: {
                    "3": 89,
                    "2": 121,
                    "1": 173,
                  },
                  winPercentage: 2086,
                },
                "2024": {
                  starts: 576,
                  earnings: 1514869000,
                  placement: {
                    "3": 64,
                    "2": 97,
                    "1": 119,
                  },
                  winPercentage: 2065,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 7,
            },
            prizeMoney: 12500,
            finalOdds: 11.88,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1188,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 217,
              maxOdds: 217,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1136,
            },
          },
          videos: [
            {
              mediaId: "1904735813033",
              timestamp: "2024-09-25T19:05:33",
            },
            {
              mediaId: "1904736837472",
              timestamp: "2024-09-25T19:25:18",
            },
            {
              mediaId: "1904737349219",
              timestamp: "2024-09-25T19:31:49",
            },
          ],
        },
        {
          id: "2024-09-25_6_6_4",
          number: 4,
          postPosition: 4,
          distance: 1640,
          horse: {
            id: 786896,
            name: "Nikita's Buck",
            age: 3,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 7,
              },
            },
            trainer: {
              id: 162468,
              firstName: "Jeppe",
              lastName: "Juel",
              shortName: "Jue Je",
              location: "Danmark",
              birth: 1975,
              license: "A-tränare (utland): träna, köra",
              silks: "Beige, grön; beige",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 40699,
            color: "mörkbrun",
            owner: {
              id: 225984,
              name: "Bäckman Sarah & Team Juel",
              location: "Danmark",
            },
            breeder: {
              id: 763460,
              name: "Eriksson Sune",
              location: "Forsa",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 5,
                  earnings: 4069900,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 5,
                earnings: 4069900,
                placement: {
                  "3": 1,
                  "2": 2,
                  "1": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 4,
                    year: "2024",
                  },
                ],
                winPercentage: 0,
                placePercentage: 6000,
                earningsPerStart: 813980,
                startPoints: 1005,
              },
              lastFiveStarts: {
                averageOdds: 1103,
              },
            },
            pedigree: {
              father: {
                id: 757369,
                name: "Fourth Dimension",
                nationality: "US",
              },
              mother: {
                id: 730781,
                name: "Orlando's Nikita",
              },
              grandfather: {
                id: 617124,
                name: "Orlando Vici",
                nationality: "FR",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 145716,
            firstName: "Stefan",
            lastName: "Persson",
            shortName: "Per St",
            location: "Halmstad",
            birth: 1973,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, ljusblå sidor; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 1495,
                  earnings: 2001121400,
                  placement: {
                    "3": 159,
                    "2": 156,
                    "1": 197,
                  },
                  winPercentage: 1317,
                },
                "2024": {
                  starts: 978,
                  earnings: 1297083300,
                  placement: {
                    "3": 97,
                    "2": 122,
                    "1": 125,
                  },
                  winPercentage: 1278,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 3,
            },
            prizeMoney: 50000,
            finalOdds: 8.15,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 815,
              finalOdds: 815,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 208,
              maxOdds: 208,
              odds: 208,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 384,
            },
          },
          videos: [
            {
              mediaId: "1904737349218",
              timestamp: "2024-09-25T19:31:46",
            },
            {
              mediaId: "1904740933322",
              timestamp: "2024-09-25T19:36:03",
            },
            {
              mediaId: "1904744517086",
              timestamp: "2024-09-25T19:45:51",
            },
            {
              mediaId: "1904747589008",
              timestamp: "2024-09-25T19:55:51",
            },
          ],
        },
        {
          id: "2024-09-25_6_6_5",
          number: 5,
          scratched: true,
          postPosition: 5,
          distance: 1640,
          horse: {
            id: 786155,
            name: "El Chapo",
            age: 3,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 1,
              },
            },
            trainer: {
              id: 638460,
              firstName: "Rick",
              lastName: "Ebbinge",
              shortName: "Ebb Ri",
              location: "Skene",
              birth: 1984,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Mörkblå, orange axelklaffar och ärmb.; mbl",
              statistics: {
                years: {
                  "2023": {
                    starts: 243,
                    earnings: 580051000,
                    placement: {
                      "3": 29,
                      "2": 40,
                      "1": 54,
                    },
                    winPercentage: 2222,
                  },
                  "2024": {
                    starts: 181,
                    earnings: 312350000,
                    placement: {
                      "3": 18,
                      "2": 28,
                      "1": 43,
                    },
                    winPercentage: 2375,
                  },
                },
              },
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 79500,
            color: "fux",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 739974,
              name: "Albér Invest A/S",
            },
            breeder: {
              id: 613837,
              name: "Albér Charlotte",
              location: "Danmark",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 3,
                  earnings: 1150000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 5,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 5,
                  earnings: 6800000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 1,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 1,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 8,
                earnings: 7950000,
                placement: {
                  "3": 0,
                  "2": 2,
                  "1": 1,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 5,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2024",
                  },
                ],
                winPercentage: 1250,
                placePercentage: 3750,
                earningsPerStart: 993750,
                startPoints: 1530,
              },
              lastFiveStarts: {
                averageOdds: 2465,
              },
            },
            pedigree: {
              father: {
                id: 718865,
                name: "Broad Bahn",
                nationality: "US",
              },
              mother: {
                id: 744021,
                name: "Wild Winter Dream",
              },
              grandfather: {
                id: 543528,
                name: "Dream Vacation",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 638460,
            firstName: "Rick",
            lastName: "Ebbinge",
            shortName: "Ebb Ri",
            location: "Skene",
            birth: 1984,
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Mörkblå, orange axelklaffar och ärmb.; mbl",
            statistics: {
              years: {
                "2023": {
                  starts: 192,
                  earnings: 493200300,
                  placement: {
                    "3": 23,
                    "2": 31,
                    "1": 43,
                  },
                  winPercentage: 2239,
                },
                "2024": {
                  starts: 138,
                  earnings: 240370000,
                  placement: {
                    "3": 15,
                    "2": 21,
                    "1": 31,
                  },
                  winPercentage: 2246,
                },
              },
            },
          },
          result: {
            finishOrder: 55,
            finalOdds: 0.0,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 32,
            },
          },
        },
        {
          id: "2024-09-25_6_6_6",
          number: 6,
          postPosition: 5,
          distance: 1640,
          horse: {
            id: 785697,
            name: "Our Brodde",
            age: 3,
            sex: "stallion",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 4,
              },
            },
            trainer: {
              id: 109524,
              firstName: "Gordon",
              lastName: "Dahl",
              shortName: "Dah Go",
              location: "Danmark",
              birth: 1964,
              license: "A-tränare (utland): träna, köra",
              silks: "Mörkblå, enfärgad; mblå",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
              },
              back: {
                hasShoe: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 81735,
            color: "mörkbrun",
            owner: {
              id: 741041,
              name: "Enghavegard Aalborg ApS",
              location: "Danmark",
            },
            breeder: {
              id: 813354,
              name: "Brodda Stuteri AB",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 2,
                  earnings: 3812500,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 3,
                  earnings: 4361300,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 4,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 5,
                earnings: 8173500,
                placement: {
                  "3": 1,
                  "2": 1,
                  "1": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 4,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 2000,
                placePercentage: 6000,
                earningsPerStart: 1634700,
                startPoints: 1490,
              },
              lastFiveStarts: {
                averageOdds: 624,
              },
            },
            pedigree: {
              father: {
                id: 739710,
                name: "Googoo Gaagaa",
                nationality: "US",
              },
              mother: {
                id: 691204,
                name: "Our Precious",
              },
              grandfather: {
                id: 479404,
                name: "Pearsall Hanover",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 9839,
            firstName: "Birger",
            lastName: "Jörgensen",
            shortName: "Jör Bi",
            location: "Danmark",
            birth: 1957,
            license: "A-tränare (utland): träna, köra",
            silks: "Svart, vitt bröstband och guld axelp; guld",
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 5,
            },
            prizeMoney: 25000,
            finalOdds: 2.97,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 297,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 135,
              maxOdds: 135,
              odds: 135,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 3398,
            },
          },
          videos: [
            {
              mediaId: "1904732229335",
              timestamp: "2024-09-25T19:01:36",
            },
            {
              mediaId: "1904734789473",
              timestamp: "2024-09-25T19:14:33",
            },
            {
              mediaId: "1904739909111",
              timestamp: "2024-09-25T19:29:23",
            },
          ],
        },
        {
          id: "2024-09-25_6_6_7",
          number: 7,
          postPosition: 6,
          distance: 1640,
          horse: {
            id: 787833,
            name: "Pure Keyla",
            age: 3,
            sex: "mare",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 17,
                tenths: 1,
              },
            },
            trainer: {
              id: 189892,
              firstName: "Tova",
              lastName: "Bengtsson",
              shortName: "Ben To",
              location: "Skene",
              birth: 1995,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "B-tränare: träna, köra, rida",
              silks: "Svart, silver/vit vinkel och axelkl.; sv",
              statistics: {
                years: {
                  "2023": {
                    starts: 25,
                    earnings: 17550000,
                    placement: {
                      "3": 3,
                      "2": 3,
                      "1": 3,
                    },
                    winPercentage: 1200,
                  },
                  "2024": {
                    starts: 46,
                    earnings: 37520000,
                    placement: {
                      "3": 5,
                      "2": 6,
                      "1": 6,
                    },
                    winPercentage: 1304,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 40500,
            color: "brun",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 784876,
              name: "Göteborg Smart Repair Center AB",
            },
            breeder: {
              id: 789370,
              name: "Kreivi Marko",
              location: "Rönnäng",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 7,
                  earnings: 4050000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 1,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 8,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 7,
                earnings: 4050000,
                placement: {
                  "3": 1,
                  "2": 0,
                  "1": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 1,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 8,
                    },
                    place: 4,
                    year: "2024",
                  },
                ],
                winPercentage: 0,
                placePercentage: 1428,
                earningsPerStart: 578571,
                startPoints: 445,
              },
              lastFiveStarts: {
                averageOdds: 4072,
              },
            },
            pedigree: {
              father: {
                id: 562580,
                name: "Love You",
                nationality: "FR",
              },
              mother: {
                id: 775314,
                name: "Southwind Cartier",
                nationality: "US",
              },
              grandfather: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 756788,
            firstName: "Victor",
            lastName: "Rosleff",
            shortName: "Ros Vi",
            location: "Halmstad",
            birth: 1998,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Orange, svart axelp.stolpar och revär; or",
            statistics: {
              years: {
                "2023": {
                  starts: 739,
                  earnings: 630358300,
                  placement: {
                    "3": 76,
                    "2": 67,
                    "1": 60,
                  },
                  winPercentage: 811,
                },
                "2024": {
                  starts: 643,
                  earnings: 585115000,
                  placement: {
                    "3": 71,
                    "2": 62,
                    "1": 43,
                  },
                  winPercentage: 668,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 11,
            kmTime: {
              minutes: 1,
              seconds: 15,
              tenths: 7,
            },
            prizeMoney: 1500,
            finalOdds: 184.39,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 18439,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 2384,
              maxOdds: 2384,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 15,
            },
          },
          videos: [
            {
              mediaId: "1904739909194",
              timestamp: "2024-09-25T19:32:25",
            },
            {
              mediaId: "1904740421241",
              timestamp: "2024-09-25T19:40:01",
            },
          ],
        },
        {
          id: "2024-09-25_6_6_8",
          number: 8,
          postPosition: 7,
          distance: 1640,
          horse: {
            id: 787414,
            name: "Bekir H.T.V.",
            age: 3,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 5,
              },
            },
            trainer: {
              id: 98743,
              firstName: "Hans Henning",
              lastName: "Kristoffersen",
              shortName: "Kri HH",
              location: "Danmark",
              birth: 1960,
              license: "B-tränare: (utland): träna, köra",
              silks: "Turkos, H H i gult;",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
              },
              back: {
                hasShoe: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 87798,
            color: "svartbrun",
            owner: {
              id: 225984,
              name: "Stald Kojak",
              location: "Danmark",
            },
            breeder: {
              id: 502146,
              name: "Teccet AB",
              location: "Klippan",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 4,
                  earnings: 8779800,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 4,
                earnings: 8779800,
                placement: {
                  "3": 1,
                  "2": 1,
                  "1": 1,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 2500,
                placePercentage: 7500,
                earningsPerStart: 2194950,
                startPoints: 1577,
              },
              lastFiveStarts: {
                averageOdds: 1422,
              },
            },
            pedigree: {
              father: {
                id: 710404,
                name: "Cash Gamble",
              },
              mother: {
                id: 743030,
                name: "Abuko",
              },
              grandfather: {
                id: 444553,
                name: "Yankee Glide",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 99144,
            firstName: "Ken",
            lastName: "Ecce",
            shortName: "Ecc Ke",
            location: "Staffanstorp",
            birth: 1963,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, orange/vita sömmar; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 407,
                  earnings: 768456000,
                  placement: {
                    "3": 44,
                    "2": 39,
                    "1": 51,
                  },
                  winPercentage: 1253,
                },
                "2024": {
                  starts: 313,
                  earnings: 385242600,
                  placement: {
                    "3": 41,
                    "2": 34,
                    "1": 36,
                  },
                  winPercentage: 1150,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 10,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 5,
            },
            prizeMoney: 1500,
            finalOdds: 23.22,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2322,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 339,
              maxOdds: 339,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 438,
            },
          },
          videos: [
            {
              mediaId: "1904731205362",
              timestamp: "2024-09-25T19:19:32",
            },
            {
              mediaId: "1904732229433",
              timestamp: "2024-09-25T19:02:49",
            },
          ],
        },
        {
          id: "2024-09-25_6_6_9",
          number: 9,
          postPosition: 9,
          distance: 1640,
          horse: {
            id: 785399,
            name: "Working Girl",
            age: 3,
            sex: "mare",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 7,
              },
            },
            trainer: {
              id: 82889,
              firstName: "Carlos",
              lastName: "Söderström",
              shortName: "Söd Ca",
              location: "Fotskäl",
              birth: 1965,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, diagonalt delad vit; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 76,
                    earnings: 73514700,
                    placement: {
                      "3": 6,
                      "2": 6,
                      "1": 7,
                    },
                    winPercentage: 921,
                  },
                  "2024": {
                    starts: 40,
                    earnings: 51968900,
                    placement: {
                      "3": 4,
                      "2": 5,
                      "1": 5,
                    },
                    winPercentage: 1250,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 90300,
            color: "mörkbrun",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 745645,
              name: "Flach Susanne",
              location: "Fotskäl",
            },
            breeder: {
              id: 745645,
              name: "Flach Susanne",
              location: "Fotskäl",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 10,
                  earnings: 9030000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 7,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 1,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 10,
                earnings: 9030000,
                placement: {
                  "3": 2,
                  "2": 1,
                  "1": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2024",
                  },
                ],
                winPercentage: 0,
                placePercentage: 3000,
                earningsPerStart: 903000,
                startPoints: 655,
              },
              lastFiveStarts: {
                averageOdds: 5719,
              },
            },
            pedigree: {
              father: {
                id: 602426,
                name: "Ken Warkentin",
                nationality: "US",
              },
              mother: {
                id: 638952,
                name: "Grace Bore",
              },
              grandfather: {
                id: 505143,
                name: "Fast Photo",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 82889,
            firstName: "Carlos",
            lastName: "Söderström",
            shortName: "Söd Ca",
            location: "Fotskäl",
            birth: 1965,
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, diagonalt delad vit; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 57,
                  earnings: 22150000,
                  placement: {
                    "3": 2,
                    "2": 5,
                    "1": 1,
                  },
                  winPercentage: 175,
                },
                "2024": {
                  starts: 36,
                  earnings: 30500000,
                  placement: {
                    "3": 4,
                    "2": 3,
                    "1": 3,
                  },
                  winPercentage: 833,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 4,
            },
            prizeMoney: 1500,
            finalOdds: 64.36,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 6436,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 892,
              maxOdds: 892,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 71,
            },
          },
        },
        {
          id: "2024-09-25_6_6_10",
          number: 10,
          postPosition: 10,
          distance: 1640,
          horse: {
            id: 785633,
            name: "Express Gene",
            age: 3,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 2,
              },
            },
            trainer: {
              id: 566962,
              firstName: "Maria",
              lastName: "Törnqvist",
              shortName: "Tör Ma",
              location: "Nossebro",
              birth: 1988,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "A-tränare: träna, köra",
              silks: "Grå, svarta stolpar, axelparti och ärm; sv",
              statistics: {
                years: {
                  "2023": {
                    starts: 288,
                    earnings: 437820000,
                    placement: {
                      "3": 37,
                      "2": 48,
                      "1": 39,
                    },
                    winPercentage: 1354,
                  },
                  "2024": {
                    starts: 223,
                    earnings: 648648400,
                    placement: {
                      "3": 30,
                      "2": 21,
                      "1": 58,
                    },
                    winPercentage: 2600,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: true,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 88000,
            color: "brun",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 828103,
              name: "PetrasHB",
              location: "MariaTörnqvist AB&SilkstoneHB",
            },
            breeder: {
              id: 715051,
              name: "Berg Roland & Martin",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 7,
                  earnings: 8800000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 2,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 1,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 7,
                earnings: 8800000,
                placement: {
                  "3": 1,
                  "2": 1,
                  "1": 2,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 1,
                    },
                    place: 3,
                    year: "2024",
                  },
                ],
                winPercentage: 2857,
                placePercentage: 5714,
                earningsPerStart: 1257142,
                startPoints: 1300,
              },
              lastFiveStarts: {
                averageOdds: 1103,
              },
            },
            pedigree: {
              father: {
                id: 721257,
                name: "Readly Express",
              },
              mother: {
                id: 641752,
                name: "Lights on Broadway",
                nationality: "US",
              },
              grandfather: {
                id: 594465,
                name: "Broadway Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 666737,
            firstName: "Dwight",
            lastName: "Pieters",
            shortName: "Pie Dw",
            location: "Nossebro",
            birth: 1990,
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Mörkblå, vita vinklar; mblå",
            statistics: {
              years: {
                "2023": {
                  starts: 472,
                  earnings: 576980000,
                  placement: {
                    "3": 54,
                    "2": 69,
                    "1": 50,
                  },
                  winPercentage: 1059,
                },
                "2024": {
                  starts: 222,
                  earnings: 342495400,
                  placement: {
                    "3": 26,
                    "2": 20,
                    "1": 36,
                  },
                  winPercentage: 1621,
                },
              },
            },
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 2,
            },
            prizeMoney: 5500,
            finalOdds: 68.33,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 6833,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 697,
              maxOdds: 697,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 134,
            },
          },
          videos: [
            {
              mediaId: "1904731205188",
              timestamp: "2024-09-25T19:11:05",
            },
            {
              mediaId: "1904733253285",
              timestamp: "2024-09-25T19:27:52",
            },
          ],
        },
        {
          id: "2024-09-25_6_6_11",
          number: 11,
          postPosition: 11,
          distance: 1640,
          horse: {
            id: 786428,
            name: "Grande Finale",
            age: 3,
            sex: "mare",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 4,
              },
            },
            trainer: {
              id: 143661,
              firstName: "Geir Vegard",
              lastName: "Gundersen",
              shortName: "Gun GV",
              location: "Norge",
              birth: 1975,
              license: "A-tränare (utland): träna, köra",
              silks: "Svart, röd/vita detaljer; svart",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 90000,
            color: "brun",
            owner: {
              id: 225985,
              name: "Sandbäk Erik",
              location: "Norge",
            },
            breeder: {
              id: 36822,
              name: "Menhammar Stuteri AB",
              location: "Ekerö",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 2,
                  earnings: 9000000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 4,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 8,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 2,
                earnings: 9000000,
                placement: {
                  "3": 0,
                  "2": 0,
                  "1": 2,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 4,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 10000,
                placePercentage: 10000,
                earningsPerStart: 4500000,
                startPoints: 1700,
              },
              lastFiveStarts: {
                averageOdds: 125,
              },
            },
            pedigree: {
              father: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
              mother: {
                id: 713148,
                name: "Olympia Tilly",
              },
              grandfather: {
                id: 198885,
                name: "Lindy Lane",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 722458,
            firstName: "Magnus Teien",
            lastName: "Gundersen",
            shortName: "Gun MT",
            location: "Norge",
            birth: 1996,
            license: "Körlicens, utländsk",
            silks: "Mörkblå, vit/röd sömmar; mblå",
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 6,
            },
            prizeMoney: 17500,
            finalOdds: 2.06,
            startNumber: 11,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 206,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 126,
              maxOdds: 126,
              odds: 126,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 3639,
            },
          },
          videos: [
            {
              mediaId: "1904734789344",
              timestamp: "2024-09-25T19:10:45",
            },
            {
              mediaId: "1904737861058",
              timestamp: "2024-09-25T19:27:02",
            },
            {
              mediaId: "1904740933260",
              timestamp: "2024-09-25T19:32:52",
            },
            {
              mediaId: "1904755781088",
              timestamp: "2024-09-25T20:41:41",
            },
          ],
        },
        {
          id: "2024-09-25_6_6_12",
          number: 12,
          postPosition: 12,
          distance: 1640,
          horse: {
            id: 783635,
            name: "Bullitt",
            age: 3,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 0,
              },
            },
            trainer: {
              id: 161607,
              firstName: "Björn",
              lastName: "Goop",
              shortName: "Goo Bj",
              location: "Karlstad",
              birth: 1976,
              homeTrack: {
                id: 15,
                name: "Färjestad",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Mblå, guldf.midjeband, sömmar; guld",
              statistics: {
                years: {
                  "2023": {
                    starts: 1115,
                    earnings: 2449819200,
                    placement: {
                      "3": 116,
                      "2": 126,
                      "1": 159,
                    },
                    winPercentage: 1426,
                  },
                  "2024": {
                    starts: 647,
                    earnings: 1266350300,
                    placement: {
                      "3": 80,
                      "2": 89,
                      "1": 94,
                    },
                    winPercentage: 1452,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 55500,
            color: "brun",
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            owner: {
              id: 733444,
              name: "Ecurie de l'Empereur",
              location: "Frankrike",
            },
            breeder: {
              id: 733444,
              name: "Ecurie de l'Empereur",
              location: "Frankrike",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 3,
                  earnings: 5550000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 0,
                      },
                      place: 8,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 9,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 3,
                earnings: 5550000,
                placement: {
                  "3": 0,
                  "2": 0,
                  "1": 1,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 0,
                    },
                    place: 8,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 3333,
                placePercentage: 3333,
                earningsPerStart: 1850000,
                startPoints: 1005,
              },
              lastFiveStarts: {
                averageOdds: 1268,
              },
            },
            pedigree: {
              father: {
                id: 636691,
                name: "Raja Mirchi",
              },
              mother: {
                id: 739697,
                name: "Maharani de Baroda",
              },
              grandfather: {
                id: 588796,
                name: "Maharajah",
              },
            },
          },
          driver: {
            id: 161607,
            firstName: "Björn",
            lastName: "Goop",
            shortName: "Goo Bj",
            location: "Karlstad",
            birth: 1976,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Mblå, guldf.midjeband, sömmar; guld",
            statistics: {
              years: {
                "2023": {
                  starts: 1240,
                  earnings: 3961444800,
                  placement: {
                    "3": 131,
                    "2": 145,
                    "1": 204,
                  },
                  winPercentage: 1645,
                },
                "2024": {
                  starts: 860,
                  earnings: 2723657700,
                  placement: {
                    "3": 105,
                    "2": 105,
                    "1": 124,
                  },
                  winPercentage: 1441,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 8,
            },
            prizeMoney: 8000,
            finalOdds: 77.86,
            startNumber: 12,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 7786,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1008,
              maxOdds: 1008,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 84,
            },
          },
          videos: [
            {
              mediaId: "1904692805166",
              timestamp: "2024-09-25T18:43:02",
            },
            {
              mediaId: "1904733253343",
              timestamp: "2024-09-25T19:31:59",
            },
            {
              mediaId: "1904735813035",
              timestamp: "2024-09-25T19:05:33",
            },
            {
              mediaId: "1904736325374",
              timestamp: "2024-09-25T19:23:24",
            },
            {
              mediaId: "1904739397446",
              timestamp: "2024-09-25T19:34:18",
            },
          ],
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
    {
      id: "2024-09-25_5_7",
      name: "Stall Courant Solvallaserien 150, Fördel Ston (Försök 6 i Meeting 3 - Final Solvalla 23 oktober)",
      date: "2024-09-25",
      number: 7,
      distance: 2140,
      startMethod: "auto",
      startTime: "2024-09-25T20:41:13",
      scheduledStartTime: "2024-09-25T20:41:00",
      prize:
        "Pris: 80.000-40.000-22.500-16.000-11.000-8.000-5.000 kr (7 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 195.000 kr.",
      terms: [
        "3-åriga och äldre hingstar och valacker 50.001 - 150.000 kr samt 3-åriga och äldre ston 50.001 - 250.000 kr. Körsvenskrav kat. 1. Körsvenner födda 060925 eller tidigare.",
        "Hederspris och segertavla till segrande hästs ägare.",
        "2140 m. Autostart. 12 startande. ",
      ],
      sport: "trot",
      track: {
        id: 5,
        name: "Solvalla",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "1 längd",
        scratchings: [7],
      },
      status: "results",
      mediaId: "1904757317143",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2024-09-25_5_7",
          status: "results",
          timestamp: "2024-09-25 20:46:41",
          turnover: 53850900,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 1,
                odds: 325,
              },
            ],
          },
          betType: "vinnare",
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2024-09-25_5_7",
          status: "results",
          timestamp: "2024-09-25 20:46:41",
          turnover: 53850900,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 1,
                  odds: 160,
                },
              ],
              second: [
                {
                  number: 12,
                  odds: 212,
                },
              ],
              third: [
                {
                  number: 9,
                  odds: 303,
                },
              ],
            },
          },
          betType: "plats",
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2024-09-25_5_7",
          status: "results",
          timestamp: "2024-09-25 20:47:28",
          turnover: 53850900,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [1, 12],
                odds: 1354,
              },
            ],
          },
          betType: "tvilling",
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2024-09-25_5_7",
          status: "results",
          timestamp: "2024-09-25 20:47:28",
          turnover: 53850900,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [1, 12],
                odds: 2064,
              },
            ],
          },
          betType: "komb",
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2024-09-25_5_7",
          status: "results",
          timestamp: "2024-09-25 20:47:28",
          turnover: 53850900,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [1, 12, 9],
                odds: 11619,
              },
            ],
          },
          betType: "trio",
        },
        V86: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "23021",
            value: {
              amount: 29900,
            },
            winners: [1],
            reserveOrder: [2, 10, 1, 12, 6, 9, 7, 11, 4, 3, 5, 8],
          },
        },
      },
      starts: [
        {
          id: "2024-09-25_5_7_1",
          number: 1,
          postPosition: 1,
          distance: 2140,
          horse: {
            id: 778899,
            name: "Young Yack",
            age: 4,
            sex: "stallion",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 0,
              },
            },
            trainer: {
              id: 189679,
              firstName: "Daniel",
              lastName: "Wäjersten",
              shortName: "Wäj Da",
              location: "Kovland",
              birth: 1990,
              homeTrack: {
                id: 9,
                name: "Bergsåker",
              },
              license: "A-tränare: träna, köra",
              silks: "Blå, vitt axelparti och silver vinkel; blå",
              statistics: {
                years: {
                  "2023": {
                    starts: 704,
                    earnings: 2573119000,
                    placement: {
                      "3": 83,
                      "2": 121,
                      "1": 173,
                    },
                    winPercentage: 2457,
                  },
                  "2024": {
                    starts: 604,
                    earnings: 2785712100,
                    placement: {
                      "3": 78,
                      "2": 94,
                      "1": 161,
                    },
                    winPercentage: 2665,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 128000,
            color: "mörkbrun",
            homeTrack: {
              id: 9,
              name: "Bergsåker",
            },
            owner: {
              id: 604563,
              name: "Team Hoffman HB",
              location: "Tingstäde",
            },
            breeder: {
              id: 726504,
              name: "Hoffman Magnus & Henrik",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 6,
                  earnings: 10550000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 2,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 2,
                  earnings: 2250000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 2,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 8,
                earnings: 12800000,
                placement: {
                  "3": 0,
                  "2": 2,
                  "1": 3,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2023",
                  },
                ],
                winPercentage: 3750,
                placePercentage: 6250,
                earningsPerStart: 1600000,
                startPoints: 780,
              },
              lastFiveStarts: {
                averageOdds: 263,
              },
            },
            pedigree: {
              father: {
                id: 731436,
                name: "Nuncio",
                nationality: "US",
              },
              mother: {
                id: 553451,
                name: "Premium Lady",
              },
              grandfather: {
                id: 171553,
                name: "Turbo Thrust",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 189679,
            firstName: "Daniel",
            lastName: "Wäjersten",
            shortName: "Wäj Da",
            location: "Kovland",
            birth: 1990,
            homeTrack: {
              id: 9,
              name: "Bergsåker",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, vitt axelparti och silver vinkel; blå",
            statistics: {
              years: {
                "2023": {
                  starts: 657,
                  earnings: 2096837100,
                  placement: {
                    "3": 80,
                    "2": 95,
                    "1": 132,
                  },
                  winPercentage: 2009,
                },
                "2024": {
                  starts: 533,
                  earnings: 2202382000,
                  placement: {
                    "3": 73,
                    "2": 72,
                    "1": 118,
                  },
                  winPercentage: 2213,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 1,
            },
            prizeMoney: 80000,
            finalOdds: 3.25,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 325,
              finalOdds: 325,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 160,
              maxOdds: 160,
              odds: 160,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1847,
              potentialPayout: {
                value: 29900,
              },
            },
          },
          videos: [
            {
              mediaId: "1904742981050",
              timestamp: "2024-09-25T19:44:42",
            },
            {
              mediaId: "1904745029495",
              timestamp: "2024-09-25T19:55:27",
            },
          ],
        },
        {
          id: "2024-09-25_5_7_2",
          number: 2,
          postPosition: 2,
          distance: 2140,
          horse: {
            id: 777146,
            name: "Full Speed Forward",
            age: 4,
            sex: "mare",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 3,
              },
            },
            trainer: {
              id: 600573,
              firstName: "Jonna",
              lastName: "Irri",
              shortName: "Irr Jo",
              location: "Heby",
              birth: 1988,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              statistics: {
                years: {
                  "2023": {
                    starts: 155,
                    earnings: 146195000,
                    placement: {
                      "3": 13,
                      "2": 14,
                      "1": 11,
                    },
                    winPercentage: 709,
                  },
                  "2024": {
                    starts: 113,
                    earnings: 92187400,
                    placement: {
                      "3": 9,
                      "2": 13,
                      "1": 7,
                    },
                    winPercentage: 619,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 208900,
            color: "mörkbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 825244,
              name: "Team Full Speed (Irri Jonna)",
            },
            breeder: {
              id: 36822,
              name: "Menhammar Stuteri AB",
              location: "Ekerö",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 11,
                  earnings: 13900000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 9,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 8,
                  earnings: 6990000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 2,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 19,
                earnings: 20890000,
                placement: {
                  "3": 2,
                  "2": 0,
                  "1": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 1,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 4,
                    year: "2024",
                  },
                ],
                winPercentage: 1578,
                placePercentage: 2631,
                earningsPerStart: 1099473,
                startPoints: 1319,
              },
              lastFiveStarts: {
                averageOdds: 974,
              },
            },
            pedigree: {
              father: {
                id: 588796,
                name: "Maharajah",
              },
              mother: {
                id: 735807,
                name: "Wroom Wroom",
              },
              grandfather: {
                id: 426861,
                name: "From Above",
              },
            },
          },
          driver: {
            id: 70381,
            firstName: "Jorma",
            lastName: "Kontio",
            shortName: "Kon Jo",
            location: "Enköping",
            birth: 1953,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, vit bröstband och blå ärmar; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 1141,
                  earnings: 1696072800,
                  placement: {
                    "3": 101,
                    "2": 125,
                    "1": 126,
                  },
                  winPercentage: 1104,
                },
                "2024": {
                  starts: 933,
                  earnings: 1604200700,
                  placement: {
                    "3": 110,
                    "2": 105,
                    "1": 104,
                  },
                  winPercentage: 1114,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              minutes: 1,
              seconds: 19,
              tenths: 3,
            },
            galloped: true,
            prizeMoney: 2500,
            finalOdds: 4.27,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 427,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 167,
              maxOdds: 167,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2648,
              potentialPayout: {
                value: 27300,
              },
            },
          },
          videos: [
            {
              mediaId: "1904733253342",
              timestamp: "2024-09-25T19:31:59",
            },
            {
              mediaId: "1904736837488",
              timestamp: "2024-09-25T19:25:28",
            },
          ],
        },
        {
          id: "2024-09-25_5_7_3",
          number: 3,
          postPosition: 3,
          distance: 2140,
          horse: {
            id: 773930,
            name: "Gabbi Leejs",
            age: 5,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 7,
              },
            },
            trainer: {
              id: 60317,
              firstName: "Katrin",
              lastName: "Jägerup",
              shortName: "Jäg Ka",
              location: "Valla",
              birth: 1972,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "B-tränare: träna, köra för bolag",
              silks: "Röd, vitt axelp, långrandig ärm; röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 0,
                    earnings: 0,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 14,
                    earnings: 6860000,
                    placement: {
                      "3": 1,
                      "2": 1,
                      "1": 1,
                    },
                    winPercentage: 714,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: true,
              },
              back: {
                hasShoe: true,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 210700,
            color: "brun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 608454,
              name: "Jägerup Katrin",
              location: "Johan & Börje",
            },
            breeder: {
              id: 677080,
              name: "Pettersson Lars & Susanne",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 12,
                  earnings: 8160000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 3,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 3,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 14,
                  earnings: 6860000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 7,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 32,
                earnings: 21070000,
                placement: {
                  "3": 5,
                  "2": 3,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 7,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 625,
                placePercentage: 3125,
                earningsPerStart: 658437,
                startPoints: 1175,
              },
              lastFiveStarts: {
                averageOdds: 3421,
              },
            },
            pedigree: {
              father: {
                id: 453702,
                name: "Super Photo Kosmos",
                nationality: "US",
              },
              mother: {
                id: 538396,
                name: "Fia Fiktiv",
              },
              grandfather: {
                id: 171553,
                name: "Turbo Thrust",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 67192,
            firstName: "Örjan",
            lastName: "Kihlström",
            shortName: "Kih Ör",
            location: "Bromma",
            birth: 1962,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Turkos, vitt axelparti, 2-del ärm; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 1012,
                  earnings: 4650930500,
                  placement: {
                    "3": 108,
                    "2": 124,
                    "1": 200,
                  },
                  winPercentage: 1976,
                },
                "2024": {
                  starts: 748,
                  earnings: 3864039300,
                  placement: {
                    "3": 81,
                    "2": 98,
                    "1": 131,
                  },
                  winPercentage: 1751,
                },
              },
            },
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 15,
              tenths: 1,
            },
            prizeMoney: 5000,
            finalOdds: 49.64,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 4964,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 669,
              maxOdds: 669,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 183,
              potentialPayout: {
                value: 454600,
              },
            },
          },
          videos: [
            {
              mediaId: "1904731205003",
              timestamp: "2024-09-25T19:02:43",
            },
            {
              mediaId: "1904736837277",
              timestamp: "2024-09-25T19:20:21",
            },
          ],
        },
        {
          id: "2024-09-25_5_7_4",
          number: 4,
          postPosition: 4,
          distance: 2140,
          horse: {
            id: 805795,
            name: "Elkann As",
            nationality: "IT",
            age: 4,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 5,
              },
            },
            trainer: {
              id: 721795,
              firstName: "Gennaro",
              lastName: "Casillo",
              shortName: "Cas Ge",
              location: "Italien",
              birth: 1968,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              statistics: {
                years: {
                  "2023": {
                    starts: 199,
                    earnings: 387030000,
                    placement: {
                      "3": 13,
                      "2": 24,
                      "1": 27,
                    },
                    winPercentage: 1356,
                  },
                  "2024": {
                    starts: 167,
                    earnings: 354856100,
                    placement: {
                      "3": 14,
                      "2": 22,
                      "1": 17,
                    },
                    winPercentage: 1017,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: true,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 134299,
            color: "brun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 823400,
              name: "Althea SRL",
              location: "Italien",
            },
            breeder: {
              id: 823400,
              name: "Althea SRL",
              location: "Italien",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 1,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 12,
                  earnings: 13429900,
                  placement: {
                    "3": 2,
                    "2": 2,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 13,
                earnings: 13429900,
                placement: {
                  "3": 2,
                  "2": 2,
                  "1": 4,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 3,
                    year: "2024",
                  },
                ],
                winPercentage: 3076,
                placePercentage: 6153,
                earningsPerStart: 1033069,
                startPoints: 1185,
              },
              lastFiveStarts: {
                averageOdds: 889,
              },
            },
            pedigree: {
              father: {
                id: 728523,
                name: "Pascia' Lest",
                nationality: "IT",
              },
              mother: {
                id: 805794,
                name: "Verde Milonga",
                nationality: "IT",
              },
              grandfather: {
                id: 562580,
                name: "Love You",
                nationality: "FR",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 99436,
            firstName: "Veli-Pekka",
            lastName: "Toivanen",
            shortName: "Toi VP",
            location: "Finland",
            birth: 1962,
            license: "B-tränare: (utland): träna, köra",
            silks: "Röd/vit,; röd",
          },
          result: {
            finishOrder: 40,
            kmTime: {
              code: "10",
            },
            galloped: true,
            disqualified: true,
            prizeMoney: 2500,
            finalOdds: 26.35,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2635,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 500,
              maxOdds: 500,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 196,
              potentialPayout: {
                value: 190600,
              },
            },
          },
          videos: [
            {
              mediaId: "1904742981038",
              timestamp: "2024-09-25T19:43:54",
            },
            {
              mediaId: "1904745029493",
              timestamp: "2024-09-25T19:54:57",
            },
          ],
        },
        {
          id: "2024-09-25_5_7_5",
          number: 5,
          postPosition: 5,
          distance: 2140,
          horse: {
            id: 772662,
            name: "Lord of Silver",
            age: 5,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 3,
              },
            },
            trainer: {
              id: 101845,
              firstName: "Anna-Lena",
              lastName: "Örneholm",
              shortName: "Örn AL",
              location: "Rimbo",
              birth: 1965,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "B-tränare: träna, köra",
              silks: "Svart,röd kil och ärm, vita vinklar; röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 10,
                    earnings: 6400000,
                    placement: {
                      "3": 1,
                      "2": 1,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 7,
                    earnings: 2775000,
                    placement: {
                      "3": 1,
                      "2": 0,
                      "1": 1,
                    },
                    winPercentage: 1428,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 149150,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 461358,
              name: "Örneholm Anna-Lena",
              location: "Rimbo",
            },
            breeder: {
              id: 772583,
              name: "Stall ROHERO KB & Westholm Jörgen",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 10,
                  earnings: 6400000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 0,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 6,
                      },
                      place: 8,
                    },
                  ],
                },
                "2024": {
                  starts: 7,
                  earnings: 2775000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 9,
                      },
                      place: 7,
                    },
                  ],
                },
              },
              life: {
                starts: 28,
                earnings: 14915000,
                placement: {
                  "3": 2,
                  "2": 1,
                  "1": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 3,
                    },
                    place: 7,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 9,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 6,
                    },
                    place: 8,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 6,
                    },
                    place: 5,
                    year: "2022",
                  },
                ],
                winPercentage: 357,
                placePercentage: 1428,
                earningsPerStart: 532678,
                startPoints: 617,
              },
              lastFiveStarts: {
                averageOdds: 3915,
              },
            },
            pedigree: {
              father: {
                id: 553396,
                name: "S.J.'s Caviar",
                nationality: "US",
              },
              mother: {
                id: 675447,
                name: "Love Leg",
              },
              grandfather: {
                id: 632010,
                name: "Oiseau de Feux",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 177032,
            firstName: "Claes",
            lastName: "Sjöström",
            shortName: "Sjö Cl",
            location: "Rimbo",
            birth: 1976,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, orange fält, axelkl. och ärmb.; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 744,
                  earnings: 1197590200,
                  placement: {
                    "3": 82,
                    "2": 82,
                    "1": 101,
                  },
                  winPercentage: 1357,
                },
                "2024": {
                  starts: 586,
                  earnings: 1022926000,
                  placement: {
                    "3": 55,
                    "2": 81,
                    "1": 77,
                  },
                  winPercentage: 1313,
                },
              },
            },
          },
          result: {
            finishOrder: 38,
            kmTime: {
              code: "8",
            },
            galloped: true,
            disqualified: true,
            prizeMoney: 2500,
            finalOdds: 129.82,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 12982,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1524,
              maxOdds: 1524,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 29,
              potentialPayout: {
                value: 2002000,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_7_6",
          number: 6,
          postPosition: 6,
          distance: 2140,
          horse: {
            id: 789631,
            name: "J.J.Snowstorm",
            nationality: "EE",
            age: 4,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 5,
              },
            },
            trainer: {
              id: 505072,
              firstName: "Jevgeni",
              lastName: "Ivanov",
              shortName: "Iva Je",
              location: "Almunge",
              birth: 1975,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Svart, gul/vit/mörkblå vinklar; vit",
              statistics: {
                years: {
                  "2023": {
                    starts: 302,
                    earnings: 234272600,
                    placement: {
                      "3": 33,
                      "2": 33,
                      "1": 44,
                    },
                    winPercentage: 1456,
                  },
                  "2024": {
                    starts: 156,
                    earnings: 157820300,
                    placement: {
                      "3": 12,
                      "2": 15,
                      "1": 32,
                    },
                    winPercentage: 2051,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 215203,
            color: "mörkbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 708340,
              name: "Fironova Jelena",
              location: "Estland",
            },
            breeder: {
              id: 702074,
              name: "J.J. Stable Oü",
              location: "Estland",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 11,
                  earnings: 13143900,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 4,
                  earnings: 7177600,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aL",
                      startMethod: "auto",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 1,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 18,
                earnings: 21520300,
                placement: {
                  "3": 0,
                  "2": 3,
                  "1": 9,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 5,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 5000,
                placePercentage: 6666,
                earningsPerStart: 1195572,
                startPoints: 2021,
              },
              lastFiveStarts: {
                averageOdds: 2864,
              },
            },
            pedigree: {
              father: {
                id: 762066,
                name: "Victor Gio",
                nationality: "IT",
              },
              mother: {
                id: 714939,
                name: "Ocean Topkip",
                nationality: "DE",
              },
              grandfather: {
                id: 653413,
                name: "Eilean Donon",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 505072,
            firstName: "Jevgeni",
            lastName: "Ivanov",
            shortName: "Iva Je",
            location: "Almunge",
            birth: 1975,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Svart, gul/vit/mörkblå vinklar; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 157,
                  earnings: 90283600,
                  placement: {
                    "3": 13,
                    "2": 12,
                    "1": 22,
                  },
                  winPercentage: 1401,
                },
                "2024": {
                  starts: 99,
                  earnings: 95758400,
                  placement: {
                    "3": 7,
                    "2": 10,
                    "1": 21,
                  },
                  winPercentage: 2121,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 9,
            },
            prizeMoney: 16000,
            finalOdds: 18.82,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1882,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 449,
              maxOdds: 449,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 519,
              potentialPayout: {
                value: 94900,
              },
            },
          },
          videos: [
            {
              mediaId: "1904745029417",
              timestamp: "2024-09-25T19:52:24",
            },
          ],
        },
        {
          id: "2024-09-25_5_7_7",
          number: 7,
          scratched: true,
          postPosition: 7,
          distance: 2140,
          horse: {
            id: 774538,
            name: "Bordeaux Face",
            age: 5,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 8,
              },
            },
            trainer: {
              id: 185518,
              firstName: "Daniel",
              lastName: "Redén",
              shortName: "Red Da",
              location: "Örsundsbro",
              birth: 1979,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Brun, sv axelp och vita hängsl; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 513,
                    earnings: 3369779100,
                    placement: {
                      "3": 61,
                      "2": 72,
                      "1": 147,
                    },
                    winPercentage: 2865,
                  },
                  "2024": {
                    starts: 537,
                    earnings: 3462921200,
                    placement: {
                      "3": 60,
                      "2": 86,
                      "1": 144,
                    },
                    winPercentage: 2681,
                  },
                },
              },
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 132800,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 246844,
              name: "SRF Stable",
            },
            breeder: {
              id: 503157,
              name: "Kolgjini Lutfi & Svensson Anna",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 8,
                  earnings: 1730000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 9,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 8,
                  earnings: 11100000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 8,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 19,
                earnings: 13280000,
                placement: {
                  "3": 1,
                  "2": 0,
                  "1": 3,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 3,
                    year: "2024",
                  },
                ],
                winPercentage: 1578,
                placePercentage: 2105,
                earningsPerStart: 698947,
                startPoints: 1680,
              },
              lastFiveStarts: {
                averageOdds: 300,
              },
            },
            pedigree: {
              father: {
                id: 745530,
                name: "Propulsion",
                nationality: "US",
              },
              mother: {
                id: 733129,
                name: "Croix d'Am",
                nationality: "FR",
              },
              grandfather: {
                id: 562580,
                name: "Love You",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 185518,
            firstName: "Daniel",
            lastName: "Redén",
            shortName: "Red Da",
            location: "Örsundsbro",
            birth: 1979,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Brun, sv axelp och vita hängsl; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 21,
                  earnings: 29489200,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 6,
                  },
                  winPercentage: 2857,
                },
                "2024": {
                  starts: 109,
                  earnings: 205206000,
                  placement: {
                    "3": 15,
                    "2": 15,
                    "1": 22,
                  },
                  winPercentage: 2018,
                },
              },
            },
          },
          result: {
            finishOrder: 57,
            finalOdds: 0.0,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 382,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_7_8",
          number: 8,
          postPosition: 7,
          distance: 2140,
          horse: {
            id: 764581,
            name: "Happy Vip",
            age: 6,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 8,
              },
            },
            trainer: {
              id: 126448,
              firstName: "Joakim",
              lastName: "Sternsjö",
              shortName: "Ste Jo",
              location: "Hallstahammar",
              birth: 1968,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "B-tränare: träna, köra",
              silks: "Vit,orange/vit/blå axelsk och ärmb; vit",
              statistics: {
                years: {
                  "2023": {
                    starts: 23,
                    earnings: 8370000,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 1,
                    },
                    winPercentage: 434,
                  },
                  "2024": {
                    starts: 23,
                    earnings: 13610000,
                    placement: {
                      "3": 1,
                      "2": 1,
                      "1": 1,
                    },
                    winPercentage: 434,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 197700,
            color: "brun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 792347,
              name: "Sternsjö Unghästtr. AB",
              location: "Hallstahammar",
            },
            breeder: {
              id: 587135,
              name: "Bjur Lena",
              location: "Hallstahammar",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 14,
                  earnings: 4720000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 8,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 13,
                  earnings: 5810000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 8,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 7,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 47,
                earnings: 19770000,
                placement: {
                  "3": 3,
                  "2": 2,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 8,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 6,
                    },
                    place: 5,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 4,
                    },
                    place: 5,
                    year: "2020",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 7,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 7,
                    },
                    place: 4,
                    year: "2024",
                  },
                ],
                winPercentage: 425,
                placePercentage: 1489,
                earningsPerStart: 420638,
                startPoints: 785,
              },
              lastFiveStarts: {
                averageOdds: 3147,
              },
            },
            pedigree: {
              father: {
                id: 701471,
                name: "Hard Livin",
                nationality: "US",
              },
              mother: {
                id: 652090,
                name: "Narnia Vip",
              },
              grandfather: {
                id: 161030,
                name: "Super Arnie",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 126448,
            firstName: "Joakim",
            lastName: "Sternsjö",
            shortName: "Ste Jo",
            location: "Hallstahammar",
            birth: 1968,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "B-tränare: träna, köra",
            silks: "Vit,orange/vit/blå axelsk och ärmb; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 28,
                  earnings: 8340000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 1,
                  },
                  winPercentage: 357,
                },
                "2024": {
                  starts: 35,
                  earnings: 19780000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 2,
                  },
                  winPercentage: 571,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 16,
              tenths: 6,
            },
            prizeMoney: 2500,
            finalOdds: 316.02,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 31602,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 3182,
              maxOdds: 3182,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 16,
              potentialPayout: {
                value: 3637500,
              },
            },
          },
          videos: [
            {
              mediaId: "1904741445086",
              timestamp: "2024-09-25T19:34:59",
            },
          ],
        },
        {
          id: "2024-09-25_5_7_9",
          number: 9,
          postPosition: 9,
          distance: 2140,
          horse: {
            id: 771401,
            name: "Bravo Victorio",
            age: 5,
            sex: "gelding",
            record: {
              code: "aL",
              startMethod: "auto",
              distance: "long",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 6,
              },
            },
            trainer: {
              id: 101108,
              firstName: "Fredrik B",
              lastName: "Larsson",
              shortName: "Lar FB",
              location: "Sigtuna",
              birth: 1971,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, rött axelskärp, gult; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 218,
                    earnings: 349800000,
                    placement: {
                      "3": 16,
                      "2": 26,
                      "1": 24,
                    },
                    winPercentage: 1100,
                  },
                  "2024": {
                    starts: 151,
                    earnings: 192480000,
                    placement: {
                      "3": 19,
                      "2": 17,
                      "1": 10,
                    },
                    winPercentage: 662,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: true,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 124300,
            color: "svartbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 707753,
              name: "Ofcourse KB",
              location: "Kovland",
            },
            breeder: {
              id: 237844,
              name: "Liedman Kristina",
              location: "Laholm",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 6,
                  earnings: 4650000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 8,
                  earnings: 7780000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aL",
                      startMethod: "auto",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 6,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 6,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 14,
                earnings: 12430000,
                placement: {
                  "3": 2,
                  "2": 2,
                  "1": 2,
                },
                records: [
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 3,
                    },
                    place: 5,
                    year: "2024",
                  },
                ],
                winPercentage: 1428,
                placePercentage: 4285,
                earningsPerStart: 887857,
                startPoints: 1463,
              },
              lastFiveStarts: {
                averageOdds: 943,
              },
            },
            pedigree: {
              father: {
                id: 736196,
                name: "Brillantissime",
                nationality: "FR",
              },
              mother: {
                id: 686555,
                name: "Domani Boko",
              },
              grandfather: {
                id: 581297,
                name: "Chocolatier",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 101108,
            firstName: "Fredrik B",
            lastName: "Larsson",
            shortName: "Lar FB",
            location: "Sigtuna",
            birth: 1971,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, rött axelskärp, gult; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 145,
                  earnings: 234490000,
                  placement: {
                    "3": 7,
                    "2": 20,
                    "1": 14,
                  },
                  winPercentage: 965,
                },
                "2024": {
                  starts: 92,
                  earnings: 122750000,
                  placement: {
                    "3": 15,
                    "2": 11,
                    "1": 8,
                  },
                  winPercentage: 869,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 9,
            },
            prizeMoney: 22500,
            finalOdds: 15.58,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1558,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 303,
              maxOdds: 303,
              odds: 303,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 420,
              potentialPayout: {
                value: 106400,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_7_10",
          number: 10,
          postPosition: 10,
          distance: 2140,
          horse: {
            id: 772671,
            name: "Hackels Humlan",
            age: 5,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 2,
              },
            },
            trainer: {
              id: 758093,
              firstName: "Ida",
              lastName: "Magnusson",
              shortName: "Mag Id",
              location: "Ludvika",
              birth: 1979,
              homeTrack: {
                id: 23,
                name: "Romme",
              },
              license: "B-tränare: träna, köra",
              silks: "Vinröd,stj på vitt axelskärp,ärmb; vit",
              statistics: {
                years: {
                  "2023": {
                    starts: 25,
                    earnings: 10210000,
                    placement: {
                      "3": 1,
                      "2": 2,
                      "1": 1,
                    },
                    winPercentage: 400,
                  },
                  "2024": {
                    starts: 13,
                    earnings: 17100000,
                    placement: {
                      "3": 0,
                      "2": 3,
                      "1": 3,
                    },
                    winPercentage: 2307,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 239500,
            color: "brun",
            homeTrack: {
              id: 23,
              name: "Romme",
            },
            owner: {
              id: 781383,
              name: "HB Team I/C",
              location: "Ludvika",
            },
            breeder: {
              id: 780971,
              name: "Wassberger Martina",
              location: "Rimforsa",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 7,
                  earnings: 7350000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 4,
                      },
                      place: 5,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 4,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 10,
                  earnings: 16600000,
                  placement: {
                    "3": 0,
                    "2": 3,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 9,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 17,
                earnings: 23950000,
                placement: {
                  "3": 1,
                  "2": 5,
                  "1": 4,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 7,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2024",
                  },
                ],
                winPercentage: 2352,
                placePercentage: 5882,
                earningsPerStart: 1408823,
                startPoints: 855,
              },
              lastFiveStarts: {
                averageOdds: 1473,
              },
            },
            pedigree: {
              father: {
                id: 631050,
                name: "Kadett C.D.",
              },
              mother: {
                id: 695426,
                name: "Umbra Streamline",
              },
              grandfather: {
                id: 196130,
                name: "Running Sea",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 91416,
            firstName: "Per",
            lastName: "Lennartsson",
            shortName: "Len Pe",
            location: "Eskilstuna",
            birth: 1966,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, blå axlar, sidor och ärmb; sva",
            statistics: {
              years: {
                "2023": {
                  starts: 568,
                  earnings: 872704300,
                  placement: {
                    "3": 59,
                    "2": 57,
                    "1": 61,
                  },
                  winPercentage: 1073,
                },
                "2024": {
                  starts: 422,
                  earnings: 720165000,
                  placement: {
                    "3": 44,
                    "2": 41,
                    "1": 60,
                  },
                  winPercentage: 1421,
                },
              },
            },
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 4,
            },
            prizeMoney: 8000,
            finalOdds: 3.54,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 354,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 158,
              maxOdds: 158,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2346,
              potentialPayout: {
                value: 22500,
              },
            },
          },
          videos: [
            {
              mediaId: "1904739909193",
              timestamp: "2024-09-25T19:32:24",
            },
            {
              mediaId: "1904740421261",
              timestamp: "2024-09-25T19:40:46",
            },
            {
              mediaId: "1904740933038",
              timestamp: "2024-09-25T19:26:03",
            },
          ],
        },
        {
          id: "2024-09-25_5_7_11",
          number: 11,
          postPosition: 11,
          distance: 2140,
          horse: {
            id: 772023,
            name: "Xanthis Himalaya",
            age: 5,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 2,
              },
            },
            trainer: {
              id: 451710,
              firstName: "Fredrik",
              lastName: "Wallin",
              shortName: "Wal Fr",
              location: "Huddungeby",
              birth: 1980,
              homeTrack: {
                id: 16,
                name: "Gävle",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit lodr.fä och axlp,orange häng; s",
              statistics: {
                years: {
                  "2023": {
                    starts: 552,
                    earnings: 1488381900,
                    placement: {
                      "3": 72,
                      "2": 80,
                      "1": 81,
                    },
                    winPercentage: 1467,
                  },
                  "2024": {
                    starts: 421,
                    earnings: 926649100,
                    placement: {
                      "3": 46,
                      "2": 44,
                      "1": 52,
                    },
                    winPercentage: 1235,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 240700,
            color: "mörkbrun",
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            owner: {
              id: 823035,
              name: "Flenmo Egendom AB & Flenmo Skog o Häst",
            },
            breeder: {
              id: 244277,
              name: "Flenmo Egendom AB",
              location: "Mellösa",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 10,
                  earnings: 11200000,
                  placement: {
                    "3": 2,
                    "2": 4,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 0,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 11,
                  earnings: 10320000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 2,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 9,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 25,
                earnings: 24070000,
                placement: {
                  "3": 4,
                  "2": 6,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 800,
                placePercentage: 4800,
                earningsPerStart: 962800,
                startPoints: 894,
              },
              lastFiveStarts: {
                averageOdds: 3311,
              },
            },
            pedigree: {
              father: {
                id: 728595,
                name: "Up and Quick",
                nationality: "FR",
              },
              mother: {
                id: 668431,
                name: "Chichina Boko",
              },
              grandfather: {
                id: 444553,
                name: "Yankee Glide",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 722626,
            firstName: "Mats E",
            lastName: "Djuse",
            shortName: "Dju ME",
            location: "Hudiksvall",
            birth: 1998,
            homeTrack: {
              id: 17,
              name: "Hagmyren",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, gult axelparti och rött bröstb.; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 1717,
                  earnings: 3346819100,
                  placement: {
                    "3": 186,
                    "2": 219,
                    "1": 257,
                  },
                  winPercentage: 1496,
                },
                "2024": {
                  starts: 1378,
                  earnings: 2993065100,
                  placement: {
                    "3": 150,
                    "2": 176,
                    "1": 240,
                  },
                  winPercentage: 1741,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 0,
            },
            galloped: true,
            prizeMoney: 11000,
            finalOdds: 27.95,
            startNumber: 11,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2795,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 453,
              maxOdds: 453,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 203,
              potentialPayout: {
                value: 288100,
              },
            },
          },
          videos: [
            {
              mediaId: "1904745029419",
              timestamp: "2024-09-25T19:53:05",
            },
          ],
        },
        {
          id: "2024-09-25_5_7_12",
          number: 12,
          postPosition: 12,
          distance: 2140,
          horse: {
            id: 765298,
            name: "Västerbo Cookie",
            age: 6,
            sex: "mare",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 4,
              },
            },
            trainer: {
              id: 451710,
              firstName: "Fredrik",
              lastName: "Wallin",
              shortName: "Wal Fr",
              location: "Huddungeby",
              birth: 1980,
              homeTrack: {
                id: 16,
                name: "Gävle",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit lodr.fä och axlp,orange häng; s",
              statistics: {
                years: {
                  "2023": {
                    starts: 552,
                    earnings: 1488381900,
                    placement: {
                      "3": 72,
                      "2": 80,
                      "1": 81,
                    },
                    winPercentage: 1467,
                  },
                  "2024": {
                    starts: 421,
                    earnings: 926649100,
                    placement: {
                      "3": 46,
                      "2": 44,
                      "1": 52,
                    },
                    winPercentage: 1235,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 196500,
            color: "brun",
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            owner: {
              id: 90136,
              name: "Västerbo Stuteri (Demmers M)",
            },
            breeder: {
              id: 90136,
              name: "Västerbo Stuteri AB (Demmers M)",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 4,
                  earnings: 7500000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 9,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 11,
                earnings: 19650000,
                placement: {
                  "3": 1,
                  "2": 3,
                  "1": 2,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 4,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2024",
                  },
                ],
                winPercentage: 1818,
                placePercentage: 5454,
                earningsPerStart: 1786363,
                startPoints: 2000,
              },
              lastFiveStarts: {
                averageOdds: 448,
              },
            },
            pedigree: {
              father: {
                id: 721257,
                name: "Readly Express",
              },
              mother: {
                id: 660708,
                name: "Västerbo MixedLove",
              },
              grandfather: {
                id: 562580,
                name: "Love You",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 740606,
            firstName: "Magnus A",
            lastName: "Djuse",
            shortName: "Dju MA",
            location: "Upplands Väsby",
            birth: 2000,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Orange, VÄSTERBO i svart; orange",
            statistics: {
              years: {
                "2023": {
                  starts: 1501,
                  earnings: 4916246500,
                  placement: {
                    "3": 170,
                    "2": 213,
                    "1": 279,
                  },
                  winPercentage: 1858,
                },
                "2024": {
                  starts: 1184,
                  earnings: 3438762500,
                  placement: {
                    "3": 112,
                    "2": 154,
                    "1": 231,
                  },
                  winPercentage: 1951,
                },
              },
            },
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 2,
            },
            prizeMoney: 40000,
            finalOdds: 7.59,
            startNumber: 12,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 759,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 212,
              maxOdds: 212,
              odds: 212,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1210,
              potentialPayout: {
                value: 58800,
              },
            },
          },
          videos: [
            {
              mediaId: "1904745029407",
              timestamp: "2024-09-25T19:52:07",
            },
          ],
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
    {
      id: "2024-09-25_6_7",
      name: "Olle Goops Minne - Ungdomslopp",
      date: "2024-09-25",
      number: 7,
      distance: 2140,
      startMethod: "auto",
      startTime: "2024-09-25T20:52:07",
      scheduledStartTime: "2024-09-25T20:52:00",
      prize:
        "Pris: 60.000-30.000-17.000-13.000-10.000-6.000-4.500 kr (7 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 153.000 kr.",
      terms: [
        "3-åriga och äldre 200.001 - 550.000 kr, körda av B- eller K- licensinnehavare. Körsvenskrav kat. 1. Körsvenner födda 990101 till 060925 med högst 150 sulkylopp under 2023.",
        "Hederspris till segrande hästs ägare och körsven.",
        "2140 m. Autostart. 12 startande. ",
      ],
      sport: "trot",
      track: {
        id: 6,
        name: "Åby",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "en halv längd",
        scratchings: [11],
      },
      status: "results",
      mediaId: "1904760389370",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2024-09-25_6_7",
          status: "results",
          timestamp: "2024-09-25 20:57:37",
          turnover: 55495100,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 8,
                odds: 834,
              },
            ],
          },
          betType: "vinnare",
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2024-09-25_6_7",
          status: "results",
          timestamp: "2024-09-25 20:57:37",
          turnover: 55495100,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 8,
                  odds: 224,
                },
              ],
              second: [
                {
                  number: 12,
                  odds: 249,
                },
              ],
              third: [
                {
                  number: 6,
                  odds: 134,
                },
              ],
            },
          },
          betType: "plats",
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2024-09-25_6_7",
          status: "results",
          timestamp: "2024-09-25 21:00:38",
          turnover: 55495100,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [8, 12],
                odds: 3791,
              },
            ],
          },
          betType: "tvilling",
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2024-09-25_6_7",
          status: "results",
          timestamp: "2024-09-25 21:00:38",
          turnover: 55495100,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [8, 12],
                odds: 7234,
              },
            ],
          },
          betType: "komb",
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2024-09-25_6_7",
          status: "results",
          timestamp: "2024-09-25 21:00:39",
          turnover: 55495100,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [8, 12, 6],
                odds: 28659,
              },
            ],
          },
          betType: "trio",
        },
        V86: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "5027",
            value: {
              amount: 137000,
            },
            winners: [8],
            reserveOrder: [6, 8, 3, 1, 4, 9, 12, 5, 7, 10, 2, 11],
          },
        },
      },
      starts: [
        {
          id: "2024-09-25_6_7_1",
          number: 1,
          postPosition: 1,
          distance: 2140,
          horse: {
            id: 775101,
            name: "Star Cash",
            age: 5,
            sex: "stallion",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 5,
              },
            },
            trainer: {
              id: 171504,
              firstName: "Adrian",
              lastName: "Kolgjini",
              shortName: "Kol Ad",
              location: "Veberöd",
              birth: 1993,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vinrött/vitt axelsk, ärmb; sv",
              statistics: {
                years: {
                  "2023": {
                    starts: 515,
                    earnings: 1485227700,
                    placement: {
                      "3": 54,
                      "2": 64,
                      "1": 74,
                    },
                    winPercentage: 1436,
                  },
                  "2024": {
                    starts: 433,
                    earnings: 999214100,
                    placement: {
                      "3": 37,
                      "2": 41,
                      "1": 65,
                    },
                    winPercentage: 1501,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 546896,
            color: "mörkbrun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 799793,
              name: "Walter-Mommert Karin",
              location: "Tyskland",
            },
            breeder: {
              id: 543381,
              name: "Ecurie des Charmes",
              location: "Frankrike",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 12,
                  earnings: 34189600,
                  placement: {
                    "3": 2,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 2,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 8,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 5,
                  earnings: 8400000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 29,
                earnings: 54689600,
                placement: {
                  "3": 4,
                  "2": 5,
                  "1": 2,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 7,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 5,
                    },
                    place: 4,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 4,
                    year: "2023",
                  },
                ],
                winPercentage: 689,
                placePercentage: 3793,
                earningsPerStart: 1885848,
                startPoints: 1240,
              },
              lastFiveStarts: {
                averageOdds: 1308,
              },
            },
            pedigree: {
              father: {
                id: 667295,
                name: "Ready Cash",
                nationality: "FR",
              },
              mother: {
                id: 762614,
                name: "Etoile F.R.",
                nationality: "FR",
              },
              grandfather: {
                id: 716589,
                name: "Timoko",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 617633,
            firstName: "Alex",
            lastName: "Persson",
            shortName: "Per Al",
            location: "Halmstad",
            birth: 2004,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Blå, guld vinkel och stjärnor ärm; blå",
            statistics: {
              years: {
                "2023": {
                  starts: 84,
                  earnings: 54790000,
                  placement: {
                    "3": 3,
                    "2": 9,
                    "1": 5,
                  },
                  winPercentage: 595,
                },
                "2024": {
                  starts: 40,
                  earnings: 34010000,
                  placement: {
                    "3": 6,
                    "2": 3,
                    "1": 2,
                  },
                  winPercentage: 500,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 2,
            },
            prizeMoney: 2500,
            finalOdds: 5.23,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 523,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 209,
              maxOdds: 209,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1158,
              potentialPayout: {
                value: 108600,
              },
            },
          },
          videos: [
            {
              mediaId: "1904741445020",
              timestamp: "2024-09-25T19:32:58",
            },
          ],
        },
        {
          id: "2024-09-25_6_7_2",
          number: 2,
          postPosition: 2,
          distance: 2140,
          horse: {
            id: 760175,
            name: "Majors Amore",
            age: 7,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 0,
              },
            },
            trainer: {
              id: 5597,
              firstName: "Tord",
              lastName: "Gustafsson",
              shortName: "Gus To",
              location: "Landvetter",
              birth: 1939,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "B-tränare: träna, köra för bolag",
              silks: "Grön, två orange vinklar; gul",
              statistics: {
                years: {
                  "2023": {
                    starts: 42,
                    earnings: 24290000,
                    placement: {
                      "3": 3,
                      "2": 4,
                      "1": 2,
                    },
                    winPercentage: 476,
                  },
                  "2024": {
                    starts: 35,
                    earnings: 13985000,
                    placement: {
                      "3": 3,
                      "2": 3,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 486500,
            color: "brun",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 23072,
              name: "Gustafsson Tord & Ulla",
            },
            breeder: {
              id: 202473,
              name: "Gustafsson Tord",
              location: "Landvetter",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 25,
                  earnings: 15910000,
                  placement: {
                    "3": 2,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 3,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 18,
                  earnings: 5530000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 5,
                    },
                  ],
                },
              },
              life: {
                starts: 91,
                earnings: 48650000,
                placement: {
                  "3": 8,
                  "2": 11,
                  "1": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 5,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2024",
                  },
                ],
                winPercentage: 109,
                placePercentage: 2197,
                earningsPerStart: 534615,
                startPoints: 311,
              },
              lastFiveStarts: {
                averageOdds: 9762,
              },
            },
            pedigree: {
              father: {
                id: 630717,
                name: "One too Many",
              },
              mother: {
                id: 586617,
                name: "Keep Out",
              },
              grandfather: {
                id: 563801,
                name: "Power to Charm",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 748310,
            firstName: "Mikaela",
            lastName: "Rydberg",
            shortName: "Ryd Mi",
            location: "Axvall",
            birth: 2000,
            homeTrack: {
              id: 8,
              name: "Axevalla",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Grå, vinrött axelparti och hängslen; vröd",
            statistics: {
              years: {
                "2023": {
                  starts: 35,
                  earnings: 9920000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
                "2024": {
                  starts: 19,
                  earnings: 8050000,
                  placement: {
                    "3": 2,
                    "2": 3,
                    "1": 1,
                  },
                  winPercentage: 526,
                },
              },
            },
          },
          originalDriver: {
            id: 556048,
            firstName: "Alice",
            lastName: "Molin",
            shortName: "Mol Al",
            location: "Vretstorp",
            birth: 1999,
            homeTrack: {
              id: 32,
              name: "Örebro",
            },
            license: "B-tränare: träna, köra, rida",
            silks: "Svart, lila vinkel och silver stjärnor; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 127,
                  earnings: 48422900,
                  placement: {
                    "3": 8,
                    "2": 5,
                    "1": 6,
                  },
                  winPercentage: 472,
                },
                "2024": {
                  starts: 95,
                  earnings: 43210000,
                  placement: {
                    "3": 8,
                    "2": 4,
                    "1": 8,
                  },
                  winPercentage: 842,
                },
              },
            },
          },
          result: {
            finishOrder: 41,
            kmTime: {
              code: "kubu",
            },
            galloped: true,
            disqualified: true,
            prizeMoney: 2500,
            finalOdds: 94.14,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 9414,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1403,
              maxOdds: 1403,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 24,
              potentialPayout: {
                value: 8294300,
              },
            },
          },
          videos: [
            {
              mediaId: "1904744005428",
              timestamp: "2024-09-25T19:58:33",
            },
            {
              mediaId: "1904748613120",
              timestamp: "2024-09-25T20:09:21",
            },
          ],
        },
        {
          id: "2024-09-25_6_7_3",
          number: 3,
          postPosition: 3,
          distance: 2140,
          horse: {
            id: 773626,
            name: "Con Padre",
            age: 5,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 3,
              },
            },
            trainer: {
              id: 625180,
              firstName: "Hanna",
              lastName: "Lähdekorpi",
              shortName: "Läh Ha",
              location: "Holm",
              birth: 1989,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "B-tränare: träna, köra",
              silks: "Mblå, ljblå bröstb, ljblå ärm; ljblå",
              statistics: {
                years: {
                  "2023": {
                    starts: 161,
                    earnings: 261130000,
                    placement: {
                      "3": 17,
                      "2": 25,
                      "1": 34,
                    },
                    winPercentage: 2111,
                  },
                  "2024": {
                    starts: 124,
                    earnings: 179395000,
                    placement: {
                      "3": 19,
                      "2": 18,
                      "1": 14,
                    },
                    winPercentage: 1129,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: true,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 516300,
            color: "fux",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 724239,
              name: "Holm Hästgården AB",
              location: "Holm",
            },
            breeder: {
              id: 792724,
              name: "Törnqvist Maria & Holm Hästgården AB",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 11,
                  earnings: 19560000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 1,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 13,
                  earnings: 22520000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 3,
                      },
                      place: 6,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 6,
                    },
                  ],
                },
              },
              life: {
                starts: 32,
                earnings: 51630000,
                placement: {
                  "3": 3,
                  "2": 5,
                  "1": 8,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 3,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 4,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 20,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2022",
                  },
                ],
                winPercentage: 2500,
                placePercentage: 5000,
                earningsPerStart: 1613437,
                startPoints: 599,
              },
              lastFiveStarts: {
                averageOdds: 1469,
              },
            },
            pedigree: {
              father: {
                id: 636691,
                name: "Raja Mirchi",
              },
              mother: {
                id: 709855,
                name: "Storm Cloud",
              },
              grandfather: {
                id: 539314,
                name: "Jocose",
              },
            },
          },
          driver: {
            id: 749949,
            firstName: "Wilma",
            lastName: "Karlsson",
            shortName: "Kar Wi",
            location: "Halmstad",
            birth: 2002,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Blå, vit stjärna och ärmbindlar; blå",
            statistics: {
              years: {
                "2023": {
                  starts: 148,
                  earnings: 155605000,
                  placement: {
                    "3": 12,
                    "2": 16,
                    "1": 18,
                  },
                  winPercentage: 1216,
                },
                "2024": {
                  starts: 114,
                  earnings: 87170000,
                  placement: {
                    "3": 12,
                    "2": 4,
                    "1": 10,
                  },
                  winPercentage: 877,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 6,
            },
            prizeMoney: 13000,
            finalOdds: 8.21,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 821,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 202,
              maxOdds: 202,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1234,
              potentialPayout: {
                value: 142900,
              },
            },
          },
          videos: [
            {
              mediaId: "1904744005418",
              timestamp: "2024-09-25T19:57:18",
            },
          ],
        },
        {
          id: "2024-09-25_6_7_4",
          number: 4,
          postPosition: 4,
          distance: 2140,
          horse: {
            id: 773638,
            name: "Jascal",
            age: 5,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 3,
              },
            },
            trainer: {
              id: 161607,
              firstName: "Björn",
              lastName: "Goop",
              shortName: "Goo Bj",
              location: "Karlstad",
              birth: 1976,
              homeTrack: {
                id: 15,
                name: "Färjestad",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Mblå, guldf.midjeband, sömmar; guld",
              statistics: {
                years: {
                  "2023": {
                    starts: 1115,
                    earnings: 2449819200,
                    placement: {
                      "3": 116,
                      "2": 126,
                      "1": 159,
                    },
                    winPercentage: 1426,
                  },
                  "2024": {
                    starts: 647,
                    earnings: 1266350300,
                    placement: {
                      "3": 80,
                      "2": 89,
                      "1": 94,
                    },
                    winPercentage: 1452,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 428900,
            color: "brun",
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            owner: {
              id: 708061,
              name: "Stall Courant AB",
              location: "Heby",
            },
            breeder: {
              id: 686741,
              name: "Am Bloodstock AB",
              location: "Stockholm",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 10,
                  earnings: 38540000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 6,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 1,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 1,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 6,
                  earnings: 3450000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 4,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 19,
                earnings: 42890000,
                placement: {
                  "3": 2,
                  "2": 1,
                  "1": 6,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 3157,
                placePercentage: 4736,
                earningsPerStart: 2257368,
                startPoints: 480,
              },
              lastFiveStarts: {
                averageOdds: 1381,
              },
            },
            pedigree: {
              father: {
                id: 741711,
                name: "Trixton",
                nationality: "US",
              },
              mother: {
                id: 662898,
                name: "No Better Kronos",
                nationality: "IT",
              },
              grandfather: {
                id: 463269,
                name: "Varenne",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 736229,
            firstName: "Ronja",
            lastName: "Wahlund",
            shortName: "Wah Ro",
            location: "Kil",
            birth: 2001,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Röd, gul hästsko; röd",
            statistics: {
              years: {
                "2023": {
                  starts: 20,
                  earnings: 5740000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
                "2024": {
                  starts: 9,
                  earnings: 1700000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 2,
            },
            prizeMoney: 2500,
            finalOdds: 14.27,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1427,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 406,
              maxOdds: 406,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 458,
              potentialPayout: {
                value: 247000,
              },
            },
          },
          videos: [
            {
              mediaId: "1904733765214",
              timestamp: "2024-09-25T19:06:40",
            },
            {
              mediaId: "1904736837391",
              timestamp: "2024-09-25T19:23:45",
            },
            {
              mediaId: "1904737349214",
              timestamp: "2024-09-25T19:31:36",
            },
            {
              mediaId: "1904740421178",
              timestamp: "2024-09-25T19:37:50",
            },
            {
              mediaId: "1904742469232",
              timestamp: "2024-09-25T19:57:04",
            },
            {
              mediaId: "1904742981252",
              timestamp: "2024-09-25T19:46:39",
            },
          ],
        },
        {
          id: "2024-09-25_6_7_5",
          number: 5,
          postPosition: 5,
          distance: 2140,
          horse: {
            id: 763745,
            name: "Kentucky Derby",
            age: 6,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 8,
              },
            },
            trainer: {
              id: 56965,
              firstName: "Thomas",
              lastName: "Uhrberg",
              shortName: "Uhr Th",
              location: "Munka-Ljungby",
              birth: 1961,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare: träna, köra",
              silks: "Grön,vitt axelparti,vinkel och ärmr;silver",
              statistics: {
                years: {
                  "2023": {
                    starts: 221,
                    earnings: 388823600,
                    placement: {
                      "3": 31,
                      "2": 30,
                      "1": 34,
                    },
                    winPercentage: 1538,
                  },
                  "2024": {
                    starts: 162,
                    earnings: 263098500,
                    placement: {
                      "3": 19,
                      "2": 13,
                      "1": 16,
                    },
                    winPercentage: 987,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 540400,
            color: "ljusbrun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 738271,
              name: "Run For The Roses HB",
              location: "Vimmerby",
            },
            breeder: {
              id: 183203,
              name: "Thell Tomas & Sandberg Ulla-Carin",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 12,
                  earnings: 23200000,
                  placement: {
                    "3": 0,
                    "2": 3,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 0,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 4,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 5,
                  earnings: 3250000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 8,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 39,
                earnings: 54040000,
                placement: {
                  "3": 5,
                  "2": 4,
                  "1": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 1282,
                placePercentage: 3589,
                earningsPerStart: 1385641,
                startPoints: 525,
              },
              lastFiveStarts: {
                averageOdds: 3162,
              },
            },
            pedigree: {
              father: {
                id: 748141,
                name: "Charly du Noyer",
                nationality: "FR",
              },
              mother: {
                id: 633968,
                name: "Derby Lady",
              },
              grandfather: {
                id: 421895,
                name: "Gigant Neo",
              },
            },
          },
          driver: {
            id: 563406,
            firstName: "Saga",
            lastName: "Laursen",
            shortName: "Lau Sa",
            location: "Varnhem",
            birth: 2001,
            homeTrack: {
              id: 8,
              name: "Axevalla",
            },
            license: "Körlicens kategori 1: köra, rida",
            silks: "Ljuslila, guld vinklar, axelp; lj.lila",
            statistics: {
              years: {
                "2023": {
                  starts: 140,
                  earnings: 108353800,
                  placement: {
                    "3": 13,
                    "2": 12,
                    "1": 13,
                  },
                  winPercentage: 928,
                },
                "2024": {
                  starts: 217,
                  earnings: 171210700,
                  placement: {
                    "3": 18,
                    "2": 17,
                    "1": 20,
                  },
                  winPercentage: 921,
                },
              },
            },
          },
          result: {
            finishOrder: 40,
            kmTime: {
              code: "kubu",
            },
            galloped: true,
            disqualified: true,
            prizeMoney: 2500,
            finalOdds: 54.24,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 5424,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 777,
              maxOdds: 777,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 76,
              potentialPayout: {
                value: 1692500,
              },
            },
          },
        },
        {
          id: "2024-09-25_6_7_6",
          number: 6,
          postPosition: 6,
          distance: 2140,
          horse: {
            id: 770584,
            name: "Kyrie Eleison",
            age: 5,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 1,
              },
            },
            trainer: {
              id: 70388,
              firstName: "Flemming",
              lastName: "Jensen",
              shortName: "Jen Fl",
              location: "Danmark",
              birth: 1961,
              license: "A-tränare (utland): köra, rida",
              silks: "Vit, blå/röda sömmar; vit",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 445337,
            color: "brun",
            owner: {
              id: 803739,
              name: "Global Glide AB & Espegren Jonny",
            },
            breeder: {
              id: 784891,
              name: "Lindgren Marcus & Yüksel Süleyman",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 9,
                  earnings: 16140000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 8,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 5,
                  earnings: 7945800,
                  placement: {
                    "3": 0,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 3,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 25,
                earnings: 44533700,
                placement: {
                  "3": 1,
                  "2": 8,
                  "1": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 1,
                    },
                    place: 6,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 2000,
                placePercentage: 5600,
                earningsPerStart: 1781348,
                startPoints: 1843,
              },
              lastFiveStarts: {
                averageOdds: 437,
              },
            },
            pedigree: {
              father: {
                id: 721257,
                name: "Readly Express",
              },
              mother: {
                id: 672188,
                name: "Vitamin M.",
              },
              grandfather: {
                id: 195523,
                name: "Egon Lavec",
              },
            },
          },
          driver: {
            id: 766201,
            firstName: "Mads",
            lastName: "Henriksen",
            shortName: "Hen Ma",
            location: "Danmark",
            birth: 2000,
            license: "B-tränare: (utland): träna, köra",
            silks: "Blå, vita ränder och blå axelparti; vit",
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 3,
            },
            prizeMoney: 17000,
            finalOdds: 2.25,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 225,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 134,
              maxOdds: 134,
              odds: 134,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 4951,
              potentialPayout: {
                value: 54600,
              },
            },
          },
          videos: [
            {
              mediaId: "1904744005486",
              timestamp: "2024-09-25T20:00:36",
            },
          ],
        },
        {
          id: "2024-09-25_6_7_7",
          number: 7,
          postPosition: 7,
          distance: 2140,
          horse: {
            id: 765116,
            name: "Breidabliks Bombay",
            age: 6,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 8,
              },
            },
            trainer: {
              id: 587066,
              firstName: "Markus",
              lastName: "Waldmüller",
              shortName: "Wal Ma",
              location: "Höör",
              birth: 1978,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare: träna, köra",
              silks: "Mbl, mbl axlp,gul häng,vi/gu armb; mbl",
              statistics: {
                years: {
                  "2023": {
                    starts: 0,
                    earnings: 0,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 67,
                    earnings: 62083100,
                    placement: {
                      "3": 8,
                      "2": 13,
                      "1": 5,
                    },
                    winPercentage: 746,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 512000,
            color: "brun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 675844,
              name: "Breidablik häst AB",
              location: "Blentarp",
            },
            breeder: {
              id: 675844,
              name: "Breidablik häst AB",
              location: "Blentarp",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 13,
                  earnings: 37300000,
                  placement: {
                    "3": 4,
                    "2": 2,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 8,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 3,
                  earnings: 450000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 9,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 24,
                earnings: 51200000,
                placement: {
                  "3": 6,
                  "2": 4,
                  "1": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 7,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 1,
                    year: "2021",
                  },
                ],
                winPercentage: 1250,
                placePercentage: 5416,
                earningsPerStart: 2133333,
                startPoints: 1460,
              },
              lastFiveStarts: {
                averageOdds: 1219,
              },
            },
            pedigree: {
              father: {
                id: 617124,
                name: "Orlando Vici",
                nationality: "FR",
              },
              mother: {
                id: 661375,
                name: "Don't Cry",
              },
              grandfather: {
                id: 479404,
                name: "Pearsall Hanover",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 760951,
            firstName: "Axel",
            lastName: "Ritzman",
            shortName: "Rit Ax",
            location: "Halmstad",
            birth: 2003,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, röda sidor och svart triangel; sva",
            statistics: {
              years: {
                "2023": {
                  starts: 6,
                  earnings: 2210000,
                  placement: {
                    "3": 0,
                    "2": 3,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
                "2024": {
                  starts: 20,
                  earnings: 17900000,
                  placement: {
                    "3": 3,
                    "2": 3,
                    "1": 3,
                  },
                  winPercentage: 1500,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 6,
            },
            prizeMoney: 10000,
            finalOdds: 78.42,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 7842,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1300,
              maxOdds: 1300,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 66,
              potentialPayout: {
                value: 2804900,
              },
            },
          },
          videos: [
            {
              mediaId: "1904740421259",
              timestamp: "2024-09-25T19:40:31",
            },
            {
              mediaId: "1904741445009",
              timestamp: "2024-09-25T19:32:41",
            },
          ],
        },
        {
          id: "2024-09-25_6_7_8",
          number: 8,
          postPosition: 8,
          distance: 2140,
          horse: {
            id: 767445,
            name: "Klondyke River",
            age: 6,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 8,
              },
            },
            trainer: {
              id: 549496,
              firstName: "Johan",
              lastName: "Untersteiner",
              shortName: "Unt Jo",
              location: "Holm",
              birth: 1984,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit/röda axelklaffar; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 1224,
                    earnings: 3381797800,
                    placement: {
                      "3": 133,
                      "2": 183,
                      "1": 249,
                    },
                    winPercentage: 2034,
                  },
                  "2024": {
                    starts: 982,
                    earnings: 2186035700,
                    placement: {
                      "3": 121,
                      "2": 160,
                      "1": 172,
                    },
                    winPercentage: 1751,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: true,
              },
              back: {
                hasShoe: true,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 424288,
            color: "mörkbrun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 229595,
              name: "Stens Trot AB",
              location: "Nacka Strand",
            },
            breeder: {
              id: 655305,
              name: "Carlsson Peter & Lars-H",
              location: "Berggren A",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 14,
                  earnings: 23278800,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 8,
                      },
                      place: 6,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 8,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 8,
                  earnings: 11150000,
                  placement: {
                    "3": 0,
                    "2": 3,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aL",
                      startMethod: "auto",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 2,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 29,
                earnings: 42428800,
                placement: {
                  "3": 2,
                  "2": 4,
                  "1": 9,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 21,
                      tenths: 0,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 8,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 7,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2023",
                  },
                ],
                winPercentage: 3103,
                placePercentage: 5172,
                earningsPerStart: 1463062,
                startPoints: 1765,
              },
              lastFiveStarts: {
                averageOdds: 762,
              },
            },
            pedigree: {
              father: {
                id: 667295,
                name: "Ready Cash",
                nationality: "FR",
              },
              mother: {
                id: 558658,
                name: "First Out",
              },
              grandfather: {
                id: 421094,
                name: "Lemon Dra",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 584132,
            firstName: "Jonas M",
            lastName: "Oscarsson",
            shortName: "Osc JM",
            location: "Halmstad",
            birth: 2000,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Grön,svart stjärna i vit rundel; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 98,
                  earnings: 58475000,
                  placement: {
                    "3": 10,
                    "2": 9,
                    "1": 7,
                  },
                  winPercentage: 714,
                },
                "2024": {
                  starts: 88,
                  earnings: 49450000,
                  placement: {
                    "3": 4,
                    "2": 7,
                    "1": 9,
                  },
                  winPercentage: 1022,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 0,
            },
            prizeMoney: 60000,
            finalOdds: 8.34,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 834,
              finalOdds: 834,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 224,
              maxOdds: 224,
              odds: 224,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1308,
              potentialPayout: {
                value: 137000,
              },
            },
          },
          videos: [
            {
              mediaId: "1904740421258",
              timestamp: "2024-09-25T19:40:26",
            },
            {
              mediaId: "1904741445012",
              timestamp: "2024-09-25T19:32:47",
            },
            {
              mediaId: "1904745029393",
              timestamp: "2024-09-25T19:51:41",
            },
          ],
        },
        {
          id: "2024-09-25_6_7_9",
          number: 9,
          postPosition: 9,
          distance: 2140,
          horse: {
            id: 803983,
            name: "Bravestile",
            nationality: "NO",
            age: 5,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 3,
              },
            },
            trainer: {
              id: 138667,
              firstName: "Lars Magne",
              lastName: "Sövik",
              shortName: "Söv LM",
              location: "Norge",
              birth: 1961,
              license: "A-tränare (utland): träna, köra",
              silks: "Blå/gul, delad; vit",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 425016,
            color: "brun",
            owner: {
              id: 226009,
              name: "Ecurie Brave 2.0",
              location: "Norge",
            },
            breeder: {
              id: 225999,
              name: "Norsk Uppfödare",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 20,
                  earnings: 18655700,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 9,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 14,
                  earnings: 12877800,
                  placement: {
                    "3": 3,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 4,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 48,
                earnings: 42501600,
                placement: {
                  "3": 10,
                  "2": 5,
                  "1": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 1041,
                placePercentage: 4166,
                earningsPerStart: 885450,
                startPoints: 1502,
              },
              lastFiveStarts: {
                averageOdds: 3808,
              },
            },
            pedigree: {
              father: {
                id: 736196,
                name: "Brillantissime",
                nationality: "FR",
              },
              mother: {
                id: 753016,
                name: "Sweetstile",
                nationality: "NO",
              },
              grandfather: {
                id: 494729,
                name: "Conway Hall",
                nationality: "CA",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 822256,
            firstName: "Marcus T",
            lastName: "Aadland",
            shortName: "Aad MT",
            location: "Norge",
            birth: 2004,
            license: "B-tränare: (utland): träna, köra",
            silks: "Blå, vit lodrätt fält och svart hängs; blå",
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 8,
            },
            prizeMoney: 4500,
            finalOdds: 15.97,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1597,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 357,
              maxOdds: 357,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 353,
              potentialPayout: {
                value: 448500,
              },
            },
          },
          videos: [
            {
              mediaId: "1904744005424",
              timestamp: "2024-09-25T19:58:21",
            },
            {
              mediaId: "1904746053262",
              timestamp: "2024-09-25T20:10:28",
            },
          ],
        },
        {
          id: "2024-09-25_6_7_10",
          number: 10,
          postPosition: 10,
          distance: 2140,
          horse: {
            id: 791790,
            name: "N.Y.King of theKop",
            nationality: "NO",
            age: 6,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 0,
              },
            },
            trainer: {
              id: 639705,
              firstName: "Kjetil",
              lastName: "Helgestad",
              shortName: "Hel Kj",
              location: "Norge",
              birth: 1968,
              license: "A-tränare (utland): träna, köra",
              silks: "Ljusblå/svart, vitt axelskärp;",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 497420,
            color: "mörkbrun",
            owner: {
              id: 226009,
              name: "Stall King of the Kop",
              location: "Norge",
            },
            breeder: {
              id: 225999,
              name: "Norsk Uppfödare",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 24,
                  earnings: 14101900,
                  placement: {
                    "3": 6,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 19,
                  earnings: 15574000,
                  placement: {
                    "3": 6,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 0,
                      },
                      place: 0,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 1,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 70,
                earnings: 49742000,
                placement: {
                  "3": 16,
                  "2": 10,
                  "1": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 0,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 4,
                    year: "2023",
                  },
                ],
                winPercentage: 857,
                placePercentage: 4571,
                earningsPerStart: 710600,
                startPoints: 1294,
              },
              lastFiveStarts: {
                averageOdds: 1303,
              },
            },
            pedigree: {
              father: {
                id: 444412,
                name: "Muscles Yankee",
                nationality: "US",
              },
              mother: {
                id: 740355,
                name: "Chezando",
                nationality: "US",
              },
              grandfather: {
                id: 568973,
                name: "Andover Hall",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 811754,
            firstName: "Sebastian",
            lastName: "Rishovd",
            shortName: "Ris Se",
            location: "Norge",
            birth: 2004,
            license: "B-tränare: (utland): träna, köra",
            silks: "Blå, grått bröstb,vitt axelp. och ärm; vit",
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 8,
            },
            galloped: true,
            prizeMoney: 6000,
            finalOdds: 39.17,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3917,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 583,
              maxOdds: 583,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 64,
              potentialPayout: {
                value: 1942200,
              },
            },
          },
          videos: [
            {
              mediaId: "1904746053248",
              timestamp: "2024-09-25T20:10:18",
            },
            {
              mediaId: "1904747589064",
              timestamp: "2024-09-25T19:58:52",
            },
            {
              mediaId: "1904750661009",
              timestamp: "2024-09-25T20:18:55",
            },
          ],
        },
        {
          id: "2024-09-25_6_7_11",
          number: 11,
          scratched: true,
          postPosition: 11,
          distance: 2140,
          horse: {
            id: 775374,
            name: "Monte Carlo",
            age: 5,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 1,
              },
            },
            trainer: {
              id: 503179,
              firstName: "Kenneth",
              lastName: "Bjärgestad",
              shortName: "Bjä Ke",
              location: "Västerhaninge",
              birth: 1967,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "B-tränare: träna, köra",
              silks: "Vinröd,svart vinkel och ärmar; vröd",
              statistics: {
                years: {
                  "2023": {
                    starts: 19,
                    earnings: 10380000,
                    placement: {
                      "3": 3,
                      "2": 1,
                      "1": 2,
                    },
                    winPercentage: 1052,
                  },
                  "2024": {
                    starts: 20,
                    earnings: 10919600,
                    placement: {
                      "3": 1,
                      "2": 3,
                      "1": 2,
                    },
                    winPercentage: 1000,
                  },
                },
              },
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 412395,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 780287,
              name: "Farsta Rörservice AB",
              location: "Tungelsta",
            },
            breeder: {
              id: 747157,
              name: "Djali Sweden AB",
              location: "Växjö",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 19,
                  earnings: 19570000,
                  placement: {
                    "3": 3,
                    "2": 5,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 1,
                      },
                      place: 2,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 3,
                    },
                  ],
                },
                "2024": {
                  starts: 10,
                  earnings: 6469500,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 5,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 43,
                earnings: 41239500,
                placement: {
                  "3": 7,
                  "2": 9,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 9,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 8,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 5,
                    year: "2023",
                  },
                ],
                winPercentage: 465,
                placePercentage: 4186,
                earningsPerStart: 959058,
                startPoints: 1234,
              },
              lastFiveStarts: {
                averageOdds: 1228,
              },
            },
            pedigree: {
              father: {
                id: 693926,
                name: "Djali Boko",
              },
              mother: {
                id: 677585,
                name: "Credifice",
              },
              grandfather: {
                id: 501073,
                name: "Credit Winner",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 769935,
            firstName: "Sofia",
            lastName: "Bjärgestad",
            shortName: "Bjä So",
            location: "Halmstad",
            birth: 2001,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "B-tränare: träna, köra",
            silks: "Svart, vinröd vinkel och ärm,sv.revär; vin",
            statistics: {
              years: {
                "2023": {
                  starts: 38,
                  earnings: 32040000,
                  placement: {
                    "3": 6,
                    "2": 7,
                    "1": 6,
                  },
                  winPercentage: 1578,
                },
                "2024": {
                  starts: 31,
                  earnings: 18539600,
                  placement: {
                    "3": 6,
                    "2": 3,
                    "1": 2,
                  },
                  winPercentage: 645,
                },
              },
            },
          },
          result: {
            finishOrder: 61,
            finalOdds: 0.0,
            startNumber: 11,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 6,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
        },
        {
          id: "2024-09-25_6_7_12",
          number: 12,
          postPosition: 11,
          distance: 2140,
          horse: {
            id: 771167,
            name: "Bases Loaded",
            age: 5,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 8,
              },
            },
            trainer: {
              id: 732845,
              firstName: "Tomasz",
              lastName: "Wisniewski",
              shortName: "Wis To",
              location: "Kalmar",
              birth: 1977,
              homeTrack: {
                id: 19,
                name: "Kalmar",
              },
              license: "A-tränare: träna, köra",
              silks: "Röd, vitt axelparti m röda romber;vit",
              statistics: {
                years: {
                  "2023": {
                    starts: 105,
                    earnings: 75720000,
                    placement: {
                      "3": 16,
                      "2": 4,
                      "1": 8,
                    },
                    winPercentage: 761,
                  },
                  "2024": {
                    starts: 46,
                    earnings: 32920000,
                    placement: {
                      "3": 6,
                      "2": 3,
                      "1": 3,
                    },
                    winPercentage: 652,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 500400,
            color: "mörkbrun",
            homeTrack: {
              id: 19,
              name: "Kalmar",
            },
            owner: {
              id: 824651,
              name: "m4m Consulting AB",
              location: " (Wisniewski T)",
            },
            breeder: {
              id: 681566,
              name: "Legl Helena",
              location: "Vintrosa",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 14,
                  earnings: 27800000,
                  placement: {
                    "3": 3,
                    "2": 0,
                    "1": 5,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 12,
                  earnings: 18640000,
                  placement: {
                    "3": 1,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 8,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 28,
                earnings: 50040000,
                placement: {
                  "3": 5,
                  "2": 3,
                  "1": 7,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 8,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 20,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2022",
                  },
                ],
                winPercentage: 2500,
                placePercentage: 5357,
                earningsPerStart: 1787142,
                startPoints: 935,
              },
              lastFiveStarts: {
                averageOdds: 3178,
              },
            },
            pedigree: {
              father: {
                id: 682008,
                name: "Oasis Bi",
                nationality: "IT",
              },
              mother: {
                id: 692274,
                name: "Sally Jovalley",
              },
              grandfather: {
                id: 579261,
                name: "Kadabra",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 755675,
            firstName: "Jonathan",
            lastName: "Bardun",
            shortName: "Bar Jo",
            location: "Lekeryd",
            birth: 1999,
            homeTrack: {
              id: 43,
              name: "Vaggeryd",
            },
            license: "B-tränare: träna, köra",
            silks: "Grå, gula sidor och svart ärm; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
                "2024": {
                  starts: 73,
                  earnings: 46310000,
                  placement: {
                    "3": 3,
                    "2": 4,
                    "1": 10,
                  },
                  winPercentage: 1369,
                },
              },
            },
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 1,
            },
            prizeMoney: 30000,
            finalOdds: 9.86,
            startNumber: 12,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 986,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 249,
              maxOdds: 249,
              odds: 249,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 301,
              potentialPayout: {
                value: 516900,
              },
            },
          },
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
    {
      id: "2024-09-25_5_8",
      name: "Customs B-tränarserie - Omgång 6",
      date: "2024-09-25",
      number: 8,
      distance: 2140,
      startMethod: "auto",
      startTime: "2024-09-25T21:03:39",
      scheduledStartTime: "2024-09-25T21:03:00",
      prize:
        "Pris: 60.000-30.000-17.000-13.000-10.000-(6.000)-(4.500) kr. Lägst 1.500 kr till alla tävlande. Prispengar max total: 145.000 kr.",
      terms: [
        "3-åriga och äldre 75.001 - 265.000 kr i B-träning. I oavbruten B-träning fr.o.m. 240820. Körsvenskrav kat. 2. Körsvenner födda 060925 eller tidigare.",
        "Presentkort till segrande hästs ägare.",
        "2140 m. Autostart. 12 startande.",
      ],
      sport: "trot",
      track: {
        id: 5,
        name: "Solvalla",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "1 längd",
      },
      status: "results",
      mediaId: "1904764485226",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2024-09-25_5_8",
          status: "results",
          timestamp: "2024-09-25 21:10:27",
          turnover: 58452200,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 7,
                odds: 569,
              },
            ],
          },
          betType: "vinnare",
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2024-09-25_5_8",
          status: "results",
          timestamp: "2024-09-25 21:10:27",
          turnover: 58452200,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 7,
                  odds: 223,
                },
              ],
              second: [
                {
                  number: 4,
                  odds: 209,
                },
              ],
              third: [
                {
                  number: 11,
                  odds: 279,
                },
              ],
            },
          },
          betType: "plats",
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2024-09-25_5_8",
          status: "results",
          timestamp: "2024-09-25 21:10:29",
          turnover: 58452200,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [4, 7],
                odds: 1916,
              },
            ],
          },
          betType: "tvilling",
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2024-09-25_5_8",
          status: "results",
          timestamp: "2024-09-25 21:10:29",
          turnover: 58452200,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [7, 4],
                odds: 3973,
              },
            ],
          },
          betType: "komb",
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2024-09-25_5_8",
          status: "results",
          timestamp: "2024-09-25 21:10:29",
          turnover: 58452200,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [7, 4, 11],
                odds: 30915,
              },
            ],
          },
          betType: "trio",
        },
        V86: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "1576",
            value: {
              amount: 436900,
            },
            winners: [7],
            reserveOrder: [2, 1, 10, 4, 11, 7, 9, 3, 8, 6, 5, 12],
          },
        },
      },
      starts: [
        {
          id: "2024-09-25_5_8_1",
          number: 1,
          postPosition: 1,
          distance: 2140,
          horse: {
            id: 781365,
            name: "Vixi Garbo",
            age: 4,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 6,
              },
            },
            trainer: {
              id: 3802,
              firstName: "Hans",
              lastName: "Svedin",
              shortName: "Sve Ha",
              location: "Ljusdal",
              birth: 1949,
              homeTrack: {
                id: 12,
                name: "Bollnäs",
              },
              license: "B-tränare: träna, köra",
              silks: "Svart,blå vinkel i gult fält; blå",
              statistics: {
                years: {
                  "2023": {
                    starts: 33,
                    earnings: 18480000,
                    placement: {
                      "3": 4,
                      "2": 1,
                      "1": 2,
                    },
                    winPercentage: 606,
                  },
                  "2024": {
                    starts: 14,
                    earnings: 14860000,
                    placement: {
                      "3": 0,
                      "2": 1,
                      "1": 3,
                    },
                    winPercentage: 2142,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 218600,
            color: "brun",
            homeTrack: {
              id: 12,
              name: "Bollnäs",
            },
            owner: {
              id: 831383,
              name: "Lukas Svedin AB",
              location: "Hudiksvall",
            },
            breeder: {
              id: 611216,
              name: "Stall Garbo AB",
              location: "Bergeforsen",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 7,
                  earnings: 8080000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 9,
                  earnings: 13780000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 7,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 16,
                earnings: 21860000,
                placement: {
                  "3": 2,
                  "2": 1,
                  "1": 5,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 7,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 3125,
                placePercentage: 5000,
                earningsPerStart: 1366250,
                startPoints: 1398,
              },
              lastFiveStarts: {
                averageOdds: 4119,
              },
            },
            pedigree: {
              father: {
                id: 767543,
                name: "Devious Man",
                nationality: "US",
              },
              mother: {
                id: 698956,
                name: "Alva Garbo",
              },
              grandfather: {
                id: 579261,
                name: "Kadabra",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 722626,
            firstName: "Mats E",
            lastName: "Djuse",
            shortName: "Dju ME",
            location: "Hudiksvall",
            birth: 1998,
            homeTrack: {
              id: 17,
              name: "Hagmyren",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, gult axelparti och rött bröstb.; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 1717,
                  earnings: 3346819100,
                  placement: {
                    "3": 186,
                    "2": 219,
                    "1": 257,
                  },
                  winPercentage: 1496,
                },
                "2024": {
                  starts: 1378,
                  earnings: 2993065100,
                  placement: {
                    "3": 150,
                    "2": 176,
                    "1": 240,
                  },
                  winPercentage: 1741,
                },
              },
            },
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 8,
            },
            galloped: true,
            prizeMoney: 6000,
            finalOdds: 5.21,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 521,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 187,
              maxOdds: 187,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1878,
              potentialPayout: {
                value: 341200,
              },
            },
          },
          videos: [
            {
              mediaId: "1904744517089",
              timestamp: "2024-09-25T19:45:59",
            },
            {
              mediaId: "1904745029496",
              timestamp: "2024-09-25T19:55:31",
            },
          ],
        },
        {
          id: "2024-09-25_5_8_2",
          number: 2,
          postPosition: 2,
          distance: 2140,
          horse: {
            id: 779411,
            name: "Berghsäker W.F.",
            age: 4,
            sex: "stallion",
            record: {
              code: "aL",
              startMethod: "auto",
              distance: "long",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 0,
              },
            },
            trainer: {
              id: 176222,
              firstName: "Johanna",
              lastName: "Nordenankar",
              shortName: "Nor Jo",
              location: "Visby",
              birth: 1976,
              homeTrack: {
                id: 28,
                name: "Visby",
              },
              license: "B-tränare: träna, köra",
              silks: "Blå, vita korslagda axelskärp; blå",
              statistics: {
                years: {
                  "2023": {
                    starts: 80,
                    earnings: 58610000,
                    placement: {
                      "3": 7,
                      "2": 8,
                      "1": 8,
                    },
                    winPercentage: 1000,
                  },
                  "2024": {
                    starts: 57,
                    earnings: 49900000,
                    placement: {
                      "3": 5,
                      "2": 2,
                      "1": 9,
                    },
                    winPercentage: 1578,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 219000,
            color: "brun",
            homeTrack: {
              id: 28,
              name: "Visby",
            },
            owner: {
              id: 836839,
              name: "Nordenankar Johanna & Hans Richard",
            },
            breeder: {
              id: 510888,
              name: "WF Förvaltning AB",
              location: "Boden",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 1,
                  earnings: 2500000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 2,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 11,
                  earnings: 19400000,
                  placement: {
                    "3": 2,
                    "2": 2,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aL",
                      startMethod: "auto",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 8,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 12,
                earnings: 21900000,
                placement: {
                  "3": 2,
                  "2": 2,
                  "1": 4,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 3333,
                placePercentage: 6666,
                earningsPerStart: 1825000,
                startPoints: 1785,
              },
              lastFiveStarts: {
                averageOdds: 1105,
              },
            },
            pedigree: {
              father: {
                id: 721257,
                name: "Readly Express",
              },
              mother: {
                id: 638164,
                name: "Kenlyns Dream W.F.",
              },
              grandfather: {
                id: 130525,
                name: "Pine Chip",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 161775,
            firstName: "Petter",
            lastName: "Lundberg",
            shortName: "Lun Pe",
            location: "Heby",
            birth: 1976,
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, guld vinkel och axelklaffar; sva",
            statistics: {
              years: {
                "2023": {
                  starts: 321,
                  earnings: 269720000,
                  placement: {
                    "3": 36,
                    "2": 27,
                    "1": 28,
                  },
                  winPercentage: 872,
                },
                "2024": {
                  starts: 221,
                  earnings: 179155000,
                  placement: {
                    "3": 26,
                    "2": 19,
                    "1": 15,
                  },
                  winPercentage: 678,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 11,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 8,
            },
            prizeMoney: 1500,
            finalOdds: 5.74,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 574,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 208,
              maxOdds: 208,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2053,
              potentialPayout: {
                value: 304000,
              },
            },
          },
          videos: [
            {
              mediaId: "1904748613166",
              timestamp: "2024-09-25T20:11:50",
            },
            {
              mediaId: "1904750149069",
              timestamp: "2024-09-25T20:24:54",
            },
          ],
        },
        {
          id: "2024-09-25_5_8_3",
          number: 3,
          postPosition: 3,
          distance: 2140,
          horse: {
            id: 767154,
            name: "Dedes Vici",
            age: 6,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 4,
              },
            },
            trainer: {
              id: 20008,
              firstName: "Sune L",
              lastName: "Nilsson",
              shortName: "Nil SL",
              location: "Enköping",
              birth: 1947,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "B-tränare: träna, köra",
              silks: "Röd/svart, längddelad; vit",
              statistics: {
                years: {
                  "2023": {
                    starts: 15,
                    earnings: 13840000,
                    placement: {
                      "3": 4,
                      "2": 2,
                      "1": 1,
                    },
                    winPercentage: 666,
                  },
                  "2024": {
                    starts: 19,
                    earnings: 7390000,
                    placement: {
                      "3": 3,
                      "2": 1,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 250700,
            color: "mörkbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 732218,
              name: "Nilsson Sune L",
            },
            breeder: {
              id: 732218,
              name: "Nilsson Sune L",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 14,
                  earnings: 13690000,
                  placement: {
                    "3": 4,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 9,
                      },
                      place: 4,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 2,
                      },
                      place: 3,
                    },
                  ],
                },
                "2024": {
                  starts: 12,
                  earnings: 5940000,
                  placement: {
                    "3": 3,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 7,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 41,
                earnings: 25070000,
                placement: {
                  "3": 8,
                  "2": 3,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 7,
                    },
                    place: 5,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2023",
                  },
                ],
                winPercentage: 487,
                placePercentage: 3170,
                earningsPerStart: 611463,
                startPoints: 764,
              },
              lastFiveStarts: {
                averageOdds: 3754,
              },
            },
            pedigree: {
              father: {
                id: 617124,
                name: "Orlando Vici",
                nationality: "FR",
              },
              mother: {
                id: 710029,
                name: "Dedes Mythical",
              },
              grandfather: {
                id: 655755,
                name: "Mythical Lindy",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 91416,
            firstName: "Per",
            lastName: "Lennartsson",
            shortName: "Len Pe",
            location: "Eskilstuna",
            birth: 1966,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, blå axlar, sidor och ärmb; sva",
            statistics: {
              years: {
                "2023": {
                  starts: 568,
                  earnings: 872704300,
                  placement: {
                    "3": 59,
                    "2": 57,
                    "1": 61,
                  },
                  winPercentage: 1073,
                },
                "2024": {
                  starts: 422,
                  earnings: 720165000,
                  placement: {
                    "3": 44,
                    "2": 41,
                    "1": 60,
                  },
                  winPercentage: 1421,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 5,
            },
            prizeMoney: 13000,
            finalOdds: 25.17,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2517,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 471,
              maxOdds: 471,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 251,
              potentialPayout: {
                value: 2153000,
              },
            },
          },
          videos: [
            {
              mediaId: "1904739397411",
              timestamp: "2024-09-25T19:32:29",
            },
            {
              mediaId: "1904740421240",
              timestamp: "2024-09-25T19:39:54",
            },
          ],
        },
        {
          id: "2024-09-25_5_8_4",
          number: 4,
          postPosition: 4,
          distance: 2140,
          horse: {
            id: 779766,
            name: "O.M.Keep on Runnin",
            age: 4,
            sex: "mare",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 6,
              },
            },
            trainer: {
              id: 162434,
              firstName: "Johannes",
              lastName: "Denneman",
              shortName: "Den Jo",
              location: "Örebro",
              birth: 1976,
              homeTrack: {
                id: 32,
                name: "Örebro",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 25,
                    earnings: 26380000,
                    placement: {
                      "3": 1,
                      "2": 6,
                      "1": 3,
                    },
                    winPercentage: 1200,
                  },
                  "2024": {
                    starts: 42,
                    earnings: 45100000,
                    placement: {
                      "3": 7,
                      "2": 4,
                      "1": 4,
                    },
                    winPercentage: 952,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 264000,
            color: "brun",
            homeTrack: {
              id: 32,
              name: "Örebro",
            },
            owner: {
              id: 766591,
              name: "Denneman Johannes",
              location: "Örebro",
            },
            breeder: {
              id: 655136,
              name: "Olsson Johan",
              location: "Uddevalla",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 12,
                  earnings: 13200000,
                  placement: {
                    "3": 1,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 7,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 3,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 9,
                  earnings: 13200000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 7,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 21,
                earnings: 26400000,
                placement: {
                  "3": 3,
                  "2": 3,
                  "1": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 19,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 7,
                    },
                    place: 4,
                    year: "2024",
                  },
                ],
                winPercentage: 1428,
                placePercentage: 4285,
                earningsPerStart: 1257142,
                startPoints: 1290,
              },
              lastFiveStarts: {
                averageOdds: 1485,
              },
            },
            pedigree: {
              father: {
                id: 643182,
                name: "Quite Easy U.S.",
                nationality: "US",
              },
              mother: {
                id: 614535,
                name: "Ella Will",
              },
              grandfather: {
                id: 161431,
                name: "Supergill",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 177032,
            firstName: "Claes",
            lastName: "Sjöström",
            shortName: "Sjö Cl",
            location: "Rimbo",
            birth: 1976,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, orange fält, axelkl. och ärmb.; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 744,
                  earnings: 1197590200,
                  placement: {
                    "3": 82,
                    "2": 82,
                    "1": 101,
                  },
                  winPercentage: 1357,
                },
                "2024": {
                  starts: 586,
                  earnings: 1022926000,
                  placement: {
                    "3": 55,
                    "2": 81,
                    "1": 77,
                  },
                  winPercentage: 1313,
                },
              },
            },
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 2,
            },
            prizeMoney: 30000,
            finalOdds: 5.87,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 587,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 209,
              maxOdds: 209,
              odds: 209,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1524,
              potentialPayout: {
                value: 349400,
              },
            },
          },
          videos: [
            {
              mediaId: "1904742981497",
              timestamp: "2024-09-25T20:03:55",
            },
            {
              mediaId: "1904747589454",
              timestamp: "2024-09-25T20:13:10",
            },
          ],
        },
        {
          id: "2024-09-25_5_8_5",
          number: 5,
          postPosition: 5,
          distance: 2140,
          horse: {
            id: 787712,
            name: "Hisco de Florange",
            nationality: "FR",
            age: 7,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 0,
              },
            },
            trainer: {
              id: 711803,
              firstName: "Satu",
              lastName: "Liitiäinen",
              shortName: "Lii Sa",
              location: "Sundsvall",
              birth: 1992,
              homeTrack: {
                id: 16,
                name: "Gävle",
              },
              license: "B-tränare: träna, köra, rida för bolag",
              silks: "Svart, guld revärer; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 16,
                    earnings: 10680000,
                    placement: {
                      "3": 4,
                      "2": 1,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 8,
                    earnings: 3716100,
                    placement: {
                      "3": 1,
                      "2": 0,
                      "1": 1,
                    },
                    winPercentage: 1250,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: true,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 257146,
            color: "brun",
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            owner: {
              id: 818492,
              name: "Parling Daniel",
            },
            breeder: {
              id: 814585,
              name: "Jolivet Vincent",
              location: "Frankrike",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 16,
                  earnings: 10680000,
                  placement: {
                    "3": 4,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aL",
                      startMethod: "auto",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 7,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 3,
                      },
                      place: 5,
                    },
                  ],
                },
                "2024": {
                  starts: 8,
                  earnings: 3716100,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 6,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 38,
                earnings: 25714600,
                placement: {
                  "3": 7,
                  "2": 3,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 5,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 1,
                    },
                    place: 4,
                    year: "2022",
                  },
                ],
                winPercentage: 526,
                placePercentage: 3157,
                earningsPerStart: 676700,
                startPoints: 691,
              },
              lastFiveStarts: {
                averageOdds: 1973,
              },
            },
            pedigree: {
              father: {
                id: 718881,
                name: "Un Amour d'Haufor",
                nationality: "FR",
              },
              mother: {
                id: 787711,
                name: "Tootsie de Guez",
                nationality: "FR",
              },
              grandfather: {
                id: 443893,
                name: "Dahir de Prelong",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 189679,
            firstName: "Daniel",
            lastName: "Wäjersten",
            shortName: "Wäj Da",
            location: "Kovland",
            birth: 1990,
            homeTrack: {
              id: 9,
              name: "Bergsåker",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, vitt axelparti och silver vinkel; blå",
            statistics: {
              years: {
                "2023": {
                  starts: 657,
                  earnings: 2096837100,
                  placement: {
                    "3": 80,
                    "2": 95,
                    "1": 132,
                  },
                  winPercentage: 2009,
                },
                "2024": {
                  starts: 533,
                  earnings: 2202382000,
                  placement: {
                    "3": 73,
                    "2": 72,
                    "1": 118,
                  },
                  winPercentage: 2213,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 7,
            },
            prizeMoney: 10000,
            finalOdds: 39.09,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3909,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 670,
              maxOdds: 670,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 118,
              potentialPayout: {
                value: 2796600,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_8_6",
          number: 6,
          postPosition: 6,
          distance: 2140,
          horse: {
            id: 765468,
            name: "Sagittarius",
            age: 6,
            sex: "stallion",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 1,
              },
            },
            trainer: {
              id: 714779,
              firstName: "Emelie",
              lastName: "Persson",
              shortName: "Per Em",
              location: "Sundborn",
              birth: 1996,
              homeTrack: {
                id: 23,
                name: "Romme",
              },
              license: "B-tränare: träna, köra",
              silks: "Svart, guld vinkel och ärmbindel; sva",
              statistics: {
                years: {
                  "2023": {
                    starts: 28,
                    earnings: 24160000,
                    placement: {
                      "3": 3,
                      "2": 3,
                      "1": 2,
                    },
                    winPercentage: 714,
                  },
                  "2024": {
                    starts: 7,
                    earnings: 2300000,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
              },
              back: {
                hasShoe: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 214900,
            color: "brun",
            homeTrack: {
              id: 23,
              name: "Romme",
            },
            owner: {
              id: 766075,
              name: "Persson Emelie & Axéll Åsa",
            },
            breeder: {
              id: 735607,
              name: "Persson Emelie",
              location: "Sundborn",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 13,
                  earnings: 13450000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 1,
                      },
                      place: 5,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 4,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 1,
                  earnings: 150000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
              },
              life: {
                starts: 26,
                earnings: 21490000,
                placement: {
                  "3": 2,
                  "2": 3,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 1,
                    },
                    place: 5,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 7,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 18,
                      tenths: 9,
                    },
                    place: 5,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2023",
                  },
                ],
                winPercentage: 769,
                placePercentage: 2692,
                earningsPerStart: 826538,
                startPoints: 1170,
              },
              lastFiveStarts: {
                averageOdds: 2916,
              },
            },
            pedigree: {
              father: {
                id: 553396,
                name: "S.J.'s Caviar",
                nationality: "US",
              },
              mother: {
                id: 702758,
                name: "Starscape",
              },
              grandfather: {
                id: 584617,
                name: "Going Kronos",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 557796,
            firstName: "Kim",
            lastName: "Eriksson",
            shortName: "Eri Ki",
            location: "Knivsta",
            birth: 1984,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Grå, blått axelp och hängsl, vit ärmb; blå",
            statistics: {
              years: {
                "2023": {
                  starts: 383,
                  earnings: 367100000,
                  placement: {
                    "3": 34,
                    "2": 42,
                    "1": 31,
                  },
                  winPercentage: 809,
                },
                "2024": {
                  starts: 146,
                  earnings: 151500000,
                  placement: {
                    "3": 9,
                    "2": 16,
                    "1": 17,
                  },
                  winPercentage: 1164,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 12,
            kmTime: {
              minutes: 1,
              seconds: 16,
              tenths: 3,
            },
            prizeMoney: 1500,
            finalOdds: 58.75,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 5875,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1074,
              maxOdds: 1074,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 149,
              potentialPayout: {
                value: 3190700,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_8_7",
          number: 7,
          postPosition: 7,
          distance: 2140,
          horse: {
            id: 774605,
            name: "Even You",
            age: 5,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 2,
              },
            },
            trainer: {
              id: 1283,
              firstName: "Per K",
              lastName: "Anderson",
              shortName: "And PK",
              location: "Flen",
              birth: 1951,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "B-tränare: träna, köra",
              silks: "Röd, vitt axelparti och sömmar; röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 12,
                    earnings: 12280000,
                    placement: {
                      "3": 1,
                      "2": 0,
                      "1": 4,
                    },
                    winPercentage: 3333,
                  },
                  "2024": {
                    starts: 15,
                    earnings: 10250000,
                    placement: {
                      "3": 1,
                      "2": 4,
                      "1": 1,
                    },
                    winPercentage: 666,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 251000,
            color: "brun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 532077,
              name: "Larsson Kjell & Anderson Per",
            },
            breeder: {
              id: 595894,
              name: "Andersson Leif & Lena",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 11,
                  earnings: 11600000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 9,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 9,
                  earnings: 7950000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 2,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 5,
                    },
                  ],
                },
              },
              life: {
                starts: 27,
                earnings: 25100000,
                placement: {
                  "3": 4,
                  "2": 3,
                  "1": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 3,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 1,
                    },
                    place: 5,
                    year: "2024",
                  },
                ],
                winPercentage: 1851,
                placePercentage: 4444,
                earningsPerStart: 929629,
                startPoints: 1155,
              },
              lastFiveStarts: {
                averageOdds: 2402,
              },
            },
            pedigree: {
              father: {
                id: 728447,
                name: "Solvato",
                nationality: "US",
              },
              mother: {
                id: 552446,
                name: "Even Southwind",
              },
              grandfather: {
                id: 2456,
                name: "Alf Palema",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 125542,
            firstName: "Erik",
            lastName: "Adielsson",
            shortName: "Adi Er",
            location: "Upplands Väsby",
            birth: 1974,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, vita ärmbindlar; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 530,
                  earnings: 2095922500,
                  placement: {
                    "3": 54,
                    "2": 50,
                    "1": 58,
                  },
                  winPercentage: 1094,
                },
                "2024": {
                  starts: 431,
                  earnings: 1520264100,
                  placement: {
                    "3": 55,
                    "2": 30,
                    "1": 44,
                  },
                  winPercentage: 1020,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 1,
            },
            prizeMoney: 60000,
            finalOdds: 5.69,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 569,
              finalOdds: 569,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 223,
              maxOdds: 223,
              odds: 223,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 702,
              potentialPayout: {
                value: 436900,
              },
            },
          },
          videos: [
            {
              mediaId: "1904742981041",
              timestamp: "2024-09-25T19:44:07",
            },
            {
              mediaId: "1904744005369",
              timestamp: "2024-09-25T19:53:38",
            },
          ],
        },
        {
          id: "2024-09-25_5_8_8",
          number: 8,
          postPosition: 8,
          distance: 2140,
          horse: {
            id: 742994,
            name: "Zofin Thobo",
            age: 9,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 6,
              },
            },
            trainer: {
              id: 174784,
              firstName: "Stefan",
              lastName: "Ankarsköld",
              shortName: "Ank St",
              location: "Sorunda",
              birth: 1957,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "B-tränare: träna, köra",
              silks: "Svart, gult axelp, grön/röd rev; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 9,
                    earnings: 3210000,
                    placement: {
                      "3": 2,
                      "2": 0,
                      "1": 1,
                    },
                    winPercentage: 1111,
                  },
                  "2024": {
                    starts: 9,
                    earnings: 5700000,
                    placement: {
                      "3": 1,
                      "2": 1,
                      "1": 1,
                    },
                    winPercentage: 1111,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: true,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 210100,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 651277,
              name: "Bioagro AB",
              location: "Johanneshov",
            },
            breeder: {
              id: 523194,
              name: "Stallfrid a Hof HB",
              location: "Årsta",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 9,
                  earnings: 3210000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 9,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 22,
                        tenths: 7,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 8,
                  earnings: 5250000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 2,
                      },
                      place: 6,
                    },
                  ],
                },
              },
              life: {
                starts: 43,
                earnings: 21010000,
                placement: {
                  "3": 5,
                  "2": 1,
                  "1": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 0,
                    },
                    place: 5,
                    year: "2019",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 6,
                    year: "2024",
                  },
                ],
                winPercentage: 1162,
                placePercentage: 2558,
                earningsPerStart: 488604,
                startPoints: 860,
              },
              lastFiveStarts: {
                averageOdds: 1058,
              },
            },
            pedigree: {
              father: {
                id: 614627,
                name: "Zola Boko",
              },
              mother: {
                id: 588803,
                name: "Fritösen",
              },
              grandfather: {
                id: 404033,
                name: "Dell Ridge Image",
                nationality: "CA",
              },
            },
          },
          driver: {
            id: 174784,
            firstName: "Stefan",
            lastName: "Ankarsköld",
            shortName: "Ank St",
            location: "Sorunda",
            birth: 1957,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "B-tränare: träna, köra",
            silks: "Svart, gult axelp, grön/röd rev; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 9,
                  earnings: 3210000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 1,
                  },
                  winPercentage: 1111,
                },
                "2024": {
                  starts: 9,
                  earnings: 5700000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 1,
                  },
                  winPercentage: 1111,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 9,
            },
            prizeMoney: 1500,
            finalOdds: 49.43,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 4943,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 943,
              maxOdds: 943,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 171,
              potentialPayout: {
                value: 6772900,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_8_9",
          number: 9,
          postPosition: 9,
          distance: 2140,
          horse: {
            id: 765685,
            name: "Back to Work",
            age: 6,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 6,
              },
            },
            trainer: {
              id: 72063,
              firstName: "Kenneth",
              lastName: "Smith",
              shortName: "Smi Ke",
              location: "Mjölby",
              birth: 1959,
              homeTrack: {
                id: 22,
                name: "Mantorp",
              },
              license: "B-tränare: träna, köra för bolag",
              silks: "Grå, vitt bröstband, blå ärmar; grå",
              statistics: {
                years: {
                  "2023": {
                    starts: 24,
                    earnings: 18940000,
                    placement: {
                      "3": 2,
                      "2": 1,
                      "1": 3,
                    },
                    winPercentage: 1250,
                  },
                  "2024": {
                    starts: 22,
                    earnings: 11450000,
                    placement: {
                      "3": 2,
                      "2": 0,
                      "1": 3,
                    },
                    winPercentage: 1363,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 183500,
            color: "mörkbrun",
            homeTrack: {
              id: 22,
              name: "Mantorp",
            },
            owner: {
              id: 533523,
              name: "Dahlén Klas-Jöran & Forsell Tommy",
            },
            breeder: {
              id: 533523,
              name: "Dahlén Klas-Jöran & Forsell Tommy",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 4,
                  earnings: 3800000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 5,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 4,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 23,
                earnings: 18350000,
                placement: {
                  "3": 4,
                  "2": 1,
                  "1": 4,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 5,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 3,
                    },
                    place: 3,
                    year: "2021",
                  },
                ],
                winPercentage: 1739,
                placePercentage: 3913,
                earningsPerStart: 797826,
                startPoints: 895,
              },
              lastFiveStarts: {
                averageOdds: 1250,
              },
            },
            pedigree: {
              father: {
                id: 453702,
                name: "Super Photo Kosmos",
                nationality: "US",
              },
              mother: {
                id: 617833,
                name: "Friday Night Light",
                nationality: "US",
              },
              grandfather: {
                id: 444412,
                name: "Muscles Yankee",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 589324,
            firstName: "Jakob",
            lastName: "Smith",
            shortName: "Smi Ja",
            location: "Mantorp",
            birth: 1996,
            homeTrack: {
              id: 22,
              name: "Mantorp",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, mblå axelp. och ärm, vitt bb; mblå",
            statistics: {
              years: {
                "2023": {
                  starts: 64,
                  earnings: 28760000,
                  placement: {
                    "3": 7,
                    "2": 3,
                    "1": 4,
                  },
                  winPercentage: 625,
                },
                "2024": {
                  starts: 44,
                  earnings: 31340000,
                  placement: {
                    "3": 7,
                    "2": 4,
                    "1": 5,
                  },
                  winPercentage: 1136,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 3,
            },
            prizeMoney: 1500,
            finalOdds: 32.92,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3292,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 731,
              maxOdds: 731,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 311,
              potentialPayout: {
                value: 2047800,
              },
            },
          },
          videos: [
            {
              mediaId: "1904742981470",
              timestamp: "2024-09-25T20:03:11",
            },
            {
              mediaId: "1904743493122",
              timestamp: "2024-09-25T19:44:29",
            },
            {
              mediaId: "1904744517319",
              timestamp: "2024-09-25T19:54:17",
            },
          ],
        },
        {
          id: "2024-09-25_5_8_10",
          number: 10,
          postPosition: 10,
          distance: 2140,
          horse: {
            id: 757715,
            name: "Dr Byfuglien",
            age: 7,
            sex: "gelding",
            record: {
              code: "aL",
              startMethod: "auto",
              distance: "long",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 5,
              },
            },
            trainer: {
              id: 118223,
              firstName: "Petra",
              lastName: "Ek",
              shortName: "Ek Pe",
              location: "Ekolsund",
              birth: 1969,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 10,
                    earnings: 1660000,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 15,
                    earnings: 17420000,
                    placement: {
                      "3": 1,
                      "2": 1,
                      "1": 3,
                    },
                    winPercentage: 2000,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 193100,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 759123,
              name: "Ek Robin",
              location: "Örsundsbro",
            },
            breeder: {
              id: 759123,
              name: "Ek Robin",
              location: "Örsundsbro",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 7,
                  earnings: 8270000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aL",
                      startMethod: "auto",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 5,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 20,
                        tenths: 6,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 18,
                earnings: 19310000,
                placement: {
                  "3": 2,
                  "2": 1,
                  "1": 2,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 5,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 3,
                    },
                    place: 5,
                    year: "2021",
                  },
                ],
                winPercentage: 1111,
                placePercentage: 2777,
                earningsPerStart: 1072777,
                startPoints: 1247,
              },
              lastFiveStarts: {
                averageOdds: 7031,
              },
            },
            pedigree: {
              father: {
                id: 640749,
                name: "Sinou Madrik",
                nationality: "FR",
              },
              mother: {
                id: 630264,
                name: "One Way Street",
              },
              grandfather: {
                id: 522784,
                name: "Banker Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 740606,
            firstName: "Magnus A",
            lastName: "Djuse",
            shortName: "Dju MA",
            location: "Upplands Väsby",
            birth: 2000,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Mörkblå, vitt axelparti; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 1501,
                  earnings: 4916246500,
                  placement: {
                    "3": 170,
                    "2": 213,
                    "1": 279,
                  },
                  winPercentage: 1858,
                },
                "2024": {
                  starts: 1184,
                  earnings: 3438762500,
                  placement: {
                    "3": 112,
                    "2": 154,
                    "1": 231,
                  },
                  winPercentage: 1951,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 3,
            },
            prizeMoney: 1500,
            finalOdds: 4.83,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 483,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 202,
              maxOdds: 202,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1588,
              potentialPayout: {
                value: 372300,
              },
            },
          },
          videos: [
            {
              mediaId: "1904745541315",
              timestamp: "2024-09-25T20:07:56",
            },
            {
              mediaId: "1904750661025",
              timestamp: "2024-09-25T20:19:09",
            },
          ],
        },
        {
          id: "2024-09-25_5_8_11",
          number: 11,
          postPosition: 11,
          distance: 2140,
          horse: {
            id: 796791,
            name: "Daiquiri Grif",
            nationality: "IT",
            age: 5,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 7,
              },
            },
            trainer: {
              id: 768933,
              firstName: "André",
              lastName: "Bood",
              shortName: "Boo An",
              location: "Karlstad",
              birth: 1998,
              homeTrack: {
                id: 15,
                name: "Färjestad",
              },
              license: "B-tränare: träna, köra",
              silks: "Mörkblå, vita axelklaffar; mblå",
              statistics: {
                years: {
                  "2023": {
                    starts: 41,
                    earnings: 30631500,
                    placement: {
                      "3": 5,
                      "2": 3,
                      "1": 4,
                    },
                    winPercentage: 975,
                  },
                  "2024": {
                    starts: 28,
                    earnings: 12370000,
                    placement: {
                      "3": 2,
                      "2": 2,
                      "1": 1,
                    },
                    winPercentage: 357,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 261043,
            color: "mörkbrun",
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            owner: {
              id: 604514,
              name: "Stall Avanti Force HB",
              location: "Kil",
            },
            breeder: {
              id: 589257,
              name: "Allevamento il Grifone SRL",
              location: "Italien",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 14,
                  earnings: 15191200,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 7,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 4,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 5,
                  earnings: 5900000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 6,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 7,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 26,
                earnings: 26104300,
                placement: {
                  "3": 2,
                  "2": 1,
                  "1": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 7,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2024",
                  },
                ],
                winPercentage: 2307,
                placePercentage: 3461,
                earningsPerStart: 1004011,
                startPoints: 890,
              },
              lastFiveStarts: {
                averageOdds: 426,
              },
            },
            pedigree: {
              father: {
                id: 744423,
                name: "Robert Bi",
                nationality: "IT",
              },
              mother: {
                id: 796790,
                name: "Unisex Bi",
                nationality: "IT",
              },
              grandfather: {
                id: 691146,
                name: "Equinox Bi",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 67192,
            firstName: "Örjan",
            lastName: "Kihlström",
            shortName: "Kih Ör",
            location: "Bromma",
            birth: 1962,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Turkos, vitt axelparti, 2-del ärm; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 1012,
                  earnings: 4650930500,
                  placement: {
                    "3": 108,
                    "2": 124,
                    "1": 200,
                  },
                  winPercentage: 1976,
                },
                "2024": {
                  starts: 748,
                  earnings: 3864039300,
                  placement: {
                    "3": 81,
                    "2": 98,
                    "1": 131,
                  },
                  winPercentage: 1751,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 2,
            },
            prizeMoney: 17000,
            finalOdds: 8.35,
            startNumber: 11,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 835,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 279,
              maxOdds: 279,
              odds: 279,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1233,
              potentialPayout: {
                value: 430400,
              },
            },
          },
          videos: [
            {
              mediaId: "1904744517108",
              timestamp: "2024-09-25T19:46:11",
            },
          ],
        },
        {
          id: "2024-09-25_5_8_12",
          number: 12,
          postPosition: 12,
          distance: 2140,
          horse: {
            id: 765126,
            name: "Casino Vendil",
            age: 6,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 7,
              },
            },
            trainer: {
              id: 748489,
              firstName: "Daniel",
              lastName: "Hansson",
              shortName: "Han Da",
              location: "Ockelbo",
              birth: 1974,
              homeTrack: {
                id: 16,
                name: "Gävle",
              },
              license: "B-tränare: träna, köra",
              silks: "Svart, vitt axelp.blå axelkl och ärmb.; sv",
              statistics: {
                years: {
                  "2023": {
                    starts: 120,
                    earnings: 50720000,
                    placement: {
                      "3": 8,
                      "2": 3,
                      "1": 4,
                    },
                    winPercentage: 333,
                  },
                  "2024": {
                    starts: 70,
                    earnings: 17692200,
                    placement: {
                      "3": 3,
                      "2": 3,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 256000,
            color: "brun",
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            owner: {
              id: 840982,
              name: "Wiklund Gunilla & Hansson Daniel",
            },
            breeder: {
              id: 746121,
              name: "Quality Commerce Nordic AB & Winberg I",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 4,
                  earnings: 800000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 3,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 11,
                  earnings: 5200000,
                  placement: {
                    "3": 0,
                    "2": 3,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 36,
                earnings: 25600000,
                placement: {
                  "3": 2,
                  "2": 7,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 7,
                    },
                    place: 4,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 0,
                    year: "2024",
                  },
                ],
                winPercentage: 555,
                placePercentage: 3055,
                earningsPerStart: 711111,
                startPoints: 774,
              },
              lastFiveStarts: {
                averageOdds: 4689,
              },
            },
            pedigree: {
              father: {
                id: 701471,
                name: "Hard Livin",
                nationality: "US",
              },
              mother: {
                id: 614795,
                name: "Torinos Super Turi",
              },
              grandfather: {
                id: 161030,
                name: "Super Arnie",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 695825,
            firstName: "Marika",
            lastName: "Eriksson",
            shortName: "Eri Ma",
            location: "Gävle",
            birth: 1993,
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Vit, blå/gula hängslen, gul ärmbi; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 13,
                  earnings: 12850000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 1,
                  },
                  winPercentage: 769,
                },
                "2024": {
                  starts: 52,
                  earnings: 36650000,
                  placement: {
                    "3": 5,
                    "2": 10,
                    "1": 2,
                  },
                  winPercentage: 384,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 10,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 3,
            },
            prizeMoney: 1500,
            finalOdds: 149.47,
            startNumber: 12,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 14947,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1972,
              maxOdds: 1972,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 24,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904745541314",
              timestamp: "2024-09-25T20:07:44",
            },
          ],
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
    {
      id: "2024-09-25_6_8",
      name: "Hallands Djursjukhus B-tränarserie - Omgång 8",
      date: "2024-09-25",
      number: 8,
      distance: 2140,
      startMethod: "volte",
      startTime: "2024-09-25T21:21:16",
      scheduledStartTime: "2024-09-25T21:15:00",
      prize:
        "Pris: 30.000-15.000-10.000-6.800-5.900-5.000-3.000-3.000 kr (8 prisplacerade). Lägst 1.500 kr till alla tävlande. Prispengar max total: 89.200 kr.",
      terms: [
        "3-åriga och äldre 10.001 - 150.000 kr i B-träning. I oavbruten B-träning fr.o.m. 240820. Körsvenskrav kat. 2. Körsvenner födda 060925 eller tidigare.",
        "Hederspris till segrande hästs tränare. Hederstäcke till segrande häst.",
        "2140 m. Tillägg 20 m vid vunna 60.001 kr",
      ],
      sport: "trot",
      track: {
        id: 6,
        name: "Åby",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "1 längd",
        scratchings: [4, 7, 15],
      },
      status: "results",
      mediaId: "1904765509396",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2024-09-25_6_8",
          status: "results",
          timestamp: "2024-09-25 21:26:49",
          turnover: 48287000,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 9,
                odds: 690,
              },
            ],
          },
          betType: "vinnare",
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2024-09-25_6_8",
          status: "results",
          timestamp: "2024-09-25 21:26:49",
          turnover: 48287000,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 9,
                  odds: 201,
                },
              ],
              second: [
                {
                  number: 13,
                  odds: 953,
                },
              ],
              third: [
                {
                  number: 14,
                  odds: 697,
                },
              ],
            },
          },
          betType: "plats",
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2024-09-25_6_8",
          status: "results",
          timestamp: "2024-09-25 21:26:53",
          turnover: 48287000,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [9, 13],
                odds: 18041,
              },
            ],
          },
          betType: "tvilling",
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2024-09-25_6_8",
          status: "results",
          timestamp: "2024-09-25 21:26:53",
          turnover: 48287000,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [9, 13],
                odds: 25793,
              },
            ],
          },
          betType: "komb",
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2024-09-25_6_8",
          status: "results",
          timestamp: "2024-09-25 21:26:53",
          turnover: 48287000,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [9, 13, 14],
                odds: 116691,
              },
            ],
          },
          betType: "trio",
        },
        V86: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "342,3",
            value: {
              amount: 2012400,
            },
            winners: [9],
            reserveOrder: [8, 3, 11, 9, 1, 5, 2, 14, 12, 13, 10, 6, 4, 7, 15],
          },
        },
      },
      starts: [
        {
          id: "2024-09-25_6_8_1",
          number: 1,
          postPosition: 1,
          distance: 2140,
          horse: {
            id: 778624,
            name: "Kang the Cruel",
            age: 4,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 5,
              },
            },
            trainer: {
              id: 600434,
              firstName: "Fredrik",
              lastName: "Steffensen",
              shortName: "Ste Fr",
              location: "Svenshögen",
              birth: 1976,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 6,
                    earnings: 5690000,
                    placement: {
                      "3": 2,
                      "2": 0,
                      "1": 1,
                    },
                    winPercentage: 1666,
                  },
                  "2024": {
                    starts: 69,
                    earnings: 35010000,
                    placement: {
                      "3": 5,
                      "2": 2,
                      "1": 3,
                    },
                    winPercentage: 434,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 57500,
            color: "ljusbrun",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 791497,
              name: "Steffensen Sandra & Fredrik",
            },
            breeder: {
              id: 686741,
              name: "Am Bloodstock AB",
              location: "Stockholm",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 5,
                  earnings: 5350000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 1,
                  earnings: 400000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 9,
                      },
                      place: 6,
                    },
                  ],
                },
              },
              life: {
                starts: 6,
                earnings: 5750000,
                placement: {
                  "3": 0,
                  "2": 1,
                  "1": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 1,
                    },
                    place: 4,
                    year: "2023",
                  },
                ],
                winPercentage: 1666,
                placePercentage: 3333,
                earningsPerStart: 958333,
                startPoints: 800,
              },
              lastFiveStarts: {
                averageOdds: 878,
              },
            },
            pedigree: {
              father: {
                id: 754873,
                name: "Southwind Frank",
                nationality: "US",
              },
              mother: {
                id: 691546,
                name: "Alegria Am",
              },
              grandfather: {
                id: 463269,
                name: "Varenne",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 673500,
            firstName: "Christian",
            lastName: "Cracchiolo",
            shortName: "Cra Ch",
            location: "Lyckeby",
            birth: 1993,
            homeTrack: {
              id: 19,
              name: "Kalmar",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, blått lodrätt fält, ärmb; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 490,
                  earnings: 268700000,
                  placement: {
                    "3": 34,
                    "2": 37,
                    "1": 38,
                  },
                  winPercentage: 775,
                },
                "2024": {
                  starts: 121,
                  earnings: 63980000,
                  placement: {
                    "3": 8,
                    "2": 5,
                    "1": 5,
                  },
                  winPercentage: 413,
                },
              },
            },
          },
          result: {
            place: 8,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 19,
              tenths: 8,
            },
            prizeMoney: 3000,
            finalOdds: 18.96,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1896,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 423,
              maxOdds: 423,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 312,
              potentialPayout: {
                value: 9561000,
              },
            },
          },
          videos: [
            {
              mediaId: "1904739909189",
              timestamp: "2024-09-25T19:32:19",
            },
            {
              mediaId: "1904739909279",
              timestamp: "2024-09-25T19:39:32",
            },
            {
              mediaId: "1904743493499",
              timestamp: "2024-09-25T19:51:18",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_2",
          number: 2,
          postPosition: 2,
          distance: 2140,
          horse: {
            id: 764244,
            name: "Västerbo Rockstar",
            age: 6,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 8,
              },
            },
            trainer: {
              id: 791167,
              firstName: "Emma",
              lastName: "Norder Hixén",
              shortName: "Nor Em",
              location: "Uddevalla",
              birth: 2001,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "B-tränare: träna, köra",
              silks: "Lila, svarta stolpar och axelparti; sva",
              statistics: {
                years: {
                  "2023": {
                    starts: 0,
                    earnings: 0,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 8,
                    earnings: 3900000,
                    placement: {
                      "3": 1,
                      "2": 2,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 43500,
            color: "svartskimmel",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 810440,
              name: "Norder Hixén Emma & Norder Daniel",
            },
            breeder: {
              id: 90136,
              name: "Västerbo Stuteri AB (Demmers M)",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 8,
                  earnings: 3900000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 3,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 8,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 10,
                earnings: 4350000,
                placement: {
                  "3": 1,
                  "2": 2,
                  "1": 0,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 3,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 8,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 20,
                      tenths: 0,
                    },
                    place: 7,
                    year: "2022",
                  },
                ],
                winPercentage: 0,
                placePercentage: 3000,
                earningsPerStart: 435000,
                startPoints: 850,
              },
              lastFiveStarts: {
                averageOdds: 1534,
              },
            },
            pedigree: {
              father: {
                id: 664048,
                name: "Formula One",
                nationality: "US",
              },
              mother: {
                id: 507893,
                name: "Västerbo Mistress",
              },
              grandfather: {
                id: 178519,
                name: "Västerbo Gigolo",
              },
            },
          },
          driver: {
            id: 709791,
            firstName: "Iina",
            lastName: "Aho",
            shortName: "Aho Ii",
            location: "Kvänum",
            birth: 1997,
            homeTrack: {
              id: 8,
              name: "Axevalla",
            },
            license: "Körlicens kategori 1: köra, rida",
            silks: "Vit, blått lodr.fält och ärm; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 22,
                  earnings: 10880000,
                  placement: {
                    "3": 4,
                    "2": 2,
                    "1": 1,
                  },
                  winPercentage: 454,
                },
                "2024": {
                  starts: 135,
                  earnings: 103742900,
                  placement: {
                    "3": 14,
                    "2": 11,
                    "1": 17,
                  },
                  winPercentage: 1259,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 10,
            kmTime: {
              minutes: 1,
              seconds: 20,
              tenths: 6,
            },
            galloped: true,
            prizeMoney: 1500,
            finalOdds: 19.04,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1904,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 379,
              maxOdds: 379,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 171,
              potentialPayout: {
                value: 10431100,
              },
            },
          },
        },
        {
          id: "2024-09-25_6_8_3",
          number: 3,
          postPosition: 3,
          distance: 2140,
          horse: {
            id: 784650,
            name: "Somebodyneedsyou",
            age: 3,
            sex: "stallion",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 0,
              },
            },
            trainer: {
              id: 595883,
              firstName: "Linda",
              lastName: "Fyhr",
              shortName: "Fyh Li",
              location: "Reftele",
              birth: 1987,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "B-tränare: träna, köra för bolag",
              silks: "Svart, röd/grön vinkel, grön rev; sv",
              statistics: {
                years: {
                  "2023": {
                    starts: 104,
                    earnings: 66240000,
                    placement: {
                      "3": 9,
                      "2": 6,
                      "1": 6,
                    },
                    winPercentage: 576,
                  },
                  "2024": {
                    starts: 69,
                    earnings: 73730000,
                    placement: {
                      "3": 7,
                      "2": 8,
                      "1": 3,
                    },
                    winPercentage: 434,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 57800,
            color: "mörkbrun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 601002,
              name: "Firma Fyhrs Glas & Fogtjänst",
            },
            breeder: {
              id: 229756,
              name: "L.G.J. Invest i Örebro AB",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 7,
                  earnings: 5780000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 9,
                      },
                      place: 5,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 0,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 7,
                earnings: 5780000,
                placement: {
                  "3": 0,
                  "2": 0,
                  "1": 1,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 5,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 0,
                    },
                    place: 4,
                    year: "2024",
                  },
                ],
                winPercentage: 1428,
                placePercentage: 1428,
                earningsPerStart: 825714,
                startPoints: 385,
              },
              lastFiveStarts: {
                averageOdds: 1143,
              },
            },
            pedigree: {
              father: {
                id: 739710,
                name: "Googoo Gaagaa",
                nationality: "US",
              },
              mother: {
                id: 754626,
                name: "Hills Delight",
              },
              grandfather: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 605915,
            firstName: "Ole Johan",
            lastName: "Östre",
            shortName: "Öst OJ",
            location: "Norge",
            birth: 1989,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Blå, vita sidor, ärmbindlar; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 180,
                  earnings: 278089700,
                  placement: {
                    "3": 20,
                    "2": 12,
                    "1": 23,
                  },
                  winPercentage: 1277,
                },
                "2024": {
                  starts: 182,
                  earnings: 231446100,
                  placement: {
                    "3": 19,
                    "2": 20,
                    "1": 16,
                  },
                  winPercentage: 879,
                },
              },
            },
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 17,
              tenths: 1,
            },
            galloped: true,
            prizeMoney: 5000,
            finalOdds: 4.08,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 408,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 175,
              maxOdds: 175,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1758,
              potentialPayout: {
                value: 1172400,
              },
            },
          },
          videos: [
            {
              mediaId: "1904750149008",
              timestamp: "2024-09-25T20:21:47",
            },
            {
              mediaId: "1904752197073",
              timestamp: "2024-09-25T20:30:08",
            },
            {
              mediaId: "1904752197321",
              timestamp: "2024-09-25T20:40:03",
            },
            {
              mediaId: "1904755781447",
              timestamp: "2024-09-25T20:52:46",
            },
            {
              mediaId: "1904759365202",
              timestamp: "2024-09-25T21:01:11",
            },
            {
              mediaId: "1904761413016",
              timestamp: "2024-09-25T21:10:04",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_4",
          number: 4,
          scratched: true,
          postPosition: 4,
          distance: 2140,
          horse: {
            id: 768697,
            name: "La Grincheues",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 19,
                tenths: 5,
              },
            },
            trainer: {
              id: 176016,
              firstName: "Frida",
              lastName: "Berg",
              shortName: "Ber Fr",
              location: "Eskilstuna",
              birth: 1982,
              homeTrack: {
                id: 8,
                name: "Axevalla",
              },
              license: "B-tränare: träna, köra",
              silks: "Röd,blå bröstb, triang, ärmb; röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 30,
                    earnings: 68900000,
                    placement: {
                      "3": 3,
                      "2": 3,
                      "1": 5,
                    },
                    winPercentage: 1666,
                  },
                  "2024": {
                    starts: 22,
                    earnings: 11320000,
                    placement: {
                      "3": 2,
                      "2": 4,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 56900,
            color: "mörkbrun",
            homeTrack: {
              id: 8,
              name: "Axevalla",
            },
            owner: {
              id: 575429,
              name: "Berg Frida",
              location: "Vinninga",
            },
            breeder: {
              id: 229459,
              name: "Lundin Jan",
              location: "Brålanda",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 4,
                  earnings: 900000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 20,
                        tenths: 7,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 19,
                        tenths: 5,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 11,
                  earnings: 4790000,
                  placement: {
                    "3": 1,
                    "2": 3,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 15,
                earnings: 5690000,
                placement: {
                  "3": 2,
                  "2": 3,
                  "1": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 19,
                      tenths: 5,
                    },
                    place: 4,
                    year: "2023",
                  },
                ],
                winPercentage: 0,
                placePercentage: 3333,
                earningsPerStart: 379333,
                startPoints: 599,
              },
              lastFiveStarts: {
                averageOdds: 2043,
              },
            },
            pedigree: {
              father: {
                id: 631019,
                name: "Amaru Boko",
              },
              mother: {
                id: 626384,
                name: "Echo's Girl",
              },
              grandfather: {
                id: 567174,
                name: "Jag de Bellouet",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 176016,
            firstName: "Frida",
            lastName: "Berg",
            shortName: "Ber Fr",
            location: "Eskilstuna",
            birth: 1982,
            homeTrack: {
              id: 8,
              name: "Axevalla",
            },
            license: "B-tränare: träna, köra",
            silks: "Röd,blå bröstb, triang, ärmb; röd",
            statistics: {
              years: {
                "2023": {
                  starts: 2,
                  earnings: 300000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
                "2024": {
                  starts: 7,
                  earnings: 2640000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
              },
            },
          },
          result: {
            finishOrder: 54,
            finalOdds: 0.0,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 22,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904755781220",
              timestamp: "2024-09-25T20:50:23",
            },
            {
              mediaId: "1904757829467",
              timestamp: "2024-09-25T20:58:47",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_5",
          number: 5,
          postPosition: 4,
          distance: 2140,
          horse: {
            id: 783960,
            name: "Wicletson",
            age: 3,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 3,
              },
            },
            trainer: {
              id: 96083,
              firstName: "Olof",
              lastName: "Thorson",
              shortName: "Tho Ol",
              location: "Varberg",
              birth: 1962,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "B-tränare: träna, köra",
              silks: "Vit, vinrött axelp och ärmar; vinröd",
              statistics: {
                years: {
                  "2023": {
                    starts: 117,
                    earnings: 72505000,
                    placement: {
                      "3": 14,
                      "2": 6,
                      "1": 1,
                    },
                    winPercentage: 85,
                  },
                  "2024": {
                    starts: 101,
                    earnings: 57470000,
                    placement: {
                      "3": 7,
                      "2": 10,
                      "1": 3,
                    },
                    winPercentage: 297,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 51500,
            color: "mörkbrun",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 818494,
              name: "Thorson Olof & Norra Näs Stuteri AB",
            },
            breeder: {
              id: 225403,
              name: "Thorson Olof",
              location: "Varberg",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 7,
                  earnings: 5150000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 4,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 3,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 7,
                earnings: 5150000,
                placement: {
                  "3": 1,
                  "2": 1,
                  "1": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 4,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 3,
                    },
                    place: 3,
                    year: "2024",
                  },
                ],
                winPercentage: 0,
                placePercentage: 2857,
                earningsPerStart: 735714,
                startPoints: 605,
              },
              lastFiveStarts: {
                averageOdds: 7013,
              },
            },
            pedigree: {
              father: {
                id: 553396,
                name: "S.J.'s Caviar",
                nationality: "US",
              },
              mother: {
                id: 735446,
                name: "Wiclet Hanover",
                nationality: "US",
              },
              grandfather: {
                id: 568973,
                name: "Andover Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 96083,
            firstName: "Olof",
            lastName: "Thorson",
            shortName: "Tho Ol",
            location: "Varberg",
            birth: 1962,
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            license: "B-tränare: träna, köra",
            silks: "Vit, vinrött axelp och ärmar; vinröd",
            statistics: {
              years: {
                "2023": {
                  starts: 114,
                  earnings: 69205000,
                  placement: {
                    "3": 14,
                    "2": 4,
                    "1": 2,
                  },
                  winPercentage: 175,
                },
                "2024": {
                  starts: 95,
                  earnings: 51830000,
                  placement: {
                    "3": 4,
                    "2": 11,
                    "1": 1,
                  },
                  winPercentage: 105,
                },
              },
            },
          },
          result: {
            finishOrder: 42,
            kmTime: {
              code: "12",
            },
            galloped: true,
            disqualified: true,
            prizeMoney: 1500,
            finalOdds: 17.62,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1762,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 379,
              maxOdds: 379,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 274,
              potentialPayout: {
                value: 9201400,
              },
            },
          },
          videos: [
            {
              mediaId: "1904744005422",
              timestamp: "2024-09-25T19:57:53",
            },
            {
              mediaId: "1904746053211",
              timestamp: "2024-09-25T20:06:25",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_6",
          number: 6,
          postPosition: 6,
          distance: 2140,
          horse: {
            id: 780958,
            name: "Houston Bore",
            age: 4,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 3,
              },
            },
            trainer: {
              id: 42161,
              firstName: "Ulf",
              lastName: "Borekull",
              shortName: "Bor Ul",
              location: "Frillesås",
              birth: 1955,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "B-tränare: träna, köra för bolag",
              silks: "Blå, BORE i vitt; vit",
              statistics: {
                years: {
                  "2023": {
                    starts: 61,
                    earnings: 34790000,
                    placement: {
                      "3": 9,
                      "2": 4,
                      "1": 4,
                    },
                    winPercentage: 655,
                  },
                  "2024": {
                    starts: 59,
                    earnings: 21720000,
                    placement: {
                      "3": 3,
                      "2": 2,
                      "1": 1,
                    },
                    winPercentage: 169,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 55000,
            color: "brun",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 466541,
              name: "Stall Borekulla Gård",
            },
            breeder: {
              id: 214550,
              name: "Borekull Ulf",
              location: "Frillesås",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 9,
                  earnings: 5500000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 8,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 3,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 9,
                earnings: 5500000,
                placement: {
                  "3": 2,
                  "2": 1,
                  "1": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 8,
                    },
                    place: 7,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 3,
                    },
                    place: 0,
                    year: "2024",
                  },
                ],
                winPercentage: 0,
                placePercentage: 3333,
                earningsPerStart: 611111,
                startPoints: 500,
              },
              lastFiveStarts: {
                averageOdds: 4439,
              },
            },
            pedigree: {
              father: {
                id: 617124,
                name: "Orlando Vici",
                nationality: "FR",
              },
              mother: {
                id: 738959,
                name: "Hope and Love",
                nationality: "US",
              },
              grandfather: {
                id: 444412,
                name: "Muscles Yankee",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 132106,
            firstName: "Anders",
            lastName: "Christiansson",
            shortName: "Chr An",
            location: "Askim",
            birth: 1973,
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Mörkblå, grå sidor och mblå/grå ärm; mbl",
            statistics: {
              years: {
                "2023": {
                  starts: 98,
                  earnings: 42475000,
                  placement: {
                    "3": 5,
                    "2": 6,
                    "1": 6,
                  },
                  winPercentage: 612,
                },
                "2024": {
                  starts: 78,
                  earnings: 39430000,
                  placement: {
                    "3": 8,
                    "2": 8,
                    "1": 4,
                  },
                  winPercentage: 512,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 16,
              tenths: 8,
            },
            prizeMoney: 6800,
            finalOdds: 89.7,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 8970,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1227,
              maxOdds: 1227,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 30,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904744005423",
              timestamp: "2024-09-25T19:58:15",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_7",
          number: 7,
          scratched: true,
          postPosition: 1,
          distance: 2160,
          horse: {
            id: 788390,
            name: "Up Stage Them All",
            nationality: "US",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 2,
              },
            },
            trainer: {
              id: 816030,
              firstName: "Jean Pierre",
              lastName: "Khayat",
              shortName: "Kha JP",
              location: "Båstad",
              birth: 1942,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 42,
                    earnings: 27310000,
                    placement: {
                      "3": 5,
                      "2": 7,
                      "1": 2,
                    },
                    winPercentage: 476,
                  },
                  "2024": {
                    starts: 85,
                    earnings: 58980000,
                    placement: {
                      "3": 11,
                      "2": 10,
                      "1": 7,
                    },
                    winPercentage: 823,
                  },
                },
              },
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 114000,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 843002,
              name: "JP Khayat and CK LLC",
              location: "USA",
            },
            breeder: {
              id: 739387,
              name: "Fashion Farms LLC",
              location: "USA",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 5,
                  earnings: 6030000,
                  placement: {
                    "3": 1,
                    "2": 3,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 6,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 2,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 7,
                  earnings: 3630000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 16,
                earnings: 11400000,
                placement: {
                  "3": 4,
                  "2": 3,
                  "1": 0,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 0,
                placePercentage: 4375,
                earningsPerStart: 712500,
                startPoints: 370,
              },
              lastFiveStarts: {
                averageOdds: 5194,
              },
            },
            pedigree: {
              father: {
                id: 635179,
                name: "Donato Hanover",
                nationality: "US",
              },
              mother: {
                id: 753190,
                name: "Stage Show",
                nationality: "US",
              },
              grandfather: {
                id: 594465,
                name: "Broadway Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 756788,
            firstName: "Victor",
            lastName: "Rosleff",
            shortName: "Ros Vi",
            location: "Halmstad",
            birth: 1998,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, grå sidor och vitt bröstband; sva",
            statistics: {
              years: {
                "2023": {
                  starts: 739,
                  earnings: 630358300,
                  placement: {
                    "3": 76,
                    "2": 67,
                    "1": 60,
                  },
                  winPercentage: 811,
                },
                "2024": {
                  starts: 643,
                  earnings: 585115000,
                  placement: {
                    "3": 71,
                    "2": 62,
                    "1": 43,
                  },
                  winPercentage: 668,
                },
              },
            },
          },
          result: {
            finishOrder: 57,
            finalOdds: 0.0,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 14,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
        },
        {
          id: "2024-09-25_6_8_8",
          number: 8,
          postPosition: 1,
          distance: 2160,
          horse: {
            id: 777458,
            name: "Man After Midnight",
            age: 4,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 3,
              },
            },
            trainer: {
              id: 534712,
              firstName: "Johanna",
              lastName: "Johansson",
              shortName: "Joh Jo",
              location: "Fågelmara",
              birth: 1981,
              homeTrack: {
                id: 19,
                name: "Kalmar",
              },
              license: "B-tränare: träna, köra för bolag",
              silks: "Vit/sv, långr. sv ärmrev och diag.söm; sv",
              statistics: {
                years: {
                  "2023": {
                    starts: 84,
                    earnings: 53080000,
                    placement: {
                      "3": 5,
                      "2": 11,
                      "1": 5,
                    },
                    winPercentage: 595,
                  },
                  "2024": {
                    starts: 67,
                    earnings: 59620000,
                    placement: {
                      "3": 2,
                      "2": 4,
                      "1": 7,
                    },
                    winPercentage: 1044,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 119300,
            color: "mörkbrun",
            homeTrack: {
              id: 19,
              name: "Kalmar",
            },
            owner: {
              id: 810616,
              name: "Johansson Johanna",
            },
            breeder: {
              id: 721526,
              name: "Youssef Johannes",
              location: "Stenstorp",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 7,
                  earnings: 6000000,
                  placement: {
                    "3": 0,
                    "2": 3,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 18,
                        tenths: 3,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 2,
                      },
                      place: 5,
                    },
                  ],
                },
                "2024": {
                  starts: 9,
                  earnings: 5930000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 3,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 16,
                earnings: 11930000,
                placement: {
                  "3": 0,
                  "2": 4,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 1,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 7,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 1250,
                placePercentage: 3750,
                earningsPerStart: 745625,
                startPoints: 1215,
              },
              lastFiveStarts: {
                averageOdds: 900,
              },
            },
            pedigree: {
              father: {
                id: 144825,
                name: "S.J.'s Photo",
                nationality: "US",
              },
              mother: {
                id: 639534,
                name: "Daniella Street",
              },
              grandfather: {
                id: 134354,
                name: "Progress Value",
              },
            },
          },
          driver: {
            id: 34868,
            firstName: "Jörgen",
            lastName: "Sjunnesson",
            shortName: "Sju Jö",
            location: "Skegrie",
            birth: 1963,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Vit, blå axelskärp, tvåd ärmar; blå",
            statistics: {
              years: {
                "2023": {
                  starts: 168,
                  earnings: 141081400,
                  placement: {
                    "3": 10,
                    "2": 26,
                    "1": 10,
                  },
                  winPercentage: 595,
                },
                "2024": {
                  starts: 109,
                  earnings: 127320900,
                  placement: {
                    "3": 8,
                    "2": 14,
                    "1": 13,
                  },
                  winPercentage: 1192,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 11,
            kmTime: {
              minutes: 1,
              seconds: 20,
              tenths: 4,
            },
            galloped: true,
            prizeMoney: 1500,
            finalOdds: 2.87,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 287,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 144,
              maxOdds: 144,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 4846,
              potentialPayout: {
                value: 917200,
              },
            },
          },
          videos: [
            {
              mediaId: "1904735813017",
              timestamp: "2024-09-25T19:05:01",
            },
            {
              mediaId: "1904744005427",
              timestamp: "2024-09-25T19:58:33",
            },
            {
              mediaId: "1904747077480",
              timestamp: "2024-09-25T20:19:29",
            },
            {
              mediaId: "1904748613121",
              timestamp: "2024-09-25T20:09:36",
            },
            {
              mediaId: "1904752709160",
              timestamp: "2024-09-25T20:29:48",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_9",
          number: 9,
          postPosition: 3,
          distance: 2160,
          horse: {
            id: 778161,
            name: "Fritz S.H.",
            age: 4,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 8,
              },
            },
            trainer: {
              id: 625180,
              firstName: "Hanna",
              lastName: "Lähdekorpi",
              shortName: "Läh Ha",
              location: "Holm",
              birth: 1989,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "B-tränare: träna, köra",
              silks: "Mblå, ljblå bröstb, ljblå ärm; ljblå",
              statistics: {
                years: {
                  "2023": {
                    starts: 161,
                    earnings: 261130000,
                    placement: {
                      "3": 17,
                      "2": 25,
                      "1": 34,
                    },
                    winPercentage: 2111,
                  },
                  "2024": {
                    starts: 124,
                    earnings: 179395000,
                    placement: {
                      "3": 19,
                      "2": 18,
                      "1": 14,
                    },
                    winPercentage: 1129,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 113200,
            color: "ljusbrun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 799589,
              name: "Holm HästgårdenAB&KM Hästfarm i HolmAB",
            },
            breeder: {
              id: 226254,
              name: "Bendz Eril",
              location: "Växjö",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 9,
                  earnings: 6820000,
                  placement: {
                    "3": 2,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 0,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 7,
                  earnings: 4500000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 8,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 16,
                earnings: 11320000,
                placement: {
                  "3": 4,
                  "2": 3,
                  "1": 0,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 8,
                    },
                    place: 0,
                    year: "2024",
                  },
                ],
                winPercentage: 0,
                placePercentage: 4375,
                earningsPerStart: 707500,
                startPoints: 780,
              },
              lastFiveStarts: {
                averageOdds: 1148,
              },
            },
            pedigree: {
              father: {
                id: 588796,
                name: "Maharajah",
              },
              mother: {
                id: 609458,
                name: "Fast Allegro",
              },
              grandfather: {
                id: 505143,
                name: "Fast Photo",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 625180,
            firstName: "Hanna",
            lastName: "Lähdekorpi",
            shortName: "Läh Ha",
            location: "Holm",
            birth: 1989,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "B-tränare: träna, köra",
            silks: "Mblå, ljblå bröstb, ljblå ärm; ljblå",
            statistics: {
              years: {
                "2023": {
                  starts: 124,
                  earnings: 191390000,
                  placement: {
                    "3": 14,
                    "2": 23,
                    "1": 21,
                  },
                  winPercentage: 1693,
                },
                "2024": {
                  starts: 91,
                  earnings: 153110000,
                  placement: {
                    "3": 14,
                    "2": 14,
                    "1": 12,
                  },
                  winPercentage: 1318,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 15,
              tenths: 7,
            },
            prizeMoney: 30000,
            finalOdds: 6.9,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 690,
              finalOdds: 690,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 201,
              maxOdds: 201,
              odds: 201,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1040,
              potentialPayout: {
                value: 2012400,
              },
            },
          },
          videos: [
            {
              mediaId: "1904748101288",
              timestamp: "2024-09-25T20:15:28",
            },
            {
              mediaId: "1904749125255",
              timestamp: "2024-09-25T20:26:24",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_10",
          number: 10,
          postPosition: 4,
          distance: 2160,
          horse: {
            id: 758853,
            name: "Nixton Håleryd",
            age: 7,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 4,
              },
            },
            trainer: {
              id: 708707,
              firstName: "Linn",
              lastName: "Risedal",
              shortName: "Ris Li",
              location: "Mölndal",
              birth: 1989,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 0,
                    earnings: 0,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 2,
                    earnings: 600000,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 142400,
            color: "brun",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 814758,
              name: "Risedal Eva-Lotta & Linn",
            },
            breeder: {
              id: 11958,
              name: "Håleryd AB",
              location: "Örkelljunga",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 2,
                  earnings: 600000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 6,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 18,
                        tenths: 2,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 26,
                earnings: 14240000,
                placement: {
                  "3": 4,
                  "2": 4,
                  "1": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 6,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 7,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 8,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 4,
                    },
                    place: 2,
                    year: "2022",
                  },
                ],
                winPercentage: 0,
                placePercentage: 3076,
                earningsPerStart: 547692,
                startPoints: 314,
              },
              lastFiveStarts: {
                averageOdds: 3736,
              },
            },
            pedigree: {
              father: {
                id: 741711,
                name: "Trixton",
                nationality: "US",
              },
              mother: {
                id: 695076,
                name: "Gila Håleryd",
              },
              grandfather: {
                id: 584617,
                name: "Going Kronos",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 56965,
            firstName: "Thomas",
            lastName: "Uhrberg",
            shortName: "Uhr Th",
            location: "Munka-Ljungby",
            birth: 1961,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Grön,vitt axelparti,vinkel och ärmr;silver",
            statistics: {
              years: {
                "2023": {
                  starts: 572,
                  earnings: 862501300,
                  placement: {
                    "3": 86,
                    "2": 71,
                    "1": 63,
                  },
                  winPercentage: 1101,
                },
                "2024": {
                  starts: 295,
                  earnings: 441347500,
                  placement: {
                    "3": 34,
                    "2": 26,
                    "1": 29,
                  },
                  winPercentage: 983,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 16,
              tenths: 3,
            },
            galloped: true,
            prizeMoney: 5900,
            finalOdds: 67.58,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 6758,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1180,
              maxOdds: 1180,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 31,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904746053249",
              timestamp: "2024-09-25T20:10:18",
            },
            {
              mediaId: "1904747589072",
              timestamp: "2024-09-25T19:59:09",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_11",
          number: 11,
          postPosition: 5,
          distance: 2160,
          horse: {
            id: 778935,
            name: "Nyatrix",
            age: 4,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 3,
              },
            },
            trainer: {
              id: 142475,
              firstName: "Henrik",
              lastName: "Nyberg",
              shortName: "Nyb He",
              location: "Varnhem",
              birth: 1956,
              homeTrack: {
                id: 8,
                name: "Axevalla",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 5,
                    earnings: 4100000,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 1,
                    },
                    winPercentage: 2000,
                  },
                  "2024": {
                    starts: 8,
                    earnings: 7300000,
                    placement: {
                      "3": 0,
                      "2": 2,
                      "1": 1,
                    },
                    winPercentage: 1250,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 114000,
            color: "brun",
            homeTrack: {
              id: 8,
              name: "Axevalla",
            },
            owner: {
              id: 785518,
              name: "Nygårdens Stuteri&Veterinär AB",
              location: "Varnhem",
            },
            breeder: {
              id: 559768,
              name: "Nyberg Cecilia & Henrik",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 5,
                  earnings: 4100000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 2,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 18,
                        tenths: 5,
                      },
                      place: 8,
                    },
                  ],
                },
                "2024": {
                  starts: 8,
                  earnings: 7300000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 4,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 3,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 13,
                earnings: 11400000,
                placement: {
                  "3": 0,
                  "2": 2,
                  "1": 2,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 4,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2024",
                  },
                ],
                winPercentage: 1538,
                placePercentage: 3076,
                earningsPerStart: 876923,
                startPoints: 875,
              },
              lastFiveStarts: {
                averageOdds: 1144,
              },
            },
            pedigree: {
              father: {
                id: 741711,
                name: "Trixton",
                nationality: "US",
              },
              mother: {
                id: 732377,
                name: "Quitty Tilly",
              },
              grandfather: {
                id: 197809,
                name: "Ganymede",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 566613,
            firstName: "Thomas",
            lastName: "Dalborg",
            shortName: "Dal Th",
            location: "Axvall",
            birth: 1985,
            homeTrack: {
              id: 8,
              name: "Axevalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, blå randigt axelp. och ärmb; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 177,
                  earnings: 126970000,
                  placement: {
                    "3": 20,
                    "2": 13,
                    "1": 9,
                  },
                  winPercentage: 508,
                },
                "2024": {
                  starts: 177,
                  earnings: 163628300,
                  placement: {
                    "3": 18,
                    "2": 19,
                    "1": 17,
                  },
                  winPercentage: 960,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              minutes: 1,
              seconds: 19,
              tenths: 4,
            },
            galloped: true,
            prizeMoney: 1500,
            finalOdds: 5.17,
            startNumber: 11,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 517,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 193,
              maxOdds: 193,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1340,
              potentialPayout: {
                value: 1037200,
              },
            },
          },
        },
        {
          id: "2024-09-25_6_8_12",
          number: 12,
          postPosition: 6,
          distance: 2160,
          horse: {
            id: 758686,
            name: "Luke Diablo",
            age: 7,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 9,
              },
            },
            trainer: {
              id: 796867,
              firstName: "Anna",
              lastName: "Vaide Persson",
              shortName: "Vai An",
              location: "Halmstad",
              birth: 1977,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 0,
                    earnings: 0,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 7,
                    earnings: 2510000,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 1,
                    },
                    winPercentage: 1428,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 136400,
            color: "mörkbrun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 837518,
              name: "Vaide Persson Anna & Victoria",
            },
            breeder: {
              id: 713334,
              name: "Speediablo AB",
              location: "Helsingborg",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [],
                },
                "2024": {
                  starts: 7,
                  earnings: 2510000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 5,
                      },
                      place: 5,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 0,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 20,
                earnings: 13640000,
                placement: {
                  "3": 2,
                  "2": 2,
                  "1": 2,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 6,
                    year: "2021",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 8,
                    },
                    place: 6,
                    year: "2021",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 9,
                    },
                    place: 5,
                    year: "2020",
                  },
                ],
                winPercentage: 1000,
                placePercentage: 3000,
                earningsPerStart: 682000,
                startPoints: 665,
              },
              lastFiveStarts: {
                averageOdds: 2527,
              },
            },
            pedigree: {
              father: {
                id: 747517,
                name: "Habitat",
                nationality: "US",
              },
              mother: {
                id: 693627,
                name: "Elvira Diablo",
              },
              grandfather: {
                id: 684918,
                name: "Quaker Jet",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 584132,
            firstName: "Jonas M",
            lastName: "Oscarsson",
            shortName: "Osc JM",
            location: "Halmstad",
            birth: 2000,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Blå, röda axelklaffar; blå",
            statistics: {
              years: {
                "2023": {
                  starts: 98,
                  earnings: 58475000,
                  placement: {
                    "3": 10,
                    "2": 9,
                    "1": 7,
                  },
                  winPercentage: 714,
                },
                "2024": {
                  starts: 88,
                  earnings: 49450000,
                  placement: {
                    "3": 4,
                    "2": 7,
                    "1": 9,
                  },
                  winPercentage: 1022,
                },
              },
            },
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 17,
              tenths: 0,
            },
            prizeMoney: 3000,
            finalOdds: 55.09,
            startNumber: 12,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 5509,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1211,
              maxOdds: 1211,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 43,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904744005420",
              timestamp: "2024-09-25T19:57:48",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_13",
          number: 13,
          postPosition: 7,
          distance: 2160,
          horse: {
            id: 772957,
            name: "All in Cash",
            age: 5,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 8,
              },
            },
            trainer: {
              id: 119193,
              firstName: "Elisabeth",
              lastName: "Olofsson",
              shortName: "Olo El",
              location: "Tun",
              birth: 1967,
              homeTrack: {
                id: 8,
                name: "Axevalla",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 27,
                    earnings: 10140000,
                    placement: {
                      "3": 3,
                      "2": 0,
                      "1": 1,
                    },
                    winPercentage: 370,
                  },
                  "2024": {
                    starts: 14,
                    earnings: 4900000,
                    placement: {
                      "3": 1,
                      "2": 2,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 100300,
            color: "brun",
            homeTrack: {
              id: 8,
              name: "Axevalla",
            },
            owner: {
              id: 229913,
              name: "Olofsson Elisabeth",
              location: "Tun",
            },
            breeder: {
              id: 229913,
              name: "Olofsson Elisabeth",
              location: "Tun",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 10,
                  earnings: 4540000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 3,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 8,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 5,
                  earnings: 3050000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 8,
                      },
                      place: 6,
                    },
                  ],
                },
              },
              life: {
                starts: 20,
                earnings: 10030000,
                placement: {
                  "3": 2,
                  "2": 2,
                  "1": 0,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 3,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 8,
                    },
                    place: 0,
                    year: "2023",
                  },
                ],
                winPercentage: 0,
                placePercentage: 2000,
                earningsPerStart: 501500,
                startPoints: 755,
              },
              lastFiveStarts: {
                averageOdds: 3057,
              },
            },
            pedigree: {
              father: {
                id: 737737,
                name: "Executive Caviar",
              },
              mother: {
                id: 617104,
                name: "Cashmere",
              },
              grandfather: {
                id: 188568,
                name: "Tagliabue",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 748310,
            firstName: "Mikaela",
            lastName: "Rydberg",
            shortName: "Ryd Mi",
            location: "Axvall",
            birth: 2000,
            homeTrack: {
              id: 8,
              name: "Axevalla",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Grå, vinrött axelparti och hängslen; vröd",
            statistics: {
              years: {
                "2023": {
                  starts: 35,
                  earnings: 9920000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
                "2024": {
                  starts: 19,
                  earnings: 8050000,
                  placement: {
                    "3": 2,
                    "2": 3,
                    "1": 1,
                  },
                  winPercentage: 526,
                },
              },
            },
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 15,
              tenths: 8,
            },
            prizeMoney: 15000,
            finalOdds: 62.61,
            startNumber: 13,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 6261,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 953,
              maxOdds: 953,
              odds: 953,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 42,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904751685279",
              timestamp: "2024-09-25T20:38:37",
            },
            {
              mediaId: "1904752709031",
              timestamp: "2024-09-25T20:20:04",
            },
            {
              mediaId: "1904752709161",
              timestamp: "2024-09-25T20:30:08",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_14",
          number: 14,
          postPosition: 8,
          distance: 2160,
          horse: {
            id: 773140,
            name: "Rosehills Trump",
            age: 5,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 16,
                tenths: 2,
              },
            },
            trainer: {
              id: 525605,
              firstName: "Thomas",
              lastName: "Söderqvist",
              shortName: "Söd Th",
              location: "Frändefors",
              birth: 1970,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 9,
                    earnings: 6490000,
                    placement: {
                      "3": 2,
                      "2": 2,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 10,
                    earnings: 4620000,
                    placement: {
                      "3": 0,
                      "2": 0,
                      "1": 1,
                    },
                    winPercentage: 1000,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 141100,
            color: "fux",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 564527,
              name: "Söderqvist Thomas & Dahlberg Anna",
            },
            breeder: {
              id: 767374,
              name: "Björnsen Elisabeth L",
              location: "Åsensbruk",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 9,
                  earnings: 6490000,
                  placement: {
                    "3": 2,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 7,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 2,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 10,
                  earnings: 4620000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 2,
                      },
                      place: 8,
                    },
                  ],
                },
              },
              life: {
                starts: 24,
                earnings: 14110000,
                placement: {
                  "3": 3,
                  "2": 2,
                  "1": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 9,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 8,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 8,
                    year: "2024",
                  },
                ],
                winPercentage: 416,
                placePercentage: 2500,
                earningsPerStart: 587916,
                startPoints: 685,
              },
              lastFiveStarts: {
                averageOdds: 3214,
              },
            },
            pedigree: {
              father: {
                id: 601184,
                name: "Classic Photo",
                nationality: "US",
              },
              mother: {
                id: 636718,
                name: "Rydens Hilona",
              },
              grandfather: {
                id: 198885,
                name: "Lindy Lane",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 161607,
            firstName: "Björn",
            lastName: "Goop",
            shortName: "Goo Bj",
            location: "Karlstad",
            birth: 1976,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Mblå, guldf.midjeband, sömmar; guld",
            statistics: {
              years: {
                "2023": {
                  starts: 1240,
                  earnings: 3961444800,
                  placement: {
                    "3": 131,
                    "2": 145,
                    "1": 204,
                  },
                  winPercentage: 1645,
                },
                "2024": {
                  starts: 860,
                  earnings: 2723657700,
                  placement: {
                    "3": 105,
                    "2": 105,
                    "1": 124,
                  },
                  winPercentage: 1441,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 16,
              tenths: 0,
            },
            prizeMoney: 10000,
            finalOdds: 39.6,
            startNumber: 14,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3960,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 697,
              maxOdds: 697,
              odds: 697,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 67,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904748101434",
              timestamp: "2024-09-25T20:25:20",
            },
          ],
        },
        {
          id: "2024-09-25_6_8_15",
          number: 15,
          scratched: true,
          postPosition: 9,
          distance: 2160,
          horse: {
            id: 771901,
            name: "Orajah",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 4,
              },
            },
            trainer: {
              id: 450414,
              firstName: "Carl-Otto",
              lastName: "Göransson",
              shortName: "Gör CO",
              location: "Halmstad",
              birth: 1978,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "B-tränare: träna, köra för bolag",
              silks: "Vinröd, blå hängslen; vinröd",
              statistics: {
                years: {
                  "2023": {
                    starts: 38,
                    earnings: 40468500,
                    placement: {
                      "3": 4,
                      "2": 3,
                      "1": 5,
                    },
                    winPercentage: 1315,
                  },
                  "2024": {
                    starts: 18,
                    earnings: 15860000,
                    placement: {
                      "3": 2,
                      "2": 1,
                      "1": 3,
                    },
                    winPercentage: 1666,
                  },
                },
              },
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 140900,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 248272,
              name: "Åkesson Anders",
              location: "Hörby",
            },
            breeder: {
              id: 248272,
              name: "Åkesson Anders",
              location: "Hörby",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 9,
                  earnings: 10190000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 5,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 4,
                      },
                      place: 3,
                    },
                  ],
                },
                "2024": {
                  starts: 6,
                  earnings: 2050000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 1,
                      },
                      place: 7,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 1,
                      },
                      place: 7,
                    },
                  ],
                },
              },
              life: {
                starts: 20,
                earnings: 14090000,
                placement: {
                  "3": 2,
                  "2": 1,
                  "1": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 1,
                    },
                    place: 7,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 5,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 1,
                    },
                    place: 7,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2023",
                  },
                ],
                winPercentage: 1500,
                placePercentage: 3000,
                earningsPerStart: 704500,
                startPoints: 690,
              },
              lastFiveStarts: {
                averageOdds: 717,
              },
            },
            pedigree: {
              father: {
                id: 636691,
                name: "Raja Mirchi",
              },
              mother: {
                id: 711554,
                name: "Ophelia Broline",
              },
              grandfather: {
                id: 130525,
                name: "Pine Chip",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 171504,
            firstName: "Adrian",
            lastName: "Kolgjini",
            shortName: "Kol Ad",
            location: "Veberöd",
            birth: 1993,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, vinrött/vitt axelsk, ärmb; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 446,
                  earnings: 1358160800,
                  placement: {
                    "3": 46,
                    "2": 55,
                    "1": 73,
                  },
                  winPercentage: 1636,
                },
                "2024": {
                  starts: 354,
                  earnings: 748676300,
                  placement: {
                    "3": 30,
                    "2": 35,
                    "1": 66,
                  },
                  winPercentage: 1864,
                },
              },
            },
          },
          result: {
            finishOrder: 65,
            finalOdds: 0.0,
            startNumber: 15,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 11,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
    {
      id: "2024-09-25_5_9",
      date: "2024-09-25",
      number: 9,
      distance: 2640,
      startMethod: "volte",
      startTime: "2024-09-25T21:31:32",
      scheduledStartTime: "2024-09-25T21:26:00",
      prize:
        "Pris: 60.000-30.000-17.000-13.000-10.000-(6.000)-(4.500) kr. Lägst 1.500 kr till alla tävlande. Prispengar max total: 152.500 kr.",
      terms: [
        "3-åriga och äldre 150.001 - 1.920.000 kr. Körsvenskrav kat. 2. Körsvenner födda 060925 eller tidigare.",
        "Presentkort till segrande hästs ägare.",
        "2640 m. Tillägg 20 m vid vunna 480.001 kr, 40 m vid 960.001 kr",
      ],
      sport: "trot",
      track: {
        id: 5,
        name: "Solvalla",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "1 längd",
      },
      status: "results",
      mediaId: "1904768069361",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2024-09-25_5_9",
          status: "results",
          timestamp: "2024-09-25 21:37:27",
          turnover: 71908700,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 9,
                odds: 520,
              },
            ],
          },
          betType: "vinnare",
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2024-09-25_5_9",
          status: "results",
          timestamp: "2024-09-25 21:37:27",
          turnover: 71908700,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 9,
                  odds: 153,
                },
              ],
              second: [
                {
                  number: 2,
                  odds: 289,
                },
              ],
              third: [
                {
                  number: 3,
                  odds: 835,
                },
              ],
            },
          },
          betType: "plats",
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2024-09-25_5_9",
          status: "results",
          timestamp: "2024-09-25 21:37:31",
          turnover: 71908700,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [2, 9],
                odds: 2759,
              },
            ],
          },
          betType: "tvilling",
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2024-09-25_5_9",
          status: "results",
          timestamp: "2024-09-25 21:37:31",
          turnover: 71908700,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [9, 2],
                odds: 5084,
              },
            ],
          },
          betType: "komb",
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2024-09-25_5_9",
          status: "results",
          timestamp: "2024-09-25 21:37:31",
          turnover: 71908700,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [9, 2, 3],
                odds: 59770,
              },
            ],
          },
          betType: "trio",
        },
        V86: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "99,57",
            value: {
              amount: 6918300,
            },
            winners: [9],
            reserveOrder: [1, 9, 11, 4, 2, 8, 10, 3, 6, 7, 5],
          },
        },
      },
      starts: [
        {
          id: "2024-09-25_5_9_1",
          number: 1,
          postPosition: 1,
          distance: 2640,
          horse: {
            id: 763384,
            name: "Decathlon",
            age: 6,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 3,
              },
            },
            trainer: {
              id: 9921,
              firstName: "Timo",
              lastName: "Nurmos",
              shortName: "Nur Ti",
              location: "Tullinge",
              birth: 1959,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare kat2: träna, köra",
              silks: "Grå, mblå axelparti,mblå/grå ärm; mblå",
              statistics: {
                years: {
                  "2023": {
                    starts: 429,
                    earnings: 2900319900,
                    placement: {
                      "3": 39,
                      "2": 68,
                      "1": 145,
                    },
                    winPercentage: 3379,
                  },
                  "2024": {
                    starts: 216,
                    earnings: 1243050000,
                    placement: {
                      "3": 17,
                      "2": 33,
                      "1": 70,
                    },
                    winPercentage: 3240,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 476572,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 840623,
              name: "Stall Timo Nurmos AB",
            },
            breeder: {
              id: 36822,
              name: "Menhammar Stuteri AB",
              location: "Ekerö",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 7,
                  earnings: 23057200,
                  placement: {
                    "3": 2,
                    "2": 2,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 4,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 6,
                  earnings: 10300000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 0,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 1,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 20,
                earnings: 47657200,
                placement: {
                  "3": 3,
                  "2": 4,
                  "1": 7,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 4,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 6,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2024",
                  },
                ],
                winPercentage: 3500,
                placePercentage: 7000,
                earningsPerStart: 2382860,
                startPoints: 1330,
              },
              lastFiveStarts: {
                averageOdds: 409,
              },
            },
            pedigree: {
              father: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
              mother: {
                id: 713148,
                name: "Olympia Tilly",
              },
              grandfather: {
                id: 198885,
                name: "Lindy Lane",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 740606,
            firstName: "Magnus A",
            lastName: "Djuse",
            shortName: "Dju MA",
            location: "Upplands Väsby",
            birth: 2000,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Mörkblå, vitt axelparti; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 1501,
                  earnings: 4916246500,
                  placement: {
                    "3": 170,
                    "2": 213,
                    "1": 279,
                  },
                  winPercentage: 1858,
                },
                "2024": {
                  starts: 1184,
                  earnings: 3438762500,
                  placement: {
                    "3": 112,
                    "2": 154,
                    "1": 231,
                  },
                  winPercentage: 1951,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 15,
              tenths: 2,
            },
            prizeMoney: 13000,
            finalOdds: 1.88,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 188,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 123,
              maxOdds: 123,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 4752,
              potentialPayout: {
                value: 3397900,
              },
            },
          },
          videos: [
            {
              mediaId: "1904751685077",
              timestamp: "2024-09-25T20:29:25",
            },
          ],
        },
        {
          id: "2024-09-25_5_9_2",
          number: 2,
          postPosition: 2,
          distance: 2640,
          horse: {
            id: 779748,
            name: "Caughtredhanded",
            age: 4,
            sex: "stallion",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 4,
              },
            },
            trainer: {
              id: 642126,
              firstName: "Svante",
              lastName: "Ericsson",
              shortName: "Eri Sv",
              location: "Nykvarn",
              birth: 1992,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Vit, sv lodrätt fält,grön ärmrev; sv",
              statistics: {
                years: {
                  "2023": {
                    starts: 349,
                    earnings: 505115000,
                    placement: {
                      "3": 63,
                      "2": 42,
                      "1": 54,
                    },
                    winPercentage: 1547,
                  },
                  "2024": {
                    starts: 174,
                    earnings: 316190000,
                    placement: {
                      "3": 25,
                      "2": 21,
                      "1": 18,
                    },
                    winPercentage: 1034,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 435000,
            color: "svartbrun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 819708,
              name: "Team Baggan På Stället",
            },
            breeder: {
              id: 667031,
              name: "Salminen Arto & Westerlund Sophie",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 17,
                  earnings: 31850000,
                  placement: {
                    "3": 3,
                    "2": 3,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 8,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 9,
                  earnings: 11650000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 8,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 26,
                earnings: 43500000,
                placement: {
                  "3": 4,
                  "2": 3,
                  "1": 3,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 1153,
                placePercentage: 3846,
                earningsPerStart: 1673076,
                startPoints: 1250,
              },
              lastFiveStarts: {
                averageOdds: 2169,
              },
            },
            pedigree: {
              father: {
                id: 768771,
                name: "Express Bourbon",
                nationality: "FR",
              },
              mother: {
                id: 636441,
                name: "Donna Leone",
              },
              grandfather: {
                id: 505143,
                name: "Fast Photo",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 642126,
            firstName: "Svante",
            lastName: "Ericsson",
            shortName: "Eri Sv",
            location: "Nykvarn",
            birth: 1992,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "A-tränare: träna, köra",
            silks: "Vit, sv lodrätt fält,grön ärmrev; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 80,
                  earnings: 73765000,
                  placement: {
                    "3": 11,
                    "2": 8,
                    "1": 10,
                  },
                  winPercentage: 1250,
                },
                "2024": {
                  starts: 28,
                  earnings: 25200000,
                  placement: {
                    "3": 3,
                    "2": 4,
                    "1": 2,
                  },
                  winPercentage: 714,
                },
              },
            },
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 15,
              tenths: 0,
            },
            prizeMoney: 30000,
            finalOdds: 12.35,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1235,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 289,
              maxOdds: 289,
              odds: 289,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 707,
              potentialPayout: {
                value: 10352500,
              },
            },
          },
          videos: [
            {
              mediaId: "1904751173478",
              timestamp: "2024-09-25T20:34:42",
            },
            {
              mediaId: "1904754757496",
              timestamp: "2024-09-25T20:55:08",
            },
            {
              mediaId: "1904755781139",
              timestamp: "2024-09-25T20:46:24",
            },
          ],
        },
        {
          id: "2024-09-25_5_9_3",
          number: 3,
          postPosition: 3,
          distance: 2640,
          horse: {
            id: 800278,
            name: "Hot Dansk Dynamite",
            nationality: "DK",
            age: 5,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 7,
              },
            },
            trainer: {
              id: 4683,
              firstName: "Rikard S",
              lastName: "Jansson",
              shortName: "Jan RS",
              location: "Eskilstuna",
              birth: 1972,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Vinröd, svart axelparti; vinröd",
              statistics: {
                years: {
                  "2023": {
                    starts: 90,
                    earnings: 30360000,
                    placement: {
                      "3": 3,
                      "2": 2,
                      "1": 7,
                    },
                    winPercentage: 777,
                  },
                  "2024": {
                    starts: 101,
                    earnings: 50070600,
                    placement: {
                      "3": 8,
                      "2": 9,
                      "1": 6,
                    },
                    winPercentage: 594,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 399925,
            color: "mörkbrun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 830903,
              name: "Ceorum AB",
              location: "Strängnäs",
            },
            breeder: {
              id: 512759,
              name: "Hanke Jürgen",
              location: "Tyskland",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 20,
                  earnings: 12512000,
                  placement: {
                    "3": 4,
                    "2": 2,
                    "1": 5,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 3,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 2,
                      },
                      place: 3,
                    },
                  ],
                },
                "2024": {
                  starts: 15,
                  earnings: 25350100,
                  placement: {
                    "3": 1,
                    "2": 3,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 42,
                earnings: 39992500,
                placement: {
                  "3": 7,
                  "2": 6,
                  "1": 9,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 5,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2023",
                  },
                ],
                winPercentage: 2142,
                placePercentage: 5238,
                earningsPerStart: 952202,
                startPoints: 574,
              },
              lastFiveStarts: {
                averageOdds: 2229,
              },
            },
            pedigree: {
              father: {
                id: 675966,
                name: "Partout Simoni",
                nationality: "DK",
              },
              mother: {
                id: 462376,
                name: "Kitten Think Big",
                nationality: "DE",
              },
              grandfather: {
                id: 6992,
                name: "Armbro Goal",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 4683,
            firstName: "Rikard S",
            lastName: "Jansson",
            shortName: "Jan RS",
            location: "Eskilstuna",
            birth: 1972,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "A-tränare: träna, köra",
            silks: "Vinröd, svart axelparti; vinröd",
            statistics: {
              years: {
                "2023": {
                  starts: 91,
                  earnings: 37380000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 3,
                  },
                  winPercentage: 329,
                },
                "2024": {
                  starts: 70,
                  earnings: 25182400,
                  placement: {
                    "3": 4,
                    "2": 5,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 15,
              tenths: 1,
            },
            prizeMoney: 17000,
            finalOdds: 91.49,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 9149,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 835,
              maxOdds: 835,
              odds: 835,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 35,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904752709281",
              timestamp: "2024-09-25T20:35:12",
            },
          ],
        },
        {
          id: "2024-09-25_5_9_4",
          number: 4,
          postPosition: 4,
          distance: 2640,
          horse: {
            id: 779226,
            name: "Oracle Vixi",
            age: 4,
            sex: "gelding",
            record: {
              code: "L",
              startMethod: "volte",
              distance: "long",
              time: {
                minutes: 1,
                seconds: 17,
                tenths: 0,
              },
            },
            trainer: {
              id: 7384,
              firstName: "Stefan",
              lastName: "Melander",
              shortName: "Mel St",
              location: "Enköping",
              birth: 1957,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Mblå, gul/vita axelklaffar; gul",
              statistics: {
                years: {
                  "2023": {
                    starts: 541,
                    earnings: 1081033000,
                    placement: {
                      "3": 69,
                      "2": 36,
                      "1": 40,
                    },
                    winPercentage: 739,
                  },
                  "2024": {
                    starts: 16,
                    earnings: 32640000,
                    placement: {
                      "3": 3,
                      "2": 2,
                      "1": 2,
                    },
                    winPercentage: 1250,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 385000,
            color: "mörkbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 52483,
              name: "Stall T.Z. (Melander Stefan)",
            },
            breeder: {
              id: 576201,
              name: "Juel Nielsen Susanne",
              location: "Danmark",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 3,
                  earnings: 4000000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 18,
                        tenths: 2,
                      },
                      place: 5,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 4,
                      },
                      place: 3,
                    },
                  ],
                },
                "2024": {
                  starts: 14,
                  earnings: 34500000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 9,
                      },
                      place: 1,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 0,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 17,
                earnings: 38500000,
                placement: {
                  "3": 3,
                  "2": 1,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 1,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 5,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2024",
                  },
                ],
                winPercentage: 1176,
                placePercentage: 3529,
                earningsPerStart: 2264705,
                startPoints: 1260,
              },
              lastFiveStarts: {
                averageOdds: 1820,
              },
            },
            pedigree: {
              father: {
                id: 731436,
                name: "Nuncio",
                nationality: "US",
              },
              mother: {
                id: 541449,
                name: "Ripley",
              },
              grandfather: {
                id: 140514,
                name: "Ride the Night",
                nationality: "FI",
              },
            },
          },
          driver: {
            id: 67192,
            firstName: "Örjan",
            lastName: "Kihlström",
            shortName: "Kih Ör",
            location: "Bromma",
            birth: 1962,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Mblå, gul/vita axelklaffar; mblå",
            statistics: {
              years: {
                "2023": {
                  starts: 1012,
                  earnings: 4650930500,
                  placement: {
                    "3": 108,
                    "2": 124,
                    "1": 200,
                  },
                  winPercentage: 1976,
                },
                "2024": {
                  starts: 748,
                  earnings: 3864039300,
                  placement: {
                    "3": 81,
                    "2": 98,
                    "1": 131,
                  },
                  winPercentage: 1751,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 11,
            kmTime: {
              code: "u",
            },
            galloped: true,
            prizeMoney: 1500,
            finalOdds: 9.95,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 995,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 227,
              maxOdds: 227,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 855,
              potentialPayout: {
                value: 16540900,
              },
            },
          },
          videos: [
            {
              mediaId: "1904751685099",
              timestamp: "2024-09-25T20:30:55",
            },
            {
              mediaId: "1904755269014",
              timestamp: "2024-09-25T20:41:31",
            },
          ],
          out: true,
        },
        {
          id: "2024-09-25_5_9_5",
          number: 5,
          postPosition: 1,
          distance: 2660,
          horse: {
            id: 770303,
            name: "Zenone Bar",
            nationality: "IT",
            age: 9,
            sex: "stallion",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 2,
              },
            },
            trainer: {
              id: 594348,
              firstName: "Monica",
              lastName: "Janisels",
              shortName: "Jan Mo",
              location: "Norrtälje",
              birth: 1957,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "B-tränare: träna, köra",
              silks: "Röd, vit snöstjärna; röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 44,
                    earnings: 14124500,
                    placement: {
                      "3": 5,
                      "2": 1,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 36,
                    earnings: 8372200,
                    placement: {
                      "3": 0,
                      "2": 1,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: true,
              },
              back: {
                hasShoe: true,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 936072,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 779031,
              name: "Janisels Monica & Björkman Lars",
            },
            breeder: {
              id: 699141,
              name: "Az. Agr. L. Truccone",
              location: "Italien",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 26,
                  earnings: 7764500,
                  placement: {
                    "3": 3,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 2,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 2,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 23,
                  earnings: 5866100,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 7,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 155,
                earnings: 93607200,
                placement: {
                  "3": 17,
                  "2": 13,
                  "1": 9,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2020",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 1,
                    },
                    place: 7,
                    year: "2021",
                  },
                ],
                winPercentage: 580,
                placePercentage: 2516,
                earningsPerStart: 603917,
                startPoints: 120,
              },
              lastFiveStarts: {
                averageOdds: 11497,
              },
            },
            pedigree: {
              father: {
                id: 463269,
                name: "Varenne",
                nationality: "IT",
              },
              mother: {
                id: 770302,
                name: "Neverland Effe",
                nationality: "IT",
              },
              grandfather: {
                id: 202234,
                name: "Viking Kronos",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 125542,
            firstName: "Erik",
            lastName: "Adielsson",
            shortName: "Adi Er",
            location: "Upplands Väsby",
            birth: 1974,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, vita ärmbindlar; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 530,
                  earnings: 2095922500,
                  placement: {
                    "3": 54,
                    "2": 50,
                    "1": 58,
                  },
                  winPercentage: 1094,
                },
                "2024": {
                  starts: 431,
                  earnings: 1520264100,
                  placement: {
                    "3": 55,
                    "2": 30,
                    "1": 44,
                  },
                  winPercentage: 1020,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              minutes: 1,
              seconds: 16,
              tenths: 8,
            },
            prizeMoney: 1500,
            finalOdds: 137.1,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 13710,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1735,
              maxOdds: 1735,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 18,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_9_6",
          number: 6,
          postPosition: 2,
          distance: 2660,
          horse: {
            id: 765373,
            name: "Itso Sisu",
            age: 6,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 2,
              },
            },
            trainer: {
              id: 4683,
              firstName: "Rikard S",
              lastName: "Jansson",
              shortName: "Jan RS",
              location: "Eskilstuna",
              birth: 1972,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Vinröd, svart axelparti; vinröd",
              statistics: {
                years: {
                  "2023": {
                    starts: 90,
                    earnings: 30360000,
                    placement: {
                      "3": 3,
                      "2": 2,
                      "1": 7,
                    },
                    winPercentage: 777,
                  },
                  "2024": {
                    starts: 101,
                    earnings: 50070600,
                    placement: {
                      "3": 8,
                      "2": 9,
                      "1": 6,
                    },
                    winPercentage: 594,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
              },
              back: {
                hasShoe: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 657262,
            color: "svartbrun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 830903,
              name: "Ceorum AB",
              location: "Strängnäs",
            },
            breeder: {
              id: 644300,
              name: "Sisyfos Breeders AB",
              location: "Bromma",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 19,
                  earnings: 32930000,
                  placement: {
                    "3": 3,
                    "2": 3,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 5,
                      },
                      place: 7,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 5,
                    },
                  ],
                },
                "2024": {
                  starts: 10,
                  earnings: 9996200,
                  placement: {
                    "3": 0,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 39,
                earnings: 65726200,
                placement: {
                  "3": 4,
                  "2": 7,
                  "1": 10,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 7,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 7,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 7,
                    year: "2024",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 5,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 2,
                    year: "2024",
                  },
                ],
                winPercentage: 2564,
                placePercentage: 5384,
                earningsPerStart: 1685287,
                startPoints: 1034,
              },
              lastFiveStarts: {
                averageOdds: 513,
              },
            },
            pedigree: {
              father: {
                id: 741746,
                name: "Bold Eagle",
                nationality: "FR",
              },
              mother: {
                id: 731304,
                name: "Karate Kate",
                nationality: "US",
              },
              grandfather: {
                id: 635179,
                name: "Donato Hanover",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 830900,
            firstName: "Conny Mikael",
            lastName: "Jansson",
            shortName: "Jan CM",
            location: "Strängnäs",
            birth: 1973,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "B-tränare: träna, köra",
            silks: "Grå,silver bb,guld stj och romb;svart",
            statistics: {
              years: {
                "2023": {
                  starts: 0,
                  earnings: 0,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
                "2024": {
                  starts: 15,
                  earnings: 3638300,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 10,
            kmTime: {
              minutes: 1,
              seconds: 20,
              tenths: 1,
            },
            prizeMoney: 1500,
            finalOdds: 189.88,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 18988,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 2419,
              maxOdds: 2419,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 29,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904751173502",
              timestamp: "2024-09-25T20:35:12",
            },
          ],
        },
        {
          id: "2024-09-25_5_9_7",
          number: 7,
          postPosition: 3,
          distance: 2660,
          horse: {
            id: 757573,
            name: "Raja Knight",
            age: 7,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 0,
              },
            },
            trainer: {
              id: 125584,
              firstName: "Henrik",
              lastName: "Larsson",
              shortName: "Lar He",
              location: "Sigtuna",
              birth: 1974,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, grå/röda hängsl och ärmb; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 74,
                    earnings: 100740000,
                    placement: {
                      "3": 8,
                      "2": 6,
                      "1": 8,
                    },
                    winPercentage: 1081,
                  },
                  "2024": {
                    starts: 71,
                    earnings: 51650000,
                    placement: {
                      "3": 5,
                      "2": 9,
                      "1": 4,
                    },
                    winPercentage: 563,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 678600,
            color: "fux",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 779878,
              name: "Salong Enna I Vallent. AB&Also Japp AB",
            },
            breeder: {
              id: 770553,
              name: "Jaganjac Sanel & Kavaltzi Jaganjac I",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 18,
                  earnings: 31150000,
                  placement: {
                    "3": 4,
                    "2": 2,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 5,
                      },
                      place: 8,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 2,
                  earnings: 750000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 9,
                      },
                      place: 8,
                    },
                  ],
                },
              },
              life: {
                starts: 45,
                earnings: 67860000,
                placement: {
                  "3": 8,
                  "2": 4,
                  "1": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 8,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 9,
                    },
                    place: 3,
                    year: "2021",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 1,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 8,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 8,
                    year: "2023",
                  },
                ],
                winPercentage: 1333,
                placePercentage: 4000,
                earningsPerStart: 1508000,
                startPoints: 490,
              },
              lastFiveStarts: {
                averageOdds: 2652,
              },
            },
            pedigree: {
              father: {
                id: 636691,
                name: "Raja Mirchi",
              },
              mother: {
                id: 634463,
                name: "Caramia Knight",
              },
              grandfather: {
                id: 484805,
                name: "Scarlet Knight",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 70381,
            firstName: "Jorma",
            lastName: "Kontio",
            shortName: "Kon Jo",
            location: "Enköping",
            birth: 1953,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, vit bröstband och blå ärmar; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 1141,
                  earnings: 1696072800,
                  placement: {
                    "3": 101,
                    "2": 125,
                    "1": 126,
                  },
                  winPercentage: 1104,
                },
                "2024": {
                  starts: 933,
                  earnings: 1604200700,
                  placement: {
                    "3": 110,
                    "2": 105,
                    "1": 104,
                  },
                  winPercentage: 1114,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 16,
              tenths: 1,
            },
            prizeMoney: 1500,
            finalOdds: 94.8,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 9480,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1193,
              maxOdds: 1193,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 25,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904751685081",
              timestamp: "2024-09-25T20:29:48",
            },
            {
              mediaId: "1904753221142",
              timestamp: "2024-09-25T20:40:27",
            },
          ],
        },
        {
          id: "2024-09-25_5_9_8",
          number: 8,
          postPosition: 1,
          distance: 2680,
          horse: {
            id: 772347,
            name: "Xanthis Hilton",
            age: 5,
            sex: "gelding",
            record: {
              code: "L",
              startMethod: "volte",
              distance: "long",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 3,
              },
            },
            trainer: {
              id: 7384,
              firstName: "Stefan",
              lastName: "Melander",
              shortName: "Mel St",
              location: "Enköping",
              birth: 1957,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Mblå, gul/vita axelklaffar; gul",
              statistics: {
                years: {
                  "2023": {
                    starts: 541,
                    earnings: 1081033000,
                    placement: {
                      "3": 69,
                      "2": 36,
                      "1": 40,
                    },
                    winPercentage: 739,
                  },
                  "2024": {
                    starts: 16,
                    earnings: 32640000,
                    placement: {
                      "3": 3,
                      "2": 2,
                      "1": 2,
                    },
                    winPercentage: 1250,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 1264000,
            color: "mörkbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 821584,
              name: "Stefan T.Z. Melander HB &Karjalainen L",
            },
            breeder: {
              id: 244277,
              name: "Flenmo Egendom AB",
              location: "Mellösa",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 25,
                  earnings: 74200000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 0,
                      },
                      place: 2,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 13,
                  earnings: 43100000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 1,
                      },
                      place: 8,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 7,
                      },
                      place: 7,
                    },
                  ],
                },
              },
              life: {
                starts: 48,
                earnings: 126400000,
                placement: {
                  "3": 1,
                  "2": 4,
                  "1": 8,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 8,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2023",
                  },
                ],
                winPercentage: 1666,
                placePercentage: 2708,
                earningsPerStart: 2633333,
                startPoints: 270,
              },
              lastFiveStarts: {
                averageOdds: 3060,
              },
            },
            pedigree: {
              father: {
                id: 731436,
                name: "Nuncio",
                nationality: "US",
              },
              mother: {
                id: 644012,
                name: "High Flying Style",
                nationality: "US",
              },
              grandfather: {
                id: 543528,
                name: "Dream Vacation",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 722626,
            firstName: "Mats E",
            lastName: "Djuse",
            shortName: "Dju ME",
            location: "Hudiksvall",
            birth: 1998,
            homeTrack: {
              id: 17,
              name: "Hagmyren",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Mblå, gul/vita axelklaffar; gul",
            statistics: {
              years: {
                "2023": {
                  starts: 1717,
                  earnings: 3346819100,
                  placement: {
                    "3": 186,
                    "2": 219,
                    "1": 257,
                  },
                  winPercentage: 1496,
                },
                "2024": {
                  starts: 1378,
                  earnings: 2993065100,
                  placement: {
                    "3": 150,
                    "2": 176,
                    "1": 240,
                  },
                  winPercentage: 1741,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 2,
            },
            prizeMoney: 10000,
            finalOdds: 20.74,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2074,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 368,
              maxOdds: 368,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 332,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904754245003",
              timestamp: "2024-09-25T20:35:18",
            },
          ],
        },
        {
          id: "2024-09-25_5_9_9",
          number: 9,
          postPosition: 2,
          distance: 2680,
          horse: {
            id: 745114,
            name: "Triton",
            age: 9,
            sex: "gelding",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 5,
              },
            },
            trainer: {
              id: 83980,
              firstName: "Mats",
              lastName: "Gunnarsson",
              shortName: "Gun Ma",
              location: "Nyköping",
              birth: 1976,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "B-tränare: träna, köra",
              silks: "Röd, svart axp och hängsl,tvådel ärm;röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 14,
                    earnings: 14740000,
                    placement: {
                      "3": 1,
                      "2": 1,
                      "1": 1,
                    },
                    winPercentage: 714,
                  },
                  "2024": {
                    starts: 19,
                    earnings: 73050000,
                    placement: {
                      "3": 1,
                      "2": 2,
                      "1": 7,
                    },
                    winPercentage: 3684,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 1535400,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 757048,
              name: "Mats Gunnarsson AB & Butterfly Road AB",
            },
            breeder: {
              id: 234530,
              name: "Karlsson Anders",
              location: "Tystberga",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 14,
                  earnings: 14740000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 0,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 19,
                  earnings: 73050000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 7,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 6,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 59,
                earnings: 153540000,
                placement: {
                  "3": 4,
                  "2": 6,
                  "1": 19,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 6,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 5,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2023",
                  },
                ],
                winPercentage: 3220,
                placePercentage: 4915,
                earningsPerStart: 2602372,
                startPoints: 1450,
              },
              lastFiveStarts: {
                averageOdds: 671,
              },
            },
            pedigree: {
              father: {
                id: 516121,
                name: "Triton Sund",
              },
              mother: {
                id: 553135,
                name: "Glittra C.D.",
              },
              grandfather: {
                id: 185370,
                name: "Igor Brick",
              },
            },
          },
          driver: {
            id: 83980,
            firstName: "Mats",
            lastName: "Gunnarsson",
            shortName: "Gun Ma",
            location: "Nyköping",
            birth: 1976,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "B-tränare: träna, köra",
            silks: "Röd, svart axp och hängsl,tvådel ärm;röd",
            statistics: {
              years: {
                "2023": {
                  starts: 21,
                  earnings: 26040000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 2,
                  },
                  winPercentage: 952,
                },
                "2024": {
                  starts: 17,
                  earnings: 58150000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 6,
                  },
                  winPercentage: 3529,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 8,
            },
            prizeMoney: 60000,
            finalOdds: 5.2,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 520,
              finalOdds: 520,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 153,
              maxOdds: 153,
              odds: 153,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1943,
              potentialPayout: {
                value: 6918300,
              },
            },
          },
          videos: [
            {
              mediaId: "1904752709149",
              timestamp: "2024-09-25T20:27:30",
            },
            {
              mediaId: "1904752709480",
              timestamp: "2024-09-25T20:38:37",
            },
            {
              mediaId: "1904753221424",
              timestamp: "2024-09-25T20:49:46",
            },
          ],
        },
        {
          id: "2024-09-25_5_9_10",
          number: 10,
          postPosition: 3,
          distance: 2680,
          horse: {
            id: 772583,
            name: "Rosemary Tile",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 3,
              },
            },
            trainer: {
              id: 98798,
              firstName: "Roger",
              lastName: "Walmann",
              shortName: "Wal Ro",
              location: "Stallarholmen",
              birth: 1953,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare kat2: träna, köra",
              silks: "Röd, gul ring och ärmar; röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 249,
                    earnings: 930895000,
                    placement: {
                      "3": 35,
                      "2": 32,
                      "1": 36,
                    },
                    winPercentage: 1445,
                  },
                  "2024": {
                    starts: 206,
                    earnings: 797420000,
                    placement: {
                      "3": 27,
                      "2": 28,
                      "1": 28,
                    },
                    winPercentage: 1359,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 1039050,
            color: "mörkbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 246844,
              name: "SRF Stable",
            },
            breeder: {
              id: 704904,
              name: "Vestmarka AB",
              location: "Vinninga",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 16,
                  earnings: 67005000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 6,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 6,
                      },
                      place: 5,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 3,
                    },
                  ],
                },
                "2024": {
                  starts: 10,
                  earnings: 20550000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 2,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 5,
                    },
                  ],
                },
              },
              life: {
                starts: 31,
                earnings: 103905000,
                placement: {
                  "3": 2,
                  "2": 2,
                  "1": 9,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 2,
                    },
                    place: 7,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 8,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 5,
                    year: "2024",
                  },
                ],
                winPercentage: 2903,
                placePercentage: 4193,
                earningsPerStart: 3351774,
                startPoints: 365,
              },
              lastFiveStarts: {
                averageOdds: 2827,
              },
            },
            pedigree: {
              father: {
                id: 667295,
                name: "Ready Cash",
                nationality: "FR",
              },
              mother: {
                id: 719126,
                name: "My Gliding Angel",
                nationality: "US",
              },
              grandfather: {
                id: 444553,
                name: "Yankee Glide",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 177032,
            firstName: "Claes",
            lastName: "Sjöström",
            shortName: "Sjö Cl",
            location: "Rimbo",
            birth: 1976,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, orange fält, axelkl. och ärmb.; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 744,
                  earnings: 1197590200,
                  placement: {
                    "3": 82,
                    "2": 82,
                    "1": 101,
                  },
                  winPercentage: 1357,
                },
                "2024": {
                  starts: 586,
                  earnings: 1022926000,
                  placement: {
                    "3": 55,
                    "2": 81,
                    "1": 77,
                  },
                  winPercentage: 1313,
                },
              },
            },
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 4,
            },
            prizeMoney: 6000,
            finalOdds: 44.64,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 4464,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 594,
              maxOdds: 594,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 81,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904748101454",
              timestamp: "2024-09-25T20:27:08",
            },
            {
              mediaId: "1904755781090",
              timestamp: "2024-09-25T20:42:06",
            },
          ],
        },
        {
          id: "2024-09-25_5_9_11",
          number: 11,
          postPosition: 4,
          distance: 2680,
          horse: {
            id: 765564,
            name: "Power Doc",
            age: 6,
            sex: "stallion",
            record: {
              code: "L",
              startMethod: "volte",
              distance: "long",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 5,
              },
            },
            trainer: {
              id: 4036,
              firstName: "Åke",
              lastName: "Lindblom",
              shortName: "Lin Åk",
              location: "Arboga",
              birth: 1954,
              homeTrack: {
                id: 32,
                name: "Örebro",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, ljusblå stjärnor; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 188,
                    earnings: 340000000,
                    placement: {
                      "3": 17,
                      "2": 18,
                      "1": 19,
                    },
                    winPercentage: 1010,
                  },
                  "2024": {
                    starts: 157,
                    earnings: 206290000,
                    placement: {
                      "3": 11,
                      "2": 21,
                      "1": 17,
                    },
                    winPercentage: 1082,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 1880550,
            color: "brun",
            homeTrack: {
              id: 32,
              name: "Örebro",
            },
            owner: {
              id: 779586,
              name: "Åke Lindblom Stable AB&Flack Invest AB",
            },
            breeder: {
              id: 202816,
              name: "Hultberg Dan",
              location: "Hallsberg",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 11,
                  earnings: 50150000,
                  placement: {
                    "3": 1,
                    "2": 6,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 8,
                      },
                      place: 2,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 6,
                  earnings: 9430000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 8,
                      },
                      place: 4,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 37,
                earnings: 188055000,
                placement: {
                  "3": 7,
                  "2": 8,
                  "1": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 1,
                    },
                    place: 6,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 18,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2020",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 1621,
                placePercentage: 5675,
                earningsPerStart: 5082567,
                startPoints: 693,
              },
              lastFiveStarts: {
                averageOdds: 3239,
              },
            },
            pedigree: {
              father: {
                id: 716611,
                name: "Muscle Massive",
                nationality: "US",
              },
              mother: {
                id: 658792,
                name: "Ulrika Karsk",
              },
              grandfather: {
                id: 658790,
                name: "Kid Blue",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 722035,
            firstName: "Carl Philip",
            lastName: "Lindblom",
            shortName: "Lin CP",
            location: "Örebro",
            birth: 1996,
            homeTrack: {
              id: 32,
              name: "Örebro",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, svart; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 149,
                  earnings: 121545000,
                  placement: {
                    "3": 7,
                    "2": 12,
                    "1": 12,
                  },
                  winPercentage: 805,
                },
                "2024": {
                  starts: 109,
                  earnings: 70660000,
                  placement: {
                    "3": 3,
                    "2": 8,
                    "1": 9,
                  },
                  winPercentage: 825,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 15,
              tenths: 1,
            },
            prizeMoney: 1500,
            finalOdds: 5.9,
            startNumber: 11,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 590,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 184,
              maxOdds: 184,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1224,
              potentialPayout: {
                value: 6033100,
              },
            },
          },
          videos: [
            {
              mediaId: "1904751685430",
              timestamp: "2024-09-25T20:41:16",
            },
          ],
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
    {
      id: "2024-09-25_6_9",
      name: "The Red Mile",
      date: "2024-09-25",
      number: 9,
      distance: 1609,
      startMethod: "auto",
      startTime: "2024-09-25T21:43:33",
      scheduledStartTime: "2024-09-25T21:40:00",
      prize:
        "Pris: 60.000-30.000-17.000-13.000-10.000-6.000-4.500 kr (7 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 148.000 kr.",
      terms: [
        "3-åriga och äldre lägst 550.001 kr. Körsvenskrav kat. 2. Körsvenner födda 060925 eller tidigare.",
        "Åby Travsällskaps hederspris till segrande hästs ägare, körsven, tränare, hästskötare och uppfödare. Hederstäcke till segrande häst.",
        "1609 m. Autostart. 10 startande. ",
      ],
      sport: "trot",
      track: {
        id: 6,
        name: "Åby",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "2.5 längd",
        scratchings: [6],
      },
      status: "results",
      mediaId: "1904773701190",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2024-09-25_6_9",
          status: "results",
          timestamp: "2024-09-25 21:47:58",
          turnover: 48598600,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 10,
                odds: 221,
              },
            ],
          },
          betType: "vinnare",
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2024-09-25_6_9",
          status: "results",
          timestamp: "2024-09-25 21:47:58",
          turnover: 48598600,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 10,
                  odds: 120,
                },
              ],
              second: [
                {
                  number: 8,
                  odds: 426,
                },
              ],
              third: [
                {
                  number: 2,
                  odds: 189,
                },
              ],
            },
          },
          betType: "plats",
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2024-09-25_6_9",
          status: "results",
          timestamp: "2024-09-25 21:50:41",
          turnover: 48598600,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [8, 10],
                odds: 2006,
              },
            ],
          },
          betType: "tvilling",
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2024-09-25_6_9",
          status: "results",
          timestamp: "2024-09-25 21:50:41",
          turnover: 48598600,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [10, 8],
                odds: 2609,
              },
            ],
          },
          betType: "komb",
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2024-09-25_6_9",
          status: "results",
          timestamp: "2024-09-25 21:50:41",
          turnover: 48598600,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [10, 8, 2],
                odds: 17359,
              },
            ],
          },
          betType: "trio",
        },
        V86: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "54,76",
            value: {
              amount: 12579600,
            },
            winners: [10],
            reserveOrder: [10, 1, 2, 9, 4, 8, 3, 5, 6, 7],
          },
        },
      },
      starts: [
        {
          id: "2024-09-25_6_9_1",
          number: 1,
          postPosition: 1,
          distance: 1609,
          horse: {
            id: 751799,
            name: "Sweetman",
            age: 8,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 8,
              },
            },
            trainer: {
              id: 29207,
              firstName: "Lars I",
              lastName: "Nilsson",
              shortName: "Nil LI",
              location: "Veberöd",
              birth: 1965,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare kat2: träna, köra",
              silks: "Vit, blå/gröna korslagda axelskärp;blå",
              statistics: {
                years: {
                  "2023": {
                    starts: 261,
                    earnings: 317827000,
                    placement: {
                      "3": 35,
                      "2": 24,
                      "1": 33,
                    },
                    winPercentage: 1264,
                  },
                  "2024": {
                    starts: 162,
                    earnings: 184340000,
                    placement: {
                      "3": 15,
                      "2": 20,
                      "1": 17,
                    },
                    winPercentage: 1049,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 2296900,
            color: "mörkbrun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 783599,
              name: "Green Pac AB & Lars I Nilsson AB",
            },
            breeder: {
              id: 237443,
              name: "Pedersen Ulrik",
              location: "Skara",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 12,
                  earnings: 22550000,
                  placement: {
                    "3": 3,
                    "2": 0,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 5,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 7,
                  earnings: 19250000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 6,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 87,
                earnings: 229690000,
                placement: {
                  "3": 8,
                  "2": 11,
                  "1": 17,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 7,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2019",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 8,
                    },
                    place: 0,
                    year: "2020",
                  },
                ],
                winPercentage: 1954,
                placePercentage: 4137,
                earningsPerStart: 2640114,
                startPoints: 1175,
              },
              lastFiveStarts: {
                averageOdds: 2502,
              },
            },
            pedigree: {
              father: {
                id: 621754,
                name: "Gift Kronos",
                nationality: "IT",
              },
              mother: {
                id: 677829,
                name: "Le Peu de Beaute",
              },
              grandfather: {
                id: 596745,
                name: "Fill V",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 171504,
            firstName: "Adrian",
            lastName: "Kolgjini",
            shortName: "Kol Ad",
            location: "Veberöd",
            birth: 1993,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, vinrött/vitt axelsk, ärmb; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 446,
                  earnings: 1358160800,
                  placement: {
                    "3": 46,
                    "2": 55,
                    "1": 73,
                  },
                  winPercentage: 1636,
                },
                "2024": {
                  starts: 354,
                  earnings: 748676300,
                  placement: {
                    "3": 30,
                    "2": 35,
                    "1": 66,
                  },
                  winPercentage: 1864,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 6,
            },
            prizeMoney: 10000,
            finalOdds: 4.54,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 454,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 178,
              maxOdds: 178,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2465,
              potentialPayout: {
                value: 18045100,
              },
            },
          },
          videos: [
            {
              mediaId: "1904748101313",
              timestamp: "2024-09-25T20:16:04",
            },
            {
              mediaId: "1904749125257",
              timestamp: "2024-09-25T20:26:35",
            },
          ],
        },
        {
          id: "2024-09-25_6_9_2",
          number: 2,
          postPosition: 2,
          distance: 1609,
          horse: {
            id: 765262,
            name: "Iznogoud Am",
            age: 6,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 7,
              },
            },
            trainer: {
              id: 672787,
              firstName: "Marcus",
              lastName: "Schön",
              shortName: "Sch Ma",
              location: "Heby",
              birth: 1991,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Mörkblå, vitt axelp, grått bröstb;mblå",
              statistics: {
                years: {
                  "2023": {
                    starts: 31,
                    earnings: 92900000,
                    placement: {
                      "3": 7,
                      "2": 6,
                      "1": 4,
                    },
                    winPercentage: 1290,
                  },
                  "2024": {
                    starts: 22,
                    earnings: 82925000,
                    placement: {
                      "3": 3,
                      "2": 0,
                      "1": 6,
                    },
                    winPercentage: 2727,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 3313771,
            color: "mörkbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 708061,
              name: "Stall Courant AB",
              location: "Heby",
            },
            breeder: {
              id: 686741,
              name: "Am Bloodstock AB",
              location: "Stockholm",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 7,
                  earnings: 8312500,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 0,
                      },
                      place: 6,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 4,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 1,
                  earnings: 1000000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 31,
                earnings: 331377100,
                placement: {
                  "3": 2,
                  "2": 7,
                  "1": 7,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 0,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 7,
                    },
                    place: 6,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aaK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 9,
                    },
                    place: 3,
                    year: "2020",
                  },
                ],
                winPercentage: 2258,
                placePercentage: 5161,
                earningsPerStart: 10689583,
                startPoints: 540,
              },
              lastFiveStarts: {
                averageOdds: 3422,
              },
            },
            pedigree: {
              father: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
              mother: {
                id: 733101,
                name: "Beauty of Gray",
                nationality: "US",
              },
              grandfather: {
                id: 494729,
                name: "Conway Hall",
                nationality: "CA",
              },
            },
          },
          driver: {
            id: 161607,
            firstName: "Björn",
            lastName: "Goop",
            shortName: "Goo Bj",
            location: "Karlstad",
            birth: 1976,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Röd, gul hästsko; röd",
            statistics: {
              years: {
                "2023": {
                  starts: 1240,
                  earnings: 3961444800,
                  placement: {
                    "3": 131,
                    "2": 145,
                    "1": 204,
                  },
                  winPercentage: 1645,
                },
                "2024": {
                  starts: 860,
                  earnings: 2723657700,
                  placement: {
                    "3": 105,
                    "2": 105,
                    "1": 124,
                  },
                  winPercentage: 1441,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 5,
            },
            prizeMoney: 17000,
            finalOdds: 5.61,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 561,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 189,
              maxOdds: 189,
              odds: 189,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1634,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904742981469",
              timestamp: "2024-09-25T20:02:18",
            },
            {
              mediaId: "1904750149006",
              timestamp: "2024-09-25T20:21:42",
            },
          ],
        },
        {
          id: "2024-09-25_6_9_3",
          number: 3,
          postPosition: 3,
          distance: 1609,
          horse: {
            id: 769736,
            name: "Hipster Am",
            nationality: "US",
            age: 7,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 8,
              },
            },
            trainer: {
              id: 120623,
              firstName: "Stefan P",
              lastName: "Pettersson",
              shortName: "Pet SP",
              location: "Mantorp",
              birth: 1965,
              homeTrack: {
                id: 22,
                name: "Mantorp",
              },
              license: "A-tränare: träna, köra",
              silks: "Röd, sv bröstb och vit triangel,ärmb; röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 250,
                    earnings: 504257500,
                    placement: {
                      "3": 27,
                      "2": 40,
                      "1": 30,
                    },
                    winPercentage: 1200,
                  },
                  "2024": {
                    starts: 163,
                    earnings: 304529000,
                    placement: {
                      "3": 16,
                      "2": 17,
                      "1": 19,
                    },
                    winPercentage: 1165,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 1617811,
            color: "brun",
            homeTrack: {
              id: 22,
              name: "Mantorp",
            },
            owner: {
              id: 708061,
              name: "Stall Courant AB",
              location: "Heby",
            },
            breeder: {
              id: 686741,
              name: "Am Bloodstock AB",
              location: "Stockholm",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 11,
                  earnings: 42800000,
                  placement: {
                    "3": 2,
                    "2": 2,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 5,
                      },
                      place: 6,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 9,
                  earnings: 7280000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 3,
                      },
                      place: 7,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 7,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 48,
                earnings: 161781100,
                placement: {
                  "3": 10,
                  "2": 3,
                  "1": 13,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 8,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 7,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2021",
                  },
                  {
                    code: "aaK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2020",
                  },
                ],
                winPercentage: 2708,
                placePercentage: 5416,
                earningsPerStart: 3370439,
                startPoints: 403,
              },
              lastFiveStarts: {
                averageOdds: 1180,
              },
            },
            pedigree: {
              father: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
              mother: {
                id: 731060,
                name: "Belgravia",
                nationality: "CA",
              },
              grandfather: {
                id: 579261,
                name: "Kadabra",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 53685,
            firstName: "Ulf",
            lastName: "Ohlsson",
            shortName: "Ohl Ul",
            location: "Knivsta",
            birth: 1964,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Röd, gul hästsko; röd",
            statistics: {
              years: {
                "2023": {
                  starts: 1776,
                  earnings: 2692232100,
                  placement: {
                    "3": 188,
                    "2": 196,
                    "1": 235,
                  },
                  winPercentage: 1323,
                },
                "2024": {
                  starts: 1241,
                  earnings: 2260891500,
                  placement: {
                    "3": 136,
                    "2": 124,
                    "1": 158,
                  },
                  winPercentage: 1273,
                },
              },
            },
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 8,
            },
            prizeMoney: 4500,
            finalOdds: 13.79,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1379,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 314,
              maxOdds: 314,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 193,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904749637283",
              timestamp: "2024-09-25T20:24:57",
            },
          ],
        },
        {
          id: "2024-09-25_6_9_4",
          number: 4,
          postPosition: 4,
          distance: 1609,
          horse: {
            id: 752819,
            name: "King of Everything",
            age: 8,
            sex: "stallion",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 3,
              },
            },
            trainer: {
              id: 11487,
              firstName: "Claes",
              lastName: "Svensson",
              shortName: "Sve Cl",
              location: "Lekeryd",
              birth: 1967,
              homeTrack: {
                id: 43,
                name: "Vaggeryd",
              },
              license: "A-tränare: träna, köra",
              silks: "Röd,blått axp.m v.stj.,hängsl. och ärm;blå",
              statistics: {
                years: {
                  "2023": {
                    starts: 158,
                    earnings: 194040000,
                    placement: {
                      "3": 10,
                      "2": 25,
                      "1": 23,
                    },
                    winPercentage: 1455,
                  },
                  "2024": {
                    starts: 90,
                    earnings: 73415000,
                    placement: {
                      "3": 8,
                      "2": 8,
                      "1": 7,
                    },
                    winPercentage: 777,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 1593900,
            color: "svart",
            homeTrack: {
              id: 43,
              name: "Vaggeryd",
            },
            owner: {
              id: 651396,
              name: "Hälla Travträning AB (Svensson Claes)",
            },
            breeder: {
              id: 676014,
              name: "Nilsson Marie & Hagström Birgitta",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 14,
                  earnings: 64690000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 5,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 4,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 1,
                  earnings: 4000000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 44,
                earnings: 159390000,
                placement: {
                  "3": 3,
                  "2": 9,
                  "1": 13,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 4,
                    year: "2020",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 1,
                    },
                    place: 4,
                    year: "2022",
                  },
                ],
                winPercentage: 2954,
                placePercentage: 5681,
                earningsPerStart: 3622500,
                startPoints: 1570,
              },
              lastFiveStarts: {
                averageOdds: 455,
              },
            },
            pedigree: {
              father: {
                id: 643182,
                name: "Quite Easy U.S.",
                nationality: "US",
              },
              mother: {
                id: 492204,
                name: "Kings Blondie",
              },
              grandfather: {
                id: 140514,
                name: "Ride the Night",
                nationality: "FI",
              },
            },
          },
          driver: {
            id: 11487,
            firstName: "Claes",
            lastName: "Svensson",
            shortName: "Sve Cl",
            location: "Lekeryd",
            birth: 1967,
            homeTrack: {
              id: 43,
              name: "Vaggeryd",
            },
            license: "A-tränare: träna, köra",
            silks: "Röd,blått axp.m v.stj.,hängsl. och ärm;blå",
            statistics: {
              years: {
                "2023": {
                  starts: 142,
                  earnings: 113030000,
                  placement: {
                    "3": 15,
                    "2": 21,
                    "1": 18,
                  },
                  winPercentage: 1267,
                },
                "2024": {
                  starts: 45,
                  earnings: 43240000,
                  placement: {
                    "3": 6,
                    "2": 6,
                    "1": 2,
                  },
                  winPercentage: 444,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              code: "u",
            },
            galloped: true,
            prizeMoney: 2500,
            finalOdds: 17.12,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1712,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 326,
              maxOdds: 326,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 253,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904746053212",
              timestamp: "2024-09-25T20:06:35",
            },
            {
              mediaId: "1904750661026",
              timestamp: "2024-09-25T20:19:19",
            },
          ],
          out: true,
        },
        {
          id: "2024-09-25_6_9_5",
          number: 5,
          postPosition: 5,
          distance: 1609,
          horse: {
            id: 751545,
            name: "Red Mile Brodde",
            age: 8,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 5,
              },
            },
            trainer: {
              id: 509066,
              firstName: "Ola",
              lastName: "Karlsson",
              shortName: "Kar Ol",
              location: "Svedala",
              birth: 1973,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare kat2: träna, köra",
              statistics: {
                years: {
                  "2023": {
                    starts: 68,
                    earnings: 72532300,
                    placement: {
                      "3": 9,
                      "2": 10,
                      "1": 12,
                    },
                    winPercentage: 1764,
                  },
                  "2024": {
                    starts: 51,
                    earnings: 62115200,
                    placement: {
                      "3": 9,
                      "2": 6,
                      "1": 7,
                    },
                    winPercentage: 1372,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 1555266,
            color: "mörkbrun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 594821,
              name: "Pallexperten i Malmö AB",
              location: "Limhamn",
            },
            breeder: {
              id: 230444,
              name: "Brodda Stuteri AB",
              location: "Skurup",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 18,
                  earnings: 24561300,
                  placement: {
                    "3": 1,
                    "2": 4,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 9,
                        tenths: 5,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 4,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 7,
                  earnings: 11950000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 2,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 81,
                earnings: 155526600,
                placement: {
                  "3": 8,
                  "2": 17,
                  "1": 11,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 5,
                    },
                    place: 7,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 9,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 1,
                    },
                    place: 5,
                    year: "2021",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 0,
                    year: "2023",
                  },
                ],
                winPercentage: 1358,
                placePercentage: 4444,
                earningsPerStart: 1920081,
                startPoints: 795,
              },
              lastFiveStarts: {
                averageOdds: 3357,
              },
            },
            pedigree: {
              father: {
                id: 553396,
                name: "S.J.'s Caviar",
                nationality: "US",
              },
              mother: {
                id: 594169,
                name: "Run Baby Run",
              },
              grandfather: {
                id: 161030,
                name: "Super Arnie",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 756788,
            firstName: "Victor",
            lastName: "Rosleff",
            shortName: "Ros Vi",
            location: "Halmstad",
            birth: 1998,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, grå sidor och vitt bröstband; sva",
            statistics: {
              years: {
                "2023": {
                  starts: 739,
                  earnings: 630358300,
                  placement: {
                    "3": 76,
                    "2": 67,
                    "1": 60,
                  },
                  winPercentage: 811,
                },
                "2024": {
                  starts: 643,
                  earnings: 585115000,
                  placement: {
                    "3": 71,
                    "2": 62,
                    "1": 43,
                  },
                  winPercentage: 668,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 6,
            },
            prizeMoney: 13000,
            finalOdds: 32.54,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3254,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 499,
              maxOdds: 499,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 68,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904749125150",
              timestamp: "2024-09-25T20:23:49",
            },
            {
              mediaId: "1904752197370",
              timestamp: "2024-09-25T20:45:17",
            },
            {
              mediaId: "1904754245008",
              timestamp: "2024-09-25T20:36:04",
            },
          ],
        },
        {
          id: "2024-09-25_6_9_6",
          number: 6,
          scratched: true,
          postPosition: 6,
          distance: 1609,
          horse: {
            id: 767843,
            name: "Toto Barosso",
            nationality: "DE",
            age: 7,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 1,
              },
            },
            trainer: {
              id: 549496,
              firstName: "Johan",
              lastName: "Untersteiner",
              shortName: "Unt Jo",
              location: "Holm",
              birth: 1984,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit/röda axelklaffar; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 1224,
                    earnings: 3381797800,
                    placement: {
                      "3": 133,
                      "2": 183,
                      "1": 249,
                    },
                    winPercentage: 2034,
                  },
                  "2024": {
                    starts: 982,
                    earnings: 2186035700,
                    placement: {
                      "3": 121,
                      "2": 160,
                      "1": 172,
                    },
                    winPercentage: 1751,
                  },
                },
              },
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 2754436,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 760157,
              name: "Leif Bergwall AB",
              location: "Glumslöv",
            },
            breeder: {
              id: 631646,
              name: "Nooteboom Ronald F",
              location: "Nederländerna",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 12,
                  earnings: 36019900,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 1,
                      },
                      place: 0,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 4,
                  earnings: 3400000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 0,
                      },
                      place: 3,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 60,
                earnings: 275443600,
                placement: {
                  "3": 7,
                  "2": 10,
                  "1": 11,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 1,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 1,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 18,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2019",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 8,
                    },
                    place: 2,
                    year: "2020",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 3,
                    year: "2022",
                  },
                ],
                winPercentage: 1833,
                placePercentage: 4666,
                earningsPerStart: 4590726,
                startPoints: 440,
              },
              lastFiveStarts: {
                averageOdds: 3243,
              },
            },
            pedigree: {
              father: {
                id: 667295,
                name: "Ready Cash",
                nationality: "FR",
              },
              mother: {
                id: 720189,
                name: "Bibi Barosso",
                nationality: "NL",
              },
              grandfather: {
                id: 602426,
                name: "Ken Warkentin",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 42633,
            firstName: "Peter",
            lastName: "Untersteiner",
            shortName: "Unt Pe",
            location: "Halmstad",
            birth: 1960,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Orange, vita stjärnor ärm; orange",
            statistics: {
              years: {
                "2023": {
                  starts: 403,
                  earnings: 835165700,
                  placement: {
                    "3": 38,
                    "2": 52,
                    "1": 59,
                  },
                  winPercentage: 1464,
                },
                "2024": {
                  starts: 326,
                  earnings: 441115200,
                  placement: {
                    "3": 48,
                    "2": 48,
                    "1": 37,
                  },
                  winPercentage: 1134,
                },
              },
            },
          },
          result: {
            finishOrder: 56,
            finalOdds: 0.0,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 54,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
        },
        {
          id: "2024-09-25_6_9_7",
          number: 7,
          postPosition: 6,
          distance: 1609,
          horse: {
            id: 757059,
            name: "Kuyt F.Boko",
            age: 7,
            sex: "stallion",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 8,
              },
            },
            trainer: {
              id: 82982,
              firstName: "Magnus",
              lastName: "Dahlén",
              shortName: "Dah Ma",
              location: "Simlångsdalen",
              birth: 1971,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare kat2: träna, köra",
              silks: "Vit, mblå axelklaffar och sidofält; vit",
              statistics: {
                years: {
                  "2023": {
                    starts: 256,
                    earnings: 245138500,
                    placement: {
                      "3": 28,
                      "2": 29,
                      "1": 25,
                    },
                    winPercentage: 976,
                  },
                  "2024": {
                    starts: 144,
                    earnings: 153910000,
                    placement: {
                      "3": 16,
                      "2": 15,
                      "1": 18,
                    },
                    winPercentage: 1250,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: true,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 2313398,
            color: "mörkbrun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 726052,
              name: "Olsson Erland",
              location: "Falkenberg",
            },
            breeder: {
              id: 769829,
              name: "Boko Stables Holland BV & Iwema S",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 14,
                  earnings: 28780000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 2,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 8,
                      },
                      place: 5,
                    },
                  ],
                },
                "2024": {
                  starts: 5,
                  earnings: 1850000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 3,
                      },
                      place: 7,
                    },
                  ],
                },
              },
              life: {
                starts: 52,
                earnings: 231339800,
                placement: {
                  "3": 8,
                  "2": 4,
                  "1": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 2,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 3,
                    year: "2021",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 7,
                    },
                    place: 5,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 8,
                    },
                    place: 5,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 0,
                    year: "2021",
                  },
                ],
                winPercentage: 1153,
                placePercentage: 3461,
                earningsPerStart: 4448842,
                startPoints: 585,
              },
              lastFiveStarts: {
                averageOdds: 4236,
              },
            },
            pedigree: {
              father: {
                id: 494729,
                name: "Conway Hall",
                nationality: "CA",
              },
              mother: {
                id: 708016,
                name: "Gala dei Bessi",
                nationality: "IT",
              },
              grandfather: {
                id: 444553,
                name: "Yankee Glide",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 605915,
            firstName: "Ole Johan",
            lastName: "Östre",
            shortName: "Öst OJ",
            location: "Norge",
            birth: 1989,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Svart, vinrött axelparti och 2-del ärm; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 180,
                  earnings: 278089700,
                  placement: {
                    "3": 20,
                    "2": 12,
                    "1": 23,
                  },
                  winPercentage: 1277,
                },
                "2024": {
                  starts: 182,
                  earnings: 231446100,
                  placement: {
                    "3": 19,
                    "2": 20,
                    "1": 16,
                  },
                  winPercentage: 879,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 12,
              tenths: 2,
            },
            prizeMoney: 2500,
            finalOdds: 62.84,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 6284,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1003,
              maxOdds: 1003,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 37,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904755781147",
              timestamp: "2024-09-25T20:46:41",
            },
            {
              mediaId: "1904758853028",
              timestamp: "2024-09-25T20:56:42",
            },
            {
              mediaId: "1904760901143",
              timestamp: "2024-09-25T21:06:30",
            },
          ],
        },
        {
          id: "2024-09-25_6_9_8",
          number: 8,
          postPosition: 7,
          distance: 1609,
          horse: {
            id: 733890,
            name: "Crack Atout",
            nationality: "FR",
            age: 12,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 5,
              },
            },
            trainer: {
              id: 15203,
              firstName: "Tomas",
              lastName: "Malmqvist",
              shortName: "Mal To",
              location: "Malmö",
              birth: 1968,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare kat2: träna, köra",
              silks: "Blå, gul/vit/gul bröstb och midjeb; vit",
              statistics: {
                years: {
                  "2023": {
                    starts: 635,
                    earnings: 3291806100,
                    placement: {
                      "3": 66,
                      "2": 70,
                      "1": 87,
                    },
                    winPercentage: 1370,
                  },
                  "2024": {
                    starts: 165,
                    earnings: 661090700,
                    placement: {
                      "3": 19,
                      "2": 18,
                      "1": 16,
                    },
                    winPercentage: 969,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 2957782,
            color: "brun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 818962,
              name: "Hancla KB & Stall Gunvald AB",
            },
            breeder: {
              id: 617501,
              name: "S.C.E.A du Beaumanoir",
              location: "Frankrike",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 18,
                  earnings: 46830000,
                  placement: {
                    "3": 3,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 5,
                      },
                      place: 3,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 7,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 10,
                  earnings: 16440000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 0,
                      },
                      place: 4,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 6,
                    },
                  ],
                },
              },
              life: {
                starts: 131,
                earnings: 295778200,
                placement: {
                  "3": 9,
                  "2": 15,
                  "1": 14,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 3,
                    },
                    place: 5,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 5,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 9,
                    },
                    place: 6,
                    year: "2022",
                  },
                ],
                winPercentage: 1068,
                placePercentage: 2900,
                earningsPerStart: 2257848,
                startPoints: 980,
              },
              lastFiveStarts: {
                averageOdds: 3303,
              },
            },
            pedigree: {
              father: {
                id: 569013,
                name: "Niky",
                nationality: "FR",
              },
              mother: {
                id: 733889,
                name: "Pleiade d'Atout",
                nationality: "FR",
              },
              grandfather: {
                id: 29276,
                name: "Coktail Jet",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 99144,
            firstName: "Ken",
            lastName: "Ecce",
            shortName: "Ecc Ke",
            location: "Staffanstorp",
            birth: 1963,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, orange/vita sömmar; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 407,
                  earnings: 768456000,
                  placement: {
                    "3": 44,
                    "2": 39,
                    "1": 51,
                  },
                  winPercentage: 1253,
                },
                "2024": {
                  starts: 313,
                  earnings: 385242600,
                  placement: {
                    "3": 41,
                    "2": 34,
                    "1": 36,
                  },
                  winPercentage: 1150,
                },
              },
            },
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 1,
            },
            prizeMoney: 30000,
            finalOdds: 25.58,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2558,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 426,
              maxOdds: 426,
              odds: 426,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 204,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904748101453",
              timestamp: "2024-09-25T20:26:59",
            },
            {
              mediaId: "1904749637079",
              timestamp: "2024-09-25T20:16:38",
            },
          ],
        },
        {
          id: "2024-09-25_6_9_9",
          number: 9,
          postPosition: 9,
          distance: 1609,
          horse: {
            id: 789329,
            name: "Secret Volo",
            nationality: "US",
            age: 4,
            sex: "mare",
            record: {
              code: "aaK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 8,
                tenths: 9,
              },
            },
            trainer: {
              id: 672787,
              firstName: "Marcus",
              lastName: "Schön",
              shortName: "Sch Ma",
              location: "Heby",
              birth: 1991,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Mörkblå, vitt axelp, grått bröstb;mblå",
              statistics: {
                years: {
                  "2023": {
                    starts: 31,
                    earnings: 92900000,
                    placement: {
                      "3": 7,
                      "2": 6,
                      "1": 4,
                    },
                    winPercentage: 1290,
                  },
                  "2024": {
                    starts: 22,
                    earnings: 82925000,
                    placement: {
                      "3": 3,
                      "2": 0,
                      "1": 6,
                    },
                    winPercentage: 2727,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 4202485,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 708061,
              name: "Stall Courant AB",
              location: "Heby",
            },
            breeder: {
              id: 837961,
              name: "Jahre J Jr & Kentuckiana Farms LLC",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 12,
                  earnings: 222524500,
                  placement: {
                    "3": 3,
                    "2": 2,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aaK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 8,
                        tenths: 9,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 5,
                  earnings: 17350000,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 4,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 29,
                earnings: 420248500,
                placement: {
                  "3": 5,
                  "2": 6,
                  "1": 4,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 4,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 7,
                    year: "2024",
                  },
                  {
                    code: "aaK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 8,
                      tenths: 9,
                    },
                    place: 4,
                    year: "2023",
                  },
                ],
                winPercentage: 1379,
                placePercentage: 5172,
                earningsPerStart: 14491327,
                startPoints: 2210,
              },
              lastFiveStarts: {
                averageOdds: 1064,
              },
            },
            pedigree: {
              father: {
                id: 762068,
                name: "Walner",
                nationality: "CA",
              },
              mother: {
                id: 789328,
                name: "Secret Serenity",
                nationality: "US",
              },
              grandfather: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 672787,
            firstName: "Marcus",
            lastName: "Schön",
            shortName: "Sch Ma",
            location: "Heby",
            birth: 1991,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Röd, gul hästsko; röd",
            statistics: {
              years: {
                "2023": {
                  starts: 44,
                  earnings: 40310000,
                  placement: {
                    "3": 1,
                    "2": 6,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
                "2024": {
                  starts: 16,
                  earnings: 19240000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 4,
                  },
                  winPercentage: 2500,
                },
              },
            },
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 7,
            },
            prizeMoney: 6000,
            finalOdds: 8.95,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 895,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 216,
              maxOdds: 216,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1045,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904753221372",
              timestamp: "2024-09-25T20:48:47",
            },
            {
              mediaId: "1904758341218",
              timestamp: "2024-09-25T20:59:22",
            },
          ],
        },
        {
          id: "2024-09-25_6_9_10",
          number: 10,
          postPosition: 10,
          distance: 1609,
          horse: {
            id: 773379,
            name: "Dancer Brodde",
            age: 5,
            sex: "stallion",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 9,
              },
            },
            trainer: {
              id: 549496,
              firstName: "Johan",
              lastName: "Untersteiner",
              shortName: "Unt Jo",
              location: "Holm",
              birth: 1984,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit/röda axelklaffar; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 1224,
                    earnings: 3381797800,
                    placement: {
                      "3": 133,
                      "2": 183,
                      "1": 249,
                    },
                    winPercentage: 2034,
                  },
                  "2024": {
                    starts: 982,
                    earnings: 2186035700,
                    placement: {
                      "3": 121,
                      "2": 160,
                      "1": 172,
                    },
                    winPercentage: 1751,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 4139483,
            color: "mörkbrun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 229595,
              name: "Stens Trot AB",
              location: "Nacka Strand",
            },
            breeder: {
              id: 216039,
              name: "Brodda International HB",
              location: "Lund",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 10,
                  earnings: 161050000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 4,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 6,
                      },
                      place: 4,
                    },
                  ],
                },
                "2024": {
                  starts: 7,
                  earnings: 28998300,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 9,
                        tenths: 9,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 30,
                earnings: 413948300,
                placement: {
                  "3": 0,
                  "2": 4,
                  "1": 12,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2022",
                  },
                ],
                winPercentage: 4000,
                placePercentage: 5333,
                earningsPerStart: 13798276,
                startPoints: 3569,
              },
              lastFiveStarts: {
                averageOdds: 410,
              },
            },
            pedigree: {
              father: {
                id: 741746,
                name: "Bold Eagle",
                nationality: "FR",
              },
              mother: {
                id: 742230,
                name: "Dancing in Thehall",
                nationality: "US",
              },
              grandfather: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 549496,
            firstName: "Johan",
            lastName: "Untersteiner",
            shortName: "Unt Jo",
            location: "Holm",
            birth: 1984,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Grön,svart stjärna i vit rundel; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 829,
                  earnings: 2105582500,
                  placement: {
                    "3": 89,
                    "2": 121,
                    "1": 173,
                  },
                  winPercentage: 2086,
                },
                "2024": {
                  starts: 576,
                  earnings: 1514869000,
                  placement: {
                    "3": 64,
                    "2": 97,
                    "1": 119,
                  },
                  winPercentage: 2065,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 7,
            },
            prizeMoney: 60000,
            finalOdds: 2.21,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 221,
              finalOdds: 221,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 120,
              maxOdds: 120,
              odds: 120,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 4047,
              potentialPayout: {
                value: 12579600,
              },
            },
          },
          videos: [
            {
              mediaId: "1904748613497",
              timestamp: "2024-09-25T20:27:49",
            },
            {
              mediaId: "1904751173014",
              timestamp: "2024-09-25T20:18:13",
            },
            {
              mediaId: "1904752709453",
              timestamp: "2024-09-25T20:37:54",
            },
          ],
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
    {
      id: "2024-09-25_5_10",
      name: "Stall Courant Solvallaserien 350, Fördel Ston (Försök 6 i Meeting 3 - Final Solvalla 23 oktober)",
      date: "2024-09-25",
      number: 10,
      distance: 1640,
      startMethod: "auto",
      startTime: "2024-09-25T21:52:38",
      scheduledStartTime: "2024-09-25T21:51:00",
      prize:
        "Pris: 80.000-40.000-22.500-16.000-11.000-8.000-5.000 kr (7 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 195.000 kr.",
      terms: [
        "3-åriga och äldre hingstar och valacker 150.001 - 350.000 kr samt 3-åriga och äldre ston 150.001 - 500.000 kr. Körsvenskrav kat. 1. Körsvenner födda 060925 eller tidigare.",
        "Hederspris och segertavla till segrande hästs ägare.",
        "1640 m. Autostart. 12 startande. ",
      ],
      sport: "trot",
      track: {
        id: 5,
        name: "Solvalla",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "dött lopp",
      },
      status: "results",
      mediaId: "1904789061337",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2024-09-25_5_10",
          status: "results",
          timestamp: "2024-09-25 21:59:53",
          turnover: 78480300,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 2,
                odds: 833,
              },
              {
                number: 11,
                odds: 156,
              },
            ],
          },
          betType: "vinnare",
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2024-09-25_5_10",
          status: "results",
          timestamp: "2024-09-25 21:59:53",
          turnover: 78480300,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 2,
                  odds: 341,
                },
                {
                  number: 11,
                  odds: 152,
                },
              ],
              second: [],
              third: [
                {
                  number: 9,
                  odds: 148,
                },
              ],
            },
          },
          betType: "plats",
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2024-09-25_5_10",
          status: "results",
          timestamp: "2024-09-25 21:59:53",
          turnover: 78480300,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [2, 11],
                odds: 2523,
              },
            ],
          },
          betType: "tvilling",
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2024-09-25_5_10",
          status: "results",
          timestamp: "2024-09-25 21:59:53",
          turnover: 78480300,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [2, 11],
                odds: 4461,
              },
              {
                combination: [11, 2],
                odds: 1759,
              },
            ],
          },
          betType: "komb",
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2024-09-25_5_10",
          status: "results",
          timestamp: "2024-09-25 21:59:53",
          turnover: 78480300,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [2, 11, 9],
                odds: 14481,
              },
              {
                combination: [11, 2, 9],
                odds: 6286,
              },
            ],
          },
          betType: "trio",
        },
        V86: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "26,10",
            value: {
              amount: 26396000,
            },
            winners: [2, 11],
            reserveOrder: [9, 11, 1, 6, 4, 2, 3, 5, 10, 8, 7, 12],
          },
        },
      },
      starts: [
        {
          id: "2024-09-25_5_10_1",
          number: 1,
          postPosition: 1,
          distance: 1640,
          horse: {
            id: 781026,
            name: "Scorpion Tile",
            age: 4,
            sex: "gelding",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 9,
              },
            },
            trainer: {
              id: 161675,
              firstName: "Olle",
              lastName: "Alsén",
              shortName: "Als Ol",
              location: "Österfärnebo",
              birth: 1975,
              homeTrack: {
                id: 16,
                name: "Gävle",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, sidofält i guld; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 307,
                    earnings: 332619900,
                    placement: {
                      "3": 36,
                      "2": 32,
                      "1": 36,
                    },
                    winPercentage: 1172,
                  },
                  "2024": {
                    starts: 244,
                    earnings: 230790000,
                    placement: {
                      "3": 23,
                      "2": 27,
                      "1": 22,
                    },
                    winPercentage: 901,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: true,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 333400,
            color: "mörkbrun",
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            owner: {
              id: 804692,
              name: "Alsén Linnéa",
              location: "Enköping",
            },
            breeder: {
              id: 704904,
              name: "Vestmarka AB",
              location: "Vinninga",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 8,
                  earnings: 22350000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 2,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 7,
                  earnings: 10990000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 9,
                      },
                      place: 2,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 15,
                earnings: 33340000,
                placement: {
                  "3": 2,
                  "2": 1,
                  "1": 4,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 1,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2024",
                  },
                ],
                winPercentage: 2666,
                placePercentage: 4666,
                earningsPerStart: 2222666,
                startPoints: 1719,
              },
              lastFiveStarts: {
                averageOdds: 2287,
              },
            },
            pedigree: {
              father: {
                id: 748142,
                name: "Father Patrick",
                nationality: "US",
              },
              mother: {
                id: 742792,
                name: "Love Me Madly",
                nationality: "US",
              },
              grandfather: {
                id: 635179,
                name: "Donato Hanover",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 161675,
            firstName: "Olle",
            lastName: "Alsén",
            shortName: "Als Ol",
            location: "Österfärnebo",
            birth: 1975,
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, sidofält i guld; svart",
            statistics: {
              years: {
                "2023": {
                  starts: 321,
                  earnings: 298829900,
                  placement: {
                    "3": 32,
                    "2": 35,
                    "1": 31,
                  },
                  winPercentage: 965,
                },
                "2024": {
                  starts: 271,
                  earnings: 211300000,
                  placement: {
                    "3": 21,
                    "2": 27,
                    "1": 19,
                  },
                  winPercentage: 701,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 0,
            },
            prizeMoney: 2500,
            finalOdds: 7.14,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 714,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 210,
              maxOdds: 210,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1206,
              potentialPayout: {
                value: 45095100,
              },
            },
          },
          videos: [
            {
              mediaId: "1904752709315",
              timestamp: "2024-09-25T20:35:37",
            },
            {
              mediaId: "1904755781125",
              timestamp: "2024-09-25T20:45:56",
            },
          ],
        },
        {
          id: "2024-09-25_5_10_2",
          number: 2,
          postPosition: 2,
          distance: 1640,
          horse: {
            id: 774619,
            name: "Cherieff Sund",
            age: 5,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 9,
              },
            },
            trainer: {
              id: 125584,
              firstName: "Henrik",
              lastName: "Larsson",
              shortName: "Lar He",
              location: "Sigtuna",
              birth: 1974,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, grå/röda hängsl och ärmb; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 74,
                    earnings: 100740000,
                    placement: {
                      "3": 8,
                      "2": 6,
                      "1": 8,
                    },
                    winPercentage: 1081,
                  },
                  "2024": {
                    starts: 71,
                    earnings: 51650000,
                    placement: {
                      "3": 5,
                      "2": 9,
                      "1": 4,
                    },
                    winPercentage: 563,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 312100,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 809369,
              name: "Henke Training AB(Larsson H)&Tillman J",
            },
            breeder: {
              id: 768529,
              name: "Henke Training AB & Larsson Björn",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 13,
                  earnings: 17850000,
                  placement: {
                    "3": 0,
                    "2": 2,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 9,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 10,
                  earnings: 7270000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 2,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 31,
                earnings: 31210000,
                placement: {
                  "3": 2,
                  "2": 3,
                  "1": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 9,
                    },
                    place: 7,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 18,
                      tenths: 1,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 1,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2023",
                  },
                ],
                winPercentage: 967,
                placePercentage: 2580,
                earningsPerStart: 1006774,
                startPoints: 1258,
              },
              lastFiveStarts: {
                averageOdds: 1049,
              },
            },
            pedigree: {
              father: {
                id: 590526,
                name: "Reven d'Amour",
              },
              mother: {
                id: 612000,
                name: "Cherie Sund",
              },
              grandfather: {
                id: 453702,
                name: "Super Photo Kosmos",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 722626,
            firstName: "Mats E",
            lastName: "Djuse",
            shortName: "Dju ME",
            location: "Hudiksvall",
            birth: 1998,
            homeTrack: {
              id: 17,
              name: "Hagmyren",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, gult axelparti och rött bröstb.; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 1717,
                  earnings: 3346819100,
                  placement: {
                    "3": 186,
                    "2": 219,
                    "1": 257,
                  },
                  winPercentage: 1496,
                },
                "2024": {
                  starts: 1378,
                  earnings: 2993065100,
                  placement: {
                    "3": 150,
                    "2": 176,
                    "1": 240,
                  },
                  winPercentage: 1741,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 3,
            },
            prizeMoney: 60000,
            finalOdds: 16.66,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1666,
              finalOdds: 833,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 341,
              maxOdds: 341,
              odds: 341,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 403,
              potentialPayout: {
                value: 204669600,
              },
            },
          },
          videos: [
            {
              mediaId: "1904759365195",
              timestamp: "2024-09-25T21:01:05",
            },
            {
              mediaId: "1904763461039",
              timestamp: "2024-09-25T21:10:48",
            },
            {
              mediaId: "1904763973236",
              timestamp: "2024-09-25T21:21:20",
            },
          ],
        },
        {
          id: "2024-09-25_5_10_3",
          number: 3,
          postPosition: 3,
          distance: 1640,
          horse: {
            id: 773933,
            name: "Joanne Leejs",
            age: 5,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 8,
              },
            },
            trainer: {
              id: 608305,
              firstName: "Jörgen S",
              lastName: "Eriksson",
              shortName: "Eri JS",
              location: "Eskilstuna",
              birth: 1987,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart/vröd, diagonalt delad, ärmb; sv",
              statistics: {
                years: {
                  "2023": {
                    starts: 301,
                    earnings: 493287900,
                    placement: {
                      "3": 37,
                      "2": 45,
                      "1": 42,
                    },
                    winPercentage: 1395,
                  },
                  "2024": {
                    starts: 225,
                    earnings: 228553000,
                    placement: {
                      "3": 21,
                      "2": 31,
                      "1": 20,
                    },
                    winPercentage: 888,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 344300,
            color: "brun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 741006,
              name: "Leejs Foder AB",
              location: "Rosersberg",
            },
            breeder: {
              id: 677080,
              name: "Pettersson Lars & Susanne",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 8,
                  earnings: 11250000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 1,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 10,
                  earnings: 15030000,
                  placement: {
                    "3": 1,
                    "2": 2,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 8,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 24,
                earnings: 34430000,
                placement: {
                  "3": 1,
                  "2": 3,
                  "1": 4,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 4,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 0,
                    year: "2023",
                  },
                ],
                winPercentage: 1666,
                placePercentage: 3333,
                earningsPerStart: 1434583,
                startPoints: 683,
              },
              lastFiveStarts: {
                averageOdds: 2345,
              },
            },
            pedigree: {
              father: {
                id: 740136,
                name: "Uncle Lasse",
                nationality: "US",
              },
              mother: {
                id: 725708,
                name: "Jolinn Leejs",
              },
              grandfather: {
                id: 562580,
                name: "Love You",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 608305,
            firstName: "Jörgen S",
            lastName: "Eriksson",
            shortName: "Eri JS",
            location: "Eskilstuna",
            birth: 1987,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart/vröd, diagonalt delad, ärmb; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 206,
                  earnings: 277290900,
                  placement: {
                    "3": 25,
                    "2": 28,
                    "1": 24,
                  },
                  winPercentage: 1165,
                },
                "2024": {
                  starts: 127,
                  earnings: 133459100,
                  placement: {
                    "3": 11,
                    "2": 12,
                    "1": 12,
                  },
                  winPercentage: 944,
                },
              },
            },
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 12,
              tenths: 5,
            },
            prizeMoney: 8000,
            finalOdds: 16.29,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1629,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 345,
              maxOdds: 345,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 236,
              potentialPayout: {
                value: 73551200,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_10_4",
          number: 4,
          postPosition: 4,
          distance: 1640,
          horse: {
            id: 773253,
            name: "Apomorfin",
            age: 5,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 4,
              },
            },
            trainer: {
              id: 502022,
              firstName: "Peter G",
              lastName: "Norman",
              shortName: "Nor PG",
              location: "Sigtuna",
              birth: 1979,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Blå, ljblå/vitt lodrättfält, rev; blå",
              statistics: {
                years: {
                  "2023": {
                    starts: 313,
                    earnings: 335840000,
                    placement: {
                      "3": 28,
                      "2": 31,
                      "1": 24,
                    },
                    winPercentage: 766,
                  },
                  "2024": {
                    starts: 160,
                    earnings: 191996900,
                    placement: {
                      "3": 20,
                      "2": 17,
                      "1": 21,
                    },
                    winPercentage: 1312,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 266500,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 240589,
              name: "Hesselgren Laura",
              location: "Märsta",
            },
            breeder: {
              id: 240589,
              name: "Hesselgren Laura",
              location: "Märsta",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 7,
                  earnings: 16050000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 4,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 10,
                  earnings: 5850000,
                  placement: {
                    "3": 2,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 4,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 6,
                    },
                  ],
                },
              },
              life: {
                starts: 23,
                earnings: 26650000,
                placement: {
                  "3": 4,
                  "2": 1,
                  "1": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 4,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 17,
                      tenths: 0,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 6,
                    year: "2024",
                  },
                ],
                winPercentage: 1304,
                placePercentage: 3478,
                earningsPerStart: 1158695,
                startPoints: 955,
              },
              lastFiveStarts: {
                averageOdds: 2767,
              },
            },
            pedigree: {
              father: {
                id: 701471,
                name: "Hard Livin",
                nationality: "US",
              },
              mother: {
                id: 637497,
                name: "Golden Harm",
              },
              grandfather: {
                id: 60950,
                name: "Good As Gold",
              },
            },
          },
          driver: {
            id: 502022,
            firstName: "Peter G",
            lastName: "Norman",
            shortName: "Nor PG",
            location: "Sigtuna",
            birth: 1979,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, ljblå/vitt lodrättfält, rev; blå",
            statistics: {
              years: {
                "2023": {
                  starts: 205,
                  earnings: 221050000,
                  placement: {
                    "3": 19,
                    "2": 20,
                    "1": 15,
                  },
                  winPercentage: 731,
                },
                "2024": {
                  starts: 114,
                  earnings: 133820000,
                  placement: {
                    "3": 10,
                    "2": 13,
                    "1": 15,
                  },
                  winPercentage: 1315,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 12,
              tenths: 2,
            },
            prizeMoney: 11000,
            finalOdds: 11.24,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1124,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 290,
              maxOdds: 290,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 480,
              potentialPayout: {
                value: 82343200,
              },
            },
          },
          videos: [
            {
              mediaId: "1904754245006",
              timestamp: "2024-09-25T20:35:42",
            },
            {
              mediaId: "1904754245414",
              timestamp: "2024-09-25T20:48:37",
            },
          ],
        },
        {
          id: "2024-09-25_5_10_5",
          number: 5,
          postPosition: 5,
          distance: 1640,
          horse: {
            id: 773257,
            name: "Teton Lindraj",
            age: 5,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 6,
              },
            },
            trainer: {
              id: 57267,
              firstName: "Jan",
              lastName: "Hellstedt",
              shortName: "Hel Ja",
              location: "Gränna",
              birth: 1964,
              homeTrack: {
                id: 43,
                name: "Vaggeryd",
              },
              license: "A-tränare: träna, köra",
              silks: "Blå,svart axelp,svarta ärmar; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 84,
                    earnings: 44040000,
                    placement: {
                      "3": 4,
                      "2": 5,
                      "1": 5,
                    },
                    winPercentage: 595,
                  },
                  "2024": {
                    starts: 41,
                    earnings: 30240000,
                    placement: {
                      "3": 5,
                      "2": 2,
                      "1": 2,
                    },
                    winPercentage: 487,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: true,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 353800,
            color: "svartbrun",
            homeTrack: {
              id: 43,
              name: "Vaggeryd",
            },
            owner: {
              id: 218248,
              name: "Hellstedt Jan",
              location: "Gränna",
            },
            breeder: {
              id: 548371,
              name: "Teton Stables AB",
              location: "Lidköping",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 18,
                  earnings: 16190000,
                  placement: {
                    "3": 1,
                    "2": 3,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 9,
                  earnings: 12390000,
                  placement: {
                    "3": 0,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 6,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 32,
                earnings: 35380000,
                placement: {
                  "3": 1,
                  "2": 6,
                  "1": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 1,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 937,
                placePercentage: 3125,
                earningsPerStart: 1105625,
                startPoints: 764,
              },
              lastFiveStarts: {
                averageOdds: 5078,
              },
            },
            pedigree: {
              father: {
                id: 636691,
                name: "Raja Mirchi",
              },
              mother: {
                id: 734398,
                name: "T.K.Lindy",
                nationality: "US",
              },
              grandfather: {
                id: 494729,
                name: "Conway Hall",
                nationality: "CA",
              },
            },
          },
          driver: {
            id: 70381,
            firstName: "Jorma",
            lastName: "Kontio",
            shortName: "Kon Jo",
            location: "Enköping",
            birth: 1953,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, vit bröstband och blå ärmar; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 1141,
                  earnings: 1696072800,
                  placement: {
                    "3": 101,
                    "2": 125,
                    "1": 126,
                  },
                  winPercentage: 1104,
                },
                "2024": {
                  starts: 933,
                  earnings: 1604200700,
                  placement: {
                    "3": 110,
                    "2": 105,
                    "1": 104,
                  },
                  winPercentage: 1114,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 11,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 5,
            },
            prizeMoney: 2500,
            finalOdds: 32.66,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3266,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 589,
              maxOdds: 589,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 115,
              potentialPayout: {
                value: 688860700,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_10_6",
          number: 6,
          postPosition: 6,
          distance: 1640,
          horse: {
            id: 768410,
            name: "All for Love",
            age: 6,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 5,
              },
            },
            trainer: {
              id: 549496,
              firstName: "Johan",
              lastName: "Untersteiner",
              shortName: "Unt Jo",
              location: "Holm",
              birth: 1984,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit/röda axelklaffar; svart",
              statistics: {
                years: {
                  "2023": {
                    starts: 1224,
                    earnings: 3381797800,
                    placement: {
                      "3": 133,
                      "2": 183,
                      "1": 249,
                    },
                    winPercentage: 2034,
                  },
                  "2024": {
                    starts: 982,
                    earnings: 2186035700,
                    placement: {
                      "3": 121,
                      "2": 160,
                      "1": 172,
                    },
                    winPercentage: 1751,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 457900,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 236709,
              name: "Oden HB",
              location: "Alnö",
            },
            breeder: {
              id: 204126,
              name: "Schwartz Dimitri",
              location: "Finland",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 16,
                  earnings: 23090000,
                  placement: {
                    "3": 4,
                    "2": 1,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 4,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 2,
                    },
                  ],
                },
                "2024": {
                  starts: 12,
                  earnings: 14250000,
                  placement: {
                    "3": 1,
                    "2": 4,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 40,
                earnings: 45790000,
                placement: {
                  "3": 8,
                  "2": 6,
                  "1": 4,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 1000,
                placePercentage: 4500,
                earningsPerStart: 1144750,
                startPoints: 1295,
              },
              lastFiveStarts: {
                averageOdds: 1736,
              },
            },
            pedigree: {
              father: {
                id: 748142,
                name: "Father Patrick",
                nationality: "US",
              },
              mother: {
                id: 719099,
                name: "Broadway Starlet",
                nationality: "US",
              },
              grandfather: {
                id: 594465,
                name: "Broadway Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 125542,
            firstName: "Erik",
            lastName: "Adielsson",
            shortName: "Adi Er",
            location: "Upplands Väsby",
            birth: 1974,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå/grön, långrandig, blå ärmar; blå",
            statistics: {
              years: {
                "2023": {
                  starts: 530,
                  earnings: 2095922500,
                  placement: {
                    "3": 54,
                    "2": 50,
                    "1": 58,
                  },
                  winPercentage: 1094,
                },
                "2024": {
                  starts: 431,
                  earnings: 1520264100,
                  placement: {
                    "3": 55,
                    "2": 30,
                    "1": 44,
                  },
                  winPercentage: 1020,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 8,
            },
            prizeMoney: 16000,
            finalOdds: 8.23,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 823,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 245,
              maxOdds: 245,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 705,
              potentialPayout: {
                value: 89098600,
              },
            },
          },
        },
        {
          id: "2024-09-25_5_10_7",
          number: 7,
          postPosition: 7,
          distance: 1640,
          horse: {
            id: 765425,
            name: "Mogas Ballerina",
            age: 6,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 5,
              },
            },
            trainer: {
              id: 125555,
              firstName: "Eva-Lena",
              lastName: "Hellman",
              shortName: "Hel EL",
              location: "Almunge",
              birth: 1973,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "B-tränare: träna, köra för bolag",
              silks: "Vinröd, vit kil och ärmbindel; vinröd",
              statistics: {
                years: {
                  "2023": {
                    starts: 102,
                    earnings: 29260000,
                    placement: {
                      "3": 5,
                      "2": 0,
                      "1": 3,
                    },
                    winPercentage: 294,
                  },
                  "2024": {
                    starts: 63,
                    earnings: 24990000,
                    placement: {
                      "3": 4,
                      "2": 4,
                      "1": 2,
                    },
                    winPercentage: 317,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 302900,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 243719,
              name: "Stall Fly me Home HB",
              location: "Almunge",
            },
            breeder: {
              id: 243719,
              name: "Stall Fly me Home HB",
              location: "Almunge",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 26,
                  earnings: 7520000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 2,
                      },
                      place: 7,
                    },
                  ],
                },
                "2024": {
                  starts: 11,
                  earnings: 7550000,
                  placement: {
                    "3": 0,
                    "2": 3,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 3,
                      },
                      place: 4,
                    },
                  ],
                },
              },
              life: {
                starts: 75,
                earnings: 30290000,
                placement: {
                  "3": 2,
                  "2": 6,
                  "1": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 9,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 18,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 7,
                    year: "2023",
                  },
                ],
                winPercentage: 400,
                placePercentage: 1466,
                earningsPerStart: 403866,
                startPoints: 1009,
              },
              lastFiveStarts: {
                averageOdds: 5047,
              },
            },
            pedigree: {
              father: {
                id: 729274,
                name: "Beer Summit",
                nationality: "US",
              },
              mother: {
                id: 612936,
                name: "Mogas Sara",
              },
              grandfather: {
                id: 508896,
                name: "Victory Party",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 731061,
            firstName: "Julia",
            lastName: "Smedman",
            shortName: "Sme Ju",
            location: "Enköping",
            birth: 2002,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "Körlicens kategori 1: köra, rida",
            silks: "Svart, mörkblå sidor och axelparti; sva",
            statistics: {
              years: {
                "2023": {
                  starts: 351,
                  earnings: 172920000,
                  placement: {
                    "3": 28,
                    "2": 19,
                    "1": 11,
                  },
                  winPercentage: 313,
                },
                "2024": {
                  starts: 206,
                  earnings: 103382100,
                  placement: {
                    "3": 14,
                    "2": 12,
                    "1": 4,
                  },
                  winPercentage: 194,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 12,
              tenths: 9,
            },
            prizeMoney: 2500,
            finalOdds: 162.69,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 16269,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1994,
              maxOdds: 1994,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 15,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904760901029",
              timestamp: "2024-09-25T21:01:47",
            },
          ],
        },
        {
          id: "2024-09-25_5_10_8",
          number: 8,
          postPosition: 8,
          distance: 1640,
          horse: {
            id: 772442,
            name: "Kattens Aladin",
            age: 5,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 1,
              },
            },
            trainer: {
              id: 43092,
              firstName: "Tomas",
              lastName: "Rosén",
              shortName: "Ros To",
              location: "Tierp",
              birth: 1968,
              homeTrack: {
                id: 16,
                name: "Gävle",
              },
              license: "A-tränare: träna, köra",
              silks: "Ljusblå, blått axelskärp; ljusblå",
              statistics: {
                years: {
                  "2023": {
                    starts: 77,
                    earnings: 38900000,
                    placement: {
                      "3": 7,
                      "2": 4,
                      "1": 4,
                    },
                    winPercentage: 519,
                  },
                  "2024": {
                    starts: 125,
                    earnings: 63950000,
                    placement: {
                      "3": 8,
                      "2": 11,
                      "1": 3,
                    },
                    winPercentage: 240,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 321500,
            color: "mörkbrun",
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            owner: {
              id: 687915,
              name: "Rosén Tomas",
              location: "Tierp",
            },
            breeder: {
              id: 687915,
              name: "Rosén Tomas",
              location: "Tierp",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 11,
                  earnings: 6550000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 1,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 7,
                      },
                      place: 6,
                    },
                  ],
                },
                "2024": {
                  starts: 12,
                  earnings: 12100000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 5,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 7,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 36,
                earnings: 32150000,
                placement: {
                  "3": 3,
                  "2": 3,
                  "1": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 1,
                    },
                    place: 7,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 9,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2024",
                  },
                ],
                winPercentage: 1388,
                placePercentage: 3055,
                earningsPerStart: 893055,
                startPoints: 585,
              },
              lastFiveStarts: {
                averageOdds: 2529,
              },
            },
            pedigree: {
              father: {
                id: 762364,
                name: "King on the Hill",
                nationality: "US",
              },
              mother: {
                id: 738307,
                name: "Praline",
              },
              grandfather: {
                id: 581297,
                name: "Chocolatier",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 43092,
            firstName: "Tomas",
            lastName: "Rosén",
            shortName: "Ros To",
            location: "Tierp",
            birth: 1968,
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            license: "A-tränare: träna, köra",
            silks: "Ljusblå, blått axelskärp; ljusblå",
            statistics: {
              years: {
                "2023": {
                  starts: 57,
                  earnings: 28370000,
                  placement: {
                    "3": 6,
                    "2": 2,
                    "1": 3,
                  },
                  winPercentage: 526,
                },
                "2024": {
                  starts: 84,
                  earnings: 48170000,
                  placement: {
                    "3": 4,
                    "2": 9,
                    "1": 3,
                  },
                  winPercentage: 357,
                },
              },
            },
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 12,
              tenths: 7,
            },
            prizeMoney: 5000,
            finalOdds: 119.89,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 11989,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1628,
              maxOdds: 1628,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 19,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904751685070",
              timestamp: "2024-09-25T20:29:12",
            },
            {
              mediaId: "1904752709472",
              timestamp: "2024-09-25T20:38:15",
            },
          ],
        },
        {
          id: "2024-09-25_5_10_9",
          number: 9,
          postPosition: 9,
          distance: 1640,
          horse: {
            id: 780818,
            name: "Can Can Broline",
            age: 4,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 1,
              },
            },
            trainer: {
              id: 143673,
              firstName: "Hanna",
              lastName: "Rexhammar",
              shortName: "Rex Ha",
              location: "Stockholm",
              birth: 1966,
              homeTrack: {
                id: 23,
                name: "Romme",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2023": {
                    starts: 14,
                    earnings: 37150000,
                    placement: {
                      "3": 1,
                      "2": 2,
                      "1": 5,
                    },
                    winPercentage: 3571,
                  },
                  "2024": {
                    starts: 27,
                    earnings: 80915000,
                    placement: {
                      "3": 5,
                      "2": 2,
                      "1": 10,
                    },
                    winPercentage: 3703,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: true,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 473750,
            color: "brun",
            homeTrack: {
              id: 23,
              name: "Romme",
            },
            owner: {
              id: 184527,
              name: "Armanbo AB",
              location: "Sala",
            },
            breeder: {
              id: 234435,
              name: "Broline International AB",
              location: "Svenljunga",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 9,
                  earnings: 15500000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 1,
                    },
                  ],
                },
                "2024": {
                  starts: 12,
                  earnings: 31875000,
                  placement: {
                    "3": 3,
                    "2": 1,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 1,
                      },
                      place: 1,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 21,
                earnings: 47375000,
                placement: {
                  "3": 4,
                  "2": 2,
                  "1": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 9,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 6,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 8,
                    },
                    place: 3,
                    year: "2024",
                  },
                ],
                winPercentage: 2380,
                placePercentage: 5238,
                earningsPerStart: 2255952,
                startPoints: 1687,
              },
              lastFiveStarts: {
                averageOdds: 527,
              },
            },
            pedigree: {
              father: {
                id: 745445,
                name: "Twister Bi",
                nationality: "IT",
              },
              mother: {
                id: 735539,
                name: "Dodger Blues",
                nationality: "US",
              },
              grandfather: {
                id: 444412,
                name: "Muscles Yankee",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 177032,
            firstName: "Claes",
            lastName: "Sjöström",
            shortName: "Sjö Cl",
            location: "Rimbo",
            birth: 1976,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, orange fält, axelkl. och ärmb.; sv",
            statistics: {
              years: {
                "2023": {
                  starts: 744,
                  earnings: 1197590200,
                  placement: {
                    "3": 82,
                    "2": 82,
                    "1": 101,
                  },
                  winPercentage: 1357,
                },
                "2024": {
                  starts: 586,
                  earnings: 1022926000,
                  placement: {
                    "3": 55,
                    "2": 81,
                    "1": 77,
                  },
                  winPercentage: 1313,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 5,
            },
            prizeMoney: 22500,
            finalOdds: 3.09,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 309,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 148,
              maxOdds: 148,
              odds: 148,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 3910,
              potentialPayout: {
                value: 18322800,
              },
            },
          },
          videos: [
            {
              mediaId: "1904742469382",
              timestamp: "2024-09-25T20:08:06",
            },
            {
              mediaId: "1904751173015",
              timestamp: "2024-09-25T20:18:16",
            },
            {
              mediaId: "1904751173329",
              timestamp: "2024-09-25T20:28:57",
            },
            {
              mediaId: "1904751685419",
              timestamp: "2024-09-25T20:40:57",
            },
            {
              mediaId: "1904755781219",
              timestamp: "2024-09-25T20:50:18",
            },
          ],
        },
        {
          id: "2024-09-25_5_10_10",
          number: 10,
          postPosition: 10,
          distance: 1640,
          horse: {
            id: 765178,
            name: "Amaru Surprise",
            age: 6,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 9,
              },
            },
            trainer: {
              id: 54861,
              firstName: "Clas Göran",
              lastName: "Andersson",
              shortName: "And CG",
              location: "Grillby",
              birth: 1947,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "B-tränare: träna, köra för bolag",
              silks: "Röd, grå stjärna i vit rundel; röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 18,
                    earnings: 7200000,
                    placement: {
                      "3": 2,
                      "2": 2,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                  "2024": {
                    starts: 20,
                    earnings: 6510000,
                    placement: {
                      "3": 1,
                      "2": 1,
                      "1": 1,
                    },
                    winPercentage: 500,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 291953,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 219797,
              name: "Andersson Anita",
              location: "Grillby",
            },
            breeder: {
              id: 207456,
              name: "Lindén Gerhard",
              location: "Broddetorp",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 18,
                  earnings: 7200000,
                  placement: {
                    "3": 2,
                    "2": 2,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 6,
                      },
                      place: 0,
                    },
                  ],
                },
                "2024": {
                  starts: 20,
                  earnings: 6510000,
                  placement: {
                    "3": 1,
                    "2": 1,
                    "1": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 9,
                      },
                      place: 5,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 6,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 76,
                earnings: 29195300,
                placement: {
                  "3": 7,
                  "2": 5,
                  "1": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 5,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 5,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 1,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 4,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 4,
                    year: "2022",
                  },
                ],
                winPercentage: 263,
                placePercentage: 1842,
                earningsPerStart: 384148,
                startPoints: 305,
              },
              lastFiveStarts: {
                averageOdds: 7040,
              },
            },
            pedigree: {
              father: {
                id: 631019,
                name: "Amaru Boko",
              },
              mother: {
                id: 194378,
                name: "Lobella Gothia",
              },
              grandfather: {
                id: 148365,
                name: "Spotlite Lobell",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 67192,
            firstName: "Örjan",
            lastName: "Kihlström",
            shortName: "Kih Ör",
            location: "Bromma",
            birth: 1962,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Turkos, vitt axelparti, 2-del ärm; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 1012,
                  earnings: 4650930500,
                  placement: {
                    "3": 108,
                    "2": 124,
                    "1": 200,
                  },
                  winPercentage: 1976,
                },
                "2024": {
                  starts: 748,
                  earnings: 3864039300,
                  placement: {
                    "3": 81,
                    "2": 98,
                    "1": 131,
                  },
                  winPercentage: 1751,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 10,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 5,
            },
            prizeMoney: 2500,
            finalOdds: 63.73,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 6373,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1200,
              maxOdds: 1200,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 55,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904752709326",
              timestamp: "2024-09-25T20:36:14",
            },
          ],
        },
        {
          id: "2024-09-25_5_10_11",
          number: 11,
          postPosition: 11,
          distance: 1640,
          horse: {
            id: 806284,
            name: "Eldorado Jet",
            nationality: "IT",
            age: 4,
            sex: "stallion",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 3,
              },
            },
            trainer: {
              id: 594966,
              firstName: "Alessandro",
              lastName: "Gocciadoro",
              shortName: "Goc Al",
              location: "Italien",
              birth: 1975,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Gul, röd; röd",
              statistics: {
                years: {
                  "2023": {
                    starts: 267,
                    earnings: 2018708200,
                    placement: {
                      "3": 29,
                      "2": 52,
                      "1": 73,
                    },
                    winPercentage: 2734,
                  },
                  "2024": {
                    starts: 272,
                    earnings: 2170571200,
                    placement: {
                      "3": 31,
                      "2": 43,
                      "1": 74,
                    },
                    winPercentage: 2720,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 324613,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 843582,
              name: "Villani Group SRL",
              location: "Italien",
            },
            breeder: {
              id: 710662,
              name: "Az. Agr. Toniatti Giacometti",
              location: "Italien",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 17,
                  earnings: 21806100,
                  placement: {
                    "3": 2,
                    "2": 2,
                    "1": 5,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 3,
                    },
                  ],
                },
                "2024": {
                  starts: 7,
                  earnings: 10655200,
                  placement: {
                    "3": 0,
                    "2": 0,
                    "1": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 3,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 24,
                earnings: 32461300,
                placement: {
                  "3": 2,
                  "2": 2,
                  "1": 8,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 3,
                    },
                    place: 4,
                    year: "2024",
                  },
                ],
                winPercentage: 3333,
                placePercentage: 5000,
                earningsPerStart: 1352554,
                startPoints: 2313,
              },
              lastFiveStarts: {
                averageOdds: 243,
              },
            },
            pedigree: {
              father: {
                id: 745445,
                name: "Twister Bi",
                nationality: "IT",
              },
              mother: {
                id: 806283,
                name: "Rangona Jet",
                nationality: "IT",
              },
              grandfather: {
                id: 130525,
                name: "Pine Chip",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 740606,
            firstName: "Magnus A",
            lastName: "Djuse",
            shortName: "Dju MA",
            location: "Upplands Väsby",
            birth: 2000,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Mörkblå, vitt axelparti; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 1501,
                  earnings: 4916246500,
                  placement: {
                    "3": 170,
                    "2": 213,
                    "1": 279,
                  },
                  winPercentage: 1858,
                },
                "2024": {
                  starts: 1184,
                  earnings: 3438762500,
                  placement: {
                    "3": 112,
                    "2": 154,
                    "1": 231,
                  },
                  winPercentage: 1951,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 3,
            },
            prizeMoney: 60000,
            finalOdds: 3.13,
            startNumber: 11,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 313,
              finalOdds: 156,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 152,
              maxOdds: 152,
              odds: 152,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2846,
              potentialPayout: {
                value: 30304300,
              },
            },
          },
          videos: [
            {
              mediaId: "1904751173339",
              timestamp: "2024-09-25T20:30:17",
            },
            {
              mediaId: "1904753221138",
              timestamp: "2024-09-25T20:40:04",
            },
          ],
        },
        {
          id: "2024-09-25_5_10_12",
          number: 12,
          postPosition: 12,
          distance: 1640,
          horse: {
            id: 779204,
            name: "Blue Star Wonder",
            age: 4,
            sex: "stallion",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 0,
              },
            },
            trainer: {
              id: 91845,
              firstName: "Anders",
              lastName: "Högberg",
              shortName: "Hög An",
              location: "Luxemburg",
              birth: 1959,
              homeTrack: {
                id: 16,
                name: "Gävle",
              },
              license: "B-tränare: träna, köra",
              silks: "Vit, vinklar röd,vit,blå, röd ärm; vit",
              statistics: {
                years: {
                  "2023": {
                    starts: 48,
                    earnings: 37753900,
                    placement: {
                      "3": 3,
                      "2": 2,
                      "1": 2,
                    },
                    winPercentage: 416,
                  },
                  "2024": {
                    starts: 29,
                    earnings: 7850000,
                    placement: {
                      "3": 2,
                      "2": 1,
                      "1": 0,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 175300,
            color: "brun",
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            owner: {
              id: 734660,
              name: "Högberg Anders",
            },
            breeder: {
              id: 217557,
              name: "Leonhaupt Claes",
              location: "Täby",
            },
            statistics: {
              years: {
                "2023": {
                  starts: 17,
                  earnings: 12080000,
                  placement: {
                    "3": 1,
                    "2": 0,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 4,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 7,
                      },
                      place: 3,
                    },
                  ],
                },
                "2024": {
                  starts: 14,
                  earnings: 5450000,
                  placement: {
                    "3": 2,
                    "2": 1,
                    "1": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 31,
                earnings: 17530000,
                placement: {
                  "3": 3,
                  "2": 1,
                  "1": 0,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 0,
                    year: "2024",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 3,
                    year: "2024",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2024",
                  },
                ],
                winPercentage: 0,
                placePercentage: 1290,
                earningsPerStart: 565483,
                startPoints: 400,
              },
              lastFiveStarts: {
                averageOdds: 6791,
              },
            },
            pedigree: {
              father: {
                id: 703365,
                name: "Pojke Kronos",
                nationality: "IT",
              },
              mother: {
                id: 652663,
                name: "French Call",
              },
              grandfather: {
                id: 628251,
                name: "Offshore Dream",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 91845,
            firstName: "Anders",
            lastName: "Högberg",
            shortName: "Hög An",
            location: "Luxemburg",
            birth: 1959,
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            license: "B-tränare: träna, köra",
            silks: "Vit, vinklar röd,vit,blå, röd ärm; vit",
            statistics: {
              years: {
                "2023": {
                  starts: 53,
                  earnings: 39853900,
                  placement: {
                    "3": 4,
                    "2": 2,
                    "1": 2,
                  },
                  winPercentage: 377,
                },
                "2024": {
                  starts: 36,
                  earnings: 10850000,
                  placement: {
                    "3": 2,
                    "2": 2,
                    "1": 0,
                  },
                  winPercentage: 0,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 12,
            kmTime: {
              minutes: 1,
              seconds: 15,
              tenths: 2,
            },
            galloped: true,
            prizeMoney: 2500,
            finalOdds: 279.38,
            startNumber: 12,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 27938,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 3339,
              maxOdds: 3339,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 9,
              potentialPayout: {
                jackpot: true,
              },
            },
          },
          videos: [
            {
              mediaId: "1904758853073",
              timestamp: "2024-09-25T20:59:46",
            },
            {
              mediaId: "1904761413018",
              timestamp: "2024-09-25T21:10:19",
            },
          ],
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
  ],
  version: 1727334260407,
  newBettingSystem: true,
  type: "V86",
};
