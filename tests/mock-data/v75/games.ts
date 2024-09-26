export default {
  "@type": ".Game",
  "id": "V75_2024-09-21_15_5",
  "status": "results",
  "pools": {
    "V75": {
      "@type": ".MarkingBetPool",
      "id": "V75_2024-09-21_15_5",
      "status": "results",
      "timestamp": "2024-09-21 19:05:30",
      "turnover": 9015691200,
      "addOns": ["boost"],
      "result": {
        "@type": ".MarkingBetResult",
        "payouts": {
          "5": {
            "systems": 378821,
            "payout": 6100
          },
          "6": {
            "systems": 21332,
            "payout": 54900
          },
          "7": {
            "systems": 471,
            "payout": 4970000
          }
        },
        "boostInfo": {
          "boostCode": "635",
          "boostPayouts": [
            {
              "correct": 7,
              "amount": 49700000,
              "multiplier": 10
            },
            {
              "correct": 6,
              "amount": 5490000,
              "multiplier": 100
            },
            {
              "correct": 5,
              "amount": 610000,
              "multiplier": 100
            }
          ],
          "resultComplete": true
        }
      },
      "betType": "V75",
      "harry": false,
      "systemCount": 1308626,
      "payouts": {
        "5": 2344079700,
        "6": 1172039800,
        "7": 2344079700
      },
      "potentialPayoutRaceId": "2024-09-21_15_11"
    }
  },
  "races": [
    {
      "id": "2024-09-21_15_5",
      "name": "BKE StjärnaFyrkant - STL Silverdivisionen (Försök 8 i Meeting 6 - Final Solvalla 12 oktober)",
      "date": "2024-09-21",
      "number": 5,
      "distance": 2140,
      "startMethod": "auto",
      "startTime": "2024-09-21T16:20:17",
      "scheduledStartTime": "2024-09-21T16:20:00",
      "prize": "Pris: 125.000-62.500-34.000-21.000-13.500-10.500-7.000-5.000 kr (8 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 288.500 kr.",
      "terms": [
        "3-åriga och äldre 500.001 - 1.700.000 kr. Körsvenskrav kat. 1. Körsvenner födda 060921 eller tidigare.",
        "Svenska Travligans hederspris till segrande hästs ägare och hästskötare.",
        "2140 m. Autostart. 12 startande."
      ],
      "sport": "trot",
      "track": {
        "id": 15,
        "name": "Färjestad",
        "condition": "light",
        "countryCode": "SE"
      },
      "result": {
        "victoryMargin": "1.5 längd",
        "scratchings": [7]
      },
      "status": "results",
      "mediaId": "1900658245065",
      "pools": {
        "vinnare": {
          "@type": ".VinnarePool",
          "id": "vinnare_2024-09-21_15_5",
          "status": "results",
          "timestamp": "2024-09-21 16:25:50",
          "turnover": 109641500,
          "result": {
            "@type": ".VinnarePoolRaceResult",
            "winners": [
              {
                "number": 2,
                "odds": 402
              }
            ]
          },
          "betType": "vinnare"
        },
        "plats": {
          "@type": ".PlatsPool",
          "id": "plats_2024-09-21_15_5",
          "status": "results",
          "timestamp": "2024-09-21 16:25:50",
          "turnover": 109641500,
          "result": {
            "@type": ".PlatsPoolRaceResult",
            "winners": {
              "first": [
                {
                  "number": 2,
                  "odds": 161
                }
              ],
              "second": [
                {
                  "number": 3,
                  "odds": 247
                }
              ],
              "third": [
                {
                  "number": 6,
                  "odds": 340
                }
              ]
            }
          },
          "betType": "plats"
        },
        "tvilling": {
          "@type": ".TvillingPool",
          "id": "tvilling_2024-09-21_15_5",
          "status": "results",
          "timestamp": "2024-09-21 16:28:43",
          "turnover": 109641500,
          "result": {
            "@type": ".TvillingPoolRaceResult",
            "winners": [
              {
                "combination": [2, 3],
                "odds": 2025
              }
            ]
          },
          "betType": "tvilling"
        },
        "komb": {
          "@type": ".KombPool",
          "id": "komb_2024-09-21_15_5",
          "status": "results",
          "timestamp": "2024-09-21 16:28:42",
          "turnover": 109641500,
          "result": {
            "@type": ".KombPoolRaceResult",
            "winners": [
              {
                "combination": [2, 3],
                "odds": 3381
              }
            ]
          },
          "betType": "komb"
        },
        "trio": {
          "@type": ".TrioPool",
          "id": "trio_2024-09-21_15_5",
          "status": "results",
          "timestamp": "2024-09-21 16:28:43",
          "turnover": 109641500,
          "result": {
            "@type": ".TrioPoolRaceResult",
            "winners": [
              {
                "combination": [2, 3, 6],
                "odds": 26468
              }
            ]
          },
          "betType": "trio"
        },
        "V75": {
          "@type": ".Pool",
          "result": {
            "@type": ".MarkingBetRacePoolResult",
            "systems": "615821",
            "value": {
              "amount": 3800
            },
            "winners": [2],
            "reserveOrder": [5, 2, 1, 3, 6, 9, 4, 8, 11, 12, 10, 7]
          }
        }
      },
      "starts": [
        {
          "id": "2024-09-21_15_5_1",
          "number": 1,
          "postPosition": 1,
          "distance": 2140,
          "horse": {
            "id": 796740,
            "name": "Canopus N.O.",
            "nationality": "NO",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 99400,
              "firstName": "Frode",
              "lastName": "Hamre",
              "shortName": "Ham Fr",
              "location": "Norge",
              "birth": 1964,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Ljusblå, mörkblå axelparti och ärm; vit"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 1106119,
            "color": "brun",
            "owner": {
              "id": 226009,
              "name": "Sissener Jan Petter",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 10,
                  "earnings": 26637000,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 5
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 64242100,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 7
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 5
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 1
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 28,
                "earnings": 110611900,
                "placement": {
                  "3": 4,
                  "2": 6,
                  "1": 15
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 5357,
                "placePercentage": 8928,
                "earningsPerStart": 3950425,
                "startPoints": 5123
              },
              "lastFiveStarts": {
                "averageOdds": 544
              }
            },
            "pedigree": {
              "father": {
                "id": 741711,
                "name": "Trixton",
                "nationality": "US"
              },
              "mother": {
                "id": 768904,
                "name": "Cabaret Princess",
                "nationality": "US"
              },
              "grandfather": {
                "id": 444553,
                "name": "Yankee Glide",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 98570,
            "firstName": "Vidar",
            "lastName": "Hop",
            "shortName": "Hop Vi",
            "location": "Norge",
            "birth": 1958,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Vit, blå axelp och ärmar; blå"
          },
          "result": {
            "place": 5,
            "finishOrder": 5,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 5
            },
            "prizeMoney": 13500,
            "finalOdds": 4.64,
            "startNumber": 1
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 464
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 185,
              "maxOdds": 185
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1162
            }
          },
          "videos": [
            {
              "mediaId": "1900626501042",
              "timestamp": "2024-09-21T15:24:08"
            },
            {
              "mediaId": "1900632133421",
              "timestamp": "2024-09-21T15:33:43"
            }
          ]
        },
        {
          "id": "2024-09-21_15_5_2",
          "number": 2,
          "postPosition": 2,
          "distance": 2140,
          "horse": {
            "id": 771502,
            "name": "Jikken",
            "age": 5,
            "sex": "stallion",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 185518,
              "firstName": "Daniel",
              "lastName": "Redén",
              "shortName": "Red Da",
              "location": "Örsundsbro",
              "birth": 1979,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Brun, sv axelp och vita hängsl; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 513,
                    "earnings": 3369779100,
                    "placement": {
                      "3": 61,
                      "2": 72,
                      "1": 147
                    },
                    "winPercentage": 2865
                  },
                  "2024": {
                    "starts": 528,
                    "earnings": 3436221200,
                    "placement": {
                      "3": 59,
                      "2": 86,
                      "1": 141
                    },
                    "winPercentage": 2670
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 1338500,
            "color": "svart",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 189279,
              "name": "Stall Zet (Redén Daniel)"
            },
            "breeder": {
              "id": 686741,
              "name": "Am Bloodstock AB",
              "location": "Stockholm"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 11,
                  "earnings": 43900000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 1
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 8
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 7,
                  "earnings": 40400000,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 9
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 29,
                "earnings": 133850000,
                "placement": {
                  "3": 2,
                  "2": 2,
                  "1": 11
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 7
                    },
                    "place": 1,
                    "year": "2022"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 9
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 6
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 3793,
                "placePercentage": 5172,
                "earningsPerStart": 4615517,
                "startPoints": 4915
              },
              "lastFiveStarts": {
                "averageOdds": 587
              }
            },
            "pedigree": {
              "father": {
                "id": 745530,
                "name": "Propulsion",
                "nationality": "US"
              },
              "mother": {
                "id": 720866,
                "name": "Darling Hornline"
              },
              "grandfather": {
                "id": 667295,
                "name": "Ready Cash",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 125542,
            "firstName": "Erik",
            "lastName": "Adielsson",
            "shortName": "Adi Er",
            "location": "Upplands Väsby",
            "birth": 1974,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Blå, vita ärmbindlar; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 530,
                  "earnings": 2095922500,
                  "placement": {
                    "3": 54,
                    "2": 50,
                    "1": 58
                  },
                  "winPercentage": 1094
                },
                "2024": {
                  "starts": 422,
                  "earnings": 1496106300,
                  "placement": {
                    "3": 54,
                    "2": 30,
                    "1": 42
                  },
                  "winPercentage": 995
                }
              }
            }
          },
          "result": {
            "place": 1,
            "finishOrder": 1,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 0
            },
            "prizeMoney": 125000,
            "finalOdds": 4.02,
            "startNumber": 2
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 402,
              "finalOdds": 402
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 161,
              "maxOdds": 161,
              "odds": 161
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 2961
            }
          }
        },
        {
          "id": "2024-09-21_15_5_3",
          "number": 3,
          "postPosition": 3,
          "distance": 2140,
          "horse": {
            "id": 772611,
            "name": "H.C.'s Crazy Horse",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 189679,
              "firstName": "Daniel",
              "lastName": "Wäjersten",
              "shortName": "Wäj Da",
              "location": "Kovland",
              "birth": 1990,
              "homeTrack": {
                "id": 9,
                "name": "Bergsåker"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Blå, vitt axelparti och silver vinkel; blå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 704,
                    "earnings": 2573119000,
                    "placement": {
                      "3": 83,
                      "2": 121,
                      "1": 173
                    },
                    "winPercentage": 2457
                  },
                  "2024": {
                    "starts": 594,
                    "earnings": 2764762100,
                    "placement": {
                      "3": 76,
                      "2": 91,
                      "1": 159
                    },
                    "winPercentage": 2676
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 1433000,
            "color": "brun",
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "owner": {
              "id": 806724,
              "name": "Systemutveckling I Floda AB"
            },
            "breeder": {
              "id": 791264,
              "name": "Systemutveckling I Floda AB"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 15,
                  "earnings": 49750000,
                  "placement": {
                    "3": 1,
                    "2": 3,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 5
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 8
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 14,
                  "earnings": 54650000,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 2
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 4
                      },
                      "place": 4
                    }
                  ]
                }
              },
              "life": {
                "starts": 40,
                "earnings": 143300000,
                "placement": {
                  "3": 4,
                  "2": 8,
                  "1": 9
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 2
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 7
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 3
                    },
                    "place": 4,
                    "year": "2023"
                  }
                ],
                "winPercentage": 2250,
                "placePercentage": 5250,
                "earningsPerStart": 3582500,
                "startPoints": 3830
              },
              "lastFiveStarts": {
                "averageOdds": 1458
              }
            },
            "pedigree": {
              "father": {
                "id": 553396,
                "name": "S.J.'s Caviar",
                "nationality": "US"
              },
              "mother": {
                "id": 722353,
                "name": "Harpos Lafayette"
              },
              "grandfather": {
                "id": 530240,
                "name": "Kiss Francais",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 189679,
            "firstName": "Daniel",
            "lastName": "Wäjersten",
            "shortName": "Wäj Da",
            "location": "Kovland",
            "birth": 1990,
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Blå, vitt axelparti och silver vinkel; blå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 657,
                  "earnings": 2096837100,
                  "placement": {
                    "3": 80,
                    "2": 95,
                    "1": 132
                  },
                  "winPercentage": 2009
                },
                "2024": {
                  "starts": 527,
                  "earnings": 2188082000,
                  "placement": {
                    "3": 71,
                    "2": 71,
                    "1": 117
                  },
                  "winPercentage": 2220
                }
              }
            }
          },
          "result": {
            "place": 2,
            "finishOrder": 2,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 1
            },
            "prizeMoney": 62500,
            "finalOdds": 10.03,
            "startNumber": 3
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1003
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 247,
              "maxOdds": 247,
              "odds": 247
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 934
            }
          },
          "videos": [
            {
              "mediaId": "1900628037287",
              "timestamp": "2024-09-21T15:31:55"
            },
            {
              "mediaId": "1900639301416",
              "timestamp": "2024-09-21T15:41:34"
            },
            {
              "mediaId": "1900644933331",
              "timestamp": "2024-09-21T15:52:16"
            }
          ]
        },
        {
          "id": "2024-09-21_15_5_4",
          "number": 4,
          "postPosition": 4,
          "distance": 2140,
          "horse": {
            "id": 752927,
            "name": "Zenato",
            "age": 8,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 613239,
              "firstName": "Bengt",
              "lastName": "Berg",
              "shortName": "Ber Be",
              "location": "Karlstad",
              "birth": 1959,
              "homeTrack": {
                "id": 15,
                "name": "Färjestad"
              },
              "license": "B-tränare: träna, köra för bolag",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 44,
                    "earnings": 49930000,
                    "placement": {
                      "3": 6,
                      "2": 5,
                      "1": 7
                    },
                    "winPercentage": 1590
                  },
                  "2024": {
                    "starts": 31,
                    "earnings": 40390000,
                    "placement": {
                      "3": 4,
                      "2": 5,
                      "1": 2
                    },
                    "winPercentage": 645
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": true
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 1344461,
            "color": "brun",
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "owner": {
              "id": 805519,
              "name": "Stall Flacking & Berg AB",
              "location": "Karlstad"
            },
            "breeder": {
              "id": 613240,
              "name": "Berg Bengt",
              "location": "Karlstad"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 15,
                  "earnings": 24850000,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 9
                      },
                      "place": 7
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 6
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 26350000,
                  "placement": {
                    "3": 1,
                    "2": 4,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 8
                      },
                      "place": 2
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 3
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 69,
                "earnings": 134446100,
                "placement": {
                  "3": 10,
                  "2": 15,
                  "1": 14
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 5
                    },
                    "place": 5,
                    "year": "2022"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 9
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 2,
                    "year": "2022"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 6
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 8
                    },
                    "place": 7,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 3
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2028,
                "placePercentage": 5652,
                "earningsPerStart": 1948494,
                "startPoints": 1175
              },
              "lastFiveStarts": {
                "averageOdds": 2087
              }
            },
            "pedigree": {
              "father": {
                "id": 621754,
                "name": "Gift Kronos",
                "nationality": "IT"
              },
              "mother": {
                "id": 593709,
                "name": "Blue Note"
              },
              "grandfather": {
                "id": 505143,
                "name": "Fast Photo",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 740606,
            "firstName": "Magnus A",
            "lastName": "Djuse",
            "shortName": "Dju MA",
            "location": "Upplands Väsby",
            "birth": 2000,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Mörkblå, vitt axelparti; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1501,
                  "earnings": 4916246500,
                  "placement": {
                    "3": 170,
                    "2": 213,
                    "1": 279
                  },
                  "winPercentage": 1858
                },
                "2024": {
                  "starts": 1163,
                  "earnings": 3358662500,
                  "placement": {
                    "3": 112,
                    "2": 150,
                    "1": 223
                  },
                  "winPercentage": 1917
                }
              }
            }
          },
          "result": {
            "place": 8,
            "finishOrder": 8,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 7
            },
            "prizeMoney": 5000,
            "finalOdds": 36.02,
            "startNumber": 4
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3602
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 485,
              "maxOdds": 485
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 233
            }
          },
          "videos": [
            {
              "mediaId": "1900625477106",
              "timestamp": "2024-09-21T15:24:26"
            },
            {
              "mediaId": "1900637253068",
              "timestamp": "2024-09-21T15:34:42"
            }
          ]
        },
        {
          "id": "2024-09-21_15_5_5",
          "number": 5,
          "postPosition": 5,
          "distance": 2140,
          "horse": {
            "id": 765326,
            "name": "Lozano di Quattro",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 9,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 42692,
              "firstName": "Per K",
              "lastName": "Eriksson",
              "shortName": "Eri PK",
              "location": "Gammalkil",
              "birth": 1960,
              "homeTrack": {
                "id": 22,
                "name": "Mantorp"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Röd, vit romb, svarta ärmar; vit",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 23,
                    "earnings": 86800000,
                    "placement": {
                      "3": 3,
                      "2": 5,
                      "1": 6
                    },
                    "winPercentage": 2608
                  },
                  "2024": {
                    "starts": 13,
                    "earnings": 47450000,
                    "placement": {
                      "3": 2,
                      "2": 1,
                      "1": 5
                    },
                    "winPercentage": 3846
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 1681300,
            "color": "brun",
            "homeTrack": {
              "id": 22,
              "name": "Mantorp"
            },
            "owner": {
              "id": 214680,
              "name": "Eriksson Per K",
              "location": "Gammalkil"
            },
            "breeder": {
              "id": 599938,
              "name": "Stal Quattro V.O.F.",
              "location": "Nederländerna"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 14,
                  "earnings": 81750000,
                  "placement": {
                    "3": 0,
                    "2": 5,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 0
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 2
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 47150000,
                  "placement": {
                    "3": 2,
                    "2": 1,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 9,
                        "tenths": 9
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 40,
                "earnings": 168130000,
                "placement": {
                  "3": 3,
                  "2": 11,
                  "1": 14
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 9,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 8
                    },
                    "place": 0,
                    "year": "2022"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 2
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2022"
                  }
                ],
                "winPercentage": 3500,
                "placePercentage": 7000,
                "earningsPerStart": 4203250,
                "startPoints": 4025
              },
              "lastFiveStarts": {
                "averageOdds": 274
              }
            },
            "pedigree": {
              "father": {
                "id": 741711,
                "name": "Trixton",
                "nationality": "US"
              },
              "mother": {
                "id": 725927,
                "name": "Outlook Kronos",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 603016,
                "name": "Cantab Hall",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 526406,
            "firstName": "Tobias J",
            "lastName": "Gustafsson",
            "shortName": "Gus TJ",
            "location": "Klockrike",
            "birth": 1982,
            "homeTrack": {
              "id": 22,
              "name": "Mantorp"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Vit,sv axelp och lodrätt fält,röd ärm; sv",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 95,
                  "earnings": 125690000,
                  "placement": {
                    "3": 7,
                    "2": 12,
                    "1": 8
                  },
                  "winPercentage": 842
                },
                "2024": {
                  "starts": 47,
                  "earnings": 61440000,
                  "placement": {
                    "3": 4,
                    "2": 1,
                    "1": 8
                  },
                  "winPercentage": 1702
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 9,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 7
            },
            "prizeMoney": 2500,
            "finalOdds": 2.63,
            "startNumber": 5
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 263
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 140,
              "maxOdds": 140
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 3243
            }
          },
          "videos": [
            {
              "mediaId": "1900610629395",
              "timestamp": "2024-09-21T15:05:36"
            },
            {
              "mediaId": "1900617285213",
              "timestamp": "2024-09-21T15:13:42"
            },
            {
              "mediaId": "1900624453272",
              "timestamp": "2024-09-21T15:24:28"
            }
          ]
        },
        {
          "id": "2024-09-21_15_5_6",
          "number": 6,
          "postPosition": 6,
          "distance": 2140,
          "horse": {
            "id": 774597,
            "name": "Sandokan",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 528293,
              "firstName": "David",
              "lastName": "Persson",
              "shortName": "Per Da",
              "location": "Kvänum",
              "birth": 1984,
              "homeTrack": {
                "id": 8,
                "name": "Axevalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Grön, blå/vita korsl.axelsk; grön",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 328,
                    "earnings": 486578000,
                    "placement": {
                      "3": 47,
                      "2": 25,
                      "1": 57
                    },
                    "winPercentage": 1737
                  },
                  "2024": {
                    "starts": 215,
                    "earnings": 439149000,
                    "placement": {
                      "3": 21,
                      "2": 29,
                      "1": 37
                    },
                    "winPercentage": 1720
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 974000,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "owner": {
              "id": 828155,
              "name": "Stall David Persson AB"
            },
            "breeder": {
              "id": 227883,
              "name": "Herz Günter",
              "location": "Tyskland"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 13,
                  "earnings": 50600000,
                  "placement": {
                    "3": 3,
                    "2": 1,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aL",
                      "startMethod": "auto",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 9
                      },
                      "place": 3
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 2
                      },
                      "place": 7
                    }
                  ]
                },
                "2024": {
                  "starts": 15,
                  "earnings": 41650000,
                  "placement": {
                    "3": 0,
                    "2": 3,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 5
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 32,
                "earnings": 97400000,
                "placement": {
                  "3": 3,
                  "2": 4,
                  "1": 11
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 6
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 8
                    },
                    "place": 6,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 2
                    },
                    "place": 7,
                    "year": "2023"
                  }
                ],
                "winPercentage": 3437,
                "placePercentage": 5625,
                "earningsPerStart": 3043750,
                "startPoints": 2490
              },
              "lastFiveStarts": {
                "averageOdds": 485
              }
            },
            "pedigree": {
              "father": {
                "id": 588796,
                "name": "Maharajah"
              },
              "mother": {
                "id": 754274,
                "name": "Jobi",
                "nationality": "DE"
              },
              "grandfather": {
                "id": 463269,
                "name": "Varenne",
                "nationality": "IT"
              }
            }
          },
          "driver": {
            "id": 657235,
            "firstName": "Emilia",
            "lastName": "Leo",
            "shortName": "Leo Em",
            "location": "Borlänge",
            "birth": 1992,
            "homeTrack": {
              "id": 23,
              "name": "Romme"
            },
            "license": "A-tränare: träna, köra, rida",
            "silks": "Svart, guld bröstband och stj. ärm; silver",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 364,
                  "earnings": 478150000,
                  "placement": {
                    "3": 47,
                    "2": 51,
                    "1": 57
                  },
                  "winPercentage": 1565
                },
                "2024": {
                  "starts": 294,
                  "earnings": 414865000,
                  "placement": {
                    "3": 33,
                    "2": 34,
                    "1": 55
                  },
                  "winPercentage": 1870
                }
              }
            }
          },
          "result": {
            "place": 3,
            "finishOrder": 3,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 3
            },
            "prizeMoney": 34000,
            "finalOdds": 14.93,
            "startNumber": 6
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1493
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 340,
              "maxOdds": 340,
              "odds": 340
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 655
            }
          },
          "videos": [
            {
              "mediaId": "1900625477085",
              "timestamp": "2024-09-21T15:24:08"
            },
            {
              "mediaId": "1900630597168",
              "timestamp": "2024-09-21T15:33:10"
            },
            {
              "mediaId": "1900637765428",
              "timestamp": "2024-09-21T15:42:17"
            }
          ]
        },
        {
          "id": "2024-09-21_15_5_7",
          "number": 7,
          "scratched": true,
          "postPosition": 7,
          "distance": 2140,
          "horse": {
            "id": 785157,
            "name": "Skate Trix",
            "nationality": "US",
            "age": 6,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 0
              }
            },
            "trainer": {
              "id": 99400,
              "firstName": "Frode",
              "lastName": "Hamre",
              "shortName": "Ham Fr",
              "location": "Norge",
              "birth": 1964,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Ljusblå, mörkblå axelparti och ärm; vit"
            },
            "shoes": {
              "reported": false
            },
            "sulky": {
              "reported": false,
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 1563327,
            "color": "mörkbrun",
            "owner": {
              "id": 226009,
              "name": "Djuve Eirik",
              "location": "Norge"
            },
            "breeder": {
              "id": 477420,
              "name": "Key Robert J, Pennsylvania",
              "location": "USA"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 19,
                  "earnings": 42305800,
                  "placement": {
                    "3": 5,
                    "2": 7,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 2
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 15,
                  "earnings": 37115500,
                  "placement": {
                    "3": 1,
                    "2": 4,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 0
                      },
                      "place": 0
                    }
                  ]
                }
              },
              "life": {
                "starts": 65,
                "earnings": 156332700,
                "placement": {
                  "3": 9,
                  "2": 15,
                  "1": 25
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 0
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "aaK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 2
                    },
                    "place": 0,
                    "year": "2021"
                  }
                ],
                "winPercentage": 3846,
                "placePercentage": 7538,
                "earningsPerStart": 2405118,
                "startPoints": 1750
              },
              "lastFiveStarts": {
                "averageOdds": 1021
              }
            },
            "pedigree": {
              "father": {
                "id": 741711,
                "name": "Trixton",
                "nationality": "US"
              },
              "mother": {
                "id": 731702,
                "name": "Pleasure Skate",
                "nationality": "US"
              },
              "grandfather": {
                "id": 161277,
                "name": "Super Pleasure",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 722458,
            "firstName": "Magnus Teien",
            "lastName": "Gundersen",
            "shortName": "Gun MT",
            "location": "Norge",
            "birth": 1996,
            "license": "Körlicens, utländsk",
            "silks": "Mörkblå, vit/röd sömmar; mblå"
          },
          "result": {
            "finishOrder": 57,
            "finalOdds": 0.0,
            "startNumber": 7
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 0
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 0,
              "maxOdds": 0
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 3
            }
          }
        },
        {
          "id": "2024-09-21_15_5_8",
          "number": 8,
          "postPosition": 7,
          "distance": 2140,
          "horse": {
            "id": 772020,
            "name": "Joe Dalton",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 120623,
              "firstName": "Stefan P",
              "lastName": "Pettersson",
              "shortName": "Pet SP",
              "location": "Mantorp",
              "birth": 1965,
              "homeTrack": {
                "id": 22,
                "name": "Mantorp"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Röd, sv bröstb och vit triangel,ärmb; röd",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 250,
                    "earnings": 504257500,
                    "placement": {
                      "3": 27,
                      "2": 40,
                      "1": 30
                    },
                    "winPercentage": 1200
                  },
                  "2024": {
                    "starts": 162,
                    "earnings": 303829000,
                    "placement": {
                      "3": 16,
                      "2": 17,
                      "1": 19
                    },
                    "winPercentage": 1172
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": true
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 1226500,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 22,
              "name": "Mantorp"
            },
            "owner": {
              "id": 593245,
              "name": "Stall Teamhoppet HB",
              "location": "Vimmerby"
            },
            "breeder": {
              "id": 686741,
              "name": "Am Bloodstock AB",
              "location": "Stockholm"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 15,
                  "earnings": 42850000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 18,
                        "tenths": 1
                      },
                      "place": 0
                    }
                  ]
                },
                "2024": {
                  "starts": 13,
                  "earnings": 22350000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 5
                      },
                      "place": 5
                    }
                  ]
                }
              },
              "life": {
                "starts": 42,
                "earnings": 122650000,
                "placement": {
                  "3": 4,
                  "2": 3,
                  "1": 6
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 5
                    },
                    "place": 5,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 4
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 6,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 6,
                    "year": "2022"
                  }
                ],
                "winPercentage": 1428,
                "placePercentage": 3095,
                "earningsPerStart": 2920238,
                "startPoints": 1170
              },
              "lastFiveStarts": {
                "averageOdds": 938
              }
            },
            "pedigree": {
              "father": {
                "id": 748142,
                "name": "Father Patrick",
                "nationality": "US"
              },
              "mother": {
                "id": 608081,
                "name": "Novelty Ås"
              },
              "grandfather": {
                "id": 528422,
                "name": "Striking Sahbra",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 722626,
            "firstName": "Mats E",
            "lastName": "Djuse",
            "shortName": "Dju ME",
            "location": "Hudiksvall",
            "birth": 1998,
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Orange, svart axelskärp och ärmrevär; ora",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1717,
                  "earnings": 3346819100,
                  "placement": {
                    "3": 186,
                    "2": 219,
                    "1": 257
                  },
                  "winPercentage": 1496
                },
                "2024": {
                  "starts": 1355,
                  "earnings": 2950765100,
                  "placement": {
                    "3": 148,
                    "2": 172,
                    "1": 234
                  },
                  "winPercentage": 1726
                }
              }
            }
          },
          "result": {
            "place": 7,
            "finishOrder": 7,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 7
            },
            "prizeMoney": 7000,
            "finalOdds": 37.32,
            "startNumber": 8
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3732
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 646,
              "maxOdds": 646
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 165
            }
          }
        },
        {
          "id": "2024-09-21_15_5_9",
          "number": 9,
          "postPosition": 9,
          "distance": 2140,
          "horse": {
            "id": 752429,
            "name": "Kinky Boots",
            "age": 8,
            "sex": "gelding",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 529886,
              "firstName": "Troels",
              "lastName": "Andersen",
              "shortName": "And Tr",
              "location": "Tärnsjö",
              "birth": 1980,
              "homeTrack": {
                "id": 16,
                "name": "Gävle"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Mblå, vit fält och silver romber axelp; mb",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 114,
                    "earnings": 185918200,
                    "placement": {
                      "3": 8,
                      "2": 15,
                      "1": 19
                    },
                    "winPercentage": 1666
                  },
                  "2024": {
                    "starts": 88,
                    "earnings": 93320000,
                    "placement": {
                      "3": 7,
                      "2": 9,
                      "1": 10
                    },
                    "winPercentage": 1136
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": true
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 1182500,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "owner": {
              "id": 556489,
              "name": "Andersen Troels",
              "location": "Tärnsjö"
            },
            "breeder": {
              "id": 644728,
              "name": "Nilsson Jimmy & Sunnemark Dan"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 13,
                  "earnings": 40650000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 8
                      },
                      "place": 2
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 4,
                  "earnings": 16700000,
                  "placement": {
                    "3": 0,
                    "2": 2,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 5
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 46,
                "earnings": 118250000,
                "placement": {
                  "3": 4,
                  "2": 4,
                  "1": 18
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 5
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 7
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 9
                    },
                    "place": 5,
                    "year": "2022"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 4
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 3913,
                "placePercentage": 5652,
                "earningsPerStart": 2570652,
                "startPoints": 2715
              },
              "lastFiveStarts": {
                "averageOdds": 773
              }
            },
            "pedigree": {
              "father": {
                "id": 705071,
                "name": "Brad de Veluwe",
                "nationality": "FI"
              },
              "mother": {
                "id": 613656,
                "name": "Enjoy de Luxe"
              },
              "grandfather": {
                "id": 195521,
                "name": "Enjoy Lavec"
              }
            }
          },
          "driver": {
            "id": 529886,
            "firstName": "Troels",
            "lastName": "Andersen",
            "shortName": "And Tr",
            "location": "Tärnsjö",
            "birth": 1980,
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Mblå, vit fält och silver romber axelp; mb",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 92,
                  "earnings": 112357200,
                  "placement": {
                    "3": 6,
                    "2": 10,
                    "1": 13
                  },
                  "winPercentage": 1413
                },
                "2024": {
                  "starts": 116,
                  "earnings": 95540000,
                  "placement": {
                    "3": 8,
                    "2": 14,
                    "1": 10
                  },
                  "winPercentage": 862
                }
              }
            }
          },
          "result": {
            "place": 6,
            "finishOrder": 6,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 6
            },
            "galloped": true,
            "prizeMoney": 10500,
            "finalOdds": 12.12,
            "startNumber": 9
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1212
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 272,
              "maxOdds": 272
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 564
            }
          },
          "videos": [
            {
              "mediaId": "1900623429275",
              "timestamp": "2024-09-21T15:22:42"
            },
            {
              "mediaId": "1900631621047",
              "timestamp": "2024-09-21T15:33:16"
            },
            {
              "mediaId": "1900640325394",
              "timestamp": "2024-09-21T15:43:37"
            }
          ]
        },
        {
          "id": "2024-09-21_15_5_10",
          "number": 10,
          "postPosition": 10,
          "distance": 2140,
          "horse": {
            "id": 765783,
            "name": "Kash Keeper",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 568723,
              "firstName": "Oskar",
              "lastName": "Kylin Blom",
              "shortName": "Kyl Os",
              "location": "Östervåla",
              "birth": 1992,
              "homeTrack": {
                "id": 16,
                "name": "Gävle"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, sidofält i orange; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 623,
                    "earnings": 814471800,
                    "placement": {
                      "3": 66,
                      "2": 85,
                      "1": 84
                    },
                    "winPercentage": 1348
                  },
                  "2024": {
                    "starts": 493,
                    "earnings": 696205000,
                    "placement": {
                      "3": 51,
                      "2": 53,
                      "1": 66
                    },
                    "winPercentage": 1338
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 989900,
            "color": "svartbrun",
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "owner": {
              "id": 835697,
              "name": "Bergviks Auktionstjänst Söderhamn AB"
            },
            "breeder": {
              "id": 220342,
              "name": "Eriksson Mats B",
              "location": "Rättvik"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 10,
                  "earnings": 22500000,
                  "placement": {
                    "3": 0,
                    "2": 5,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 2
                      },
                      "place": 2
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 1
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 12,
                  "earnings": 25750000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 1
                      },
                      "place": 7
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 6
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 40,
                "earnings": 98990000,
                "placement": {
                  "3": 3,
                  "2": 10,
                  "1": 8
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 2
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 2
                    },
                    "place": 2,
                    "year": "2022"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 3
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2023"
                  }
                ],
                "winPercentage": 2000,
                "placePercentage": 5250,
                "earningsPerStart": 2474750,
                "startPoints": 2720
              },
              "lastFiveStarts": {
                "averageOdds": 2246
              }
            },
            "pedigree": {
              "father": {
                "id": 740136,
                "name": "Uncle Lasse",
                "nationality": "US"
              },
              "mother": {
                "id": 573327,
                "name": "Eliza Keeper"
              },
              "grandfather": {
                "id": 501073,
                "name": "Credit Winner",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 568723,
            "firstName": "Oskar",
            "lastName": "Kylin Blom",
            "shortName": "Kyl Os",
            "location": "Östervåla",
            "birth": 1992,
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, sidofält i orange; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 808,
                  "earnings": 909775700,
                  "placement": {
                    "3": 77,
                    "2": 99,
                    "1": 79
                  },
                  "winPercentage": 977
                },
                "2024": {
                  "starts": 529,
                  "earnings": 564389700,
                  "placement": {
                    "3": 53,
                    "2": 48,
                    "1": 47
                  },
                  "winPercentage": 888
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 11,
            "kmTime": {
              "minutes": 1,
              "seconds": 12,
              "tenths": 1
            },
            "galloped": true,
            "prizeMoney": 2500,
            "finalOdds": 153.58,
            "startNumber": 10
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 15358
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1693,
              "maxOdds": 1693
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 17
            }
          },
          "videos": [
            {
              "mediaId": "1900612677157",
              "timestamp": "2024-09-21T15:02:41"
            }
          ]
        },
        {
          "id": "2024-09-21_15_5_11",
          "number": 11,
          "postPosition": 11,
          "distance": 2140,
          "horse": {
            "id": 767825,
            "name": "Grappa Boy",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 588181,
              "firstName": "Christoffer",
              "lastName": "Eriksson",
              "shortName": "Eri Ch",
              "location": "Sjöbo",
              "birth": 1987,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, blå/vitt axelsk, ärmbindel; vit",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 348,
                    "earnings": 853871600,
                    "placement": {
                      "3": 35,
                      "2": 45,
                      "1": 52
                    },
                    "winPercentage": 1494
                  },
                  "2024": {
                    "starts": 327,
                    "earnings": 574364500,
                    "placement": {
                      "3": 34,
                      "2": 46,
                      "1": 45
                    },
                    "winPercentage": 1376
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 1215861,
            "color": "brun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 665541,
              "name": "Stall Grappa AB",
              "location": "Bunkeflostrand"
            },
            "breeder": {
              "id": 665541,
              "name": "Stall Grappa AB",
              "location": "Bunkeflostrand"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 19,
                  "earnings": 46000000,
                  "placement": {
                    "3": 4,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 7
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 1
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 12,
                  "earnings": 17616100,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 4
                      },
                      "place": 7
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 6
                      },
                      "place": 0
                    }
                  ]
                }
              },
              "life": {
                "starts": 58,
                "earnings": 121586100,
                "placement": {
                  "3": 7,
                  "2": 6,
                  "1": 12
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 4
                    },
                    "place": 7,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 5
                    },
                    "place": 4,
                    "year": "2022"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 9
                    },
                    "place": 0,
                    "year": "2022"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2022"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 0,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2068,
                "placePercentage": 4310,
                "earningsPerStart": 2096312,
                "startPoints": 1955
              },
              "lastFiveStarts": {
                "averageOdds": 2426
              }
            },
            "pedigree": {
              "father": {
                "id": 693926,
                "name": "Djali Boko"
              },
              "mother": {
                "id": 724073,
                "name": "Nassau"
              },
              "grandfather": {
                "id": 685124,
                "name": "Muscle Hill",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 588181,
            "firstName": "Christoffer",
            "lastName": "Eriksson",
            "shortName": "Eri Ch",
            "location": "Sjöbo",
            "birth": 1987,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, blå/vitt axelsk, ärmbindel; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 294,
                  "earnings": 467382200,
                  "placement": {
                    "3": 30,
                    "2": 37,
                    "1": 34
                  },
                  "winPercentage": 1156
                },
                "2024": {
                  "starts": 165,
                  "earnings": 209490000,
                  "placement": {
                    "3": 17,
                    "2": 27,
                    "1": 11
                  },
                  "winPercentage": 666
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 10,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 9
            },
            "prizeMoney": 2500,
            "finalOdds": 77.98,
            "startNumber": 11
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 7798
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1084,
              "maxOdds": 1084
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 35
            }
          }
        },
        {
          "id": "2024-09-21_15_5_12",
          "number": 12,
          "postPosition": 12,
          "distance": 2140,
          "horse": {
            "id": 806696,
            "name": "Mighty Boy",
            "nationality": "NO",
            "age": 6,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 1
              }
            },
            "trainer": {
              "id": 99400,
              "firstName": "Frode",
              "lastName": "Hamre",
              "shortName": "Ham Fr",
              "location": "Norge",
              "birth": 1964,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Ljusblå, mörkblå axelparti och ärm; vit"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 1219718,
            "color": "mörkbrun",
            "owner": {
              "id": 226009,
              "name": "Fjone Stallen",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 21,
                  "earnings": 31631400,
                  "placement": {
                    "3": 6,
                    "2": 1,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 1
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 3
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 14,
                  "earnings": 44215400,
                  "placement": {
                    "3": 2,
                    "2": 6,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 8
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 68,
                "earnings": 121971800,
                "placement": {
                  "3": 10,
                  "2": 14,
                  "1": 16
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 1
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 3
                    },
                    "place": 4,
                    "year": "2023"
                  }
                ],
                "winPercentage": 2352,
                "placePercentage": 5882,
                "earningsPerStart": 1793702,
                "startPoints": 2699
              },
              "lastFiveStarts": {
                "averageOdds": 1100
              }
            },
            "pedigree": {
              "father": {
                "id": 735571,
                "name": "El Diablo B.R.",
                "nationality": "NO"
              },
              "mother": {
                "id": 629396,
                "name": "Mighty Lady",
                "nationality": "US"
              },
              "grandfather": {
                "id": 178164,
                "name": "Volomite",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 188437,
            "firstName": "Tom Erik",
            "lastName": "Solberg",
            "shortName": "Sol TE",
            "location": "Norge",
            "birth": 1975,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Svart, guld vinkel och stjärnor; svart"
          },
          "result": {
            "place": 4,
            "finishOrder": 4,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 4
            },
            "prizeMoney": 21000,
            "finalOdds": 82.9,
            "startNumber": 12
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 8290
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1154,
              "maxOdds": 1154
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 27
            }
          },
          "videos": [
            {
              "mediaId": "1900622405291",
              "timestamp": "2024-09-21T15:22:34"
            },
            {
              "mediaId": "1900628037490",
              "timestamp": "2024-09-21T15:33:07"
            },
            {
              "mediaId": "1900637765427",
              "timestamp": "2024-09-21T15:42:17"
            }
          ]
        }
      ],
      "mergedPools": [
        {
          "name": "A",
          "betTypes": ["vinnare", "plats", "komb", "tvilling", "trio"]
        }
      ]
    },
    {
      "id": "2024-09-21_15_6",
      "name": "Myshkin - STL Klass II (Försök 9 i Meeting 6 - Final Solvalla 12 oktober)",
      "date": "2024-09-21",
      "number": 6,
      "distance": 2640,
      "startMethod": "volte",
      "startTime": "2024-09-21T16:45:52",
      "scheduledStartTime": "2024-09-21T16:42:00",
      "prize": "Pris: 110.000-55.000-32.000-19.000-12.500-10.000-6.500-5.000 kr (8 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 260.000 kr.",
      "terms": [
        "3-åriga och äldre 100.001 - 250.000 kr. Körsvenskrav kat. 1. Körsvenner födda 060921 eller tidigare.",
        "Svenska Travligans hederspris till segrande hästs ägare och hästskötare.",
        "2640 m. Voltstart."
      ],
      "sport": "trot",
      "track": {
        "id": 15,
        "name": "Färjestad",
        "condition": "light",
        "countryCode": "SE"
      },
      "result": {
        "victoryMargin": "en halv längd"
      },
      "status": "results",
      "mediaId": "1900661317350",
      "pools": {
        "vinnare": {
          "@type": ".VinnarePool",
          "id": "vinnare_2024-09-21_15_6",
          "status": "results",
          "timestamp": "2024-09-21 16:52:14",
          "turnover": 127784400,
          "result": {
            "@type": ".VinnarePoolRaceResult",
            "winners": [
              {
                "number": 8,
                "odds": 1126
              }
            ]
          },
          "betType": "vinnare"
        },
        "plats": {
          "@type": ".PlatsPool",
          "id": "plats_2024-09-21_15_6",
          "status": "results",
          "timestamp": "2024-09-21 16:52:14",
          "turnover": 127784400,
          "result": {
            "@type": ".PlatsPoolRaceResult",
            "winners": {
              "first": [
                {
                  "number": 8,
                  "odds": 256
                }
              ],
              "second": [
                {
                  "number": 5,
                  "odds": 319
                }
              ],
              "third": [
                {
                  "number": 11,
                  "odds": 166
                }
              ]
            }
          },
          "betType": "plats"
        },
        "tvilling": {
          "@type": ".TvillingPool",
          "id": "tvilling_2024-09-21_15_6",
          "status": "results",
          "timestamp": "2024-09-21 16:54:59",
          "turnover": 127784400,
          "result": {
            "@type": ".TvillingPoolRaceResult",
            "winners": [
              {
                "combination": [5, 8],
                "odds": 5936
              }
            ]
          },
          "betType": "tvilling"
        },
        "komb": {
          "@type": ".KombPool",
          "id": "komb_2024-09-21_15_6",
          "status": "results",
          "timestamp": "2024-09-21 16:54:59",
          "turnover": 127784400,
          "result": {
            "@type": ".KombPoolRaceResult",
            "winners": [
              {
                "combination": [8, 5],
                "odds": 11820
              }
            ]
          },
          "betType": "komb"
        },
        "trio": {
          "@type": ".TrioPool",
          "id": "trio_2024-09-21_15_6",
          "status": "results",
          "timestamp": "2024-09-21 16:55:00",
          "turnover": 127784400,
          "result": {
            "@type": ".TrioPoolRaceResult",
            "winners": [
              {
                "combination": [8, 5, 11],
                "odds": 54465
              }
            ]
          },
          "betType": "trio"
        },
        "V75": {
          "@type": ".Pool",
          "result": {
            "@type": ".MarkingBetRacePoolResult",
            "systems": "71615",
            "value": {
              "amount": 32700
            },
            "winners": [8],
            "reserveOrder": [7, 11, 1, 8, 5, 2, 9, 12, 6, 3, 10, 4]
          }
        }
      },
      "starts": [
        {
          "id": "2024-09-21_15_6_1",
          "number": 1,
          "postPosition": 1,
          "distance": 2640,
          "horse": {
            "id": 798584,
            "name": "Smileandwave N.O.",
            "nationality": "NO",
            "age": 4,
            "sex": "stallion",
            "record": {
              "code": "L",
              "startMethod": "volte",
              "distance": "long",
              "time": {
                "minutes": 1,
                "seconds": 16,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 99400,
              "firstName": "Frode",
              "lastName": "Hamre",
              "shortName": "Ham Fr",
              "location": "Norge",
              "birth": 1964,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Ljusblå, mörkblå axelparti och ärm; vit"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 207766,
            "color": "fux",
            "owner": {
              "id": 226009,
              "name": "Andreassen Haakon",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 6,
                  "earnings": 6674700,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 1
                      },
                      "place": 4
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 17,
                        "tenths": 4
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 10,
                  "earnings": 14101900,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 2
                      },
                      "place": 2
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 4
                      },
                      "place": 6
                    }
                  ]
                }
              },
              "life": {
                "starts": 16,
                "earnings": 20776600,
                "placement": {
                  "3": 1,
                  "2": 2,
                  "1": 7
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 2
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 4
                    },
                    "place": 6,
                    "year": "2024"
                  }
                ],
                "winPercentage": 4375,
                "placePercentage": 6250,
                "earningsPerStart": 1298537,
                "startPoints": 2435
              },
              "lastFiveStarts": {
                "averageOdds": 1978
              }
            },
            "pedigree": {
              "father": {
                "id": 588796,
                "name": "Maharajah"
              },
              "mother": {
                "id": 719592,
                "name": "Seachick",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 484805,
                "name": "Scarlet Knight",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 98570,
            "firstName": "Vidar",
            "lastName": "Hop",
            "shortName": "Hop Vi",
            "location": "Norge",
            "birth": 1958,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Vit, blå axelp och ärmar; blå"
          },
          "result": {
            "place": 5,
            "finishOrder": 5,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 9
            },
            "prizeMoney": 12500,
            "finalOdds": 9.3,
            "startNumber": 1
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 930
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 220,
              "maxOdds": 220
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 744,
              "potentialPayout": {
                "value": 24700
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900645957239",
              "timestamp": "2024-09-21T15:48:53"
            }
          ]
        },
        {
          "id": "2024-09-21_15_6_2",
          "number": 2,
          "postPosition": 2,
          "distance": 2640,
          "horse": {
            "id": 779220,
            "name": "Nowhere Fast",
            "age": 4,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 3
              }
            },
            "trainer": {
              "id": 170734,
              "firstName": "Jonas",
              "lastName": "Hallstensson",
              "shortName": "Hal Jo",
              "location": "Karlstad",
              "birth": 1976,
              "homeTrack": {
                "id": 15,
                "name": "Färjestad"
              },
              "license": "B-tränare: träna, köra",
              "silks": "Vit, mörkblått lodrätt fält och ärm; vit",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 54,
                    "earnings": 30230800,
                    "placement": {
                      "3": 6,
                      "2": 5,
                      "1": 3
                    },
                    "winPercentage": 555
                  },
                  "2024": {
                    "starts": 53,
                    "earnings": 43840000,
                    "placement": {
                      "3": 5,
                      "2": 4,
                      "1": 7
                    },
                    "winPercentage": 1320
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 230800,
            "color": "brun",
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "owner": {
              "id": 833159,
              "name": "Km Trotting AB",
              "location": "Kristinehamn"
            },
            "breeder": {
              "id": 657110,
              "name": "Stelius Gunnar",
              "location": "Enebyberg"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 6,
                  "earnings": 5750000,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 3
                      },
                      "place": 4
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 8
                      },
                      "place": 5
                    }
                  ]
                },
                "2024": {
                  "starts": 8,
                  "earnings": 17330000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 0
                      },
                      "place": 4
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 3
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 14,
                "earnings": 23080000,
                "placement": {
                  "3": 1,
                  "2": 1,
                  "1": 4
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 0
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 3
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2857,
                "placePercentage": 4285,
                "earningsPerStart": 1648571,
                "startPoints": 2508
              },
              "lastFiveStarts": {
                "averageOdds": 1630
              }
            },
            "pedigree": {
              "father": {
                "id": 741711,
                "name": "Trixton",
                "nationality": "US"
              },
              "mother": {
                "id": 720732,
                "name": "Mighty Trick"
              },
              "grandfather": {
                "id": 667295,
                "name": "Ready Cash",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 605915,
            "firstName": "Ole Johan",
            "lastName": "Östre",
            "shortName": "Öst OJ",
            "location": "Norge",
            "birth": 1989,
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "license": "A-tränare: (Sv/utland): träna, köra",
            "silks": "Blå, vita sidor, ärmbindlar; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 180,
                  "earnings": 278089700,
                  "placement": {
                    "3": 20,
                    "2": 12,
                    "1": 23
                  },
                  "winPercentage": 1277
                },
                "2024": {
                  "starts": 179,
                  "earnings": 214446100,
                  "placement": {
                    "3": 19,
                    "2": 19,
                    "1": 16
                  },
                  "winPercentage": 893
                }
              }
            }
          },
          "result": {
            "place": 8,
            "finishOrder": 8,
            "kmTime": {
              "minutes": 1,
              "seconds": 15,
              "tenths": 0
            },
            "prizeMoney": 5000,
            "finalOdds": 24.77,
            "startNumber": 2
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 2477
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 447,
              "maxOdds": 447
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 222,
              "potentialPayout": {
                "value": 75300
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900623941455",
              "timestamp": "2024-09-21T15:25:52"
            }
          ]
        },
        {
          "id": "2024-09-21_15_6_3",
          "number": 3,
          "postPosition": 3,
          "distance": 2640,
          "horse": {
            "id": 804056,
            "name": "Clodrique",
            "nationality": "NO",
            "age": 3,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 16,
                "tenths": 0
              }
            },
            "trainer": {
              "id": 9185,
              "firstName": "Thor",
              "lastName": "Borg",
              "shortName": "Bor Th",
              "location": "Norge",
              "birth": 1952,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Vit, blå/röda ärmar; vit"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true
              },
              "back": {
                "hasShoe": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 156133,
            "color": "mörkbrun",
            "owner": {
              "id": 226009,
              "name": "Stall Clodrique",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 0,
                  "earnings": 0,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 0
                  },
                  "records": []
                },
                "2024": {
                  "starts": 9,
                  "earnings": 15613300,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 5
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 0
                      },
                      "place": 5
                    }
                  ]
                }
              },
              "life": {
                "starts": 9,
                "earnings": 15613300,
                "placement": {
                  "3": 1,
                  "2": 2,
                  "1": 0
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 4
                    },
                    "place": 5,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 0
                    },
                    "place": 5,
                    "year": "2024"
                  }
                ],
                "winPercentage": 0,
                "placePercentage": 3333,
                "earningsPerStart": 1734811,
                "startPoints": 1666
              },
              "lastFiveStarts": {
                "averageOdds": 4882
              }
            },
            "pedigree": {
              "father": {
                "id": 735571,
                "name": "El Diablo B.R.",
                "nationality": "NO"
              },
              "mother": {
                "id": 770411,
                "name": "J.T.'s Kiwi",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 144825,
                "name": "S.J.'s Photo",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 109763,
            "firstName": "Eirik",
            "lastName": "Höitomt",
            "shortName": "Höi Ei",
            "location": "Norge",
            "birth": 1969,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Vit, svart axelparti och ärmar; vit"
          },
          "result": {
            "place": 6,
            "finishOrder": 6,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 9
            },
            "prizeMoney": 10000,
            "finalOdds": 81.36,
            "startNumber": 3
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 8136
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1201,
              "maxOdds": 1201
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 37,
              "potentialPayout": {
                "value": 367500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900646981267",
              "timestamp": "2024-09-21T15:49:35"
            },
            {
              "mediaId": "1900651077302",
              "timestamp": "2024-09-21T16:00:48"
            }
          ]
        },
        {
          "id": "2024-09-21_15_6_4",
          "number": 4,
          "postPosition": 4,
          "distance": 2640,
          "horse": {
            "id": 757376,
            "name": "Canadian Club",
            "age": 8,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 15,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 563679,
              "firstName": "Ola P",
              "lastName": "Samuelsson",
              "shortName": "Sam OP",
              "location": "Brandstorp",
              "birth": 1984,
              "homeTrack": {
                "id": 8,
                "name": "Axevalla"
              },
              "license": "B-tränare: träna, köra",
              "silks": "Röd, svart bröstband och triangel; röd",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 36,
                    "earnings": 12630000,
                    "placement": {
                      "3": 4,
                      "2": 0,
                      "1": 1
                    },
                    "winPercentage": 277
                  },
                  "2024": {
                    "starts": 28,
                    "earnings": 14770000,
                    "placement": {
                      "3": 2,
                      "2": 3,
                      "1": 2
                    },
                    "winPercentage": 714
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": true
              },
              "back": {
                "hasShoe": true,
                "changed": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 203700,
            "color": "brun",
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "owner": {
              "id": 729572,
              "name": "Samuelsson Ola P & Liselotte"
            },
            "breeder": {
              "id": 218620,
              "name": "Olsson Ulrika",
              "location": "Hudiksvall"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 13,
                  "earnings": 4530000,
                  "placement": {
                    "3": 2,
                    "2": 0,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 9
                      },
                      "place": 4
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 4
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 17,
                  "earnings": 11290000,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 8
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 2
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 33,
                "earnings": 20370000,
                "placement": {
                  "3": 5,
                  "2": 3,
                  "1": 2
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 9
                    },
                    "place": 4,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 4
                    },
                    "place": 8,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 0
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 9
                    },
                    "place": 2,
                    "year": "2019"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 2
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 606,
                "placePercentage": 3030,
                "earningsPerStart": 617272,
                "startPoints": 1565
              },
              "lastFiveStarts": {
                "averageOdds": 5607
              }
            },
            "pedigree": {
              "father": {
                "id": 484805,
                "name": "Scarlet Knight",
                "nationality": "US"
              },
              "mother": {
                "id": 706736,
                "name": "Miss Ozzymede"
              },
              "grandfather": {
                "id": 576291,
                "name": "Olimede",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 563679,
            "firstName": "Ola P",
            "lastName": "Samuelsson",
            "shortName": "Sam OP",
            "location": "Brandstorp",
            "birth": 1984,
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "license": "B-tränare: träna, köra",
            "silks": "Röd, svart bröstband och triangel; röd",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 39,
                  "earnings": 14680000,
                  "placement": {
                    "3": 5,
                    "2": 0,
                    "1": 1
                  },
                  "winPercentage": 256
                },
                "2024": {
                  "starts": 29,
                  "earnings": 14920000,
                  "placement": {
                    "3": 2,
                    "2": 3,
                    "1": 2
                  },
                  "winPercentage": 689
                }
              }
            }
          },
          "result": {
            "finishOrder": 41,
            "kmTime": {
              "code": "u"
            },
            "galloped": true,
            "disqualified": true,
            "prizeMoney": 2500,
            "finalOdds": 165.48,
            "startNumber": 4
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 16548
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 2040,
              "maxOdds": 2040
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 17,
              "potentialPayout": {
                "value": 770300
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900622405293",
              "timestamp": "2024-09-21T15:22:34"
            },
            {
              "mediaId": "1900632133303",
              "timestamp": "2024-09-21T15:33:07"
            },
            {
              "mediaId": "1900641349332",
              "timestamp": "2024-09-21T15:44:33"
            }
          ],
          "out": true
        },
        {
          "id": "2024-09-21_15_6_5",
          "number": 5,
          "postPosition": 5,
          "distance": 2640,
          "horse": {
            "id": 770574,
            "name": "Emothi",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 15,
                "tenths": 1
              }
            },
            "trainer": {
              "id": 506451,
              "firstName": "Sofia",
              "lastName": "Aronsson",
              "shortName": "Aro So",
              "location": "Kvänum",
              "birth": 1984,
              "homeTrack": {
                "id": 8,
                "name": "Axevalla"
              },
              "license": "A-tränare kat2: träna, köra",
              "silks": "Gul, rött lodrätt fält, vita ärmar;röd",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 229,
                    "earnings": 334145100,
                    "placement": {
                      "3": 28,
                      "2": 24,
                      "1": 23
                    },
                    "winPercentage": 1004
                  },
                  "2024": {
                    "starts": 198,
                    "earnings": 297834500,
                    "placement": {
                      "3": 21,
                      "2": 28,
                      "1": 28
                    },
                    "winPercentage": 1414
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 237700,
            "color": "brun",
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "owner": {
              "id": 238961,
              "name": "van Doorn Erna",
              "location": "Nykvarn"
            },
            "breeder": {
              "id": 238961,
              "name": "van Doorn Erna",
              "location": "Nykvarn"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 10,
                  "earnings": 10270000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 1
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 8
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 4,
                  "earnings": 10250000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 1
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 16,
                "earnings": 23770000,
                "placement": {
                  "3": 1,
                  "2": 2,
                  "1": 6
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 4
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 5
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 3750,
                "placePercentage": 5625,
                "earningsPerStart": 1485625,
                "startPoints": 2450
              },
              "lastFiveStarts": {
                "averageOdds": 1146
              }
            },
            "pedigree": {
              "father": {
                "id": 588796,
                "name": "Maharajah"
              },
              "mother": {
                "id": 589860,
                "name": "Pamona"
              },
              "grandfather": {
                "id": 2456,
                "name": "Alf Palema",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 149226,
            "firstName": "André",
            "lastName": "Eklundh",
            "shortName": "Ekl An",
            "location": "Nossebro",
            "birth": 1986,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Vit, mblå stolpar och ärmb. vit axelp.; vi",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 493,
                  "earnings": 641880000,
                  "placement": {
                    "3": 53,
                    "2": 67,
                    "1": 71
                  },
                  "winPercentage": 1440
                },
                "2024": {
                  "starts": 416,
                  "earnings": 590045500,
                  "placement": {
                    "3": 43,
                    "2": 53,
                    "1": 61
                  },
                  "winPercentage": 1466
                }
              }
            }
          },
          "result": {
            "place": 2,
            "finishOrder": 2,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 6
            },
            "prizeMoney": 55000,
            "finalOdds": 14.66,
            "startNumber": 5
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1466
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 319,
              "maxOdds": 319,
              "odds": 319
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 512,
              "potentialPayout": {
                "value": 35000
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900645957095",
              "timestamp": "2024-09-21T15:46:51"
            }
          ]
        },
        {
          "id": "2024-09-21_15_6_6",
          "number": 6,
          "postPosition": 6,
          "distance": 2640,
          "horse": {
            "id": 773984,
            "name": "Mooseisloose C.C.",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 17,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 740763,
              "firstName": "Alicia",
              "lastName": "Flyrin",
              "shortName": "Fly Al",
              "location": "Kungsbacka",
              "birth": 1997,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "B-tränare: träna, köra för bolag",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 5,
                    "earnings": 4890000,
                    "placement": {
                      "3": 1,
                      "2": 0,
                      "1": 1
                    },
                    "winPercentage": 2000
                  },
                  "2024": {
                    "starts": 12,
                    "earnings": 15770000,
                    "placement": {
                      "3": 1,
                      "2": 1,
                      "1": 3
                    },
                    "winPercentage": 2500
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 192700,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 818206,
              "name": "Flyrin Ove",
              "location": "Åsa"
            },
            "breeder": {
              "id": 483621,
              "name": "Carlberg Carin",
              "location": "Morgongåva"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 3,
                  "earnings": 2000000,
                  "placement": {
                    "3": 2,
                    "2": 0,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 18,
                        "tenths": 0
                      },
                      "place": 0
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 17,
                        "tenths": 2
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 12,
                  "earnings": 15770000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 7
                      },
                      "place": 5
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 17,
                        "tenths": 9
                      },
                      "place": 4
                    }
                  ]
                }
              },
              "life": {
                "starts": 16,
                "earnings": 19270000,
                "placement": {
                  "3": 4,
                  "2": 1,
                  "1": 3
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 7
                    },
                    "place": 5,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 8
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 17,
                      "tenths": 2
                    },
                    "place": 3,
                    "year": "2023"
                  }
                ],
                "winPercentage": 1875,
                "placePercentage": 5000,
                "earningsPerStart": 1204375,
                "startPoints": 2239
              },
              "lastFiveStarts": {
                "averageOdds": 1111
              }
            },
            "pedigree": {
              "father": {
                "id": 426861,
                "name": "From Above"
              },
              "mother": {
                "id": 617973,
                "name": "Tucson Yankee",
                "nationality": "US"
              },
              "grandfather": {
                "id": 198885,
                "name": "Lindy Lane",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 535543,
            "firstName": "Peter",
            "lastName": "Grundmann",
            "shortName": "Gru Pe",
            "location": "Vårgårda",
            "birth": 1975,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Mörkblå, mörkgrå sidor; mblå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 10,
                  "earnings": 11650000,
                  "placement": {
                    "3": 0,
                    "2": 2,
                    "1": 3
                  },
                  "winPercentage": 3000
                },
                "2024": {
                  "starts": 46,
                  "earnings": 35090000,
                  "placement": {
                    "3": 6,
                    "2": 2,
                    "1": 8
                  },
                  "winPercentage": 1739
                }
              }
            }
          },
          "result": {
            "place": 7,
            "finishOrder": 7,
            "kmTime": {
              "minutes": 1,
              "seconds": 15,
              "tenths": 0
            },
            "prizeMoney": 6500,
            "finalOdds": 26.7,
            "startNumber": 6
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 2670
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 529,
              "maxOdds": 529
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 119,
              "potentialPayout": {
                "value": 128400
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900647493032",
              "timestamp": "2024-09-21T15:49:49"
            }
          ]
        },
        {
          "id": "2024-09-21_15_6_7",
          "number": 7,
          "postPosition": 7,
          "distance": 2640,
          "horse": {
            "id": 780025,
            "name": "Staro Raymond",
            "age": 4,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 16,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 9921,
              "firstName": "Timo",
              "lastName": "Nurmos",
              "shortName": "Nur Ti",
              "location": "Tullinge",
              "birth": 1959,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "A-tränare kat2: träna, köra",
              "silks": "Grå, mblå axelparti,mblå/grå ärm; mblå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 429,
                    "earnings": 2900319900,
                    "placement": {
                      "3": 39,
                      "2": 68,
                      "1": 145
                    },
                    "winPercentage": 3379
                  },
                  "2024": {
                    "starts": 212,
                    "earnings": 1239650000,
                    "placement": {
                      "3": 17,
                      "2": 33,
                      "1": 70
                    },
                    "winPercentage": 3301
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": true
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 197500,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 789524,
              "name": "Millicus AB",
              "location": "Nacka"
            },
            "breeder": {
              "id": 205905,
              "name": "Nilsson Staffan B",
              "location": "Växjö"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 0,
                  "earnings": 0,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 0
                  },
                  "records": []
                },
                "2024": {
                  "starts": 6,
                  "earnings": 19750000,
                  "placement": {
                    "3": 0,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 0
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 4
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 6,
                "earnings": 19750000,
                "placement": {
                  "3": 0,
                  "2": 2,
                  "1": 3
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 9
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 4
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 5000,
                "placePercentage": 8333,
                "earningsPerStart": 3291666,
                "startPoints": 2800
              },
              "lastFiveStarts": {
                "averageOdds": 232
              }
            },
            "pedigree": {
              "father": {
                "id": 731436,
                "name": "Nuncio",
                "nationality": "US"
              },
              "mother": {
                "id": 661174,
                "name": "Meta di Azzurra",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 579264,
                "name": "Windsong's Legacy",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 740606,
            "firstName": "Magnus A",
            "lastName": "Djuse",
            "shortName": "Dju MA",
            "location": "Upplands Väsby",
            "birth": 2000,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Mörkblå, vitt axelparti; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1501,
                  "earnings": 4916246500,
                  "placement": {
                    "3": 170,
                    "2": 213,
                    "1": 279
                  },
                  "winPercentage": 1858
                },
                "2024": {
                  "starts": 1163,
                  "earnings": 3358662500,
                  "placement": {
                    "3": 112,
                    "2": 150,
                    "1": 223
                  },
                  "winPercentage": 1917
                }
              }
            }
          },
          "result": {
            "place": 4,
            "finishOrder": 4,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 8
            },
            "galloped": true,
            "prizeMoney": 19000,
            "finalOdds": 2.03,
            "startNumber": 7
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 203
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 132,
              "maxOdds": 132
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 5707,
              "potentialPayout": {
                "value": 5200
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_6_8",
          "number": 8,
          "postPosition": 8,
          "distance": 2640,
          "horse": {
            "id": 780721,
            "name": "Billy the Bronco",
            "age": 4,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 479879,
              "firstName": "Markus B",
              "lastName": "Svedberg",
              "shortName": "Sve MB",
              "location": "Strängnäs",
              "birth": 1991,
              "homeTrack": {
                "id": 14,
                "name": "Eskilstuna"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Sv, röd/vit vinkel, delad ärm; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 424,
                    "earnings": 844360800,
                    "placement": {
                      "3": 55,
                      "2": 44,
                      "1": 71
                    },
                    "winPercentage": 1674
                  },
                  "2024": {
                    "starts": 274,
                    "earnings": 457559300,
                    "placement": {
                      "3": 33,
                      "2": 38,
                      "1": 38
                    },
                    "winPercentage": 1386
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 233500,
            "color": "brun",
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "owner": {
              "id": 243618,
              "name": "Olof Brodin (Chartering) AB",
              "location": "Sollentuna"
            },
            "breeder": {
              "id": 224575,
              "name": "Svensson Susanne",
              "location": "Harlösa"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 13,
                  "earnings": 13300000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 6
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 0
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 6,
                  "earnings": 10050000,
                  "placement": {
                    "3": 0,
                    "2": 2,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 2
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 9
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 19,
                "earnings": 23350000,
                "placement": {
                  "3": 1,
                  "2": 3,
                  "1": 3
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 2
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 9
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 9
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 1
                    },
                    "place": 0,
                    "year": "2024"
                  }
                ],
                "winPercentage": 1578,
                "placePercentage": 3684,
                "earningsPerStart": 1228947,
                "startPoints": 1780
              },
              "lastFiveStarts": {
                "averageOdds": 501
              }
            },
            "pedigree": {
              "father": {
                "id": 757369,
                "name": "Fourth Dimension",
                "nationality": "US"
              },
              "mother": {
                "id": 491308,
                "name": "Timber Marie"
              },
              "grandfather": {
                "id": 443893,
                "name": "Dahir de Prelong",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 479879,
            "firstName": "Markus B",
            "lastName": "Svedberg",
            "shortName": "Sve MB",
            "location": "Strängnäs",
            "birth": 1991,
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Sv, röd/vit vinkel, delad ärm; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 291,
                  "earnings": 547840000,
                  "placement": {
                    "3": 35,
                    "2": 35,
                    "1": 50
                  },
                  "winPercentage": 1718
                },
                "2024": {
                  "starts": 203,
                  "earnings": 307008300,
                  "placement": {
                    "3": 26,
                    "2": 24,
                    "1": 27
                  },
                  "winPercentage": 1330
                }
              }
            }
          },
          "result": {
            "place": 1,
            "finishOrder": 1,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 6
            },
            "prizeMoney": 110000,
            "finalOdds": 11.26,
            "startNumber": 8
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1126,
              "finalOdds": 1126
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 256,
              "maxOdds": 256,
              "odds": 256
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 578,
              "potentialPayout": {
                "value": 32700
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900645957091",
              "timestamp": "2024-09-21T15:46:42"
            },
            {
              "mediaId": "1900650053189",
              "timestamp": "2024-09-21T15:57:01"
            }
          ]
        },
        {
          "id": "2024-09-21_15_6_9",
          "number": 9,
          "postPosition": 9,
          "distance": 2640,
          "horse": {
            "id": 800905,
            "name": "Humble and Kind",
            "nationality": "NO",
            "age": 5,
            "sex": "stallion",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 17,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 530943,
              "firstName": "Anders",
              "lastName": "Lundström Wolden",
              "shortName": "Lun An",
              "location": "Norge",
              "birth": 1981,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Svart, vitt axelpart; vit"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true
              },
              "back": {
                "hasShoe": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 249232,
            "color": "mörkbrun",
            "owner": {
              "id": 226009,
              "name": "Persson Bengt Erik",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 6,
                  "earnings": 9890900,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 3
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 17,
                        "tenths": 9
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 6,
                  "earnings": 13514300,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 0
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 15,
                "earnings": 24923200,
                "placement": {
                  "3": 3,
                  "2": 4,
                  "1": 5
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 17,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 3333,
                "placePercentage": 8000,
                "earningsPerStart": 1661546,
                "startPoints": 1954
              },
              "lastFiveStarts": {
                "averageOdds": 600
              }
            },
            "pedigree": {
              "father": {
                "id": 29276,
                "name": "Coktail Jet",
                "nationality": "FR"
              },
              "mother": {
                "id": 741726,
                "name": "Christina Rose",
                "nationality": "US"
              },
              "grandfather": {
                "id": 581297,
                "name": "Chocolatier",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 714238,
            "firstName": "Erlend",
            "lastName": "Rennesvik",
            "shortName": "Ren Er",
            "location": "Norge",
            "birth": 1994,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Svart, vit och orange; vit"
          },
          "result": {
            "place": 0,
            "finishOrder": 9,
            "kmTime": {
              "minutes": 1,
              "seconds": 15,
              "tenths": 0
            },
            "prizeMoney": 2500,
            "finalOdds": 30.94,
            "startNumber": 9
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3094
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 465,
              "maxOdds": 465
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 222,
              "potentialPayout": {
                "value": 74800
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900645957221",
              "timestamp": "2024-09-21T15:48:47"
            },
            {
              "mediaId": "1900650565431",
              "timestamp": "2024-09-21T15:59:14"
            }
          ]
        },
        {
          "id": "2024-09-21_15_6_10",
          "number": 10,
          "postPosition": 10,
          "distance": 2640,
          "horse": {
            "id": 778741,
            "name": "Wehadthemall",
            "age": 4,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 8
              }
            },
            "trainer": {
              "id": 528293,
              "firstName": "David",
              "lastName": "Persson",
              "shortName": "Per Da",
              "location": "Kvänum",
              "birth": 1984,
              "homeTrack": {
                "id": 8,
                "name": "Axevalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Grön, blå/vita korsl.axelsk; grön",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 328,
                    "earnings": 486578000,
                    "placement": {
                      "3": 47,
                      "2": 25,
                      "1": 57
                    },
                    "winPercentage": 1737
                  },
                  "2024": {
                    "starts": 215,
                    "earnings": 439149000,
                    "placement": {
                      "3": 21,
                      "2": 29,
                      "1": 37
                    },
                    "winPercentage": 1720
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 239500,
            "color": "svartbrun",
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "owner": {
              "id": 470307,
              "name": "Rodert Per",
              "location": "Huskvarna"
            },
            "breeder": {
              "id": 214680,
              "name": "Eriksson Per K",
              "location": "Gammalkil"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 8,
                  "earnings": 7250000,
                  "placement": {
                    "3": 2,
                    "2": 0,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 9
                      },
                      "place": 7
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 3
                      },
                      "place": 5
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 16700000,
                  "placement": {
                    "3": 1,
                    "2": 3,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 9
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 8
                      },
                      "place": 7
                    }
                  ]
                }
              },
              "life": {
                "starts": 19,
                "earnings": 23950000,
                "placement": {
                  "3": 3,
                  "2": 3,
                  "1": 4
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 17,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 8
                    },
                    "place": 7,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 7
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2105,
                "placePercentage": 5263,
                "earningsPerStart": 1260526,
                "startPoints": 2025
              },
              "lastFiveStarts": {
                "averageOdds": 844
              }
            },
            "pedigree": {
              "father": {
                "id": 653937,
                "name": "Royal Fighter"
              },
              "mother": {
                "id": 742517,
                "name": "Tina's Symphony"
              },
              "grandfather": {
                "id": 679655,
                "name": "Symphonic Hanover",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 657235,
            "firstName": "Emilia",
            "lastName": "Leo",
            "shortName": "Leo Em",
            "location": "Borlänge",
            "birth": 1992,
            "homeTrack": {
              "id": 23,
              "name": "Romme"
            },
            "license": "A-tränare: träna, köra, rida",
            "silks": "Svart, guld bröstband och stj. ärm; silver",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 364,
                  "earnings": 478150000,
                  "placement": {
                    "3": 47,
                    "2": 51,
                    "1": 57
                  },
                  "winPercentage": 1565
                },
                "2024": {
                  "starts": 294,
                  "earnings": 414865000,
                  "placement": {
                    "3": 33,
                    "2": 34,
                    "1": 55
                  },
                  "winPercentage": 1870
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 10,
            "kmTime": {
              "minutes": 1,
              "seconds": 15,
              "tenths": 0
            },
            "prizeMoney": 2500,
            "finalOdds": 80.11,
            "startNumber": 10
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 8011
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1232,
              "maxOdds": 1232
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 32,
              "potentialPayout": {
                "value": 419400
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900641861488",
              "timestamp": "2024-09-21T15:47:20"
            },
            {
              "mediaId": "1900648005347",
              "timestamp": "2024-09-21T15:58:15"
            }
          ]
        },
        {
          "id": "2024-09-21_15_6_11",
          "number": 11,
          "postPosition": 11,
          "distance": 2640,
          "horse": {
            "id": 778620,
            "name": "Nero Schermer",
            "age": 4,
            "sex": "stallion",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 0
              }
            },
            "trainer": {
              "id": 638460,
              "firstName": "Rick",
              "lastName": "Ebbinge",
              "shortName": "Ebb Ri",
              "location": "Skene",
              "birth": 1984,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: (Sv/utland): träna, köra",
              "silks": "Mörkblå, orange axelklaffar och ärmb.; mbl",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 243,
                    "earnings": 580051000,
                    "placement": {
                      "3": 29,
                      "2": 40,
                      "1": 54
                    },
                    "winPercentage": 2222
                  },
                  "2024": {
                    "starts": 178,
                    "earnings": 306300000,
                    "placement": {
                      "3": 16,
                      "2": 27,
                      "1": 43
                    },
                    "winPercentage": 2415
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 227652,
            "color": "brun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 683703,
              "name": "Hoetmer G.J.",
              "location": "Nederländerna"
            },
            "breeder": {
              "id": 683703,
              "name": "Hoetmer G.J.",
              "location": "Nederländerna"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 3,
                  "earnings": 4631700,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 4
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 3,
                  "earnings": 18133500,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 3
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 6,
                "earnings": 22765200,
                "placement": {
                  "3": 2,
                  "2": 0,
                  "1": 4
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 3
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 4
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 6666,
                "placePercentage": 10000,
                "earningsPerStart": 3794200,
                "startPoints": 3302
              },
              "lastFiveStarts": {
                "averageOdds": 283
              }
            },
            "pedigree": {
              "father": {
                "id": 768773,
                "name": "Face Time Bourbon",
                "nationality": "FR"
              },
              "mother": {
                "id": 742906,
                "name": "Sultania",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 478959,
                "name": "Self Possessed",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 638460,
            "firstName": "Rick",
            "lastName": "Ebbinge",
            "shortName": "Ebb Ri",
            "location": "Skene",
            "birth": 1984,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "A-tränare: (Sv/utland): träna, köra",
            "silks": "Röd/vit, 2-delad; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 192,
                  "earnings": 493200300,
                  "placement": {
                    "3": 23,
                    "2": 31,
                    "1": 43
                  },
                  "winPercentage": 2239
                },
                "2024": {
                  "starts": 137,
                  "earnings": 237170000,
                  "placement": {
                    "3": 14,
                    "2": 21,
                    "1": 31
                  },
                  "winPercentage": 2262
                }
              }
            }
          },
          "result": {
            "place": 3,
            "finishOrder": 3,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 6
            },
            "prizeMoney": 32000,
            "finalOdds": 4.02,
            "startNumber": 11
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 402
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 166,
              "maxOdds": 166,
              "odds": 166
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1635,
              "potentialPayout": {
                "value": 13100
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900647493029",
              "timestamp": "2024-09-21T15:49:45"
            }
          ]
        },
        {
          "id": "2024-09-21_15_6_12",
          "number": 12,
          "postPosition": 12,
          "distance": 2640,
          "horse": {
            "id": 800039,
            "name": "Timecatcher",
            "nationality": "DE",
            "age": 4,
            "sex": "stallion",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 15,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 161607,
              "firstName": "Björn",
              "lastName": "Goop",
              "shortName": "Goo Bj",
              "location": "Karlstad",
              "birth": 1976,
              "homeTrack": {
                "id": 15,
                "name": "Färjestad"
              },
              "license": "A-tränare: (Sv/utland): träna, köra",
              "silks": "Mblå, guldf.midjeband, sömmar; guld",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 1115,
                    "earnings": 2449819200,
                    "placement": {
                      "3": 116,
                      "2": 126,
                      "1": 159
                    },
                    "winPercentage": 1426
                  },
                  "2024": {
                    "starts": 635,
                    "earnings": 1251650300,
                    "placement": {
                      "3": 78,
                      "2": 86,
                      "1": 94
                    },
                    "winPercentage": 1480
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": true
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 141069,
            "color": "brun",
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "owner": {
              "id": 799793,
              "name": "Walter-Mommert Karin",
              "location": "Tyskland"
            },
            "breeder": {
              "id": 613766,
              "name": "Frahm Dirk",
              "location": "Tyskland"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 5,
                  "earnings": 4206900,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 5
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 6,
                  "earnings": 9900000,
                  "placement": {
                    "3": 1,
                    "2": 3,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 5
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 9
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 11,
                "earnings": 14106900,
                "placement": {
                  "3": 1,
                  "2": 3,
                  "1": 3
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 5
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 9
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2727,
                "placePercentage": 6363,
                "earningsPerStart": 1282445,
                "startPoints": 1765
              },
              "lastFiveStarts": {
                "averageOdds": 915
              }
            },
            "pedigree": {
              "father": {
                "id": 553396,
                "name": "S.J.'s Caviar",
                "nationality": "US"
              },
              "mother": {
                "id": 766946,
                "name": "Gondolin",
                "nationality": "DE"
              },
              "grandfather": {
                "id": 662041,
                "name": "Here Comes Joey",
                "nationality": "DE"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 161607,
            "firstName": "Björn",
            "lastName": "Goop",
            "shortName": "Goo Bj",
            "location": "Karlstad",
            "birth": 1976,
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "license": "A-tränare: (Sv/utland): träna, köra",
            "silks": "Blå, guld vinkel och stjärnor ärm; blå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1240,
                  "earnings": 3961444800,
                  "placement": {
                    "3": 131,
                    "2": 145,
                    "1": 204
                  },
                  "winPercentage": 1645
                },
                "2024": {
                  "starts": 846,
                  "earnings": 2704607700,
                  "placement": {
                    "3": 103,
                    "2": 102,
                    "1": 124
                  },
                  "winPercentage": 1465
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 11,
            "kmTime": {
              "code": "u"
            },
            "galloped": true,
            "prizeMoney": 2500,
            "finalOdds": 31.3,
            "startNumber": 12
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3130
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 541,
              "maxOdds": 541
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 175,
              "potentialPayout": {
                "value": 96300
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900610629256",
              "timestamp": "2024-09-21T15:02:46"
            },
            {
              "mediaId": "1900620869292",
              "timestamp": "2024-09-21T15:17:46"
            },
            {
              "mediaId": "1900623941050",
              "timestamp": "2024-09-21T15:23:28"
            },
            {
              "mediaId": "1900632133461",
              "timestamp": "2024-09-21T15:34:03"
            }
          ],
          "out": true
        }
      ],
      "mergedPools": [
        {
          "name": "A",
          "betTypes": ["vinnare", "plats", "komb", "tvilling", "trio"]
        }
      ]
    },
    {
      "id": "2024-09-21_15_7",
      "name": "Unionskampen - STL Kallblodsdivisionen (Försök 14 i Meeting 2 - Final Romme 21 december)",
      "date": "2024-09-21",
      "number": 7,
      "distance": 2140,
      "startMethod": "auto",
      "startTime": "2024-09-21T17:06:50",
      "scheduledStartTime": "2024-09-21T17:05:00",
      "prize": "Pris: 300.000-150.000-80.000-45.000-27.000-18.000-10.000-6.000 kr (8 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 641.000 kr.",
      "terms": [
        "3-åriga och äldre svenska och norska kallblodiga lägst 500.001 kr. Körsvenskrav kat. 1. Körsvenner födda 060921 eller tidigare.",
        "Svenska Travligans hederspris till segrande hästs ägare och hästskötare. Färjestads Travsällskaps hederspris \"Klarälven\" till segrande hästs ägare och körsven. Hederstäcke och lagerkrans till segrande häst. ",
        "2140 m. Autostart. 10 startande."
      ],
      "sport": "trot",
      "track": {
        "id": 15,
        "name": "Färjestad",
        "condition": "light",
        "countryCode": "SE"
      },
      "result": {
        "victoryMargin": "1 längd"
      },
      "status": "results",
      "mediaId": "1900685893445",
      "pools": {
        "vinnare": {
          "@type": ".VinnarePool",
          "id": "vinnare_2024-09-21_15_7",
          "status": "results",
          "timestamp": "2024-09-21 17:16:36",
          "turnover": 122435500,
          "result": {
            "@type": ".VinnarePoolRaceResult",
            "winners": [
              {
                "number": 1,
                "odds": 579
              }
            ]
          },
          "betType": "vinnare"
        },
        "plats": {
          "@type": ".PlatsPool",
          "id": "plats_2024-09-21_15_7",
          "status": "results",
          "timestamp": "2024-09-21 17:16:36",
          "turnover": 122435500,
          "result": {
            "@type": ".PlatsPoolRaceResult",
            "winners": {
              "first": [
                {
                  "number": 1,
                  "odds": 159
                }
              ],
              "second": [
                {
                  "number": 2,
                  "odds": 226
                }
              ],
              "third": [
                {
                  "number": 8,
                  "odds": 554
                }
              ]
            }
          },
          "betType": "plats"
        },
        "tvilling": {
          "@type": ".TvillingPool",
          "id": "tvilling_2024-09-21_15_7",
          "status": "results",
          "timestamp": "2024-09-21 17:17:58",
          "turnover": 122435500,
          "result": {
            "@type": ".TvillingPoolRaceResult",
            "winners": [
              {
                "combination": [1, 2],
                "odds": 2239
              }
            ]
          },
          "betType": "tvilling"
        },
        "komb": {
          "@type": ".KombPool",
          "id": "komb_2024-09-21_15_7",
          "status": "results",
          "timestamp": "2024-09-21 17:17:58",
          "turnover": 122435500,
          "result": {
            "@type": ".KombPoolRaceResult",
            "winners": [
              {
                "combination": [1, 2],
                "odds": 3771
              }
            ]
          },
          "betType": "komb"
        },
        "trio": {
          "@type": ".TrioPool",
          "id": "trio_2024-09-21_15_7",
          "status": "results",
          "timestamp": "2024-09-21 17:17:59",
          "turnover": 122435500,
          "result": {
            "@type": ".TrioPoolRaceResult",
            "winners": [
              {
                "combination": [1, 2, 8],
                "odds": 49391
              }
            ]
          },
          "betType": "trio"
        },
        "V75": {
          "@type": ".Pool",
          "result": {
            "@type": ".MarkingBetRacePoolResult",
            "systems": "22047",
            "value": {
              "amount": 106300
            },
            "winners": [1],
            "reserveOrder": [9, 7, 1, 2, 3, 6, 8, 4, 5]
          }
        }
      },
      "starts": [
        {
          "id": "2024-09-21_15_7_1",
          "number": 1,
          "postPosition": 1,
          "distance": 2140,
          "horse": {
            "id": 738156,
            "name": "Månlykke A.M.",
            "age": 10,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 18,
                "tenths": 8
              }
            },
            "trainer": {
              "id": 384,
              "firstName": "Gunnar",
              "lastName": "Melander",
              "shortName": "Mel Gu",
              "location": "Viksjöfors",
              "birth": 1947,
              "homeTrack": {
                "id": 12,
                "name": "Bollnäs"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Röd, grå hängslen och ärmbindlar; grå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 49,
                    "earnings": 77080000,
                    "placement": {
                      "3": 7,
                      "2": 9,
                      "1": 7
                    },
                    "winPercentage": 1428
                  },
                  "2024": {
                    "starts": 25,
                    "earnings": 142075800,
                    "placement": {
                      "3": 7,
                      "2": 2,
                      "1": 8
                    },
                    "winPercentage": 3200
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": true
              },
              "back": {
                "hasShoe": false,
                "changed": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 5563407,
            "color": "svartbrun",
            "homeTrack": {
              "id": 12,
              "name": "Bollnäs"
            },
            "owner": {
              "id": 690423,
              "name": "Sjösläntens Konsult & Fastighets AB"
            },
            "breeder": {
              "id": 625527,
              "name": "Öberg AnnaMaria",
              "location": "Viksjöfors"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 11,
                  "earnings": 32550000,
                  "placement": {
                    "3": 3,
                    "2": 3,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 20,
                        "tenths": 7
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 21,
                        "tenths": 8
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 8,
                  "earnings": 111025800,
                  "placement": {
                    "3": 4,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 18,
                        "tenths": 8
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 22,
                        "tenths": 9
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 68,
                "earnings": 556340700,
                "placement": {
                  "3": 10,
                  "2": 8,
                  "1": 36
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 18,
                      "tenths": 8
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 21,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2021"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 23,
                      "tenths": 3
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 25,
                      "tenths": 1
                    },
                    "place": 4,
                    "year": "2019"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 21,
                      "tenths": 8
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 23,
                      "tenths": 4
                    },
                    "place": 1,
                    "year": "2022"
                  }
                ],
                "winPercentage": 5294,
                "placePercentage": 7941,
                "earningsPerStart": 8181480,
                "startPoints": 8652
              },
              "lastFiveStarts": {
                "averageOdds": 414
              }
            },
            "pedigree": {
              "father": {
                "id": 634232,
                "name": "Månprinsen A.M."
              },
              "mother": {
                "id": 589502,
                "name": "Timba",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 42462,
                "name": "Elding",
                "nationality": "NO"
              }
            }
          },
          "driver": {
            "id": 740606,
            "firstName": "Magnus A",
            "lastName": "Djuse",
            "shortName": "Dju MA",
            "location": "Upplands Väsby",
            "birth": 2000,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Mörkblå, vitt axelparti; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1501,
                  "earnings": 4916246500,
                  "placement": {
                    "3": 170,
                    "2": 213,
                    "1": 279
                  },
                  "winPercentage": 1858
                },
                "2024": {
                  "starts": 1163,
                  "earnings": 3358662500,
                  "placement": {
                    "3": 112,
                    "2": 150,
                    "1": 223
                  },
                  "winPercentage": 1917
                }
              }
            }
          },
          "result": {
            "place": 1,
            "finishOrder": 1,
            "kmTime": {
              "minutes": 1,
              "seconds": 21,
              "tenths": 4
            },
            "prizeMoney": 300000,
            "finalOdds": 5.79,
            "startNumber": 1
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 579,
              "finalOdds": 579
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 159,
              "maxOdds": 159,
              "odds": 159
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1712,
              "potentialPayout": {
                "value": 106300
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900652613067",
              "timestamp": "2024-09-21T16:06:11"
            },
            {
              "mediaId": "1900654661455",
              "timestamp": "2024-09-21T16:27:26"
            },
            {
              "mediaId": "1900656197107",
              "timestamp": "2024-09-21T16:16:04"
            }
          ]
        },
        {
          "id": "2024-09-21_15_7_2",
          "number": 2,
          "postPosition": 2,
          "distance": 2140,
          "horse": {
            "id": 760486,
            "name": "Stumne Fyr",
            "nationality": "NO",
            "age": 10,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 19,
                "tenths": 3
              }
            },
            "trainer": {
              "id": 181037,
              "firstName": "Merete",
              "lastName": "Viksås",
              "shortName": "Vik Me",
              "location": "Norge",
              "birth": 1969,
              "license": "B-tränare: (utland): träna, köra"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true
              },
              "back": {
                "hasShoe": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 4202065,
            "color": "mörkbrun",
            "owner": {
              "id": 226009,
              "name": "Stall Festival Fyrverkeri",
              "location": "Norge"
            },
            "breeder": {
              "id": 627533,
              "name": "Viksås Merete",
              "location": "Norge"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 23,
                  "earnings": 115043700,
                  "placement": {
                    "3": 2,
                    "2": 4,
                    "1": 10
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 20,
                        "tenths": 4
                      },
                      "place": 0
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 22,
                        "tenths": 4
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 13,
                  "earnings": 105863800,
                  "placement": {
                    "3": 0,
                    "2": 2,
                    "1": 6
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 19,
                        "tenths": 3
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 22,
                        "tenths": 9
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 149,
                "earnings": 420206500,
                "placement": {
                  "3": 19,
                  "2": 24,
                  "1": 43
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 19,
                      "tenths": 3
                    },
                    "place": 6,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 22,
                      "tenths": 3
                    },
                    "place": 1,
                    "year": "2020"
                  }
                ],
                "winPercentage": 2885,
                "placePercentage": 5771,
                "earningsPerStart": 2820177,
                "startPoints": 6044
              },
              "lastFiveStarts": {
                "averageOdds": 1525
              }
            },
            "pedigree": {
              "father": {
                "id": 607419,
                "name": "Joker Elden",
                "nationality": "NO"
              },
              "mother": {
                "id": 706690,
                "name": "Stumne Saga",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 155348,
                "name": "Spang Best",
                "nationality": "NO"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 605915,
            "firstName": "Ole Johan",
            "lastName": "Östre",
            "shortName": "Öst OJ",
            "location": "Norge",
            "birth": 1989,
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "license": "A-tränare: (Sv/utland): träna, köra",
            "silks": "Blå, vita sidor, ärmbindlar; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 180,
                  "earnings": 278089700,
                  "placement": {
                    "3": 20,
                    "2": 12,
                    "1": 23
                  },
                  "winPercentage": 1277
                },
                "2024": {
                  "starts": 179,
                  "earnings": 214446100,
                  "placement": {
                    "3": 19,
                    "2": 19,
                    "1": 16
                  },
                  "winPercentage": 893
                }
              }
            }
          },
          "result": {
            "place": 2,
            "finishOrder": 2,
            "kmTime": {
              "minutes": 1,
              "seconds": 21,
              "tenths": 5
            },
            "prizeMoney": 150000,
            "finalOdds": 12.35,
            "startNumber": 2
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1235
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 226,
              "maxOdds": 226,
              "odds": 226
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 614,
              "potentialPayout": {
                "value": 217500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900652613060",
              "timestamp": "2024-09-21T16:06:01"
            },
            {
              "mediaId": "1900656197104",
              "timestamp": "2024-09-21T16:15:59"
            },
            {
              "mediaId": "1900656197286",
              "timestamp": "2024-09-21T16:26:05"
            }
          ]
        },
        {
          "id": "2024-09-21_15_7_3",
          "number": 3,
          "postPosition": 3,
          "distance": 2140,
          "horse": {
            "id": 778940,
            "name": "Balder Odin",
            "nationality": "NO",
            "age": 7,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 20,
                "tenths": 7
              }
            },
            "trainer": {
              "id": 842139,
              "firstName": "Johan Kringeland",
              "lastName": "Eriksen",
              "shortName": "Eri JK",
              "location": "Norge",
              "license": "B-tränare: (utland): träna, köra"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 1783740,
            "color": "svart",
            "owner": {
              "id": 226009,
              "name": "Edvardsen Espen & Öystein",
              "location": "Norge"
            },
            "breeder": {
              "id": 801491,
              "name": "Håvardstun Torill",
              "location": "Norge"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 6,
                  "earnings": 22915600,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 24,
                        "tenths": 0
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 24,
                        "tenths": 1
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 45053000,
                  "placement": {
                    "3": 3,
                    "2": 1,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 20,
                        "tenths": 7
                      },
                      "place": 0
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 24,
                        "tenths": 7
                      },
                      "place": 5
                    }
                  ]
                }
              },
              "life": {
                "starts": 47,
                "earnings": 178374000,
                "placement": {
                  "3": 9,
                  "2": 4,
                  "1": 18
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 20,
                      "tenths": 7
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 23,
                      "tenths": 9
                    },
                    "place": 6,
                    "year": "2021"
                  }
                ],
                "winPercentage": 3829,
                "placePercentage": 6595,
                "earningsPerStart": 3795191,
                "startPoints": 3716
              },
              "lastFiveStarts": {
                "averageOdds": 1029
              }
            },
            "pedigree": {
              "father": {
                "id": 501290,
                "name": "Moe Odin",
                "nationality": "NO"
              },
              "mother": {
                "id": 778939,
                "name": "Steggsjura",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 593240,
                "name": "Åsajerven",
                "nationality": "NO"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 157403,
            "firstName": "Svein O",
            "lastName": "Wassberg",
            "shortName": "Was SO",
            "location": "Norge",
            "birth": 1973,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Blå, vit bröstband och silver ärmb.;blå"
          },
          "result": {
            "place": 7,
            "finishOrder": 7,
            "kmTime": {
              "minutes": 1,
              "seconds": 22,
              "tenths": 1
            },
            "prizeMoney": 10000,
            "finalOdds": 19.42,
            "startNumber": 3
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1942
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 321,
              "maxOdds": 321
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 397,
              "potentialPayout": {
                "value": 252400
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_7_4",
          "number": 4,
          "postPosition": 4,
          "distance": 2140,
          "horse": {
            "id": 756757,
            "name": "Oppgårdsdrängen",
            "age": 7,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 21,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 41304,
              "firstName": "Jan-Olov",
              "lastName": "Persson",
              "shortName": "Per JO",
              "location": "Hudiksvall",
              "birth": 1959,
              "homeTrack": {
                "id": 17,
                "name": "Hagmyren"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Blå, gult X; ljusblå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 806,
                    "earnings": 1685977000,
                    "placement": {
                      "3": 80,
                      "2": 112,
                      "1": 149
                    },
                    "winPercentage": 1848
                  },
                  "2024": {
                    "starts": 648,
                    "earnings": 1317775300,
                    "placement": {
                      "3": 70,
                      "2": 73,
                      "1": 129
                    },
                    "winPercentage": 1990
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 1939046,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "owner": {
              "id": 688624,
              "name": "Jansson Ingegerd",
              "location": "Edsbro"
            },
            "breeder": {
              "id": 688624,
              "name": "Jansson Ingegerd",
              "location": "Edsbro"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 19,
                  "earnings": 21950000,
                  "placement": {
                    "3": 3,
                    "2": 2,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 23,
                        "tenths": 6
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 23,
                        "tenths": 7
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 14,
                  "earnings": 20100000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 21,
                        "tenths": 2
                      },
                      "place": 6
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 25,
                        "tenths": 4
                      },
                      "place": 5
                    }
                  ]
                }
              },
              "life": {
                "starts": 68,
                "earnings": 193904600,
                "placement": {
                  "3": 5,
                  "2": 11,
                  "1": 13
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 21,
                      "tenths": 2
                    },
                    "place": 6,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 22,
                      "tenths": 6
                    },
                    "place": 2,
                    "year": "2021"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 24,
                      "tenths": 2
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 33,
                      "tenths": 1
                    },
                    "place": 1,
                    "year": "2020"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 22,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2022"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 25,
                      "tenths": 9
                    },
                    "place": 6,
                    "year": "2022"
                  }
                ],
                "winPercentage": 1911,
                "placePercentage": 4264,
                "earningsPerStart": 2851538,
                "startPoints": 905
              },
              "lastFiveStarts": {
                "averageOdds": 5005
              }
            },
            "pedigree": {
              "father": {
                "id": 717331,
                "name": "Tekno Odin",
                "nationality": "NO"
              },
              "mother": {
                "id": 722017,
                "name": "Oppgårdens Smaragd"
              },
              "grandfather": {
                "id": 80646,
                "name": "Järvsöfaks"
              }
            }
          },
          "driver": {
            "id": 722626,
            "firstName": "Mats E",
            "lastName": "Djuse",
            "shortName": "Dju ME",
            "location": "Hudiksvall",
            "birth": 1998,
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Svart, gult axelparti och rött bröstb.; sv",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1717,
                  "earnings": 3346819100,
                  "placement": {
                    "3": 186,
                    "2": 219,
                    "1": 257
                  },
                  "winPercentage": 1496
                },
                "2024": {
                  "starts": 1355,
                  "earnings": 2950765100,
                  "placement": {
                    "3": 148,
                    "2": 172,
                    "1": 234
                  },
                  "winPercentage": 1726
                }
              }
            }
          },
          "result": {
            "place": 5,
            "finishOrder": 5,
            "kmTime": {
              "minutes": 1,
              "seconds": 22,
              "tenths": 0
            },
            "prizeMoney": 27000,
            "finalOdds": 75.2,
            "startNumber": 4
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 7520
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 982,
              "maxOdds": 982
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 46,
              "potentialPayout": {
                "value": 3153700
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_7_5",
          "number": 5,
          "postPosition": 5,
          "distance": 2140,
          "horse": {
            "id": 738313,
            "name": "Lysjö Kasper",
            "age": 10,
            "sex": "gelding",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 25,
                "tenths": 3
              }
            },
            "trainer": {
              "id": 40518,
              "firstName": "Kristina",
              "lastName": "Larsson",
              "shortName": "Lar Kr",
              "location": "Rottneros",
              "birth": 1952,
              "homeTrack": {
                "id": 15,
                "name": "Färjestad"
              },
              "license": "B-tränare: träna, köra",
              "silks": "Blå, vit romb på grått bröstband; blå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 44,
                    "earnings": 30490000,
                    "placement": {
                      "3": 4,
                      "2": 4,
                      "1": 1
                    },
                    "winPercentage": 227
                  },
                  "2024": {
                    "starts": 30,
                    "earnings": 7050000,
                    "placement": {
                      "3": 0,
                      "2": 0,
                      "1": 0
                    },
                    "winPercentage": 0
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 636600,
            "color": "gulbrun",
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "owner": {
              "id": 460110,
              "name": "Stall Lysjö KB",
              "location": "Rottneros"
            },
            "breeder": {
              "id": 214039,
              "name": "Larsson Kristina",
              "location": "Rottneros"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 8,
                  "earnings": 7950000,
                  "placement": {
                    "3": 2,
                    "2": 1,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 24,
                        "tenths": 7
                      },
                      "place": 6
                    }
                  ]
                },
                "2024": {
                  "starts": 5,
                  "earnings": 850000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 25,
                        "tenths": 3
                      },
                      "place": 0
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 26,
                        "tenths": 5
                      },
                      "place": 0
                    }
                  ]
                }
              },
              "life": {
                "starts": 58,
                "earnings": 63660000,
                "placement": {
                  "3": 10,
                  "2": 9,
                  "1": 7
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 30,
                      "tenths": 3
                    },
                    "place": 3,
                    "year": "2020"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 25,
                      "tenths": 3
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 26,
                      "tenths": 9
                    },
                    "place": 3,
                    "year": "2022"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 24,
                      "tenths": 7
                    },
                    "place": 6,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 25,
                      "tenths": 8
                    },
                    "place": 5,
                    "year": "2022"
                  }
                ],
                "winPercentage": 1206,
                "placePercentage": 4482,
                "earningsPerStart": 1097586,
                "startPoints": 135
              },
              "lastFiveStarts": {
                "averageOdds": 3294
              }
            },
            "pedigree": {
              "father": {
                "id": 661168,
                "name": "Bork Odin",
                "nationality": "NO"
              },
              "mother": {
                "id": 425300,
                "name": "Lysjö Docka"
              },
              "grandfather": {
                "id": 19164,
                "name": "Braute",
                "nationality": "NO"
              }
            }
          },
          "driver": {
            "id": 40518,
            "firstName": "Kristina",
            "lastName": "Larsson",
            "shortName": "Lar Kr",
            "location": "Rottneros",
            "birth": 1952,
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "license": "B-tränare: träna, köra",
            "silks": "Blå, vit romb på grått bröstband; blå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 30,
                  "earnings": 12990000,
                  "placement": {
                    "3": 2,
                    "2": 3,
                    "1": 0
                  },
                  "winPercentage": 0
                },
                "2024": {
                  "starts": 24,
                  "earnings": 5400000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 0
                  },
                  "winPercentage": 0
                }
              }
            }
          },
          "result": {
            "place": 8,
            "finishOrder": 8,
            "kmTime": {
              "minutes": 1,
              "seconds": 24,
              "tenths": 6
            },
            "prizeMoney": 6000,
            "finalOdds": 185.31,
            "startNumber": 5
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 18531
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 2294,
              "maxOdds": 2294
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 14,
              "potentialPayout": {
                "value": 7654300
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900650053182",
              "timestamp": "2024-09-21T15:56:57"
            }
          ]
        },
        {
          "id": "2024-09-21_15_7_6",
          "number": 6,
          "postPosition": 6,
          "distance": 2140,
          "horse": {
            "id": 731074,
            "name": "Järvsöodin",
            "age": 11,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 19,
                "tenths": 1
              }
            },
            "trainer": {
              "id": 41304,
              "firstName": "Jan-Olov",
              "lastName": "Persson",
              "shortName": "Per JO",
              "location": "Hudiksvall",
              "birth": 1959,
              "homeTrack": {
                "id": 17,
                "name": "Hagmyren"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Blå, gult X; ljusblå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 806,
                    "earnings": 1685977000,
                    "placement": {
                      "3": 80,
                      "2": 112,
                      "1": 149
                    },
                    "winPercentage": 1848
                  },
                  "2024": {
                    "starts": 648,
                    "earnings": 1317775300,
                    "placement": {
                      "3": 70,
                      "2": 73,
                      "1": 129
                    },
                    "winPercentage": 1990
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 3750103,
            "color": "brun",
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "owner": {
              "id": 706948,
              "name": "Stall Slugas"
            },
            "breeder": {
              "id": 214269,
              "name": "Persson Jan-Olov",
              "location": "Hudiksvall"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 17,
                  "earnings": 83589000,
                  "placement": {
                    "3": 2,
                    "2": 4,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 20,
                        "tenths": 2
                      },
                      "place": 2
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 23,
                        "tenths": 3
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 14,
                  "earnings": 77717200,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 19,
                        "tenths": 1
                      },
                      "place": 4
                    }
                  ]
                }
              },
              "life": {
                "starts": 132,
                "earnings": 375010300,
                "placement": {
                  "3": 16,
                  "2": 19,
                  "1": 37
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 19,
                      "tenths": 1
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 22,
                      "tenths": 0
                    },
                    "place": 6,
                    "year": "2019"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 23,
                      "tenths": 1
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 23,
                      "tenths": 3
                    },
                    "place": 4,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 22,
                      "tenths": 7
                    },
                    "place": 5,
                    "year": "2021"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 23,
                      "tenths": 6
                    },
                    "place": 5,
                    "year": "2022"
                  }
                ],
                "winPercentage": 2803,
                "placePercentage": 5454,
                "earningsPerStart": 2840987,
                "startPoints": 5110
              },
              "lastFiveStarts": {
                "averageOdds": 268
              }
            },
            "pedigree": {
              "father": {
                "id": 80646,
                "name": "Järvsöfaks"
              },
              "mother": {
                "id": 593688,
                "name": "Järvsö Berta"
              },
              "grandfather": {
                "id": 501290,
                "name": "Moe Odin",
                "nationality": "NO"
              }
            }
          },
          "driver": {
            "id": 696218,
            "firstName": "Marcus",
            "lastName": "Lilius",
            "shortName": "Lil Ma",
            "location": "Hudiksvall",
            "birth": 1997,
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Blå/vit/grön,tredel, blå ärm, rev;grön",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 657,
                  "earnings": 609916400,
                  "placement": {
                    "3": 66,
                    "2": 63,
                    "1": 54
                  },
                  "winPercentage": 821
                },
                "2024": {
                  "starts": 537,
                  "earnings": 503432200,
                  "placement": {
                    "3": 39,
                    "2": 50,
                    "1": 51
                  },
                  "winPercentage": 949
                }
              }
            }
          },
          "result": {
            "finishOrder": 39,
            "kmTime": {
              "code": "u"
            },
            "galloped": true,
            "disqualified": true,
            "prizeMoney": 2500,
            "finalOdds": 30.98,
            "startNumber": 6
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3098
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 420,
              "maxOdds": 420
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 220,
              "potentialPayout": {
                "value": 558600
              }
            }
          },
          "out": true
        },
        {
          "id": "2024-09-21_15_7_7",
          "number": 7,
          "postPosition": 7,
          "distance": 2140,
          "horse": {
            "id": 777257,
            "name": "Tangen Bork",
            "nationality": "NO",
            "age": 7,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 18,
                "tenths": 6
              }
            },
            "trainer": {
              "id": 137528,
              "firstName": "Öystein",
              "lastName": "Tjomsland",
              "shortName": "Tjo Öy",
              "location": "Norge",
              "birth": 1971,
              "homeTrack": {
                "id": 9,
                "name": "Bergsåker"
              },
              "license": "A-tränare: (Sv/utland): träna, köra",
              "silks": "Gul, svarta sidor och midjeband; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 863,
                    "earnings": 1610503400,
                    "placement": {
                      "3": 87,
                      "2": 120,
                      "1": 162
                    },
                    "winPercentage": 1877
                  },
                  "2024": {
                    "starts": 455,
                    "earnings": 1148814900,
                    "placement": {
                      "3": 52,
                      "2": 76,
                      "1": 95
                    },
                    "winPercentage": 2087
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 7198122,
            "color": "gulbrun",
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "owner": {
              "id": 226009,
              "name": "N. Munkhaugen Holding AS",
              "location": "Norge"
            },
            "breeder": {
              "id": 203729,
              "name": "Nilsen Jörn Gunnar",
              "location": "Norge"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 16,
                  "earnings": 181249800,
                  "placement": {
                    "3": 1,
                    "2": 3,
                    "1": 10
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 19,
                        "tenths": 4
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 22,
                        "tenths": 9
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 10,
                  "earnings": 216533000,
                  "placement": {
                    "3": 0,
                    "2": 2,
                    "1": 7
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 18,
                        "tenths": 6
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 23,
                        "tenths": 5
                      },
                      "place": 4
                    }
                  ]
                }
              },
              "life": {
                "starts": 47,
                "earnings": 719812200,
                "placement": {
                  "3": 3,
                  "2": 6,
                  "1": 33
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 18,
                      "tenths": 6
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 22,
                      "tenths": 9
                    },
                    "place": 3,
                    "year": "2023"
                  }
                ],
                "winPercentage": 7021,
                "placePercentage": 8936,
                "earningsPerStart": 15315153,
                "startPoints": 9094
              },
              "lastFiveStarts": {
                "averageOdds": 137
              }
            },
            "pedigree": {
              "father": {
                "id": 661168,
                "name": "Bork Odin",
                "nationality": "NO"
              },
              "mother": {
                "id": 721839,
                "name": "Tangen Stöva",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 10987,
                "name": "Röder",
                "nationality": "NO"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 188437,
            "firstName": "Tom Erik",
            "lastName": "Solberg",
            "shortName": "Sol TE",
            "location": "Norge",
            "birth": 1975,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Svart, guld vinkel och stjärnor; svart"
          },
          "result": {
            "place": 4,
            "finishOrder": 4,
            "kmTime": {
              "minutes": 1,
              "seconds": 21,
              "tenths": 8
            },
            "prizeMoney": 45000,
            "finalOdds": 4.49,
            "startNumber": 7
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 449
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 139,
              "maxOdds": 139
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1926,
              "potentialPayout": {
                "value": 85100
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900646469182",
              "timestamp": "2024-09-21T15:48:53"
            }
          ]
        },
        {
          "id": "2024-09-21_15_7_8",
          "number": 8,
          "postPosition": 8,
          "distance": 2140,
          "horse": {
            "id": 750346,
            "name": "Tekno Jerven",
            "age": 8,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 21,
                "tenths": 0
              }
            },
            "trainer": {
              "id": 78717,
              "firstName": "Fredrik",
              "lastName": "Fransson",
              "shortName": "Fra Fr",
              "location": "Järvsö",
              "birth": 1979,
              "homeTrack": {
                "id": 12,
                "name": "Bollnäs"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Guld, svart lodr.fält, axelp. och ärm; sva",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 120,
                    "earnings": 65474300,
                    "placement": {
                      "3": 10,
                      "2": 12,
                      "1": 7
                    },
                    "winPercentage": 583
                  },
                  "2024": {
                    "starts": 98,
                    "earnings": 73998800,
                    "placement": {
                      "3": 10,
                      "2": 9,
                      "1": 5
                    },
                    "winPercentage": 510
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 2161388,
            "color": "svart",
            "homeTrack": {
              "id": 12,
              "name": "Bollnäs"
            },
            "owner": {
              "id": 200048,
              "name": "Jonsson Alf",
              "location": "Njurunda"
            },
            "breeder": {
              "id": 213899,
              "name": "Arnells Maria",
              "location": "Alfta"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 13,
                  "earnings": 15990000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 23,
                        "tenths": 4
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 24,
                        "tenths": 8
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 14,
                  "earnings": 56648800,
                  "placement": {
                    "3": 3,
                    "2": 5,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 21,
                        "tenths": 0
                      },
                      "place": 4
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 23,
                        "tenths": 3
                      },
                      "place": 3
                    }
                  ]
                }
              },
              "life": {
                "starts": 65,
                "earnings": 216138800,
                "placement": {
                  "3": 8,
                  "2": 12,
                  "1": 17
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 21,
                      "tenths": 0
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 22,
                      "tenths": 7
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 24,
                      "tenths": 0
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 31,
                      "tenths": 8
                    },
                    "place": 2,
                    "year": "2019"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 23,
                      "tenths": 3
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 23,
                      "tenths": 8
                    },
                    "place": 2,
                    "year": "2021"
                  }
                ],
                "winPercentage": 2615,
                "placePercentage": 5692,
                "earningsPerStart": 3325212,
                "startPoints": 3304
              },
              "lastFiveStarts": {
                "averageOdds": 716
              }
            },
            "pedigree": {
              "father": {
                "id": 717331,
                "name": "Tekno Odin",
                "nationality": "NO"
              },
              "mother": {
                "id": 635894,
                "name": "Puma Jerva"
              },
              "grandfather": {
                "id": 593240,
                "name": "Åsajerven",
                "nationality": "NO"
              }
            }
          },
          "driver": {
            "id": 161658,
            "firstName": "Jimmy",
            "lastName": "Jonsson",
            "shortName": "Jon Ji",
            "location": "Njurunda",
            "birth": 1977,
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Svart, gula hängslen; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 68,
                  "earnings": 81550000,
                  "placement": {
                    "3": 4,
                    "2": 9,
                    "1": 10
                  },
                  "winPercentage": 1470
                },
                "2024": {
                  "starts": 62,
                  "earnings": 117788800,
                  "placement": {
                    "3": 11,
                    "2": 9,
                    "1": 9
                  },
                  "winPercentage": 1451
                }
              }
            }
          },
          "result": {
            "place": 3,
            "finishOrder": 3,
            "kmTime": {
              "minutes": 1,
              "seconds": 21,
              "tenths": 8
            },
            "prizeMoney": 80000,
            "finalOdds": 35.48,
            "startNumber": 8
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3548
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 554,
              "maxOdds": 554,
              "odds": 554
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 154,
              "potentialPayout": {
                "value": 632300
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_7_9",
          "number": 9,
          "postPosition": 9,
          "distance": 2140,
          "horse": {
            "id": 797680,
            "name": "Brenne Borken",
            "nationality": "NO",
            "age": 5,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 18,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 137528,
              "firstName": "Öystein",
              "lastName": "Tjomsland",
              "shortName": "Tjo Öy",
              "location": "Norge",
              "birth": 1971,
              "homeTrack": {
                "id": 9,
                "name": "Bergsåker"
              },
              "license": "A-tränare: (Sv/utland): träna, köra",
              "silks": "Gul, svarta sidor och midjeband; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 863,
                    "earnings": 1610503400,
                    "placement": {
                      "3": 87,
                      "2": 120,
                      "1": 162
                    },
                    "winPercentage": 1877
                  },
                  "2024": {
                    "starts": 455,
                    "earnings": 1148814900,
                    "placement": {
                      "3": 52,
                      "2": 76,
                      "1": 95
                    },
                    "winPercentage": 2087
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true
              },
              "back": {
                "hasShoe": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 2181857,
            "color": "gulbrun",
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "owner": {
              "id": 226009,
              "name": "Gard Tore & Andersen Kjell Magne",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 4,
                  "earnings": 98729100,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 20,
                        "tenths": 2
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 4,
                  "earnings": 53451800,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 18,
                        "tenths": 9
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 21,
                        "tenths": 7
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 14,
                "earnings": 218185700,
                "placement": {
                  "3": 0,
                  "2": 0,
                  "1": 14
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 18,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 21,
                      "tenths": 7
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 10000,
                "placePercentage": 10000,
                "earningsPerStart": 15584692,
                "startPoints": 14577
              },
              "lastFiveStarts": {
                "averageOdds": 120
              }
            },
            "pedigree": {
              "father": {
                "id": 661168,
                "name": "Bork Odin",
                "nationality": "NO"
              },
              "mother": {
                "id": 667435,
                "name": "Brenne Järva",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 80646,
                "name": "Järvsöfaks"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 137528,
            "firstName": "Öystein",
            "lastName": "Tjomsland",
            "shortName": "Tjo Öy",
            "location": "Norge",
            "birth": 1971,
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "license": "A-tränare: (Sv/utland): träna, köra",
            "silks": "Gul, svarta sidor och midjeband; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 143,
                  "earnings": 429839900,
                  "placement": {
                    "3": 10,
                    "2": 22,
                    "1": 34
                  },
                  "winPercentage": 2377
                },
                "2024": {
                  "starts": 127,
                  "earnings": 333144100,
                  "placement": {
                    "3": 18,
                    "2": 26,
                    "1": 31
                  },
                  "winPercentage": 2440
                }
              }
            }
          },
          "result": {
            "place": 6,
            "finishOrder": 6,
            "kmTime": {
              "minutes": 1,
              "seconds": 22,
              "tenths": 0
            },
            "galloped": true,
            "prizeMoney": 18000,
            "finalOdds": 1.75,
            "startNumber": 9
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 175
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 113,
              "maxOdds": 113
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 4918,
              "potentialPayout": {
                "value": 46600
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900645957097",
              "timestamp": "2024-09-21T15:46:54"
            },
            {
              "mediaId": "1900650053232",
              "timestamp": "2024-09-21T15:58:16"
            },
            {
              "mediaId": "1900652613163",
              "timestamp": "2024-09-21T16:07:45"
            },
            {
              "mediaId": "1900655685164",
              "timestamp": "2024-09-21T16:18:34"
            }
          ]
        }
      ],
      "mergedPools": [
        {
          "name": "A",
          "betTypes": ["vinnare", "plats", "komb", "tvilling", "trio"]
        }
      ]
    },
    {
      "id": "2024-09-21_15_8",
      "name": "Axeda Entreprenad AB - Unionsstayern",
      "date": "2024-09-21",
      "number": 8,
      "distance": 3140,
      "startMethod": "volte",
      "startTime": "2024-09-21T17:30:37",
      "scheduledStartTime": "2024-09-21T17:29:00",
      "prize": "Pris: 75.000-37.500-21.500-15.000-11.000-(7.500)-(5.000) kr. Lägst 1.500 kr till alla tävlande. Prispengar max total: 184.500 kr.",
      "terms": [
        "3-åriga och äldre 100.001 - 1.190.000 kr. Körsvenskrav kat. 2. Körsvenner födda 060921 eller tidigare.",
        "Hederspris till segrande hästs ägare.",
        "3140 m. Tillägg 20 m vid vunna 360.001 kr, 40 m vid 655.001 kr"
      ],
      "sport": "trot",
      "track": {
        "id": 15,
        "name": "Färjestad",
        "condition": "light",
        "countryCode": "SE"
      },
      "result": {
        "victoryMargin": "7 längder",
        "scratchings": [5]
      },
      "status": "results",
      "mediaId": "1900685893055",
      "pools": {
        "vinnare": {
          "@type": ".VinnarePool",
          "id": "vinnare_2024-09-21_15_8",
          "status": "results",
          "timestamp": "2024-09-21 17:37:56",
          "turnover": 146004900,
          "result": {
            "@type": ".VinnarePoolRaceResult",
            "winners": [
              {
                "number": 1,
                "odds": 448
              }
            ]
          },
          "betType": "vinnare"
        },
        "plats": {
          "@type": ".PlatsPool",
          "id": "plats_2024-09-21_15_8",
          "status": "results",
          "timestamp": "2024-09-21 17:37:56",
          "turnover": 146004900,
          "result": {
            "@type": ".PlatsPoolRaceResult",
            "winners": {
              "first": [
                {
                  "number": 1,
                  "odds": 165
                }
              ],
              "second": [
                {
                  "number": 6,
                  "odds": 169
                }
              ],
              "third": [
                {
                  "number": 3,
                  "odds": 421
                }
              ]
            }
          },
          "betType": "plats"
        },
        "tvilling": {
          "@type": ".TvillingPool",
          "id": "tvilling_2024-09-21_15_8",
          "status": "results",
          "timestamp": "2024-09-21 17:40:57",
          "turnover": 146004900,
          "result": {
            "@type": ".TvillingPoolRaceResult",
            "winners": [
              {
                "combination": [1, 6],
                "odds": 810
              }
            ]
          },
          "betType": "tvilling"
        },
        "komb": {
          "@type": ".KombPool",
          "id": "komb_2024-09-21_15_8",
          "status": "results",
          "timestamp": "2024-09-21 17:40:57",
          "turnover": 146004900,
          "result": {
            "@type": ".KombPoolRaceResult",
            "winners": [
              {
                "combination": [1, 6],
                "odds": 1841
              }
            ]
          },
          "betType": "komb"
        },
        "trio": {
          "@type": ".TrioPool",
          "id": "trio_2024-09-21_15_8",
          "status": "results",
          "timestamp": "2024-09-21 17:40:58",
          "turnover": 146004900,
          "result": {
            "@type": ".TrioPoolRaceResult",
            "winners": [
              {
                "combination": [1, 6, 3],
                "odds": 12893
              }
            ]
          },
          "betType": "trio"
        },
        "V75": {
          "@type": ".Pool",
          "result": {
            "@type": ".MarkingBetRacePoolResult",
            "systems": "8919",
            "value": {
              "amount": 262700
            },
            "winners": [1],
            "reserveOrder": [13, 6, 1, 2, 10, 11, 3, 12, 8, 14, 9, 5, 7, 4]
          }
        }
      },
      "starts": [
        {
          "id": "2024-09-21_15_8_1",
          "number": 1,
          "postPosition": 1,
          "distance": 3140,
          "horse": {
            "id": 771850,
            "name": "Humanity Pellini",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "L",
              "startMethod": "volte",
              "distance": "long",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 588181,
              "firstName": "Christoffer",
              "lastName": "Eriksson",
              "shortName": "Eri Ch",
              "location": "Sjöbo",
              "birth": 1987,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, blå/vitt axelsk, ärmbindel; vit",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 348,
                    "earnings": 853871600,
                    "placement": {
                      "3": 35,
                      "2": 45,
                      "1": 52
                    },
                    "winPercentage": 1494
                  },
                  "2024": {
                    "starts": 327,
                    "earnings": 574364500,
                    "placement": {
                      "3": 34,
                      "2": 46,
                      "1": 45
                    },
                    "winPercentage": 1376
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": true
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 617700,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 548281,
              "name": "Jamav Syd Fastigheter AB",
              "location": "Lomma"
            },
            "breeder": {
              "id": 535222,
              "name": "Pellpac AB",
              "location": "Torekov"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 12,
                  "earnings": 28780000,
                  "placement": {
                    "3": 3,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 2
                      },
                      "place": 0
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 5
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 25640000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 1
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 9
                      },
                      "place": 3
                    }
                  ]
                }
              },
              "life": {
                "starts": 27,
                "earnings": 61770000,
                "placement": {
                  "3": 6,
                  "2": 2,
                  "1": 7
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 9
                    },
                    "place": 3,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2592,
                "placePercentage": 5555,
                "earningsPerStart": 2287777,
                "startPoints": 2295
              },
              "lastFiveStarts": {
                "averageOdds": 1671
              }
            },
            "pedigree": {
              "father": {
                "id": 728595,
                "name": "Up and Quick",
                "nationality": "FR"
              },
              "mother": {
                "id": 705646,
                "name": "Highland Strikes",
                "nationality": "US"
              },
              "grandfather": {
                "id": 528422,
                "name": "Striking Sahbra",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 588181,
            "firstName": "Christoffer",
            "lastName": "Eriksson",
            "shortName": "Eri Ch",
            "location": "Sjöbo",
            "birth": 1987,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, blå/vitt axelsk, ärmbindel; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 294,
                  "earnings": 467382200,
                  "placement": {
                    "3": 30,
                    "2": 37,
                    "1": 34
                  },
                  "winPercentage": 1156
                },
                "2024": {
                  "starts": 165,
                  "earnings": 209490000,
                  "placement": {
                    "3": 17,
                    "2": 27,
                    "1": 11
                  },
                  "winPercentage": 666
                }
              }
            }
          },
          "result": {
            "place": 1,
            "finishOrder": 1,
            "kmTime": {
              "minutes": 1,
              "seconds": 13,
              "tenths": 8
            },
            "prizeMoney": 75000,
            "finalOdds": 4.48,
            "startNumber": 1
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 448,
              "finalOdds": 448
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 165,
              "maxOdds": 165,
              "odds": 165
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1685,
              "potentialPayout": {
                "value": 262700
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900657221084",
              "timestamp": "2024-09-21T16:34:33"
            },
            {
              "mediaId": "1900657733354",
              "timestamp": "2024-09-21T16:44:30"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_2",
          "number": 2,
          "postPosition": 2,
          "distance": 3140,
          "horse": {
            "id": 775784,
            "name": "In Love d'Ecajeul",
            "nationality": "FR",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 7
              }
            },
            "trainer": {
              "id": 161607,
              "firstName": "Björn",
              "lastName": "Goop",
              "shortName": "Goo Bj",
              "location": "Karlstad",
              "birth": 1976,
              "homeTrack": {
                "id": 15,
                "name": "Färjestad"
              },
              "license": "A-tränare: (Sv/utland): träna, köra",
              "silks": "Mblå, guldf.midjeband, sömmar; guld",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 1115,
                    "earnings": 2449819200,
                    "placement": {
                      "3": 116,
                      "2": 126,
                      "1": 159
                    },
                    "winPercentage": 1426
                  },
                  "2024": {
                    "starts": 635,
                    "earnings": 1251650300,
                    "placement": {
                      "3": 78,
                      "2": 86,
                      "1": 94
                    },
                    "winPercentage": 1480
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 654144,
            "color": "brun",
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "owner": {
              "id": 779503,
              "name": "Stall Mary AB",
              "location": "Handen"
            },
            "breeder": {
              "id": 696337,
              "name": "Lavieille Gilles",
              "location": "Frankrike"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 10,
                  "earnings": 16333500,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 3
                      },
                      "place": 0
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 6
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 10,
                  "earnings": 15800000,
                  "placement": {
                    "3": 2,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 5
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 7
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 32,
                "earnings": 65414400,
                "placement": {
                  "3": 3,
                  "2": 1,
                  "1": 9
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 6
                    },
                    "place": 3,
                    "year": "2022"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 7
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2022"
                  }
                ],
                "winPercentage": 2812,
                "placePercentage": 4062,
                "earningsPerStart": 2044200,
                "startPoints": 1290
              },
              "lastFiveStarts": {
                "averageOdds": 1476
              }
            },
            "pedigree": {
              "father": {
                "id": 562580,
                "name": "Love You",
                "nationality": "FR"
              },
              "mother": {
                "id": 775783,
                "name": "Bella Cash",
                "nationality": "FR"
              },
              "grandfather": {
                "id": 667295,
                "name": "Ready Cash",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 161607,
            "firstName": "Björn",
            "lastName": "Goop",
            "shortName": "Goo Bj",
            "location": "Karlstad",
            "birth": 1976,
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "license": "A-tränare: (Sv/utland): träna, köra",
            "silks": "Mblå, guldf.midjeband, sömmar; guld",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1240,
                  "earnings": 3961444800,
                  "placement": {
                    "3": 131,
                    "2": 145,
                    "1": 204
                  },
                  "winPercentage": 1645
                },
                "2024": {
                  "starts": 846,
                  "earnings": 2704607700,
                  "placement": {
                    "3": 103,
                    "2": 102,
                    "1": 124
                  },
                  "winPercentage": 1465
                }
              }
            }
          },
          "result": {
            "finishOrder": 43,
            "kmTime": {
              "code": "kub"
            },
            "galloped": true,
            "disqualified": true,
            "prizeMoney": 1500,
            "finalOdds": 14.25,
            "startNumber": 2
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1425
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 323,
              "maxOdds": 323
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 646,
              "potentialPayout": {
                "value": 719500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900653637067",
              "timestamp": "2024-09-21T16:19:28"
            },
            {
              "mediaId": "1900654149234",
              "timestamp": "2024-09-21T16:09:23"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_3",
          "number": 3,
          "postPosition": 3,
          "distance": 3140,
          "horse": {
            "id": 771889,
            "name": "Bourbon Brodde",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 68083,
              "firstName": "Lars",
              "lastName": "Järpedal",
              "shortName": "Jär La",
              "location": "Vargön",
              "birth": 1965,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "B-tränare: träna, köra för bolag",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 79,
                    "earnings": 80960000,
                    "placement": {
                      "3": 8,
                      "2": 8,
                      "1": 14
                    },
                    "winPercentage": 1772
                  },
                  "2024": {
                    "starts": 47,
                    "earnings": 60380000,
                    "placement": {
                      "3": 8,
                      "2": 8,
                      "1": 5
                    },
                    "winPercentage": 1063
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 572000,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 821522,
              "name": "Vargöns Elementteknik AB",
              "location": "Vargön"
            },
            "breeder": {
              "id": 666894,
              "name": "Brodda Stuteri AB & Remon't AB"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 16,
                  "earnings": 18930000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 4
                      },
                      "place": 0
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 2
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 13,
                  "earnings": 35350000,
                  "placement": {
                    "3": 2,
                    "2": 3,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aL",
                      "startMethod": "auto",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 5
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 5
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 35,
                "earnings": 57200000,
                "placement": {
                  "3": 3,
                  "2": 4,
                  "1": 7
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 4
                    },
                    "place": 0,
                    "year": "2023"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 5
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 5
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 3
                    },
                    "place": 3,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2000,
                "placePercentage": 4000,
                "earningsPerStart": 1634285,
                "startPoints": 3020
              },
              "lastFiveStarts": {
                "averageOdds": 1250
              }
            },
            "pedigree": {
              "father": {
                "id": 749051,
                "name": "Traders",
                "nationality": "IT"
              },
              "mother": {
                "id": 674952,
                "name": "Bailey Sweet Grim"
              },
              "grandfather": {
                "id": 643182,
                "name": "Quite Easy U.S.",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 622071,
            "firstName": "Linda",
            "lastName": "Sedström",
            "shortName": "Sed Li",
            "location": "Askersund",
            "birth": 1989,
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "license": "B-tränare: träna, köra",
            "silks": "Svart, vitt axelp, hängslen och ärmb; sv",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 256,
                  "earnings": 220370000,
                  "placement": {
                    "3": 25,
                    "2": 25,
                    "1": 24
                  },
                  "winPercentage": 937
                },
                "2024": {
                  "starts": 152,
                  "earnings": 145979000,
                  "placement": {
                    "3": 16,
                    "2": 18,
                    "1": 13
                  },
                  "winPercentage": 855
                }
              }
            }
          },
          "result": {
            "place": 3,
            "finishOrder": 3,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 3
            },
            "prizeMoney": 21500,
            "finalOdds": 24.28,
            "startNumber": 3
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 2428
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 421,
              "maxOdds": 421,
              "odds": 421
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 161,
              "potentialPayout": {
                "value": 2651200
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900653637064",
              "timestamp": "2024-09-21T16:19:24"
            },
            {
              "mediaId": "1900654149480",
              "timestamp": "2024-09-21T16:30:58"
            },
            {
              "mediaId": "1900654661019",
              "timestamp": "2024-09-21T16:09:16"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_4",
          "number": 4,
          "postPosition": 4,
          "distance": 3140,
          "horse": {
            "id": 752205,
            "name": "Massaj Käll",
            "age": 8,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 1
              }
            },
            "trainer": {
              "id": 47582,
              "firstName": "Lars",
              "lastName": "Stenvall",
              "shortName": "Ste La",
              "location": "Leksand",
              "birth": 1953,
              "homeTrack": {
                "id": 23,
                "name": "Romme"
              },
              "license": "B-tränare: träna, köra för bolag",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 35,
                    "earnings": 19570000,
                    "placement": {
                      "3": 3,
                      "2": 3,
                      "1": 2
                    },
                    "winPercentage": 571
                  },
                  "2024": {
                    "starts": 35,
                    "earnings": 15985000,
                    "placement": {
                      "3": 2,
                      "2": 1,
                      "1": 2
                    },
                    "winPercentage": 571
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 622200,
            "color": "brun",
            "homeTrack": {
              "id": 23,
              "name": "Romme"
            },
            "owner": {
              "id": 246597,
              "name": "Team Wincent H B",
              "location": "Leksand"
            },
            "breeder": {
              "id": 220268,
              "name": "Dahlqvist Bo",
              "location": "Tranås"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 23,
                  "earnings": 8440000,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 0
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 1
                      },
                      "place": 0
                    }
                  ]
                },
                "2024": {
                  "starts": 16,
                  "earnings": 5660000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 6
                      },
                      "place": 4
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 9
                      },
                      "place": 7
                    }
                  ]
                }
              },
              "life": {
                "starts": 103,
                "earnings": 62220000,
                "placement": {
                  "3": 3,
                  "2": 4,
                  "1": 5
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 8
                    },
                    "place": 6,
                    "year": "2022"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 7
                    },
                    "place": 6,
                    "year": "2021"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 7
                    },
                    "place": 6,
                    "year": "2022"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 0,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 5,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 8
                    },
                    "place": 0,
                    "year": "2021"
                  }
                ],
                "winPercentage": 485,
                "placePercentage": 1165,
                "earningsPerStart": 604077,
                "startPoints": 615
              },
              "lastFiveStarts": {
                "averageOdds": 6064
              }
            },
            "pedigree": {
              "father": {
                "id": 602426,
                "name": "Ken Warkentin",
                "nationality": "US"
              },
              "mother": {
                "id": 557744,
                "name": "Aleva Käll"
              },
              "grandfather": {
                "id": 161431,
                "name": "Supergill",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 696218,
            "firstName": "Marcus",
            "lastName": "Lilius",
            "shortName": "Lil Ma",
            "location": "Hudiksvall",
            "birth": 1997,
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Blå/vit/grön,tredel, blå ärm, rev;grön",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 657,
                  "earnings": 609916400,
                  "placement": {
                    "3": 66,
                    "2": 63,
                    "1": 54
                  },
                  "winPercentage": 821
                },
                "2024": {
                  "starts": 537,
                  "earnings": 503432200,
                  "placement": {
                    "3": 39,
                    "2": 50,
                    "1": 51
                  },
                  "winPercentage": 949
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 12,
            "kmTime": {
              "minutes": 1,
              "seconds": 15,
              "tenths": 3
            },
            "prizeMoney": 1500,
            "finalOdds": 214.62,
            "startNumber": 4
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 21462
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 2534,
              "maxOdds": 2534
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 15,
              "potentialPayout": {
                "jackpot": true
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900653637068",
              "timestamp": "2024-09-21T16:19:28"
            },
            {
              "mediaId": "1900654661015",
              "timestamp": "2024-09-21T16:09:07"
            },
            {
              "mediaId": "1900656197437",
              "timestamp": "2024-09-21T16:31:54"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_5",
          "number": 5,
          "scratched": true,
          "postPosition": 5,
          "distance": 3140,
          "horse": {
            "id": 761473,
            "name": "Mercenary",
            "age": 7,
            "sex": "gelding",
            "record": {
              "code": "L",
              "startMethod": "volte",
              "distance": "long",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 92281,
              "firstName": "Jörgen",
              "lastName": "Westholm",
              "shortName": "Wes Jö",
              "location": "Sala",
              "birth": 1972,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, vitt bröstb, gröna ärmar; grön",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 991,
                    "earnings": 2135524600,
                    "placement": {
                      "3": 108,
                      "2": 99,
                      "1": 149
                    },
                    "winPercentage": 1503
                  },
                  "2024": {
                    "starts": 689,
                    "earnings": 1736210200,
                    "placement": {
                      "3": 66,
                      "2": 81,
                      "1": 111
                    },
                    "winPercentage": 1611
                  }
                }
              }
            },
            "shoes": {
              "reported": false
            },
            "sulky": {
              "reported": false,
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 591218,
            "color": "svartbrun",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 812245,
              "name": "JÅS Fastigheter AB"
            },
            "breeder": {
              "id": 246844,
              "name": "AB Svensk Reklamfinans",
              "location": "Halmstad"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 12,
                  "earnings": 24300000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 2
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 6,
                  "earnings": 8600000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 2
                      },
                      "place": 3
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 2
                      },
                      "place": 4
                    }
                  ]
                }
              },
              "life": {
                "starts": 35,
                "earnings": 59121800,
                "placement": {
                  "3": 6,
                  "2": 3,
                  "1": 9
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2022"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 2
                    },
                    "place": 7,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 2
                    },
                    "place": 2,
                    "year": "2022"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 2
                    },
                    "place": 4,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2571,
                "placePercentage": 5142,
                "earningsPerStart": 1689194,
                "startPoints": 810
              },
              "lastFiveStarts": {
                "averageOdds": 1210
              }
            },
            "pedigree": {
              "father": {
                "id": 667295,
                "name": "Ready Cash",
                "nationality": "FR"
              },
              "mother": {
                "id": 496279,
                "name": "Com Orsa"
              },
              "grandfather": {
                "id": 494729,
                "name": "Conway Hall",
                "nationality": "CA"
              }
            }
          },
          "driver": {
            "id": 722626,
            "firstName": "Mats E",
            "lastName": "Djuse",
            "shortName": "Dju ME",
            "location": "Hudiksvall",
            "birth": 1998,
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Svart, gult axelparti och rött bröstb.; sv",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1717,
                  "earnings": 3346819100,
                  "placement": {
                    "3": 186,
                    "2": 219,
                    "1": 257
                  },
                  "winPercentage": 1496
                },
                "2024": {
                  "starts": 1355,
                  "earnings": 2950765100,
                  "placement": {
                    "3": 148,
                    "2": 172,
                    "1": 234
                  },
                  "winPercentage": 1726
                }
              }
            }
          },
          "result": {
            "finishOrder": 55,
            "finalOdds": 0.0,
            "startNumber": 5
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 0
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 0,
              "maxOdds": 0
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 21,
              "potentialPayout": {
                "jackpot": true
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_8_6",
          "number": 6,
          "postPosition": 6,
          "distance": 3140,
          "horse": {
            "id": 765440,
            "name": "Smajlis",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "L",
              "startMethod": "volte",
              "distance": "long",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 528293,
              "firstName": "David",
              "lastName": "Persson",
              "shortName": "Per Da",
              "location": "Kvänum",
              "birth": 1984,
              "homeTrack": {
                "id": 8,
                "name": "Axevalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Grön, blå/vita korsl.axelsk; grön",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 328,
                    "earnings": 486578000,
                    "placement": {
                      "3": 47,
                      "2": 25,
                      "1": 57
                    },
                    "winPercentage": 1737
                  },
                  "2024": {
                    "starts": 215,
                    "earnings": 439149000,
                    "placement": {
                      "3": 21,
                      "2": 29,
                      "1": 37
                    },
                    "winPercentage": 1720
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 566600,
            "color": "svartbrun",
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "owner": {
              "id": 836105,
              "name": "Jonsson Björn & Johansson Martin"
            },
            "breeder": {
              "id": 768532,
              "name": "Jonsson Björn",
              "location": "Lidköping"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 10,
                  "earnings": 19040000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 3
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 8,
                  "earnings": 19500000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 9
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 38,
                "earnings": 56660000,
                "placement": {
                  "3": 5,
                  "2": 5,
                  "1": 9
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 18,
                      "tenths": 0
                    },
                    "place": 0,
                    "year": "2022"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 3
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 7
                    },
                    "place": 2,
                    "year": "2022"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 9
                    },
                    "place": 3,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2368,
                "placePercentage": 5000,
                "earningsPerStart": 1491052,
                "startPoints": 2760
              },
              "lastFiveStarts": {
                "averageOdds": 1259
              }
            },
            "pedigree": {
              "father": {
                "id": 601184,
                "name": "Classic Photo",
                "nationality": "US"
              },
              "mother": {
                "id": 570568,
                "name": "Majlis Palema"
              },
              "grandfather": {
                "id": 2456,
                "name": "Alf Palema",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 740606,
            "firstName": "Magnus A",
            "lastName": "Djuse",
            "shortName": "Dju MA",
            "location": "Upplands Väsby",
            "birth": 2000,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Mörkblå, vitt axelparti; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1501,
                  "earnings": 4916246500,
                  "placement": {
                    "3": 170,
                    "2": 213,
                    "1": 279
                  },
                  "winPercentage": 1858
                },
                "2024": {
                  "starts": 1163,
                  "earnings": 3358662500,
                  "placement": {
                    "3": 112,
                    "2": 150,
                    "1": 223
                  },
                  "winPercentage": 1917
                }
              }
            }
          },
          "result": {
            "place": 2,
            "finishOrder": 2,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 3
            },
            "prizeMoney": 37500,
            "finalOdds": 4.36,
            "startNumber": 6
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 436
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 169,
              "maxOdds": 169,
              "odds": 169
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 2282,
              "potentialPayout": {
                "value": 223900
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900649541343",
              "timestamp": "2024-09-21T16:19:24"
            },
            {
              "mediaId": "1900652613120",
              "timestamp": "2024-09-21T16:07:25"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_7",
          "number": 7,
          "postPosition": 1,
          "distance": 3160,
          "horse": {
            "id": 744963,
            "name": "Tony Afrika",
            "age": 9,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 8
              }
            },
            "trainer": {
              "id": 194067,
              "firstName": "Therese",
              "lastName": "Carlsson",
              "shortName": "Car Th",
              "location": "Mantorp",
              "birth": 1976,
              "homeTrack": {
                "id": 22,
                "name": "Mantorp"
              },
              "license": "B-tränare: träna, köra för bolag",
              "silks": "Svart/lila,diagonalt delad; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 0,
                    "earnings": 0,
                    "placement": {
                      "3": 0,
                      "2": 0,
                      "1": 0
                    },
                    "winPercentage": 0
                  },
                  "2024": {
                    "starts": 6,
                    "earnings": 2800000,
                    "placement": {
                      "3": 0,
                      "2": 1,
                      "1": 0
                    },
                    "winPercentage": 0
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 863200,
            "color": "brun",
            "homeTrack": {
              "id": 22,
              "name": "Mantorp"
            },
            "owner": {
              "id": 736014,
              "name": "Karlsson Therese & Svensson Mats"
            },
            "breeder": {
              "id": 716264,
              "name": "Lindberg Urban",
              "location": "Fridlevstad"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 10,
                  "earnings": 2250000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 9
                      },
                      "place": 5
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 8
                      },
                      "place": 0
                    }
                  ]
                },
                "2024": {
                  "starts": 6,
                  "earnings": 2800000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 9
                      },
                      "place": 7
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 9
                      },
                      "place": 6
                    }
                  ]
                }
              },
              "life": {
                "starts": 61,
                "earnings": 86320000,
                "placement": {
                  "3": 2,
                  "2": 7,
                  "1": 8
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2020"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 1
                    },
                    "place": 5,
                    "year": "2019"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 5
                    },
                    "place": 4,
                    "year": "2019"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 3
                    },
                    "place": 7,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 8
                    },
                    "place": 0,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 4
                    },
                    "place": 4,
                    "year": "2020"
                  }
                ],
                "winPercentage": 1311,
                "placePercentage": 2786,
                "earningsPerStart": 1415081,
                "startPoints": 435
              },
              "lastFiveStarts": {
                "averageOdds": 9254
              }
            },
            "pedigree": {
              "father": {
                "id": 616082,
                "name": "Joke Face"
              },
              "mother": {
                "id": 681251,
                "name": "Opale Lavec",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 198885,
                "name": "Lindy Lane",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 92363,
            "firstName": "Micael",
            "lastName": "Stjernström",
            "shortName": "Stj Mi",
            "location": "Skänninge",
            "birth": 1979,
            "homeTrack": {
              "id": 22,
              "name": "Mantorp"
            },
            "license": "B-tränare: träna, köra",
            "silks": "Svart, rött lodrätt fält; röd",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 135,
                  "earnings": 84179600,
                  "placement": {
                    "3": 14,
                    "2": 8,
                    "1": 8
                  },
                  "winPercentage": 592
                },
                "2024": {
                  "starts": 152,
                  "earnings": 82470000,
                  "placement": {
                    "3": 8,
                    "2": 13,
                    "1": 7
                  },
                  "winPercentage": 460
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 9,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 4
            },
            "prizeMoney": 1500,
            "finalOdds": 144.0,
            "startNumber": 7
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 14400
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 2110,
              "maxOdds": 2110
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 16,
              "potentialPayout": {
                "jackpot": true
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900654661381",
              "timestamp": "2024-09-21T16:24:21"
            },
            {
              "mediaId": "1900655685152",
              "timestamp": "2024-09-21T16:14:12"
            },
            {
              "mediaId": "1900659269099",
              "timestamp": "2024-09-21T16:35:10"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_8",
          "number": 8,
          "postPosition": 2,
          "distance": 3160,
          "horse": {
            "id": 761721,
            "name": "Starstrucked",
            "age": 7,
            "sex": "mare",
            "record": {
              "code": "L",
              "startMethod": "volte",
              "distance": "long",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 1
              }
            },
            "trainer": {
              "id": 3503,
              "firstName": "Hans R",
              "lastName": "Strömberg",
              "shortName": "Str HR",
              "location": "Rättvik",
              "birth": 1953,
              "homeTrack": {
                "id": 24,
                "name": "Rättvik"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Gul, mörkblå axelp och hängslen; mblå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 161,
                    "earnings": 101860000,
                    "placement": {
                      "3": 15,
                      "2": 11,
                      "1": 6
                    },
                    "winPercentage": 372
                  },
                  "2024": {
                    "starts": 110,
                    "earnings": 157100000,
                    "placement": {
                      "3": 17,
                      "2": 7,
                      "1": 15
                    },
                    "winPercentage": 1363
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": true
              },
              "back": {
                "hasShoe": true,
                "changed": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 762800,
            "color": "fux",
            "homeTrack": {
              "id": 24,
              "name": "Rättvik"
            },
            "owner": {
              "id": 234423,
              "name": "Bengt Wedin HB",
              "location": "Danderyd"
            },
            "breeder": {
              "id": 776320,
              "name": "Siuvatti Vanja & Westholm Jörgen"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 22,
                  "earnings": 18290000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aL",
                      "startMethod": "auto",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 6
                      },
                      "place": 4
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 14,
                  "earnings": 38750000,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aL",
                      "startMethod": "auto",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 3
                      },
                      "place": 6
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 1
                      },
                      "place": 6
                    }
                  ]
                }
              },
              "life": {
                "starts": 70,
                "earnings": 76280000,
                "placement": {
                  "3": 6,
                  "2": 6,
                  "1": 8
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 2
                    },
                    "place": 3,
                    "year": "2022"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 6
                    },
                    "place": 4,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 5
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 6,
                    "year": "2024"
                  }
                ],
                "winPercentage": 1142,
                "placePercentage": 2857,
                "earningsPerStart": 1089714,
                "startPoints": 620
              },
              "lastFiveStarts": {
                "averageOdds": 1468
              }
            },
            "pedigree": {
              "father": {
                "id": 553396,
                "name": "S.J.'s Caviar",
                "nationality": "US"
              },
              "mother": {
                "id": 705247,
                "name": "Venus du Loisir",
                "nationality": "FR"
              },
              "grandfather": {
                "id": 666267,
                "name": "Qualmio de Vandel",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 5599,
            "firstName": "Kaj",
            "lastName": "Widell",
            "shortName": "Wid Ka",
            "location": "Västerås",
            "birth": 1955,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Vit, blå axelparti/triangel/ärm; blå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 455,
                  "earnings": 314885000,
                  "placement": {
                    "3": 35,
                    "2": 22,
                    "1": 26
                  },
                  "winPercentage": 571
                },
                "2024": {
                  "starts": 288,
                  "earnings": 157760000,
                  "placement": {
                    "3": 19,
                    "2": 18,
                    "1": 10
                  },
                  "winPercentage": 347
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 11,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 5
            },
            "prizeMoney": 1500,
            "finalOdds": 62.13,
            "startNumber": 8
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 6213
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 943,
              "maxOdds": 943
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 70,
              "potentialPayout": {
                "value": 5666600
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900650565501",
              "timestamp": "2024-09-21T16:06:01"
            },
            {
              "mediaId": "1900652613427",
              "timestamp": "2024-09-21T16:17:48"
            },
            {
              "mediaId": "1900656197294",
              "timestamp": "2024-09-21T16:27:00"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_9",
          "number": 9,
          "postPosition": 3,
          "distance": 3160,
          "horse": {
            "id": 750273,
            "name": "Missing Tooma",
            "age": 8,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 3
              }
            },
            "trainer": {
              "id": 504949,
              "firstName": "Paw",
              "lastName": "Mahony",
              "shortName": "Mah Pa",
              "location": "Mangskog",
              "birth": 1982,
              "homeTrack": {
                "id": 31,
                "name": "Årjäng"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Mblå, vitt axelp och diag.ränder; mblå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 159,
                    "earnings": 177645400,
                    "placement": {
                      "3": 13,
                      "2": 19,
                      "1": 18
                    },
                    "winPercentage": 1132
                  },
                  "2024": {
                    "starts": 88,
                    "earnings": 98771700,
                    "placement": {
                      "3": 11,
                      "2": 9,
                      "1": 14
                    },
                    "winPercentage": 1590
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": true
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 996731,
            "color": "brun",
            "homeTrack": {
              "id": 31,
              "name": "Årjäng"
            },
            "owner": {
              "id": 831026,
              "name": "Åslund Erland & Elvenes Even"
            },
            "breeder": {
              "id": 131923,
              "name": "Oxalis AB",
              "location": "Bromma"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 15,
                  "earnings": 12340900,
                  "placement": {
                    "3": 4,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 9
                      },
                      "place": 5
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 7
                      },
                      "place": 5
                    }
                  ]
                },
                "2024": {
                  "starts": 9,
                  "earnings": 10351700,
                  "placement": {
                    "3": 2,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 3
                      },
                      "place": 0
                    }
                  ]
                }
              },
              "life": {
                "starts": 72,
                "earnings": 99673100,
                "placement": {
                  "3": 11,
                  "2": 15,
                  "1": 10
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2022"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 6
                    },
                    "place": 5,
                    "year": "2022"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 4
                    },
                    "place": 4,
                    "year": "2020"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 6
                    },
                    "place": 6,
                    "year": "2021"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 3
                    },
                    "place": 1,
                    "year": "2020"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 7
                    },
                    "place": 5,
                    "year": "2023"
                  }
                ],
                "winPercentage": 1388,
                "placePercentage": 5000,
                "earningsPerStart": 1384348,
                "startPoints": 1587
              },
              "lastFiveStarts": {
                "averageOdds": 3067
              }
            },
            "pedigree": {
              "father": {
                "id": 594465,
                "name": "Broadway Hall",
                "nationality": "US"
              },
              "mother": {
                "id": 676100,
                "name": "Finish Tooma"
              },
              "grandfather": {
                "id": 579264,
                "name": "Windsong's Legacy",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 504949,
            "firstName": "Paw",
            "lastName": "Mahony",
            "shortName": "Mah Pa",
            "location": "Mangskog",
            "birth": 1982,
            "homeTrack": {
              "id": 31,
              "name": "Årjäng"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Mblå, vitt axelp och diag.ränder; mblå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 150,
                  "earnings": 165114400,
                  "placement": {
                    "3": 10,
                    "2": 16,
                    "1": 18
                  },
                  "winPercentage": 1200
                },
                "2024": {
                  "starts": 86,
                  "earnings": 78414300,
                  "placement": {
                    "3": 8,
                    "2": 5,
                    "1": 11
                  },
                  "winPercentage": 1279
                }
              }
            }
          },
          "result": {
            "place": 7,
            "finishOrder": 7,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 3
            },
            "prizeMoney": 5000,
            "finalOdds": 66.95,
            "startNumber": 9
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 6695
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 910,
              "maxOdds": 910
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 62,
              "potentialPayout": {
                "value": 6337900
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900653637066",
              "timestamp": "2024-09-21T16:19:24"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_10",
          "number": 10,
          "postPosition": 4,
          "distance": 3160,
          "horse": {
            "id": 756302,
            "name": "Money Smile",
            "age": 7,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 188987,
              "firstName": "Per",
              "lastName": "Linderoth",
              "shortName": "Lin Pe",
              "location": "Östersund",
              "birth": 1980,
              "homeTrack": {
                "id": 33,
                "name": "Östersund"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Röd, vitt axelp,hängslen och ärmar; vit",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 106,
                    "earnings": 221283100,
                    "placement": {
                      "3": 12,
                      "2": 13,
                      "1": 27
                    },
                    "winPercentage": 2547
                  },
                  "2024": {
                    "starts": 98,
                    "earnings": 139207600,
                    "placement": {
                      "3": 21,
                      "2": 16,
                      "1": 9
                    },
                    "winPercentage": 918
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 1113886,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 33,
              "name": "Östersund"
            },
            "owner": {
              "id": 791595,
              "name": "Bossy HB & Per Linderoth AB"
            },
            "breeder": {
              "id": 603197,
              "name": "Tandläkarhuset G H AB & Hansson Emmy"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 13,
                  "earnings": 45000000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 3
                      },
                      "place": 4
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 3
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 8,
                  "earnings": 25758600,
                  "placement": {
                    "3": 4,
                    "2": 2,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 7
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 5
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 44,
                "earnings": 111388600,
                "placement": {
                  "3": 8,
                  "2": 9,
                  "1": 12
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 6
                    },
                    "place": 5,
                    "year": "2021"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 7
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 2
                    },
                    "place": 5,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 3
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 2727,
                "placePercentage": 6590,
                "earningsPerStart": 2531559,
                "startPoints": 2095
              },
              "lastFiveStarts": {
                "averageOdds": 1019
              }
            },
            "pedigree": {
              "father": {
                "id": 740137,
                "name": "The Bank",
                "nationality": "US"
              },
              "mother": {
                "id": 678410,
                "name": "Vestal Virgin"
              },
              "grandfather": {
                "id": 617124,
                "name": "Orlando Vici",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 188987,
            "firstName": "Per",
            "lastName": "Linderoth",
            "shortName": "Lin Pe",
            "location": "Östersund",
            "birth": 1980,
            "homeTrack": {
              "id": 33,
              "name": "Östersund"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Röd, vitt axelp,hängslen och ärmar; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 463,
                  "earnings": 556728100,
                  "placement": {
                    "3": 51,
                    "2": 54,
                    "1": 52
                  },
                  "winPercentage": 1123
                },
                "2024": {
                  "starts": 444,
                  "earnings": 618728600,
                  "placement": {
                    "3": 47,
                    "2": 48,
                    "1": 53
                  },
                  "winPercentage": 1193
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 10,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 5
            },
            "prizeMoney": 1500,
            "finalOdds": 14.97,
            "startNumber": 10
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1497
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 320,
              "maxOdds": 320
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 407,
              "potentialPayout": {
                "value": 1048900
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900654149233",
              "timestamp": "2024-09-21T16:09:16"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_11",
          "number": 11,
          "postPosition": 5,
          "distance": 3160,
          "horse": {
            "id": 758937,
            "name": "Gilmore Trot",
            "age": 7,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 12,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 529886,
              "firstName": "Troels",
              "lastName": "Andersen",
              "shortName": "And Tr",
              "location": "Tärnsjö",
              "birth": 1980,
              "homeTrack": {
                "id": 16,
                "name": "Gävle"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Mblå, vit fält och silver romber axelp; mb",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 114,
                    "earnings": 185918200,
                    "placement": {
                      "3": 8,
                      "2": 15,
                      "1": 19
                    },
                    "winPercentage": 1666
                  },
                  "2024": {
                    "starts": 88,
                    "earnings": 93320000,
                    "placement": {
                      "3": 7,
                      "2": 9,
                      "1": 10
                    },
                    "winPercentage": 1136
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 738810,
            "color": "brun",
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "owner": {
              "id": 662531,
              "name": "Stall Rita"
            },
            "breeder": {
              "id": 568215,
              "name": "Karlsson Ove",
              "location": "Fjugesta"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 9,
                  "earnings": 24821000,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 7
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 6
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 7,
                  "earnings": 7280000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 1
                      },
                      "place": 8
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 9
                      },
                      "place": 4
                    }
                  ]
                }
              },
              "life": {
                "starts": 39,
                "earnings": 73881000,
                "placement": {
                  "3": 3,
                  "2": 2,
                  "1": 8
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 7
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 5,
                    "year": "2020"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 9
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 8
                    },
                    "place": 4,
                    "year": "2021"
                  }
                ],
                "winPercentage": 2051,
                "placePercentage": 3333,
                "earningsPerStart": 1894384,
                "startPoints": 1383
              },
              "lastFiveStarts": {
                "averageOdds": 4625
              }
            },
            "pedigree": {
              "father": {
                "id": 685124,
                "name": "Muscle Hill",
                "nationality": "US"
              },
              "mother": {
                "id": 651593,
                "name": "Caddie Geisha"
              },
              "grandfather": {
                "id": 562580,
                "name": "Love You",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 529886,
            "firstName": "Troels",
            "lastName": "Andersen",
            "shortName": "And Tr",
            "location": "Tärnsjö",
            "birth": 1980,
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Röd, vita ärmar; röd",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 92,
                  "earnings": 112357200,
                  "placement": {
                    "3": 6,
                    "2": 10,
                    "1": 13
                  },
                  "winPercentage": 1413
                },
                "2024": {
                  "starts": 116,
                  "earnings": 95540000,
                  "placement": {
                    "3": 8,
                    "2": 14,
                    "1": 10
                  },
                  "winPercentage": 862
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 8,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 3
            },
            "prizeMoney": 1500,
            "finalOdds": 33.09,
            "startNumber": 11
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3309
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 526,
              "maxOdds": 526
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 236,
              "potentialPayout": {
                "value": 1524300
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_8_12",
          "number": 12,
          "postPosition": 6,
          "distance": 3160,
          "horse": {
            "id": 745248,
            "name": "Ready to Roll",
            "age": 9,
            "sex": "gelding",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 662958,
              "firstName": "Peter",
              "lastName": "Erlandsson",
              "shortName": "Erl Pe",
              "location": "Kil",
              "birth": 1971,
              "homeTrack": {
                "id": 15,
                "name": "Färjestad"
              },
              "license": "B-tränare: träna, köra för bolag",
              "silks": "Blå, silver axelparti och 2-delad ärm; blå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 20,
                    "earnings": 14780000,
                    "placement": {
                      "3": 3,
                      "2": 1,
                      "1": 1
                    },
                    "winPercentage": 500
                  },
                  "2024": {
                    "starts": 13,
                    "earnings": 21300000,
                    "placement": {
                      "3": 6,
                      "2": 0,
                      "1": 2
                    },
                    "winPercentage": 1538
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 770600,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "owner": {
              "id": 831208,
              "name": "Erlandsson Ulrica",
              "location": "Kil"
            },
            "breeder": {
              "id": 728961,
              "name": "Bernertorp Consulting AB",
              "location": "Kil"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 10,
                  "earnings": 11840000,
                  "placement": {
                    "3": 2,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aL",
                      "startMethod": "auto",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 1
                      },
                      "place": 4
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 3
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 5,
                  "earnings": 17650000,
                  "placement": {
                    "3": 3,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aL",
                      "startMethod": "auto",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 1
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 3
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 59,
                "earnings": 77060000,
                "placement": {
                  "3": 9,
                  "2": 4,
                  "1": 12
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 1,
                    "year": "2019"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 4,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 4
                    },
                    "place": 2,
                    "year": "2019"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 3
                    },
                    "place": 4,
                    "year": "2023"
                  }
                ],
                "winPercentage": 2033,
                "placePercentage": 4237,
                "earningsPerStart": 1306101,
                "startPoints": 2865
              },
              "lastFiveStarts": {
                "averageOdds": 1754
              }
            },
            "pedigree": {
              "father": {
                "id": 601184,
                "name": "Classic Photo",
                "nationality": "US"
              },
              "mother": {
                "id": 611319,
                "name": "Markatta"
              },
              "grandfather": {
                "id": 444412,
                "name": "Muscles Yankee",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 103253,
            "firstName": "Jan",
            "lastName": "Silvén",
            "shortName": "Sil Ja",
            "location": "Karlstad",
            "birth": 1982,
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "license": "B-tränare: träna, köra",
            "silks": "Röd, svart axelsk,gula hästskor; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 132,
                  "earnings": 72740000,
                  "placement": {
                    "3": 9,
                    "2": 13,
                    "1": 9
                  },
                  "winPercentage": 681
                },
                "2024": {
                  "starts": 112,
                  "earnings": 70490000,
                  "placement": {
                    "3": 11,
                    "2": 10,
                    "1": 8
                  },
                  "winPercentage": 714
                }
              }
            }
          },
          "result": {
            "place": 4,
            "finishOrder": 4,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 2
            },
            "prizeMoney": 15000,
            "finalOdds": 30.43,
            "startNumber": 12
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3043
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 582,
              "maxOdds": 582
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 161,
              "potentialPayout": {
                "value": 2629500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900654661363",
              "timestamp": "2024-09-21T16:22:26"
            },
            {
              "mediaId": "1900655685106",
              "timestamp": "2024-09-21T16:12:11"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_13",
          "number": 13,
          "postPosition": 7,
          "distance": 3160,
          "horse": {
            "id": 773698,
            "name": "Jalapeno K.",
            "age": 5,
            "sex": "stallion",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 1
              }
            },
            "trainer": {
              "id": 149226,
              "firstName": "André",
              "lastName": "Eklundh",
              "shortName": "Ekl An",
              "location": "Nossebro",
              "birth": 1986,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Vit, mblå stolpar och ärmb. vit axelp.; vi",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 334,
                    "earnings": 571724200,
                    "placement": {
                      "3": 41,
                      "2": 55,
                      "1": 67
                    },
                    "winPercentage": 2005
                  },
                  "2024": {
                    "starts": 232,
                    "earnings": 394911000,
                    "placement": {
                      "3": 28,
                      "2": 26,
                      "1": 49
                    },
                    "winPercentage": 2112
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 1143500,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 203625,
              "name": "Knutsson Trotting AB",
              "location": "Göteborg"
            },
            "breeder": {
              "id": 203625,
              "name": "Knutsson Trotting AB",
              "location": "Göteborg"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 14,
                  "earnings": 50750000,
                  "placement": {
                    "3": 2,
                    "2": 3,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 4
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 1
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 7,
                  "earnings": 57600000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 7
                      },
                      "place": 1
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 8
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 24,
                "earnings": 114350000,
                "placement": {
                  "3": 5,
                  "2": 4,
                  "1": 9
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 4
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 9
                    },
                    "place": 4,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 1
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 3750,
                "placePercentage": 7500,
                "earningsPerStart": 4764583,
                "startPoints": 4360
              },
              "lastFiveStarts": {
                "averageOdds": 354
              }
            },
            "pedigree": {
              "father": {
                "id": 745530,
                "name": "Propulsion",
                "nationality": "US"
              },
              "mother": {
                "id": 741634,
                "name": "Do You Believe",
                "nationality": "US"
              },
              "grandfather": {
                "id": 679433,
                "name": "Crazed",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 125542,
            "firstName": "Erik",
            "lastName": "Adielsson",
            "shortName": "Adi Er",
            "location": "Upplands Väsby",
            "birth": 1974,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Vit, röd romb och ärmbindlar; röd",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 530,
                  "earnings": 2095922500,
                  "placement": {
                    "3": 54,
                    "2": 50,
                    "1": 58
                  },
                  "winPercentage": 1094
                },
                "2024": {
                  "starts": 422,
                  "earnings": 1496106300,
                  "placement": {
                    "3": 54,
                    "2": 30,
                    "1": 42
                  },
                  "winPercentage": 995
                }
              }
            }
          },
          "result": {
            "place": 5,
            "finishOrder": 5,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 2
            },
            "prizeMoney": 11000,
            "finalOdds": 2.33,
            "startNumber": 13
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 233
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 141,
              "maxOdds": 141
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 4169,
              "potentialPayout": {
                "value": 159600
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900655685130",
              "timestamp": "2024-09-21T16:12:26"
            }
          ]
        },
        {
          "id": "2024-09-21_15_8_14",
          "number": 14,
          "postPosition": 8,
          "distance": 3160,
          "horse": {
            "id": 800355,
            "name": "Vallatonian",
            "nationality": "NO",
            "age": 5,
            "sex": "stallion",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 12,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 98681,
              "firstName": "Per Oleg",
              "lastName": "Midtfjeld",
              "shortName": "Mid PO",
              "location": "Norge",
              "birth": 1963,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Vit, rött axelparti och blå ärm; blå"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 678631,
            "color": "brun",
            "owner": {
              "id": 226009,
              "name": "Walgren Atle",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 15,
                  "earnings": 47640600,
                  "placement": {
                    "3": 7,
                    "2": 3,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 8
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 4
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 6,
                  "earnings": 6267500,
                  "placement": {
                    "3": 3,
                    "2": 0,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 2
                      },
                      "place": 3
                    }
                  ]
                }
              },
              "life": {
                "starts": 31,
                "earnings": 67863100,
                "placement": {
                  "3": 11,
                  "2": 4,
                  "1": 5
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 8
                    },
                    "place": 5,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 4
                    },
                    "place": 2,
                    "year": "2023"
                  }
                ],
                "winPercentage": 1612,
                "placePercentage": 6451,
                "earningsPerStart": 2189132,
                "startPoints": 1127
              },
              "lastFiveStarts": {
                "averageOdds": 1299
              }
            },
            "pedigree": {
              "father": {
                "id": 740345,
                "name": "Villiam"
              },
              "mother": {
                "id": 735375,
                "name": "Valla d'Estino",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 484805,
                "name": "Scarlet Knight",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 98681,
            "firstName": "Per Oleg",
            "lastName": "Midtfjeld",
            "shortName": "Mid PO",
            "location": "Norge",
            "birth": 1963,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Vit, rött axelparti och blå ärm; blå"
          },
          "result": {
            "place": 6,
            "finishOrder": 6,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 2
            },
            "prizeMoney": 7500,
            "finalOdds": 69.29,
            "startNumber": 14
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 6929
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 920,
              "maxOdds": 920
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 68,
              "potentialPayout": {
                "value": 8122400
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900655685468",
              "timestamp": "2024-09-21T16:32:53"
            },
            {
              "mediaId": "1900659269382",
              "timestamp": "2024-09-21T16:43:28"
            }
          ]
        }
      ],
      "mergedPools": [
        {
          "name": "A",
          "betTypes": ["vinnare", "plats", "komb", "tvilling", "trio"]
        }
      ]
    },
    {
      "id": "2024-09-21_15_9",
      "name": "Toleruds Hästfoder och Maskin AB - Klass I (Försök 9 i Meeting 6 - Final Solvalla 12 oktober)",
      "date": "2024-09-21",
      "number": 9,
      "distance": 1640,
      "startMethod": "auto",
      "startTime": "2024-09-21T17:50:53",
      "scheduledStartTime": "2024-09-21T17:50:00",
      "prize": "Pris: 110.000-55.000-32.000-19.000-12.500-10.000-6.500-5.000 kr (8 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 260.000 kr.",
      "terms": [
        "3-åriga och äldre 250.001 - 500.000 kr. Körsvenskrav kat. 1. Körsvenner födda 060921 eller tidigare.",
        "Svenska Travligans hederspris till segrande hästs ägare och hästskötare.",
        "1640 m. Autostart. 12 startande."
      ],
      "sport": "trot",
      "track": {
        "id": 15,
        "name": "Färjestad",
        "condition": "light",
        "countryCode": "SE"
      },
      "result": {
        "victoryMargin": "en halv längd",
        "scratchings": [12]
      },
      "status": "results",
      "mediaId": "1900686917250",
      "pools": {
        "vinnare": {
          "@type": ".VinnarePool",
          "id": "vinnare_2024-09-21_15_9",
          "status": "results",
          "timestamp": "2024-09-21 17:59:47",
          "turnover": 127467300,
          "result": {
            "@type": ".VinnarePoolRaceResult",
            "winners": [
              {
                "number": 1,
                "odds": 367
              }
            ]
          },
          "betType": "vinnare"
        },
        "plats": {
          "@type": ".PlatsPool",
          "id": "plats_2024-09-21_15_9",
          "status": "results",
          "timestamp": "2024-09-21 17:59:47",
          "turnover": 127467300,
          "result": {
            "@type": ".PlatsPoolRaceResult",
            "winners": {
              "first": [
                {
                  "number": 1,
                  "odds": 162
                }
              ],
              "second": [
                {
                  "number": 4,
                  "odds": 148
                }
              ],
              "third": [
                {
                  "number": 3,
                  "odds": 407
                }
              ]
            }
          },
          "betType": "plats"
        },
        "tvilling": {
          "@type": ".TvillingPool",
          "id": "tvilling_2024-09-21_15_9",
          "status": "results",
          "timestamp": "2024-09-21 18:00:38",
          "turnover": 127467300,
          "result": {
            "@type": ".TvillingPoolRaceResult",
            "winners": [
              {
                "combination": [1, 4],
                "odds": 613
              }
            ]
          },
          "betType": "tvilling"
        },
        "komb": {
          "@type": ".KombPool",
          "id": "komb_2024-09-21_15_9",
          "status": "results",
          "timestamp": "2024-09-21 18:00:38",
          "turnover": 127467300,
          "result": {
            "@type": ".KombPoolRaceResult",
            "winners": [
              {
                "combination": [1, 4],
                "odds": 1226
              }
            ]
          },
          "betType": "komb"
        },
        "trio": {
          "@type": ".TrioPool",
          "id": "trio_2024-09-21_15_9",
          "status": "results",
          "timestamp": "2024-09-21 18:00:39",
          "turnover": 127467300,
          "result": {
            "@type": ".TrioPoolRaceResult",
            "winners": [
              {
                "combination": [1, 4, 3],
                "odds": 11237
              }
            ]
          },
          "betType": "trio"
        },
        "V75": {
          "@type": ".Pool",
          "result": {
            "@type": ".MarkingBetRacePoolResult",
            "systems": "5245",
            "value": {
              "amount": 446800
            },
            "winners": [1],
            "reserveOrder": [1, 4, 7, 11, 2, 10, 3, 5, 8, 9, 6, 12]
          }
        }
      },
      "starts": [
        {
          "id": "2024-09-21_15_9_1",
          "number": 1,
          "postPosition": 1,
          "distance": 1640,
          "horse": {
            "id": 772691,
            "name": "Jongleur",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 655366,
              "firstName": "Susanne",
              "lastName": "Frang",
              "shortName": "Fra Su",
              "location": "Upplands Väsby",
              "birth": 1988,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "B-tränare: träna, köra för bolag",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 8,
                    "earnings": 27610000,
                    "placement": {
                      "3": 2,
                      "2": 1,
                      "1": 3
                    },
                    "winPercentage": 3750
                  },
                  "2024": {
                    "starts": 8,
                    "earnings": 22950000,
                    "placement": {
                      "3": 0,
                      "2": 0,
                      "1": 4
                    },
                    "winPercentage": 5000
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 408300,
            "color": "brun",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 837558,
              "name": "Frang Susanne &Tim Schlaucher EsserLtd"
            },
            "breeder": {
              "id": 686741,
              "name": "Am Bloodstock AB",
              "location": "Stockholm"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 7,
                  "earnings": 3830000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 5
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 17,
                        "tenths": 2
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 7,
                  "earnings": 22800000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 5
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 9
                      },
                      "place": 0
                    }
                  ]
                }
              },
              "life": {
                "starts": 22,
                "earnings": 40830000,
                "placement": {
                  "3": 1,
                  "2": 2,
                  "1": 6
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 2
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 8
                    },
                    "place": 0,
                    "year": "2022"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 9
                    },
                    "place": 0,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2727,
                "placePercentage": 4090,
                "earningsPerStart": 1855909,
                "startPoints": 3440
              },
              "lastFiveStarts": {
                "averageOdds": 563
              }
            },
            "pedigree": {
              "father": {
                "id": 754192,
                "name": "Django Riff",
                "nationality": "FR"
              },
              "mother": {
                "id": 583291,
                "name": "Hall of Face",
                "nationality": "US"
              },
              "grandfather": {
                "id": 195521,
                "name": "Enjoy Lavec"
              }
            }
          },
          "driver": {
            "id": 740606,
            "firstName": "Magnus A",
            "lastName": "Djuse",
            "shortName": "Dju MA",
            "location": "Upplands Väsby",
            "birth": 2000,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Mörkblå, vitt axelparti; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1501,
                  "earnings": 4916246500,
                  "placement": {
                    "3": 170,
                    "2": 213,
                    "1": 279
                  },
                  "winPercentage": 1858
                },
                "2024": {
                  "starts": 1163,
                  "earnings": 3358662500,
                  "placement": {
                    "3": 112,
                    "2": 150,
                    "1": 223
                  },
                  "winPercentage": 1917
                }
              }
            }
          },
          "result": {
            "place": 1,
            "finishOrder": 1,
            "kmTime": {
              "minutes": 1,
              "seconds": 10,
              "tenths": 6
            },
            "prizeMoney": 110000,
            "finalOdds": 3.67,
            "startNumber": 1
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 367,
              "finalOdds": 367
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 162,
              "maxOdds": 162,
              "odds": 162
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 3179,
              "potentialPayout": {
                "value": 446800
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900655173180",
              "timestamp": "2024-09-21T16:34:48"
            },
            {
              "mediaId": "1900659781046",
              "timestamp": "2024-09-21T16:46:21"
            }
          ]
        },
        {
          "id": "2024-09-21_15_9_2",
          "number": 2,
          "postPosition": 2,
          "distance": 1640,
          "horse": {
            "id": 791092,
            "name": "Mozart B.R.",
            "nationality": "NO",
            "age": 4,
            "sex": "gelding",
            "record": {
              "code": "aL",
              "startMethod": "auto",
              "distance": "long",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 6
              }
            },
            "trainer": {
              "id": 143661,
              "firstName": "Geir Vegard",
              "lastName": "Gundersen",
              "shortName": "Gun GV",
              "location": "Norge",
              "birth": 1975,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Svart, röd/vita detaljer; svart"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 342755,
            "color": "brun",
            "owner": {
              "id": 226009,
              "name": "Sandbaek Erik",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 8,
                  "earnings": 13220600,
                  "placement": {
                    "3": 0,
                    "2": 3,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 6
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 10,
                  "earnings": 21055000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aL",
                      "startMethod": "auto",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 6
                      },
                      "place": 9
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 7
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 18,
                "earnings": 34275500,
                "placement": {
                  "3": 1,
                  "2": 4,
                  "1": 6
                },
                "records": [
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 9,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 7
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 3333,
                "placePercentage": 6111,
                "earningsPerStart": 1904194,
                "startPoints": 1941
              },
              "lastFiveStarts": {
                "averageOdds": 2051
              }
            },
            "pedigree": {
              "father": {
                "id": 721257,
                "name": "Readly Express"
              },
              "mother": {
                "id": 770104,
                "name": "Clara B.R.",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 543528,
                "name": "Dream Vacation",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 722458,
            "firstName": "Magnus Teien",
            "lastName": "Gundersen",
            "shortName": "Gun MT",
            "location": "Norge",
            "birth": 1996,
            "license": "Körlicens, utländsk",
            "silks": "Mörkblå, vit/röd sömmar; mblå"
          },
          "result": {
            "place": 7,
            "finishOrder": 7,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 3
            },
            "prizeMoney": 6500,
            "finalOdds": 10.94,
            "startNumber": 2
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1094
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 296,
              "maxOdds": 296
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 526,
              "potentialPayout": {
                "value": 1645700
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900655173153",
              "timestamp": "2024-09-21T16:34:33"
            },
            {
              "mediaId": "1900659781049",
              "timestamp": "2024-09-21T16:46:26"
            },
            {
              "mediaId": "1900661829134",
              "timestamp": "2024-09-21T16:55:46"
            }
          ]
        },
        {
          "id": "2024-09-21_15_9_3",
          "number": 3,
          "postPosition": 3,
          "distance": 1640,
          "horse": {
            "id": 775327,
            "name": "Jameson K.W.",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 149226,
              "firstName": "André",
              "lastName": "Eklundh",
              "shortName": "Ekl An",
              "location": "Nossebro",
              "birth": 1986,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Vit, mblå stolpar och ärmb. vit axelp.; vi",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 334,
                    "earnings": 571724200,
                    "placement": {
                      "3": 41,
                      "2": 55,
                      "1": 67
                    },
                    "winPercentage": 2005
                  },
                  "2024": {
                    "starts": 232,
                    "earnings": 394911000,
                    "placement": {
                      "3": 28,
                      "2": 26,
                      "1": 49
                    },
                    "winPercentage": 2112
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 464541,
            "color": "ljusbrun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 797273,
              "name": "KW Farms AB",
              "location": "Vara"
            },
            "breeder": {
              "id": 782402,
              "name": "Wölner Odd Erik & Kvalen Arvid"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 13,
                  "earnings": 15880000,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 2
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 6
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 14,
                  "earnings": 25274100,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 2
                      },
                      "place": 5
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 17,
                        "tenths": 1
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 32,
                "earnings": 46454100,
                "placement": {
                  "3": 4,
                  "2": 3,
                  "1": 9
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 2
                    },
                    "place": 5,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 8
                    },
                    "place": 6,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 6
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 1
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 2812,
                "placePercentage": 5000,
                "earningsPerStart": 1451690,
                "startPoints": 1740
              },
              "lastFiveStarts": {
                "averageOdds": 1265
              }
            },
            "pedigree": {
              "father": {
                "id": 636691,
                "name": "Raja Mirchi"
              },
              "mother": {
                "id": 736228,
                "name": "Safra L.B.",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 603016,
                "name": "Cantab Hall",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 149226,
            "firstName": "André",
            "lastName": "Eklundh",
            "shortName": "Ekl An",
            "location": "Nossebro",
            "birth": 1986,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Vit, mblå stolpar och ärmb. vit axelp.; vi",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 493,
                  "earnings": 641880000,
                  "placement": {
                    "3": 53,
                    "2": 67,
                    "1": 71
                  },
                  "winPercentage": 1440
                },
                "2024": {
                  "starts": 416,
                  "earnings": 590045500,
                  "placement": {
                    "3": 43,
                    "2": 53,
                    "1": 61
                  },
                  "winPercentage": 1466
                }
              }
            }
          },
          "result": {
            "place": 3,
            "finishOrder": 3,
            "kmTime": {
              "minutes": 1,
              "seconds": 10,
              "tenths": 9
            },
            "prizeMoney": 32000,
            "finalOdds": 18.91,
            "startNumber": 3
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1891
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 407,
              "maxOdds": 407,
              "odds": 407
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 326,
              "potentialPayout": {
                "value": 3616500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900656709118",
              "timestamp": "2024-09-21T16:34:19"
            }
          ]
        },
        {
          "id": "2024-09-21_15_9_4",
          "number": 4,
          "postPosition": 4,
          "distance": 1640,
          "horse": {
            "id": 770984,
            "name": "Ready Star",
            "age": 5,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 6
              }
            },
            "trainer": {
              "id": 92281,
              "firstName": "Jörgen",
              "lastName": "Westholm",
              "shortName": "Wes Jö",
              "location": "Sala",
              "birth": 1972,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, vitt bröstb, gröna ärmar; grön",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 991,
                    "earnings": 2135524600,
                    "placement": {
                      "3": 108,
                      "2": 99,
                      "1": 149
                    },
                    "winPercentage": 1503
                  },
                  "2024": {
                    "starts": 689,
                    "earnings": 1736210200,
                    "placement": {
                      "3": 66,
                      "2": 81,
                      "1": 111
                    },
                    "winPercentage": 1611
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 412900,
            "color": "ljusbrun",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 243618,
              "name": "Olof Brodin (Chartering) AB",
              "location": "Sollentuna"
            },
            "breeder": {
              "id": 234530,
              "name": "Karlsson Anders",
              "location": "Tystberga"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 7,
                  "earnings": 10640000,
                  "placement": {
                    "3": 2,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 9
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 10,
                  "earnings": 30650000,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 6
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 17,
                "earnings": 41290000,
                "placement": {
                  "3": 4,
                  "2": 2,
                  "1": 6
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 6
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 7
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 17,
                      "tenths": 2
                    },
                    "place": 6,
                    "year": "2023"
                  }
                ],
                "winPercentage": 3529,
                "placePercentage": 7058,
                "earningsPerStart": 2428823,
                "startPoints": 2615
              },
              "lastFiveStarts": {
                "averageOdds": 365
              }
            },
            "pedigree": {
              "father": {
                "id": 721257,
                "name": "Readly Express"
              },
              "mother": {
                "id": 553135,
                "name": "Glittra C.D."
              },
              "grandfather": {
                "id": 185370,
                "name": "Igor Brick"
              }
            }
          },
          "driver": {
            "id": 722626,
            "firstName": "Mats E",
            "lastName": "Djuse",
            "shortName": "Dju ME",
            "location": "Hudiksvall",
            "birth": 1998,
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Svart, gult axelparti och rött bröstb.; sv",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1717,
                  "earnings": 3346819100,
                  "placement": {
                    "3": 186,
                    "2": 219,
                    "1": 257
                  },
                  "winPercentage": 1496
                },
                "2024": {
                  "starts": 1355,
                  "earnings": 2950765100,
                  "placement": {
                    "3": 148,
                    "2": 172,
                    "1": 234
                  },
                  "winPercentage": 1726
                }
              }
            }
          },
          "result": {
            "place": 2,
            "finishOrder": 2,
            "kmTime": {
              "minutes": 1,
              "seconds": 10,
              "tenths": 7
            },
            "prizeMoney": 55000,
            "finalOdds": 3.28,
            "startNumber": 4
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 328
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 148,
              "maxOdds": 148,
              "odds": 148
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 2584,
              "potentialPayout": {
                "value": 553400
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900665413152",
              "timestamp": "2024-09-21T17:01:06"
            },
            {
              "mediaId": "1900665413496",
              "timestamp": "2024-09-21T17:10:00"
            },
            {
              "mediaId": "1900670533101",
              "timestamp": "2024-09-21T17:21:02"
            }
          ]
        },
        {
          "id": "2024-09-21_15_9_5",
          "number": 5,
          "postPosition": 5,
          "distance": 1640,
          "horse": {
            "id": 774404,
            "name": "Victory Poseidon",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 161607,
              "firstName": "Björn",
              "lastName": "Goop",
              "shortName": "Goo Bj",
              "location": "Karlstad",
              "birth": 1976,
              "homeTrack": {
                "id": 15,
                "name": "Färjestad"
              },
              "license": "A-tränare: (Sv/utland): träna, köra",
              "silks": "Mblå, guldf.midjeband, sömmar; guld",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 1115,
                    "earnings": 2449819200,
                    "placement": {
                      "3": 116,
                      "2": 126,
                      "1": 159
                    },
                    "winPercentage": 1426
                  },
                  "2024": {
                    "starts": 635,
                    "earnings": 1251650300,
                    "placement": {
                      "3": 78,
                      "2": 86,
                      "1": 94
                    },
                    "winPercentage": 1480
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": true
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 335300,
            "color": "brun",
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "owner": {
              "id": 246949,
              "name": "Peter Bronsman AB",
              "location": "Fjärås"
            },
            "breeder": {
              "id": 704904,
              "name": "Vestmarka AB",
              "location": "Vinninga"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 3,
                  "earnings": 1650000,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 0
                      },
                      "place": 4
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 8
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 12,
                  "earnings": 27330000,
                  "placement": {
                    "3": 2,
                    "2": 3,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 2
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 6
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 17,
                "earnings": 33530000,
                "placement": {
                  "3": 3,
                  "2": 3,
                  "1": 3
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 2
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 8
                    },
                    "place": 3,
                    "year": "2023"
                  }
                ],
                "winPercentage": 1764,
                "placePercentage": 5294,
                "earningsPerStart": 1972352,
                "startPoints": 2008
              },
              "lastFiveStarts": {
                "averageOdds": 2165
              }
            },
            "pedigree": {
              "father": {
                "id": 685124,
                "name": "Muscle Hill",
                "nationality": "US"
              },
              "mother": {
                "id": 652717,
                "name": "Electra Sund"
              },
              "grandfather": {
                "id": 603016,
                "name": "Cantab Hall",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 161607,
            "firstName": "Björn",
            "lastName": "Goop",
            "shortName": "Goo Bj",
            "location": "Karlstad",
            "birth": 1976,
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "license": "A-tränare: (Sv/utland): träna, köra",
            "silks": "Grön,gul ärm och svart revär;gul",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1240,
                  "earnings": 3961444800,
                  "placement": {
                    "3": 131,
                    "2": 145,
                    "1": 204
                  },
                  "winPercentage": 1645
                },
                "2024": {
                  "starts": 846,
                  "earnings": 2704607700,
                  "placement": {
                    "3": 103,
                    "2": 102,
                    "1": 124
                  },
                  "winPercentage": 1465
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 9,
            "kmTime": {
              "minutes": 1,
              "seconds": 12,
              "tenths": 1
            },
            "prizeMoney": 2500,
            "finalOdds": 19.26,
            "startNumber": 5
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1926
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 388,
              "maxOdds": 388
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 310,
              "potentialPayout": {
                "value": 3692200
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900655173178",
              "timestamp": "2024-09-21T16:34:46"
            }
          ]
        },
        {
          "id": "2024-09-21_15_9_6",
          "number": 6,
          "postPosition": 6,
          "distance": 1640,
          "horse": {
            "id": 771518,
            "name": "Vichel J.C.",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 12,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 163540,
              "firstName": "Jan",
              "lastName": "Gustavsson",
              "shortName": "Gus Ja",
              "location": "Torsåker",
              "birth": 1959,
              "homeTrack": {
                "id": 16,
                "name": "Gävle"
              },
              "license": "B-tränare: träna, köra för bolag",
              "silks": "Grå, röd triangel, röd ärmrevär; grå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 25,
                    "earnings": 15560000,
                    "placement": {
                      "3": 2,
                      "2": 4,
                      "1": 1
                    },
                    "winPercentage": 400
                  },
                  "2024": {
                    "starts": 11,
                    "earnings": 6330000,
                    "placement": {
                      "3": 0,
                      "2": 1,
                      "1": 2
                    },
                    "winPercentage": 1818
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": true
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 324800,
            "color": "brun",
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "owner": {
              "id": 551834,
              "name": "Gustavsson Jan & Carina"
            },
            "breeder": {
              "id": 551834,
              "name": "Gustavsson Jan & Carina"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 18,
                  "earnings": 13750000,
                  "placement": {
                    "3": 2,
                    "2": 4,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 4
                      },
                      "place": 7
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 9
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 6,
                  "earnings": 5480000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 3
                      },
                      "place": 4
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 2
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 38,
                "earnings": 32480000,
                "placement": {
                  "3": 4,
                  "2": 6,
                  "1": 4
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 4
                    },
                    "place": 7,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 5
                    },
                    "place": 0,
                    "year": "2023"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 17,
                      "tenths": 7
                    },
                    "place": 0,
                    "year": "2023"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 9
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 9
                    },
                    "place": 4,
                    "year": "2022"
                  }
                ],
                "winPercentage": 1052,
                "placePercentage": 3684,
                "earningsPerStart": 854736,
                "startPoints": 1583
              },
              "lastFiveStarts": {
                "averageOdds": 1780
              }
            },
            "pedigree": {
              "father": {
                "id": 617124,
                "name": "Orlando Vici",
                "nationality": "FR"
              },
              "mother": {
                "id": 653245,
                "name": "Chelsea"
              },
              "grandfather": {
                "id": 144825,
                "name": "S.J.'s Photo",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 568723,
            "firstName": "Oskar",
            "lastName": "Kylin Blom",
            "shortName": "Kyl Os",
            "location": "Östervåla",
            "birth": 1992,
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, sidofält i orange; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 808,
                  "earnings": 909775700,
                  "placement": {
                    "3": 77,
                    "2": 99,
                    "1": 79
                  },
                  "winPercentage": 977
                },
                "2024": {
                  "starts": 529,
                  "earnings": 564389700,
                  "placement": {
                    "3": 53,
                    "2": 48,
                    "1": 47
                  },
                  "winPercentage": 888
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 10,
            "kmTime": {
              "minutes": 1,
              "seconds": 12,
              "tenths": 4
            },
            "prizeMoney": 2500,
            "finalOdds": 102.46,
            "startNumber": 6
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 10246
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1338,
              "maxOdds": 1338
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 30,
              "potentialPayout": {
                "jackpot": true
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900657221100",
              "timestamp": "2024-09-21T16:37:35"
            },
            {
              "mediaId": "1900658757359",
              "timestamp": "2024-09-21T16:47:58"
            }
          ]
        },
        {
          "id": "2024-09-21_15_9_7",
          "number": 7,
          "postPosition": 7,
          "distance": 1640,
          "horse": {
            "id": 775160,
            "name": "Going Cash",
            "age": 5,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 8
              }
            },
            "trainer": {
              "id": 9921,
              "firstName": "Timo",
              "lastName": "Nurmos",
              "shortName": "Nur Ti",
              "location": "Tullinge",
              "birth": 1959,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "A-tränare kat2: träna, köra",
              "silks": "Grå, mblå axelparti,mblå/grå ärm; mblå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 429,
                    "earnings": 2900319900,
                    "placement": {
                      "3": 39,
                      "2": 68,
                      "1": 145
                    },
                    "winPercentage": 3379
                  },
                  "2024": {
                    "starts": 212,
                    "earnings": 1239650000,
                    "placement": {
                      "3": 17,
                      "2": 33,
                      "1": 70
                    },
                    "winPercentage": 3301
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 364000,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 716515,
              "name": "Verrazzano AB & Stall Timo Nurmos AB"
            },
            "breeder": {
              "id": 716515,
              "name": "Verrazzano AB & Stall Timo Nurmos AB"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 4,
                  "earnings": 12650000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 3
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 2,
                  "earnings": 11700000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 8
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 13,
                "earnings": 36400000,
                "placement": {
                  "3": 1,
                  "2": 3,
                  "1": 4
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 8
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 2
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 3
                    },
                    "place": 0,
                    "year": "2022"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2022"
                  }
                ],
                "winPercentage": 3076,
                "placePercentage": 6153,
                "earningsPerStart": 2800000,
                "startPoints": 2835
              },
              "lastFiveStarts": {
                "averageOdds": 325
              }
            },
            "pedigree": {
              "father": {
                "id": 667295,
                "name": "Ready Cash",
                "nationality": "FR"
              },
              "mother": {
                "id": 671047,
                "name": "Xena Brick"
              },
              "grandfather": {
                "id": 161030,
                "name": "Super Arnie",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 125542,
            "firstName": "Erik",
            "lastName": "Adielsson",
            "shortName": "Adi Er",
            "location": "Upplands Väsby",
            "birth": 1974,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Blå, vita ärmbindlar; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 530,
                  "earnings": 2095922500,
                  "placement": {
                    "3": 54,
                    "2": 50,
                    "1": 58
                  },
                  "winPercentage": 1094
                },
                "2024": {
                  "starts": 422,
                  "earnings": 1496106300,
                  "placement": {
                    "3": 54,
                    "2": 30,
                    "1": 42
                  },
                  "winPercentage": 995
                }
              }
            }
          },
          "result": {
            "place": 8,
            "finishOrder": 8,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 4
            },
            "prizeMoney": 5000,
            "finalOdds": 4.3,
            "startNumber": 7
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 430
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 177,
              "maxOdds": 177
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1995,
              "potentialPayout": {
                "value": 587800
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_9_8",
          "number": 8,
          "postPosition": 8,
          "distance": 1640,
          "horse": {
            "id": 778644,
            "name": "Ready West",
            "age": 4,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 92281,
              "firstName": "Jörgen",
              "lastName": "Westholm",
              "shortName": "Wes Jö",
              "location": "Sala",
              "birth": 1972,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, vitt bröstb, gröna ärmar; grön",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 991,
                    "earnings": 2135524600,
                    "placement": {
                      "3": 108,
                      "2": 99,
                      "1": 149
                    },
                    "winPercentage": 1503
                  },
                  "2024": {
                    "starts": 689,
                    "earnings": 1736210200,
                    "placement": {
                      "3": 66,
                      "2": 81,
                      "1": 111
                    },
                    "winPercentage": 1611
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 367000,
            "color": "svartbrun",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 544492,
              "name": "Bengt Wedin HB & Hammarglo Farm KB"
            },
            "breeder": {
              "id": 544492,
              "name": "Bengt Wedin HB & Hammarglo Farm KB"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 5,
                  "earnings": 5350000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 3
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 31350000,
                  "placement": {
                    "3": 2,
                    "2": 4,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 9
                      },
                      "place": 4
                    }
                  ]
                }
              },
              "life": {
                "starts": 16,
                "earnings": 36700000,
                "placement": {
                  "3": 2,
                  "2": 5,
                  "1": 2
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 9
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 4
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 8
                    },
                    "place": 4,
                    "year": "2024"
                  }
                ],
                "winPercentage": 1250,
                "placePercentage": 5625,
                "earningsPerStart": 2293750,
                "startPoints": 2340
              },
              "lastFiveStarts": {
                "averageOdds": 3072
              }
            },
            "pedigree": {
              "father": {
                "id": 762066,
                "name": "Victor Gio",
                "nationality": "IT"
              },
              "mother": {
                "id": 734366,
                "name": "Fortune d'Inverne"
              },
              "grandfather": {
                "id": 614627,
                "name": "Zola Boko"
              }
            }
          },
          "driver": {
            "id": 91416,
            "firstName": "Per",
            "lastName": "Lennartsson",
            "shortName": "Len Pe",
            "location": "Eskilstuna",
            "birth": 1966,
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, blå axlar, sidor och ärmb; sva",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 568,
                  "earnings": 872704300,
                  "placement": {
                    "3": 59,
                    "2": 57,
                    "1": 61
                  },
                  "winPercentage": 1073
                },
                "2024": {
                  "starts": 412,
                  "earnings": 713335000,
                  "placement": {
                    "3": 44,
                    "2": 41,
                    "1": 59
                  },
                  "winPercentage": 1432
                }
              }
            }
          },
          "result": {
            "place": 4,
            "finishOrder": 4,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 0
            },
            "prizeMoney": 19000,
            "finalOdds": 69.79,
            "startNumber": 8
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 6979
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 848,
              "maxOdds": 848
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 61,
              "potentialPayout": {
                "value": 18720700
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900661829365",
              "timestamp": "2024-09-21T17:02:02"
            },
            {
              "mediaId": "1900662341384",
              "timestamp": "2024-09-21T17:10:52"
            },
            {
              "mediaId": "1900671045081",
              "timestamp": "2024-09-21T17:21:51"
            }
          ]
        },
        {
          "id": "2024-09-21_15_9_9",
          "number": 9,
          "postPosition": 9,
          "distance": 1640,
          "horse": {
            "id": 796775,
            "name": "Enjoythevictory SC",
            "nationality": "NO",
            "age": 8,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 12,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 511645,
              "firstName": "Anders",
              "lastName": "Langerud",
              "shortName": "Lan An",
              "location": "Norge",
              "birth": 1979,
              "license": "B-tränare: (utland): träna, köra",
              "silks": "Grå,;"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 423878,
            "color": "ljusbrun",
            "owner": {
              "id": 226009,
              "name": "Stall Helt Krise og Broen S",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 14,
                  "earnings": 8801400,
                  "placement": {
                    "3": 2,
                    "2": 3,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 7
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 0
                      },
                      "place": 0
                    }
                  ]
                },
                "2024": {
                  "starts": 8,
                  "earnings": 16154900,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 5
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 76,
                "earnings": 42387800,
                "placement": {
                  "3": 12,
                  "2": 9,
                  "1": 6
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2023"
                  }
                ],
                "winPercentage": 789,
                "placePercentage": 3552,
                "earningsPerStart": 557734,
                "startPoints": 1989
              },
              "lastFiveStarts": {
                "averageOdds": 1445
              }
            },
            "pedigree": {
              "father": {
                "id": 668847,
                "name": "Rolling d'Heripre",
                "nationality": "FR"
              },
              "mother": {
                "id": 796774,
                "name": "Fimbrethil Hanover",
                "nationality": "US"
              },
              "grandfather": {
                "id": 635179,
                "name": "Donato Hanover",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 559112,
            "firstName": "Roy Atle",
            "lastName": "Ruud Nilsen",
            "shortName": "Ruu RA",
            "location": "Koppom",
            "birth": 1979,
            "homeTrack": {
              "id": 31,
              "name": "Årjäng"
            },
            "license": "B-tränare: träna, köra",
            "silks": "Svart, grå/guld axelklaffar och ärmrev; sv",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 123,
                  "earnings": 71437700,
                  "placement": {
                    "3": 10,
                    "2": 11,
                    "1": 4
                  },
                  "winPercentage": 325
                },
                "2024": {
                  "starts": 77,
                  "earnings": 52817400,
                  "placement": {
                    "3": 7,
                    "2": 3,
                    "1": 7
                  },
                  "winPercentage": 909
                }
              }
            }
          },
          "result": {
            "place": 6,
            "finishOrder": 6,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 3
            },
            "prizeMoney": 10000,
            "finalOdds": 103.1,
            "startNumber": 9
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 10310
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1422,
              "maxOdds": 1422
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 32,
              "potentialPayout": {
                "jackpot": true
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900665413158",
              "timestamp": "2024-09-21T17:01:17"
            },
            {
              "mediaId": "1900666949065",
              "timestamp": "2024-09-21T17:11:16"
            }
          ]
        },
        {
          "id": "2024-09-21_15_9_10",
          "number": 10,
          "postPosition": 10,
          "distance": 1640,
          "horse": {
            "id": 765573,
            "name": "Hawk Eye",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 12,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 165018,
              "firstName": "Alexander",
              "lastName": "Heisholt",
              "shortName": "Hei Al",
              "location": "Norge",
              "birth": 1975,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Röd/Silver;"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 289315,
            "color": "mörkbrun",
            "owner": {
              "id": 225985,
              "name": "Kaasa Arve",
              "location": "Norge"
            },
            "breeder": {
              "id": 770622,
              "name": "Goop Annika & Hobik Henrik"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 3,
                  "earnings": 2095400,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 17,
                        "tenths": 1
                      },
                      "place": 0
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 18,
                        "tenths": 0
                      },
                      "place": 0
                    }
                  ]
                },
                "2024": {
                  "starts": 14,
                  "earnings": 24531500,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 7
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 9
                      },
                      "place": 1
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 18,
                "earnings": 28931500,
                "placement": {
                  "3": 2,
                  "2": 2,
                  "1": 9
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 5000,
                "placePercentage": 7222,
                "earningsPerStart": 1607305,
                "startPoints": 2335
              },
              "lastFiveStarts": {
                "averageOdds": 493
              }
            },
            "pedigree": {
              "father": {
                "id": 749051,
                "name": "Traders",
                "nationality": "IT"
              },
              "mother": {
                "id": 674200,
                "name": "Sherry"
              },
              "grandfather": {
                "id": 501073,
                "name": "Credit Winner",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 188437,
            "firstName": "Tom Erik",
            "lastName": "Solberg",
            "shortName": "Sol TE",
            "location": "Norge",
            "birth": 1975,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Svart, guld vinkel och stjärnor; svart"
          },
          "result": {
            "place": 5,
            "finishOrder": 5,
            "kmTime": {
              "minutes": 1,
              "seconds": 11,
              "tenths": 2
            },
            "prizeMoney": 12500,
            "finalOdds": 16.69,
            "startNumber": 10
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1669
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 389,
              "maxOdds": 389
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 351,
              "potentialPayout": {
                "value": 2762500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900664389452",
              "timestamp": "2024-09-21T17:11:16"
            },
            {
              "mediaId": "1900665413151",
              "timestamp": "2024-09-21T17:01:06"
            },
            {
              "mediaId": "1900671045082",
              "timestamp": "2024-09-21T17:21:53"
            }
          ]
        },
        {
          "id": "2024-09-21_15_9_11",
          "number": 11,
          "postPosition": 11,
          "distance": 1640,
          "horse": {
            "id": 773601,
            "name": "Sabasi",
            "age": 5,
            "sex": "mare",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 8
              }
            },
            "trainer": {
              "id": 762470,
              "firstName": "Veikko",
              "lastName": "Haapakangas",
              "shortName": "Haa Ve",
              "location": "Fjärås",
              "birth": 2000,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, blå hängs. och sva/silv ärm; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 111,
                    "earnings": 68300000,
                    "placement": {
                      "3": 9,
                      "2": 4,
                      "1": 6
                    },
                    "winPercentage": 540
                  },
                  "2024": {
                    "starts": 258,
                    "earnings": 328975800,
                    "placement": {
                      "3": 21,
                      "2": 25,
                      "1": 34
                    },
                    "winPercentage": 1317
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 446000,
            "color": "fux",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 243490,
              "name": "Denco HB",
              "location": "Kållered"
            },
            "breeder": {
              "id": 227883,
              "name": "Herz Günter",
              "location": "Tyskland"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 0,
                  "earnings": 0,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 0
                  },
                  "records": []
                },
                "2024": {
                  "starts": 10,
                  "earnings": 42650000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 6
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 8
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 9
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 13,
                "earnings": 44600000,
                "placement": {
                  "3": 0,
                  "2": 2,
                  "1": 6
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 4615,
                "placePercentage": 6153,
                "earningsPerStart": 3430769,
                "startPoints": 4775
              },
              "lastFiveStarts": {
                "averageOdds": 489
              }
            },
            "pedigree": {
              "father": {
                "id": 562580,
                "name": "Love You",
                "nationality": "FR"
              },
              "mother": {
                "id": 713850,
                "name": "Freude D.E.",
                "nationality": "DE"
              },
              "grandfather": {
                "id": 463269,
                "name": "Varenne",
                "nationality": "IT"
              }
            }
          },
          "driver": {
            "id": 496333,
            "firstName": "Mika",
            "lastName": "Forss",
            "shortName": "For Mi",
            "location": "Märsta",
            "birth": 1968,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Mörkblå, svart/vitt bröstband; mblå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 987,
                  "earnings": 1601869200,
                  "placement": {
                    "3": 107,
                    "2": 112,
                    "1": 107
                  },
                  "winPercentage": 1084
                },
                "2024": {
                  "starts": 501,
                  "earnings": 704045400,
                  "placement": {
                    "3": 56,
                    "2": 56,
                    "1": 44
                  },
                  "winPercentage": 878
                }
              }
            }
          },
          "result": {
            "finishOrder": 41,
            "kmTime": {
              "code": "u"
            },
            "galloped": true,
            "disqualified": true,
            "prizeMoney": 2500,
            "finalOdds": 12.72,
            "startNumber": 11
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1272
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 308,
              "maxOdds": 308
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 605,
              "potentialPayout": {
                "value": 2257400
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900655685469",
              "timestamp": "2024-09-21T16:33:02"
            },
            {
              "mediaId": "1900658245102",
              "timestamp": "2024-09-21T16:43:28"
            }
          ],
          "out": true
        },
        {
          "id": "2024-09-21_15_9_12",
          "number": 12,
          "scratched": true,
          "postPosition": 12,
          "distance": 1640,
          "horse": {
            "id": 798351,
            "name": "Geestile",
            "nationality": "NO",
            "age": 4,
            "sex": "mare",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 191480,
              "firstName": "Åsbjörn",
              "lastName": "Tengsareid",
              "shortName": "Ten Ås",
              "location": "Norge",
              "birth": 1975,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Röd, mblå krage och bälte; röd"
            },
            "shoes": {
              "reported": false
            },
            "sulky": {
              "reported": false,
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 328152,
            "color": "brun",
            "owner": {
              "id": 226009,
              "name": "Hemstad Anne & Reiersen T",
              "location": "Norge"
            },
            "breeder": {
              "id": 225999,
              "name": "Norsk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 8,
                  "earnings": 21847000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 5
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 17,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 4,
                  "earnings": 10968200,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 5
                      },
                      "place": 6
                    }
                  ]
                }
              },
              "life": {
                "starts": 12,
                "earnings": 32815200,
                "placement": {
                  "3": 1,
                  "2": 1,
                  "1": 4
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 5
                    },
                    "place": 6,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 17,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 3333,
                "placePercentage": 5000,
                "earningsPerStart": 2734600,
                "startPoints": 1466
              },
              "lastFiveStarts": {
                "averageOdds": 1504
              }
            },
            "pedigree": {
              "father": {
                "id": 588796,
                "name": "Maharajah"
              },
              "mother": {
                "id": 729654,
                "name": "G.Fifty"
              },
              "grandfather": {
                "id": 618224,
                "name": "Q.Forty Five",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 191480,
            "firstName": "Åsbjörn",
            "lastName": "Tengsareid",
            "shortName": "Ten Ås",
            "location": "Norge",
            "birth": 1975,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Röd, mblå krage och bälte; röd"
          },
          "result": {
            "finishOrder": 62,
            "finalOdds": 0.0,
            "startNumber": 12
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 0
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 0,
              "maxOdds": 0
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1,
              "potentialPayout": {
                "jackpot": true
              }
            }
          }
        }
      ],
      "mergedPools": [
        {
          "name": "A",
          "betTypes": ["vinnare", "plats", "komb", "tvilling", "trio"]
        }
      ]
    },
    {
      "id": "2024-09-21_15_10",
      "name": "UTAB Spol och Rörteknik - STL Diamantstoet (Försök 9 i Meeting 6 - Final Solvalla 12 oktober)",
      "date": "2024-09-21",
      "number": 10,
      "distance": 2140,
      "startMethod": "volte",
      "startTime": "2024-09-21T18:23:42",
      "scheduledStartTime": "2024-09-21T18:20:00",
      "prize": "Pris: 150.000-75.000-40.000-25.000-15.000-11.500-7.500-5.000 kr (8 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 346.500 kr.",
      "terms": [
        "3-åriga och äldre ston 100.001 - 1.100.000 kr. Körsvenskrav kat. 1. Körsvenner födda 060921 eller tidigare.",
        "Svenska Travligans hederspris till segrande hästs ägare och hästskötare.",
        "2140 m. Tillägg 20 m vid vunna 440.001 kr"
      ],
      "sport": "trot",
      "track": {
        "id": 15,
        "name": "Färjestad",
        "condition": "light",
        "countryCode": "SE"
      },
      "result": {
        "victoryMargin": "en halv längd"
      },
      "status": "results",
      "mediaId": "1900699205265",
      "pools": {
        "vinnare": {
          "@type": ".VinnarePool",
          "id": "vinnare_2024-09-21_15_10",
          "status": "results",
          "timestamp": "2024-09-21 18:29:50",
          "turnover": 144918400,
          "result": {
            "@type": ".VinnarePoolRaceResult",
            "winners": [
              {
                "number": 15,
                "odds": 680
              }
            ]
          },
          "betType": "vinnare"
        },
        "plats": {
          "@type": ".PlatsPool",
          "id": "plats_2024-09-21_15_10",
          "status": "results",
          "timestamp": "2024-09-21 18:29:50",
          "turnover": 144918400,
          "result": {
            "@type": ".PlatsPoolRaceResult",
            "winners": {
              "first": [
                {
                  "number": 15,
                  "odds": 258
                }
              ],
              "second": [
                {
                  "number": 7,
                  "odds": 171
                }
              ],
              "third": [
                {
                  "number": 2,
                  "odds": 316
                }
              ]
            }
          },
          "betType": "plats"
        },
        "tvilling": {
          "@type": ".TvillingPool",
          "id": "tvilling_2024-09-21_15_10",
          "status": "results",
          "timestamp": "2024-09-21 18:30:11",
          "turnover": 144918400,
          "result": {
            "@type": ".TvillingPoolRaceResult",
            "winners": [
              {
                "combination": [7, 15],
                "odds": 1311
              }
            ]
          },
          "betType": "tvilling"
        },
        "komb": {
          "@type": ".KombPool",
          "id": "komb_2024-09-21_15_10",
          "status": "results",
          "timestamp": "2024-09-21 18:30:11",
          "turnover": 144918400,
          "result": {
            "@type": ".KombPoolRaceResult",
            "winners": [
              {
                "combination": [15, 7],
                "odds": 3468
              }
            ]
          },
          "betType": "komb"
        },
        "trio": {
          "@type": ".TrioPool",
          "id": "trio_2024-09-21_15_10",
          "status": "results",
          "timestamp": "2024-09-21 18:30:11",
          "turnover": 144918400,
          "result": {
            "@type": ".TrioPoolRaceResult",
            "winners": [
              {
                "combination": [15, 7, 2],
                "odds": 35687
              }
            ]
          },
          "betType": "trio"
        },
        "V75": {
          "@type": ".Pool",
          "result": {
            "@type": ".MarkingBetRacePoolResult",
            "systems": "1319",
            "value": {
              "amount": 1776200
            },
            "winners": [15],
            "reserveOrder": [7, 12, 2, 4, 15, 6, 1, 8, 3, 11, 14, 13, 5, 10, 9]
          }
        }
      },
      "starts": [
        {
          "id": "2024-09-21_15_10_1",
          "number": 1,
          "postPosition": 1,
          "distance": 2140,
          "horse": {
            "id": 766297,
            "name": "Borups Vallmo",
            "age": 6,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 1
              }
            },
            "trainer": {
              "id": 504949,
              "firstName": "Paw",
              "lastName": "Mahony",
              "shortName": "Mah Pa",
              "location": "Mangskog",
              "birth": 1982,
              "homeTrack": {
                "id": 31,
                "name": "Årjäng"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Mblå, vitt axelp och diag.ränder; mblå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 159,
                    "earnings": 177645400,
                    "placement": {
                      "3": 13,
                      "2": 19,
                      "1": 18
                    },
                    "winPercentage": 1132
                  },
                  "2024": {
                    "starts": 88,
                    "earnings": 98771700,
                    "placement": {
                      "3": 11,
                      "2": 9,
                      "1": 14
                    },
                    "winPercentage": 1590
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": true
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 429364,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 31,
              "name": "Årjäng"
            },
            "owner": {
              "id": 639435,
              "name": "Stall Mahony AB (Mahony Paw)"
            },
            "breeder": {
              "id": 236301,
              "name": "Thulin Gustaf",
              "location": "Klågerup"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 14,
                  "earnings": 12355000,
                  "placement": {
                    "3": 0,
                    "2": 2,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 8
                      },
                      "place": 4
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 1
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 10850000,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 9
                      },
                      "place": 4
                    }
                  ]
                }
              },
              "life": {
                "starts": 51,
                "earnings": 42936400,
                "placement": {
                  "3": 4,
                  "2": 7,
                  "1": 5
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2022"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 9
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 2
                    },
                    "place": 4,
                    "year": "2023"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 3
                    },
                    "place": 7,
                    "year": "2022"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 8
                    },
                    "place": 4,
                    "year": "2023"
                  }
                ],
                "winPercentage": 980,
                "placePercentage": 3137,
                "earningsPerStart": 841890,
                "startPoints": 1355
              },
              "lastFiveStarts": {
                "averageOdds": 1706
              }
            },
            "pedigree": {
              "father": {
                "id": 740137,
                "name": "The Bank",
                "nationality": "US"
              },
              "mother": {
                "id": 617843,
                "name": "Zvetlana Boko"
              },
              "grandfather": {
                "id": 197809,
                "name": "Ganymede",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 504949,
            "firstName": "Paw",
            "lastName": "Mahony",
            "shortName": "Mah Pa",
            "location": "Mangskog",
            "birth": 1982,
            "homeTrack": {
              "id": 31,
              "name": "Årjäng"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Mblå, vitt axelp och diag.ränder; mblå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 150,
                  "earnings": 165114400,
                  "placement": {
                    "3": 10,
                    "2": 16,
                    "1": 18
                  },
                  "winPercentage": 1200
                },
                "2024": {
                  "starts": 86,
                  "earnings": 78414300,
                  "placement": {
                    "3": 8,
                    "2": 5,
                    "1": 11
                  },
                  "winPercentage": 1279
                }
              }
            }
          },
          "result": {
            "place": 5,
            "finishOrder": 5,
            "kmTime": {
              "minutes": 1,
              "seconds": 13,
              "tenths": 6
            },
            "prizeMoney": 15000,
            "finalOdds": 13.81,
            "startNumber": 1
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1381
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 354,
              "maxOdds": 354
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 564,
              "potentialPayout": {
                "value": 2263500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900665413173",
              "timestamp": "2024-09-21T17:01:30"
            },
            {
              "mediaId": "1900665413492",
              "timestamp": "2024-09-21T17:10:00"
            },
            {
              "mediaId": "1900671557046",
              "timestamp": "2024-09-21T17:21:33"
            }
          ]
        },
        {
          "id": "2024-09-21_15_10_2",
          "number": 2,
          "postPosition": 2,
          "distance": 2140,
          "horse": {
            "id": 780313,
            "name": "Global Eyecatcher",
            "age": 4,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 8
              }
            },
            "trainer": {
              "id": 528293,
              "firstName": "David",
              "lastName": "Persson",
              "shortName": "Per Da",
              "location": "Kvänum",
              "birth": 1984,
              "homeTrack": {
                "id": 8,
                "name": "Axevalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Grön, blå/vita korsl.axelsk; grön",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 328,
                    "earnings": 486578000,
                    "placement": {
                      "3": 47,
                      "2": 25,
                      "1": 57
                    },
                    "winPercentage": 1737
                  },
                  "2024": {
                    "starts": 215,
                    "earnings": 439149000,
                    "placement": {
                      "3": 21,
                      "2": 29,
                      "1": 37
                    },
                    "winPercentage": 1720
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 306500,
            "color": "ljusbrun",
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "owner": {
              "id": 763368,
              "name": "Stall Pivot - Easy"
            },
            "breeder": {
              "id": 215947,
              "name": "Global Farm AB",
              "location": "Nacka Strand"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 4,
                  "earnings": 12000000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 5
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 5,
                  "earnings": 18650000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 0
                      },
                      "place": 0
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 8
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 9,
                "earnings": 30650000,
                "placement": {
                  "3": 0,
                  "2": 2,
                  "1": 3
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 0
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 5
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 3333,
                "placePercentage": 5555,
                "earningsPerStart": 3405555,
                "startPoints": 2465
              },
              "lastFiveStarts": {
                "averageOdds": 903
              }
            },
            "pedigree": {
              "father": {
                "id": 553396,
                "name": "S.J.'s Caviar",
                "nationality": "US"
              },
              "mother": {
                "id": 741236,
                "name": "Highest Peak",
                "nationality": "US"
              },
              "grandfather": {
                "id": 568973,
                "name": "Andover Hall",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 722626,
            "firstName": "Mats E",
            "lastName": "Djuse",
            "shortName": "Dju ME",
            "location": "Hudiksvall",
            "birth": 1998,
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Mörkblå, vitt lodrätt fält; mblå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1717,
                  "earnings": 3346819100,
                  "placement": {
                    "3": 186,
                    "2": 219,
                    "1": 257
                  },
                  "winPercentage": 1496
                },
                "2024": {
                  "starts": 1355,
                  "earnings": 2950765100,
                  "placement": {
                    "3": 148,
                    "2": 172,
                    "1": 234
                  },
                  "winPercentage": 1726
                }
              }
            }
          },
          "result": {
            "place": 3,
            "finishOrder": 3,
            "kmTime": {
              "minutes": 1,
              "seconds": 13,
              "tenths": 2
            },
            "prizeMoney": 40000,
            "finalOdds": 9.52,
            "startNumber": 2
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 952
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 316,
              "maxOdds": 316,
              "odds": 316
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1352,
              "potentialPayout": {
                "value": 1538200
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_10_3",
          "number": 3,
          "postPosition": 3,
          "distance": 2140,
          "horse": {
            "id": 796690,
            "name": "Melrose Draviet",
            "nationality": "DE",
            "age": 5,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 7
              }
            },
            "trainer": {
              "id": 675399,
              "firstName": "Lina",
              "lastName": "Tallberger",
              "shortName": "Tal Li",
              "location": "Pålsboda",
              "birth": 1990,
              "homeTrack": {
                "id": 32,
                "name": "Örebro"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, vita sidofält, svart ärm; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 90,
                    "earnings": 63190000,
                    "placement": {
                      "3": 12,
                      "2": 6,
                      "1": 5
                    },
                    "winPercentage": 555
                  },
                  "2024": {
                    "starts": 28,
                    "earnings": 26760000,
                    "placement": {
                      "3": 1,
                      "2": 3,
                      "1": 6
                    },
                    "winPercentage": 2142
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 399263,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 32,
              "name": "Örebro"
            },
            "owner": {
              "id": 780383,
              "name": "Idealmaskin I Sverige AB",
              "location": "Örebro"
            },
            "breeder": {
              "id": 692936,
              "name": "Draviet Stables",
              "location": "Nederländerna"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 15,
                  "earnings": 16200000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 1
                      },
                      "place": 5
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 8
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 9,
                  "earnings": 13480000,
                  "placement": {
                    "3": 0,
                    "2": 3,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 5
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 7
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 36,
                "earnings": 39926300,
                "placement": {
                  "3": 2,
                  "2": 7,
                  "1": 5
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 1
                    },
                    "place": 5,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 4
                    },
                    "place": 6,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 7
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 8
                    },
                    "place": 0,
                    "year": "2024"
                  }
                ],
                "winPercentage": 1388,
                "placePercentage": 3888,
                "earningsPerStart": 1109063,
                "startPoints": 1740
              },
              "lastFiveStarts": {
                "averageOdds": 1540
              }
            },
            "pedigree": {
              "father": {
                "id": 679657,
                "name": "Muscle Mass",
                "nationality": "US"
              },
              "mother": {
                "id": 729198,
                "name": "Sevrine",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 501081,
                "name": "Angus Hall",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 657235,
            "firstName": "Emilia",
            "lastName": "Leo",
            "shortName": "Leo Em",
            "location": "Borlänge",
            "birth": 1992,
            "homeTrack": {
              "id": 23,
              "name": "Romme"
            },
            "license": "A-tränare: träna, köra, rida",
            "silks": "Svart, guld bröstband och stj. ärm; silver",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 364,
                  "earnings": 478150000,
                  "placement": {
                    "3": 47,
                    "2": 51,
                    "1": 57
                  },
                  "winPercentage": 1565
                },
                "2024": {
                  "starts": 294,
                  "earnings": 414865000,
                  "placement": {
                    "3": 33,
                    "2": 34,
                    "1": 55
                  },
                  "winPercentage": 1870
                }
              }
            }
          },
          "result": {
            "place": 8,
            "finishOrder": 8,
            "kmTime": {
              "minutes": 1,
              "seconds": 13,
              "tenths": 8
            },
            "prizeMoney": 5000,
            "finalOdds": 36.26,
            "startNumber": 3
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3626
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 732,
              "maxOdds": 732
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 184,
              "potentialPayout": {
                "value": 12842600
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_10_4",
          "number": 4,
          "postPosition": 4,
          "distance": 2140,
          "horse": {
            "id": 788749,
            "name": "Kalina des Lucas",
            "nationality": "FR",
            "age": 4,
            "sex": "mare",
            "record": {
              "code": "L",
              "startMethod": "volte",
              "distance": "long",
              "time": {
                "minutes": 1,
                "seconds": 16,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 730902,
              "firstName": "Viktoria",
              "lastName": "Berntsson",
              "shortName": "Ber Vi",
              "location": "Skara",
              "birth": 1999,
              "homeTrack": {
                "id": 8,
                "name": "Axevalla"
              },
              "license": "B-tränare: träna, köra, rida",
              "silks": "Vit, mörkblå axelparti och 2-delad ärm; mb",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 15,
                    "earnings": 30698300,
                    "placement": {
                      "3": 0,
                      "2": 1,
                      "1": 3
                    },
                    "winPercentage": 2000
                  },
                  "2024": {
                    "starts": 3,
                    "earnings": 2200000,
                    "placement": {
                      "3": 1,
                      "2": 0,
                      "1": 0
                    },
                    "winPercentage": 0
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 332711,
            "color": "stickelhårig mörkbrun",
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "owner": {
              "id": 832039,
              "name": "Arnesson Åke & Nilsson Askros Johan"
            },
            "breeder": {
              "id": 787511,
              "name": "E.A.R.L.Jean Pascal Roelens"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 7,
                  "earnings": 16368300,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 5
                      },
                      "place": 2
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 5
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 3,
                  "earnings": 16902800,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 8
                      },
                      "place": 1
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 18,
                        "tenths": 2
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 10,
                "earnings": 33271100,
                "placement": {
                  "3": 0,
                  "2": 1,
                  "1": 4
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 19,
                      "tenths": 8
                    },
                    "place": 5,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 5
                    },
                    "place": 4,
                    "year": "2023"
                  }
                ],
                "winPercentage": 4000,
                "placePercentage": 5000,
                "earningsPerStart": 3327110,
                "startPoints": 3390
              },
              "lastFiveStarts": {
                "averageOdds": 618
              }
            },
            "pedigree": {
              "father": {
                "id": 762062,
                "name": "Eridan",
                "nationality": "FR"
              },
              "mother": {
                "id": 769271,
                "name": "Valeska des Lucas",
                "nationality": "FR"
              },
              "grandfather": {
                "id": 203324,
                "name": "Biesolo",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 740606,
            "firstName": "Magnus A",
            "lastName": "Djuse",
            "shortName": "Dju MA",
            "location": "Upplands Väsby",
            "birth": 2000,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Vit, mörblå lodrätt fält och ärmb.; mbl",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1501,
                  "earnings": 4916246500,
                  "placement": {
                    "3": 170,
                    "2": 213,
                    "1": 279
                  },
                  "winPercentage": 1858
                },
                "2024": {
                  "starts": 1163,
                  "earnings": 3358662500,
                  "placement": {
                    "3": 112,
                    "2": 150,
                    "1": 223
                  },
                  "winPercentage": 1917
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 12,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 6
            },
            "prizeMoney": 2500,
            "finalOdds": 14.07,
            "startNumber": 4
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1407
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 415,
              "maxOdds": 415
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1074,
              "potentialPayout": {
                "value": 2323000
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900668485409",
              "timestamp": "2024-09-21T17:21:53"
            },
            {
              "mediaId": "1900671045384",
              "timestamp": "2024-09-21T17:31:05"
            }
          ]
        },
        {
          "id": "2024-09-21_15_10_5",
          "number": 5,
          "postPosition": 5,
          "distance": 2140,
          "horse": {
            "id": 806007,
            "name": "Foira Mail",
            "nationality": "IT",
            "age": 3,
            "sex": "mare",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 7
              }
            },
            "trainer": {
              "id": 721795,
              "firstName": "Gennaro",
              "lastName": "Casillo",
              "shortName": "Cas Ge",
              "location": "Italien",
              "birth": 1968,
              "homeTrack": {
                "id": 14,
                "name": "Eskilstuna"
              },
              "license": "A-tränare: (Sv/utland): träna, köra",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 199,
                    "earnings": 387030000,
                    "placement": {
                      "3": 13,
                      "2": 24,
                      "1": 27
                    },
                    "winPercentage": 1356
                  },
                  "2024": {
                    "starts": 163,
                    "earnings": 354006100,
                    "placement": {
                      "3": 14,
                      "2": 22,
                      "1": 17
                    },
                    "winPercentage": 1042
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 394636,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "owner": {
              "id": 800284,
              "name": "Cortese Saverio",
              "location": "Italien"
            },
            "breeder": {
              "id": 832814,
              "name": "Morozzi Francesco",
              "location": "Italien"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 6,
                  "earnings": 12060200,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 8
                      },
                      "place": 0
                    }
                  ]
                },
                "2024": {
                  "starts": 7,
                  "earnings": 27403400,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 7
                      },
                      "place": 0
                    }
                  ]
                }
              },
              "life": {
                "starts": 13,
                "earnings": 39463600,
                "placement": {
                  "3": 2,
                  "2": 0,
                  "1": 5
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 7
                    },
                    "place": 0,
                    "year": "2024"
                  }
                ],
                "winPercentage": 3846,
                "placePercentage": 5384,
                "earningsPerStart": 3035661,
                "startPoints": 2490
              },
              "lastFiveStarts": {
                "averageOdds": 1464
              }
            },
            "pedigree": {
              "father": {
                "id": 588796,
                "name": "Maharajah"
              },
              "mother": {
                "id": 800838,
                "name": "Piuma d'Amore",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 740909,
                "name": "Faliero As",
                "nationality": "IT"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 91416,
            "firstName": "Per",
            "lastName": "Lennartsson",
            "shortName": "Len Pe",
            "location": "Eskilstuna",
            "birth": 1966,
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, blå axlar, sidor och ärmb; sva",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 568,
                  "earnings": 872704300,
                  "placement": {
                    "3": 59,
                    "2": 57,
                    "1": 61
                  },
                  "winPercentage": 1073
                },
                "2024": {
                  "starts": 412,
                  "earnings": 713335000,
                  "placement": {
                    "3": 44,
                    "2": 41,
                    "1": 59
                  },
                  "winPercentage": 1432
                }
              }
            }
          },
          "originalDriver": {
            "id": 145716,
            "firstName": "Stefan",
            "lastName": "Persson",
            "shortName": "Per St",
            "location": "Halmstad",
            "birth": 1973,
            "homeTrack": {
              "id": 18,
              "name": "Halmstad"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, ljusblå sidor; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1495,
                  "earnings": 2001121400,
                  "placement": {
                    "3": 159,
                    "2": 156,
                    "1": 197
                  },
                  "winPercentage": 1317
                },
                "2024": {
                  "starts": 969,
                  "earnings": 1289433300,
                  "placement": {
                    "3": 96,
                    "2": 122,
                    "1": 123
                  },
                  "winPercentage": 1269
                }
              }
            }
          },
          "result": {
            "finishOrder": 43,
            "kmTime": {
              "code": "13"
            },
            "galloped": true,
            "disqualified": true,
            "prizeMoney": 2500,
            "finalOdds": 67.99,
            "startNumber": 5
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 6799
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1396,
              "maxOdds": 1396
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 88,
              "potentialPayout": {
                "jackpot": true
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900670533172",
              "timestamp": "2024-09-21T17:22:50"
            }
          ]
        },
        {
          "id": "2024-09-21_15_10_6",
          "number": 6,
          "postPosition": 6,
          "distance": 2140,
          "horse": {
            "id": 795102,
            "name": "Mona Moonlight",
            "nationality": "NL",
            "age": 5,
            "sex": "mare",
            "record": {
              "code": "L",
              "startMethod": "volte",
              "distance": "long",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 566962,
              "firstName": "Maria",
              "lastName": "Törnqvist",
              "shortName": "Tör Ma",
              "location": "Nossebro",
              "birth": 1988,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Grå, svarta stolpar, axelparti och ärm; sv",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 288,
                    "earnings": 437820000,
                    "placement": {
                      "3": 37,
                      "2": 48,
                      "1": 39
                    },
                    "winPercentage": 1354
                  },
                  "2024": {
                    "starts": 215,
                    "earnings": 601206600,
                    "placement": {
                      "3": 30,
                      "2": 19,
                      "1": 55
                    },
                    "winPercentage": 2558
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": true
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 423813,
            "color": "brun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 755219,
              "name": "KB Wolfgang A",
              "location": "Vara"
            },
            "breeder": {
              "id": 719853,
              "name": "Veldink Peter",
              "location": "Nederländerna"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 11,
                  "earnings": 11740000,
                  "placement": {
                    "3": 1,
                    "2": 3,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 0
                      },
                      "place": 5
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 2
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 9,
                  "earnings": 21330000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 4
                      },
                      "place": 2
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 27,
                "earnings": 42381300,
                "placement": {
                  "3": 2,
                  "2": 5,
                  "1": 7
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 0
                    },
                    "place": 5,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 4
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 2
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 4
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2592,
                "placePercentage": 5185,
                "earningsPerStart": 1569677,
                "startPoints": 2378
              },
              "lastFiveStarts": {
                "averageOdds": 1002
              }
            },
            "pedigree": {
              "father": {
                "id": 736196,
                "name": "Brillantissime",
                "nationality": "FR"
              },
              "mother": {
                "id": 777809,
                "name": "Voila' Grif",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 463269,
                "name": "Varenne",
                "nationality": "IT"
              }
            }
          },
          "driver": {
            "id": 666737,
            "firstName": "Dwight",
            "lastName": "Pieters",
            "shortName": "Pie Dw",
            "location": "Nossebro",
            "birth": 1990,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Mörkblå, vita vinklar; mblå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 472,
                  "earnings": 576980000,
                  "placement": {
                    "3": 54,
                    "2": 69,
                    "1": 50
                  },
                  "winPercentage": 1059
                },
                "2024": {
                  "starts": 211,
                  "earnings": 321845400,
                  "placement": {
                    "3": 26,
                    "2": 18,
                    "1": 34
                  },
                  "winPercentage": 1611
                }
              }
            }
          },
          "result": {
            "place": 6,
            "finishOrder": 6,
            "kmTime": {
              "minutes": 1,
              "seconds": 13,
              "tenths": 7
            },
            "prizeMoney": 11500,
            "finalOdds": 11.16,
            "startNumber": 6
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1116
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 291,
              "maxOdds": 291
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 830,
              "potentialPayout": {
                "value": 2299800
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_10_7",
          "number": 7,
          "postPosition": 7,
          "distance": 2140,
          "horse": {
            "id": 778042,
            "name": "Xanthis Ibiza",
            "age": 4,
            "sex": "mare",
            "record": {
              "code": "K",
              "startMethod": "volte",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 5
              }
            },
            "trainer": {
              "id": 479879,
              "firstName": "Markus B",
              "lastName": "Svedberg",
              "shortName": "Sve MB",
              "location": "Strängnäs",
              "birth": 1991,
              "homeTrack": {
                "id": 14,
                "name": "Eskilstuna"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Sv, röd/vit vinkel, delad ärm; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 424,
                    "earnings": 844360800,
                    "placement": {
                      "3": 55,
                      "2": 44,
                      "1": 71
                    },
                    "winPercentage": 1674
                  },
                  "2024": {
                    "starts": 274,
                    "earnings": 457559300,
                    "placement": {
                      "3": 33,
                      "2": 38,
                      "1": 38
                    },
                    "winPercentage": 1386
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": true
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 341750,
            "color": "brun",
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "owner": {
              "id": 243618,
              "name": "Olof Brodin (Chartering) AB",
              "location": "Sollentuna"
            },
            "breeder": {
              "id": 244277,
              "name": "Flenmo Egendom AB",
              "location": "Mellösa"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 11,
                  "earnings": 22325000,
                  "placement": {
                    "3": 2,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 2
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 2
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 9,
                  "earnings": 11850000,
                  "placement": {
                    "3": 1,
                    "2": 3,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 5
                      },
                      "place": 0
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 5
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 20,
                "earnings": 34175000,
                "placement": {
                  "3": 3,
                  "2": 4,
                  "1": 2
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 2
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 9
                    },
                    "place": 6,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 0
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 5
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 2
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 1000,
                "placePercentage": 4500,
                "earningsPerStart": 1708750,
                "startPoints": 885
              },
              "lastFiveStarts": {
                "averageOdds": 10971
              }
            },
            "pedigree": {
              "father": {
                "id": 768844,
                "name": "International Moni",
                "nationality": "US"
              },
              "mother": {
                "id": 742436,
                "name": "Xanthis Darling"
              },
              "grandfather": {
                "id": 642441,
                "name": "Andover Andover",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 161607,
            "firstName": "Björn",
            "lastName": "Goop",
            "shortName": "Goo Bj",
            "location": "Karlstad",
            "birth": 1976,
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "license": "A-tränare: (Sv/utland): träna, köra",
            "silks": "Mblå, guldf.midjeband, sömmar; guld",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1240,
                  "earnings": 3961444800,
                  "placement": {
                    "3": 131,
                    "2": 145,
                    "1": 204
                  },
                  "winPercentage": 1645
                },
                "2024": {
                  "starts": 846,
                  "earnings": 2704607700,
                  "placement": {
                    "3": 103,
                    "2": 102,
                    "1": 124
                  },
                  "winPercentage": 1465
                }
              }
            }
          },
          "result": {
            "place": 2,
            "finishOrder": 2,
            "kmTime": {
              "minutes": 1,
              "seconds": 13,
              "tenths": 1
            },
            "prizeMoney": 75000,
            "finalOdds": 3.07,
            "startNumber": 7
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 307
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 171,
              "maxOdds": 171,
              "odds": 171
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 2326,
              "potentialPayout": {
                "value": 788500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900671557117",
              "timestamp": "2024-09-21T17:23:39"
            },
            {
              "mediaId": "1900672581196",
              "timestamp": "2024-09-21T17:32:18"
            }
          ]
        },
        {
          "id": "2024-09-21_15_10_8",
          "number": 8,
          "postPosition": 8,
          "distance": 2140,
          "horse": {
            "id": 775773,
            "name": "Gejst",
            "nationality": "DK",
            "age": 6,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 18,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 639705,
              "firstName": "Kjetil",
              "lastName": "Helgestad",
              "shortName": "Hel Kj",
              "location": "Norge",
              "birth": 1968,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Ljusblå/svart, vitt axelskärp;"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true
              },
              "back": {
                "hasShoe": true
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 359673,
            "color": "brun",
            "owner": {
              "id": 226010,
              "name": "Stall Boston",
              "location": "Norge"
            },
            "breeder": {
              "id": 225993,
              "name": "Dansk Uppfödare"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 14,
                  "earnings": 14004000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 4
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 17885200,
                  "placement": {
                    "3": 3,
                    "2": 1,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 5
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 34,
                "earnings": 35967300,
                "placement": {
                  "3": 4,
                  "2": 2,
                  "1": 13
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 5
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 18,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2021"
                  }
                ],
                "winPercentage": 3823,
                "placePercentage": 5588,
                "earningsPerStart": 1057861,
                "startPoints": 2510
              },
              "lastFiveStarts": {
                "averageOdds": 367
              }
            },
            "pedigree": {
              "father": {
                "id": 749051,
                "name": "Traders",
                "nationality": "IT"
              },
              "mother": {
                "id": 775772,
                "name": "Bet You Shadow",
                "nationality": "DK"
              },
              "grandfather": {
                "id": 686779,
                "name": "The Liquidator",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 109763,
            "firstName": "Eirik",
            "lastName": "Höitomt",
            "shortName": "Höi Ei",
            "location": "Norge",
            "birth": 1969,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Vit, svart axelparti och ärmar; vit"
          },
          "result": {
            "place": 0,
            "finishOrder": 9,
            "kmTime": {
              "minutes": 1,
              "seconds": 13,
              "tenths": 9
            },
            "prizeMoney": 2500,
            "finalOdds": 21.43,
            "startNumber": 8
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 2143
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 542,
              "maxOdds": 542
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 320,
              "potentialPayout": {
                "value": 6820900
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900670533151",
              "timestamp": "2024-09-21T17:22:47"
            },
            {
              "mediaId": "1900672581197",
              "timestamp": "2024-09-21T17:32:23"
            }
          ]
        },
        {
          "id": "2024-09-21_15_10_9",
          "number": 9,
          "postPosition": 9,
          "distance": 2140,
          "horse": {
            "id": 774391,
            "name": "Sparkling Night",
            "age": 5,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 92865,
              "firstName": "Lars-Göran",
              "lastName": "Söderberg",
              "shortName": "Söd LG",
              "location": "Kvissleby",
              "birth": 1968,
              "homeTrack": {
                "id": 9,
                "name": "Bergsåker"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart,gul/orange/vit lodr fält; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 50,
                    "earnings": 26820000,
                    "placement": {
                      "3": 6,
                      "2": 2,
                      "1": 2
                    },
                    "winPercentage": 400
                  },
                  "2024": {
                    "starts": 51,
                    "earnings": 45420000,
                    "placement": {
                      "3": 7,
                      "2": 5,
                      "1": 2
                    },
                    "winPercentage": 392
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 408700,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "owner": {
              "id": 803852,
              "name": "Söderberg Lars-Göran & Transecure AB"
            },
            "breeder": {
              "id": 246844,
              "name": "AB Svensk Reklamfinans",
              "location": "Halmstad"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 19,
                  "earnings": 7940000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 6
                      },
                      "place": 7
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 3
                      },
                      "place": 5
                    }
                  ]
                },
                "2024": {
                  "starts": 16,
                  "earnings": 21930000,
                  "placement": {
                    "3": 3,
                    "2": 3,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 3
                      },
                      "place": 4
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 4
                      },
                      "place": 5
                    }
                  ]
                }
              },
              "life": {
                "starts": 42,
                "earnings": 40870000,
                "placement": {
                  "3": 6,
                  "2": 5,
                  "1": 2
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 3
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 6
                    },
                    "place": 7,
                    "year": "2023"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 8
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 1
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 4
                    },
                    "place": 5,
                    "year": "2024"
                  }
                ],
                "winPercentage": 476,
                "placePercentage": 3095,
                "earningsPerStart": 973095,
                "startPoints": 1775
              },
              "lastFiveStarts": {
                "averageOdds": 6154
              }
            },
            "pedigree": {
              "father": {
                "id": 728667,
                "name": "Magic Tonight",
                "nationality": "US"
              },
              "mother": {
                "id": 725437,
                "name": "Sparkling Kronos",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 685124,
                "name": "Muscle Hill",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 92865,
            "firstName": "Lars-Göran",
            "lastName": "Söderberg",
            "shortName": "Söd LG",
            "location": "Kvissleby",
            "birth": 1968,
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart,gul/orange/vit lodr fält; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 56,
                  "earnings": 33180000,
                  "placement": {
                    "3": 6,
                    "2": 3,
                    "1": 3
                  },
                  "winPercentage": 535
                },
                "2024": {
                  "starts": 56,
                  "earnings": 38350000,
                  "placement": {
                    "3": 6,
                    "2": 7,
                    "1": 1
                  },
                  "winPercentage": 178
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 10,
            "kmTime": {
              "minutes": 1,
              "seconds": 14,
              "tenths": 0
            },
            "galloped": true,
            "prizeMoney": 2500,
            "finalOdds": 187.17,
            "startNumber": 9
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 18717
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 2646,
              "maxOdds": 2646
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 22,
              "potentialPayout": {
                "jackpot": true
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_10_10",
          "number": 10,
          "postPosition": 10,
          "distance": 2140,
          "horse": {
            "id": 780807,
            "name": "Toppy",
            "age": 4,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 14,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 568723,
              "firstName": "Oskar",
              "lastName": "Kylin Blom",
              "shortName": "Kyl Os",
              "location": "Östervåla",
              "birth": 1992,
              "homeTrack": {
                "id": 16,
                "name": "Gävle"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, sidofält i orange; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 623,
                    "earnings": 814471800,
                    "placement": {
                      "3": 66,
                      "2": 85,
                      "1": 84
                    },
                    "winPercentage": 1348
                  },
                  "2024": {
                    "starts": 493,
                    "earnings": 696205000,
                    "placement": {
                      "3": 51,
                      "2": 53,
                      "1": 66
                    },
                    "winPercentage": 1338
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 382500,
            "color": "svartbrun",
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "owner": {
              "id": 134918,
              "name": "Easy KB",
              "location": "Uppsala"
            },
            "breeder": {
              "id": 227883,
              "name": "Herz Günter",
              "location": "Tyskland"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 11,
                  "earnings": 11950000,
                  "placement": {
                    "3": 0,
                    "2": 3,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 7
                      },
                      "place": 6
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 1
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 12,
                  "earnings": 26300000,
                  "placement": {
                    "3": 1,
                    "2": 3,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 6
                      },
                      "place": 5
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 2
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 23,
                "earnings": 38250000,
                "placement": {
                  "3": 1,
                  "2": 6,
                  "1": 2
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 6
                    },
                    "place": 5,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 7
                    },
                    "place": 6,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 2
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 869,
                "placePercentage": 3913,
                "earningsPerStart": 1663043,
                "startPoints": 2125
              },
              "lastFiveStarts": {
                "averageOdds": 5788
              }
            },
            "pedigree": {
              "father": {
                "id": 617432,
                "name": "Brioni",
                "nationality": "DE"
              },
              "mother": {
                "id": 754274,
                "name": "Jobi",
                "nationality": "DE"
              },
              "grandfather": {
                "id": 463269,
                "name": "Varenne",
                "nationality": "IT"
              }
            }
          },
          "driver": {
            "id": 568723,
            "firstName": "Oskar",
            "lastName": "Kylin Blom",
            "shortName": "Kyl Os",
            "location": "Östervåla",
            "birth": 1992,
            "homeTrack": {
              "id": 16,
              "name": "Gävle"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, sidofält i orange; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 808,
                  "earnings": 909775700,
                  "placement": {
                    "3": 77,
                    "2": 99,
                    "1": 79
                  },
                  "winPercentage": 977
                },
                "2024": {
                  "starts": 529,
                  "earnings": 564389700,
                  "placement": {
                    "3": 53,
                    "2": 48,
                    "1": 47
                  },
                  "winPercentage": 888
                }
              }
            }
          },
          "result": {
            "finishOrder": 44,
            "kmTime": {
              "code": "14"
            },
            "galloped": true,
            "disqualified": true,
            "prizeMoney": 2500,
            "finalOdds": 88.57,
            "startNumber": 10
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 8857
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1635,
              "maxOdds": 1635
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 37,
              "potentialPayout": {
                "jackpot": true
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_10_11",
          "number": 11,
          "postPosition": 1,
          "distance": 2160,
          "horse": {
            "id": 774317,
            "name": "Future Sox",
            "age": 5,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 8
              }
            },
            "trainer": {
              "id": 608305,
              "firstName": "Jörgen S",
              "lastName": "Eriksson",
              "shortName": "Eri JS",
              "location": "Eskilstuna",
              "birth": 1987,
              "homeTrack": {
                "id": 14,
                "name": "Eskilstuna"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart/vröd, diagonalt delad, ärmb; sv",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 301,
                    "earnings": 493287900,
                    "placement": {
                      "3": 37,
                      "2": 45,
                      "1": 42
                    },
                    "winPercentage": 1395
                  },
                  "2024": {
                    "starts": 221,
                    "earnings": 226863000,
                    "placement": {
                      "3": 21,
                      "2": 31,
                      "1": 20
                    },
                    "winPercentage": 904
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": true
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 1054812,
            "color": "brun",
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "owner": {
              "id": 829652,
              "name": "Team EvaKarin - OfCourse"
            },
            "breeder": {
              "id": 758746,
              "name": "Boholm Joakim & Mitchell Craig"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 18,
                  "earnings": 64227400,
                  "placement": {
                    "3": 2,
                    "2": 6,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 9
                      },
                      "place": 6
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 8
                      },
                      "place": 4
                    }
                  ]
                },
                "2024": {
                  "starts": 9,
                  "earnings": 27433800,
                  "placement": {
                    "3": 1,
                    "2": 3,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 6
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 6
                      },
                      "place": 0
                    }
                  ]
                }
              },
              "life": {
                "starts": 36,
                "earnings": 105481200,
                "placement": {
                  "3": 6,
                  "2": 9,
                  "1": 6
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 9
                    },
                    "place": 6,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 8
                    },
                    "place": 6,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 8
                    },
                    "place": 4,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 6
                    },
                    "place": 2,
                    "year": "2023"
                  }
                ],
                "winPercentage": 1666,
                "placePercentage": 5833,
                "earningsPerStart": 2930033,
                "startPoints": 905
              },
              "lastFiveStarts": {
                "averageOdds": 1266
              }
            },
            "pedigree": {
              "father": {
                "id": 741746,
                "name": "Bold Eagle",
                "nationality": "FR"
              },
              "mother": {
                "id": 754352,
                "name": "Moni Sox",
                "nationality": "US"
              },
              "grandfather": {
                "id": 702857,
                "name": "Explosive Matter",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 608305,
            "firstName": "Jörgen S",
            "lastName": "Eriksson",
            "shortName": "Eri JS",
            "location": "Eskilstuna",
            "birth": 1987,
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart/vröd, diagonalt delad, ärmb; sv",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 206,
                  "earnings": 277290900,
                  "placement": {
                    "3": 25,
                    "2": 28,
                    "1": 24
                  },
                  "winPercentage": 1165
                },
                "2024": {
                  "starts": 125,
                  "earnings": 133059100,
                  "placement": {
                    "3": 11,
                    "2": 12,
                    "1": 12
                  },
                  "winPercentage": 960
                }
              }
            }
          },
          "result": {
            "finishOrder": 45,
            "kmTime": {
              "code": "u"
            },
            "galloped": true,
            "disqualified": true,
            "prizeMoney": 2500,
            "finalOdds": 39.1,
            "startNumber": 11
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3910
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 791,
              "maxOdds": 791
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 165,
              "potentialPayout": {
                "value": 12197300
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900671045103",
              "timestamp": "2024-09-21T17:22:44"
            },
            {
              "mediaId": "1900674117267",
              "timestamp": "2024-09-21T17:31:07"
            }
          ],
          "out": true
        },
        {
          "id": "2024-09-21_15_10_12",
          "number": 12,
          "postPosition": 2,
          "distance": 2160,
          "horse": {
            "id": 771912,
            "name": "Mi Amore Bros",
            "age": 5,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 185518,
              "firstName": "Daniel",
              "lastName": "Redén",
              "shortName": "Red Da",
              "location": "Örsundsbro",
              "birth": 1979,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Brun, sv axelp och vita hängsl; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 513,
                    "earnings": 3369779100,
                    "placement": {
                      "3": 61,
                      "2": 72,
                      "1": 147
                    },
                    "winPercentage": 2865
                  },
                  "2024": {
                    "starts": 528,
                    "earnings": 3436221200,
                    "placement": {
                      "3": 59,
                      "2": 86,
                      "1": 141
                    },
                    "winPercentage": 2670
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 1027300,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 189279,
              "name": "Stall Zet (Redén Daniel)"
            },
            "breeder": {
              "id": 763760,
              "name": "Bros Stables",
              "location": "Nederländerna"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 11,
                  "earnings": 49100000,
                  "placement": {
                    "3": 0,
                    "2": 2,
                    "1": 6
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 7
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 4
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 47350000,
                  "placement": {
                    "3": 3,
                    "2": 3,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 6
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 3
                      },
                      "place": 3
                    }
                  ]
                }
              },
              "life": {
                "starts": 28,
                "earnings": 102730000,
                "placement": {
                  "3": 4,
                  "2": 5,
                  "1": 8
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 6
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 5
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 4
                    },
                    "place": 2,
                    "year": "2023"
                  }
                ],
                "winPercentage": 2857,
                "placePercentage": 6071,
                "earningsPerStart": 3668928,
                "startPoints": 2730
              },
              "lastFiveStarts": {
                "averageOdds": 687
              }
            },
            "pedigree": {
              "father": {
                "id": 745530,
                "name": "Propulsion",
                "nationality": "US"
              },
              "mother": {
                "id": 753877,
                "name": "Margot Bi",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 169339,
                "name": "Toss Out",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 125542,
            "firstName": "Erik",
            "lastName": "Adielsson",
            "shortName": "Adi Er",
            "location": "Upplands Väsby",
            "birth": 1974,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Blå, vita ärmbindlar; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 530,
                  "earnings": 2095922500,
                  "placement": {
                    "3": 54,
                    "2": 50,
                    "1": 58
                  },
                  "winPercentage": 1094
                },
                "2024": {
                  "starts": 422,
                  "earnings": 1496106300,
                  "placement": {
                    "3": 54,
                    "2": 30,
                    "1": 42
                  },
                  "winPercentage": 995
                }
              }
            }
          },
          "result": {
            "place": 4,
            "finishOrder": 4,
            "kmTime": {
              "minutes": 1,
              "seconds": 12,
              "tenths": 8
            },
            "prizeMoney": 25000,
            "finalOdds": 5.73,
            "startNumber": 12
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 573
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 226,
              "maxOdds": 226
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1823,
              "potentialPayout": {
                "value": 907800
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_10_13",
          "number": 13,
          "postPosition": 3,
          "distance": 2160,
          "horse": {
            "id": 767200,
            "name": "Young Mistress",
            "age": 6,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 2
              }
            },
            "trainer": {
              "id": 188987,
              "firstName": "Per",
              "lastName": "Linderoth",
              "shortName": "Lin Pe",
              "location": "Östersund",
              "birth": 1980,
              "homeTrack": {
                "id": 33,
                "name": "Östersund"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Röd, vitt axelp,hängslen och ärmar; vit",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 106,
                    "earnings": 221283100,
                    "placement": {
                      "3": 12,
                      "2": 13,
                      "1": 27
                    },
                    "winPercentage": 2547
                  },
                  "2024": {
                    "starts": 98,
                    "earnings": 139207600,
                    "placement": {
                      "3": 21,
                      "2": 16,
                      "1": 9
                    },
                    "winPercentage": 918
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 1078200,
            "color": "svart",
            "homeTrack": {
              "id": 33,
              "name": "Östersund"
            },
            "owner": {
              "id": 659510,
              "name": "Team Young AB",
              "location": "Viksjöfors"
            },
            "breeder": {
              "id": 672859,
              "name": "Kjell Ungh AB",
              "location": "Viksjöfors"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 18,
                  "earnings": 63640000,
                  "placement": {
                    "3": 3,
                    "2": 2,
                    "1": 6
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 8
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 2
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 10,
                  "earnings": 17600000,
                  "placement": {
                    "3": 3,
                    "2": 2,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 3
                      },
                      "place": 3
                    }
                  ]
                }
              },
              "life": {
                "starts": 48,
                "earnings": 107820000,
                "placement": {
                  "3": 11,
                  "2": 9,
                  "1": 8
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 2
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 7
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 1666,
                "placePercentage": 5833,
                "earningsPerStart": 2246250,
                "startPoints": 1470
              },
              "lastFiveStarts": {
                "averageOdds": 3860
              }
            },
            "pedigree": {
              "father": {
                "id": 617124,
                "name": "Orlando Vici",
                "nationality": "FR"
              },
              "mother": {
                "id": 634134,
                "name": "Shanaya"
              },
              "grandfather": {
                "id": 516127,
                "name": "Turbo Sund"
              }
            }
          },
          "driver": {
            "id": 188987,
            "firstName": "Per",
            "lastName": "Linderoth",
            "shortName": "Lin Pe",
            "location": "Östersund",
            "birth": 1980,
            "homeTrack": {
              "id": 33,
              "name": "Östersund"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Röd, vitt axelp,hängslen och ärmar; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 463,
                  "earnings": 556728100,
                  "placement": {
                    "3": 51,
                    "2": 54,
                    "1": 52
                  },
                  "winPercentage": 1123
                },
                "2024": {
                  "starts": 444,
                  "earnings": 618728600,
                  "placement": {
                    "3": 47,
                    "2": 48,
                    "1": 53
                  },
                  "winPercentage": 1193
                }
              }
            }
          },
          "result": {
            "place": 7,
            "finishOrder": 7,
            "kmTime": {
              "minutes": 1,
              "seconds": 13,
              "tenths": 1
            },
            "prizeMoney": 7500,
            "finalOdds": 47.99,
            "startNumber": 13
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 4799
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 815,
              "maxOdds": 815
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 110,
              "potentialPayout": {
                "value": 17156600
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_10_14",
          "number": 14,
          "postPosition": 4,
          "distance": 2160,
          "horse": {
            "id": 771955,
            "name": "Nycora",
            "age": 5,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 13,
                "tenths": 1
              }
            },
            "trainer": {
              "id": 479879,
              "firstName": "Markus B",
              "lastName": "Svedberg",
              "shortName": "Sve MB",
              "location": "Strängnäs",
              "birth": 1991,
              "homeTrack": {
                "id": 14,
                "name": "Eskilstuna"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Sv, röd/vit vinkel, delad ärm; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 424,
                    "earnings": 844360800,
                    "placement": {
                      "3": 55,
                      "2": 44,
                      "1": 71
                    },
                    "winPercentage": 1674
                  },
                  "2024": {
                    "starts": 274,
                    "earnings": 457559300,
                    "placement": {
                      "3": 33,
                      "2": 38,
                      "1": 38
                    },
                    "winPercentage": 1386
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 842800,
            "color": "brun",
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "owner": {
              "id": 804078,
              "name": "Nycora HB",
              "location": "Norberg"
            },
            "breeder": {
              "id": 559768,
              "name": "Nyberg Cecilia & Henrik"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 13,
                  "earnings": 35250000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 5
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 5
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 27175000,
                  "placement": {
                    "3": 4,
                    "2": 2,
                    "1": 0
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 1
                      },
                      "place": 0
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 1
                      },
                      "place": 3
                    }
                  ]
                }
              },
              "life": {
                "starts": 39,
                "earnings": 84280000,
                "placement": {
                  "3": 5,
                  "2": 7,
                  "1": 4
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 5
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 1
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 5
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 1
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 1025,
                "placePercentage": 4102,
                "earningsPerStart": 2161025,
                "startPoints": 1957
              },
              "lastFiveStarts": {
                "averageOdds": 3038
              }
            },
            "pedigree": {
              "father": {
                "id": 731436,
                "name": "Nuncio",
                "nationality": "US"
              },
              "mother": {
                "id": 633222,
                "name": "Krista Tilly"
              },
              "grandfather": {
                "id": 161030,
                "name": "Super Arnie",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 479879,
            "firstName": "Markus B",
            "lastName": "Svedberg",
            "shortName": "Sve MB",
            "location": "Strängnäs",
            "birth": 1991,
            "homeTrack": {
              "id": 14,
              "name": "Eskilstuna"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Sv, röd/vit vinkel, delad ärm; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 291,
                  "earnings": 547840000,
                  "placement": {
                    "3": 35,
                    "2": 35,
                    "1": 50
                  },
                  "winPercentage": 1718
                },
                "2024": {
                  "starts": 203,
                  "earnings": 307008300,
                  "placement": {
                    "3": 26,
                    "2": 24,
                    "1": 27
                  },
                  "winPercentage": 1330
                }
              }
            }
          },
          "result": {
            "place": 0,
            "finishOrder": 11,
            "kmTime": {
              "minutes": 1,
              "seconds": 13,
              "tenths": 6
            },
            "prizeMoney": 2500,
            "finalOdds": 24.33,
            "startNumber": 14
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 2433
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 500,
              "maxOdds": 500
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 145,
              "potentialPayout": {
                "value": 9985500
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_10_15",
          "number": 15,
          "postPosition": 5,
          "distance": 2160,
          "horse": {
            "id": 779631,
            "name": "Staro Raili",
            "age": 4,
            "sex": "mare",
            "record": {
              "code": "M",
              "startMethod": "volte",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 16,
                "tenths": 0
              }
            },
            "trainer": {
              "id": 506451,
              "firstName": "Sofia",
              "lastName": "Aronsson",
              "shortName": "Aro So",
              "location": "Kvänum",
              "birth": 1984,
              "homeTrack": {
                "id": 8,
                "name": "Axevalla"
              },
              "license": "A-tränare kat2: träna, köra",
              "silks": "Gul, rött lodrätt fält, vita ärmar;röd",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 229,
                    "earnings": 334145100,
                    "placement": {
                      "3": 28,
                      "2": 24,
                      "1": 23
                    },
                    "winPercentage": 1004
                  },
                  "2024": {
                    "starts": 198,
                    "earnings": 297834500,
                    "placement": {
                      "3": 21,
                      "2": 28,
                      "1": 28
                    },
                    "winPercentage": 1414
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 998500,
            "color": "brun",
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "owner": {
              "id": 710021,
              "name": "Hjelte Restaurang AB",
              "location": "Karlstad"
            },
            "breeder": {
              "id": 205905,
              "name": "Nilsson Staffan B",
              "location": "Växjö"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 5,
                  "earnings": 14450000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 0
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 16,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 85400000,
                  "placement": {
                    "3": 0,
                    "2": 3,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 16,
                "earnings": 99850000,
                "placement": {
                  "3": 0,
                  "2": 3,
                  "1": 7
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 4,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 16,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 4375,
                "placePercentage": 6250,
                "earningsPerStart": 6240625,
                "startPoints": 2850
              },
              "lastFiveStarts": {
                "averageOdds": 2114
              }
            },
            "pedigree": {
              "father": {
                "id": 588796,
                "name": "Maharajah"
              },
              "mother": {
                "id": 689747,
                "name": "Gaia Käll"
              },
              "grandfather": {
                "id": 667295,
                "name": "Ready Cash",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 149226,
            "firstName": "André",
            "lastName": "Eklundh",
            "shortName": "Ekl An",
            "location": "Nossebro",
            "birth": 1986,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Vit, mblå stolpar och ärmb. vit axelp.; vi",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 493,
                  "earnings": 641880000,
                  "placement": {
                    "3": 53,
                    "2": 67,
                    "1": 71
                  },
                  "winPercentage": 1440
                },
                "2024": {
                  "starts": 416,
                  "earnings": 590045500,
                  "placement": {
                    "3": 43,
                    "2": 53,
                    "1": 61
                  },
                  "winPercentage": 1466
                }
              }
            }
          },
          "result": {
            "place": 1,
            "finishOrder": 1,
            "kmTime": {
              "minutes": 1,
              "seconds": 12,
              "tenths": 4
            },
            "prizeMoney": 150000,
            "finalOdds": 6.8,
            "startNumber": 15
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 680,
              "finalOdds": 680
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 258,
              "maxOdds": 258,
              "odds": 258
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 962,
              "potentialPayout": {
                "value": 1776200
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900662341454",
              "timestamp": "2024-09-21T17:12:22"
            },
            {
              "mediaId": "1900663877316",
              "timestamp": "2024-09-21T17:01:06"
            }
          ]
        }
      ],
      "mergedPools": [
        {
          "name": "A",
          "betTypes": ["vinnare", "plats", "komb", "tvilling", "trio"]
        }
      ]
    },
    {
      "id": "2024-09-21_15_11",
      "name": "Buchen - Working for the future - STL Bronsdivisionen (Försök 9 i Meeting 6 - Final Solvalla 12 oktober)",
      "date": "2024-09-21",
      "number": 11,
      "distance": 1640,
      "startMethod": "auto",
      "startTime": "2024-09-21T18:43:31",
      "scheduledStartTime": "2024-09-21T18:43:00",
      "prize": "Pris: 110.000-55.000-32.000-19.000-12.500-10.000-6.500-5.000 kr (8 prisplacerade). Lägst 2.500 kr till alla tävlande. Prispengar max total: 260.000 kr.",
      "terms": [
        "3-åriga och äldre 500.001 - 900.000 kr. Körsvenskrav kat. 1. Körsvenner födda 060921 eller tidigare.",
        "Svenska Travligans hederspris till segrande hästs ägare och hästskötare.",
        "1640 m. Autostart. 12 startande."
      ],
      "sport": "trot",
      "track": {
        "id": 15,
        "name": "Färjestad",
        "condition": "light",
        "countryCode": "SE"
      },
      "result": {
        "victoryMargin": "3.5 längd",
        "scratchings": [11, 12]
      },
      "status": "results",
      "mediaId": "1900703813148",
      "pools": {
        "vinnare": {
          "@type": ".VinnarePool",
          "id": "vinnare_2024-09-21_15_11",
          "status": "results",
          "timestamp": "2024-09-21 18:48:36",
          "turnover": 192189000,
          "result": {
            "@type": ".VinnarePoolRaceResult",
            "winners": [
              {
                "number": 4,
                "odds": 386
              }
            ]
          },
          "betType": "vinnare"
        },
        "plats": {
          "@type": ".PlatsPool",
          "id": "plats_2024-09-21_15_11",
          "status": "results",
          "timestamp": "2024-09-21 18:48:36",
          "turnover": 192189000,
          "result": {
            "@type": ".PlatsPoolRaceResult",
            "winners": {
              "first": [
                {
                  "number": 4,
                  "odds": 163
                }
              ],
              "second": [
                {
                  "number": 6,
                  "odds": 289
                }
              ],
              "third": [
                {
                  "number": 9,
                  "odds": 447
                }
              ]
            }
          },
          "betType": "plats"
        },
        "tvilling": {
          "@type": ".TvillingPool",
          "id": "tvilling_2024-09-21_15_11",
          "status": "results",
          "timestamp": "2024-09-21 18:50:39",
          "turnover": 192189000,
          "result": {
            "@type": ".TvillingPoolRaceResult",
            "winners": [
              {
                "combination": [4, 6],
                "odds": 2387
              }
            ]
          },
          "betType": "tvilling"
        },
        "komb": {
          "@type": ".KombPool",
          "id": "komb_2024-09-21_15_11",
          "status": "results",
          "timestamp": "2024-09-21 18:50:38",
          "turnover": 192189000,
          "result": {
            "@type": ".KombPoolRaceResult",
            "winners": [
              {
                "combination": [4, 6],
                "odds": 4127
              }
            ]
          },
          "betType": "komb"
        },
        "trio": {
          "@type": ".TrioPool",
          "id": "trio_2024-09-21_15_11",
          "status": "results",
          "timestamp": "2024-09-21 18:50:39",
          "turnover": 192189000,
          "result": {
            "@type": ".TrioPoolRaceResult",
            "winners": [
              {
                "combination": [4, 6, 9],
                "odds": 38642
              }
            ]
          },
          "betType": "trio"
        },
        "V75": {
          "@type": ".Pool",
          "result": {
            "@type": ".MarkingBetRacePoolResult",
            "systems": "471,6",
            "value": {
              "amount": 4970000
            },
            "winners": [4],
            "reserveOrder": [3, 4, 1, 6, 8, 7, 9, 2, 10, 5, 12, 11]
          }
        }
      },
      "starts": [
        {
          "id": "2024-09-21_15_11_1",
          "number": 1,
          "postPosition": 1,
          "distance": 1640,
          "horse": {
            "id": 772793,
            "name": "The Way I Talk Ås",
            "age": 5,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 0
              }
            },
            "trainer": {
              "id": 626530,
              "firstName": "Anette",
              "lastName": "Midtlyng",
              "shortName": "Mid An",
              "location": "Norge",
              "birth": 1981,
              "license": "B-tränare: (utland): träna, köra"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 702008,
            "color": "mörkbrun",
            "owner": {
              "id": 796506,
              "name": "Flygind Gård AB"
            },
            "breeder": {
              "id": 212566,
              "name": "Lorentzon Ann-Christin",
              "location": "Vislanda"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 8,
                  "earnings": 14395800,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 7
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 12,
                  "earnings": 42154900,
                  "placement": {
                    "3": 0,
                    "2": 5,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 0
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 0
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 26,
                "earnings": 70200800,
                "placement": {
                  "3": 1,
                  "2": 6,
                  "1": 11
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 8
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 0
                    },
                    "place": 4,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 4230,
                "placePercentage": 6923,
                "earningsPerStart": 2700030,
                "startPoints": 3077
              },
              "lastFiveStarts": {
                "averageOdds": 422
              }
            },
            "pedigree": {
              "father": {
                "id": 762068,
                "name": "Walner",
                "nationality": "CA"
              },
              "mother": {
                "id": 718585,
                "name": "Fortune Again",
                "nationality": "US"
              },
              "grandfather": {
                "id": 568973,
                "name": "Andover Hall",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 714238,
            "firstName": "Erlend",
            "lastName": "Rennesvik",
            "shortName": "Ren Er",
            "location": "Norge",
            "birth": 1994,
            "license": "A-tränare (utland): träna, köra",
            "silks": "Svart, vit och orange; vit"
          },
          "result": {
            "place": 5,
            "finishOrder": 5,
            "kmTime": {
              "minutes": 1,
              "seconds": 10,
              "tenths": 2
            },
            "prizeMoney": 12500,
            "finalOdds": 8.26,
            "startNumber": 1
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 826
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 244,
              "maxOdds": 244
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1338,
              "potentialPayout": {
                "value": 9128500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900675141391",
              "timestamp": "2024-09-21T17:45:14"
            },
            {
              "mediaId": "1900682821234",
              "timestamp": "2024-09-21T17:55:09"
            },
            {
              "mediaId": "1900688453176",
              "timestamp": "2024-09-21T18:05:06"
            }
          ]
        },
        {
          "id": "2024-09-21_15_11_2",
          "number": 2,
          "postPosition": 2,
          "distance": 1640,
          "horse": {
            "id": 781021,
            "name": "Dats Tore",
            "age": 4,
            "sex": "gelding",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 591841,
              "firstName": "Eric",
              "lastName": "Martinsson",
              "shortName": "Mar Er",
              "location": "Skara",
              "birth": 1987,
              "homeTrack": {
                "id": 8,
                "name": "Axevalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, x i brons och ärmrevär; sva",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 397,
                    "earnings": 517033600,
                    "placement": {
                      "3": 53,
                      "2": 53,
                      "1": 45
                    },
                    "winPercentage": 1133
                  },
                  "2024": {
                    "starts": 272,
                    "earnings": 277810000,
                    "placement": {
                      "3": 34,
                      "2": 27,
                      "1": 27
                    },
                    "winPercentage": 992
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 631500,
            "color": "brun",
            "homeTrack": {
              "id": 8,
              "name": "Axevalla"
            },
            "owner": {
              "id": 635191,
              "name": "Lagestig Bengt-Göran",
              "location": "Ljungby"
            },
            "breeder": {
              "id": 635191,
              "name": "Lagestig Bengt-Göran",
              "location": "Ljungby"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 12,
                  "earnings": 32100000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 4
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 4
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 31050000,
                  "placement": {
                    "3": 2,
                    "2": 3,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 9
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 3
                      },
                      "place": 6
                    }
                  ]
                }
              },
              "life": {
                "starts": 23,
                "earnings": 63150000,
                "placement": {
                  "3": 3,
                  "2": 5,
                  "1": 4
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 9
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 5
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 3
                    },
                    "place": 6,
                    "year": "2024"
                  }
                ],
                "winPercentage": 1739,
                "placePercentage": 5217,
                "earningsPerStart": 2745652,
                "startPoints": 3160
              },
              "lastFiveStarts": {
                "averageOdds": 1256
              }
            },
            "pedigree": {
              "father": {
                "id": 757369,
                "name": "Fourth Dimension",
                "nationality": "US"
              },
              "mother": {
                "id": 731581,
                "name": "Conrads R.Gur Fein"
              },
              "grandfather": {
                "id": 603016,
                "name": "Cantab Hall",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 722626,
            "firstName": "Mats E",
            "lastName": "Djuse",
            "shortName": "Dju ME",
            "location": "Hudiksvall",
            "birth": 1998,
            "homeTrack": {
              "id": 17,
              "name": "Hagmyren"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Svart, gult axelparti och rött bröstb.; sv",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1717,
                  "earnings": 3346819100,
                  "placement": {
                    "3": 186,
                    "2": 219,
                    "1": 257
                  },
                  "winPercentage": 1496
                },
                "2024": {
                  "starts": 1355,
                  "earnings": 2950765100,
                  "placement": {
                    "3": 148,
                    "2": 172,
                    "1": 234
                  },
                  "winPercentage": 1726
                }
              }
            }
          },
          "result": {
            "place": 7,
            "finishOrder": 7,
            "kmTime": {
              "minutes": 1,
              "seconds": 10,
              "tenths": 3
            },
            "prizeMoney": 6500,
            "finalOdds": 30.32,
            "startNumber": 2
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 3032
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 441,
              "maxOdds": 441
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 214,
              "potentialPayout": {
                "value": 77285800
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900679237171",
              "timestamp": "2024-09-21T17:46:52"
            },
            {
              "mediaId": "1900685893186",
              "timestamp": "2024-09-21T17:56:11"
            }
          ]
        },
        {
          "id": "2024-09-21_15_11_3",
          "number": 3,
          "postPosition": 3,
          "distance": 1640,
          "horse": {
            "id": 777326,
            "name": "Zaxton",
            "age": 4,
            "sex": "gelding",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 12,
                "tenths": 0
              }
            },
            "trainer": {
              "id": 189679,
              "firstName": "Daniel",
              "lastName": "Wäjersten",
              "shortName": "Wäj Da",
              "location": "Kovland",
              "birth": 1990,
              "homeTrack": {
                "id": 9,
                "name": "Bergsåker"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Blå, vitt axelparti och silver vinkel; blå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 704,
                    "earnings": 2573119000,
                    "placement": {
                      "3": 83,
                      "2": 121,
                      "1": 173
                    },
                    "winPercentage": 2457
                  },
                  "2024": {
                    "starts": 594,
                    "earnings": 2764762100,
                    "placement": {
                      "3": 76,
                      "2": 91,
                      "1": 159
                    },
                    "winPercentage": 2676
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 886000,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "owner": {
              "id": 804346,
              "name": "Brängan Boyz AB",
              "location": "Skellefteå"
            },
            "breeder": {
              "id": 767462,
              "name": "Falconeri Racing Stable HB"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 9,
                  "earnings": 27550000,
                  "placement": {
                    "3": 2,
                    "2": 3,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 0
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 4
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 11,
                  "earnings": 61050000,
                  "placement": {
                    "3": 1,
                    "2": 3,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 8
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 20,
                "earnings": 88600000,
                "placement": {
                  "3": 3,
                  "2": 6,
                  "1": 5
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 9
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 8
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2500,
                "placePercentage": 7000,
                "earningsPerStart": 4430000,
                "startPoints": 4005
              },
              "lastFiveStarts": {
                "averageOdds": 2471
              }
            },
            "pedigree": {
              "father": {
                "id": 741711,
                "name": "Trixton",
                "nationality": "US"
              },
              "mother": {
                "id": 746455,
                "name": "Zara Kronos"
              },
              "grandfather": {
                "id": 636691,
                "name": "Raja Mirchi"
              }
            }
          },
          "driver": {
            "id": 189679,
            "firstName": "Daniel",
            "lastName": "Wäjersten",
            "shortName": "Wäj Da",
            "location": "Kovland",
            "birth": 1990,
            "homeTrack": {
              "id": 9,
              "name": "Bergsåker"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Blå, vitt axelparti och silver vinkel; blå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 657,
                  "earnings": 2096837100,
                  "placement": {
                    "3": 80,
                    "2": 95,
                    "1": 132
                  },
                  "winPercentage": 2009
                },
                "2024": {
                  "starts": 527,
                  "earnings": 2188082000,
                  "placement": {
                    "3": 71,
                    "2": 71,
                    "1": 117
                  },
                  "winPercentage": 2220
                }
              }
            }
          },
          "result": {
            "place": 8,
            "finishOrder": 8,
            "kmTime": {
              "minutes": 1,
              "seconds": 12,
              "tenths": 4
            },
            "galloped": true,
            "prizeMoney": 5000,
            "finalOdds": 3.0,
            "startNumber": 3
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 300
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 153,
              "maxOdds": 153
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 2987,
              "potentialPayout": {
                "value": 2510400
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900675653175",
              "timestamp": "2024-09-21T17:45:14"
            },
            {
              "mediaId": "1900682821237",
              "timestamp": "2024-09-21T17:56:33"
            }
          ]
        },
        {
          "id": "2024-09-21_15_11_4",
          "number": 4,
          "postPosition": 4,
          "distance": 1640,
          "horse": {
            "id": 779585,
            "name": "Bicc's Tobee",
            "age": 4,
            "sex": "gelding",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 7
              }
            },
            "trainer": {
              "id": 566962,
              "firstName": "Maria",
              "lastName": "Törnqvist",
              "shortName": "Tör Ma",
              "location": "Nossebro",
              "birth": 1988,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Grå, svarta stolpar, axelparti och ärm; sv",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 288,
                    "earnings": 437820000,
                    "placement": {
                      "3": 37,
                      "2": 48,
                      "1": 39
                    },
                    "winPercentage": 1354
                  },
                  "2024": {
                    "starts": 215,
                    "earnings": 601206600,
                    "placement": {
                      "3": 30,
                      "2": 19,
                      "1": 55
                    },
                    "winPercentage": 2558
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 827000,
            "color": "mörkbrun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 758699,
              "name": "Höökboet KB",
              "location": "Länghem"
            },
            "breeder": {
              "id": 179990,
              "name": "Carlsson Carina & Olofsson Conny"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 5,
                  "earnings": 11500000,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 7
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 2
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 8,
                  "earnings": 71200000,
                  "placement": {
                    "3": 1,
                    "2": 0,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 7
                      },
                      "place": 6
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 13,
                "earnings": 82700000,
                "placement": {
                  "3": 2,
                  "2": 0,
                  "1": 8
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 7
                    },
                    "place": 6,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  }
                ],
                "winPercentage": 6153,
                "placePercentage": 7692,
                "earningsPerStart": 6361538,
                "startPoints": 6570
              },
              "lastFiveStarts": {
                "averageOdds": 507
              }
            },
            "pedigree": {
              "father": {
                "id": 734353,
                "name": "Tobin Kronos",
                "nationality": "IT"
              },
              "mother": {
                "id": 675762,
                "name": "Bicc's Honeybee"
              },
              "grandfather": {
                "id": 561266,
                "name": "Thai Tanic",
                "nationality": "NO"
              }
            }
          },
          "driver": {
            "id": 666737,
            "firstName": "Dwight",
            "lastName": "Pieters",
            "shortName": "Pie Dw",
            "location": "Nossebro",
            "birth": 1990,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Mörkblå, vita vinklar; mblå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 472,
                  "earnings": 576980000,
                  "placement": {
                    "3": 54,
                    "2": 69,
                    "1": 50
                  },
                  "winPercentage": 1059
                },
                "2024": {
                  "starts": 211,
                  "earnings": 321845400,
                  "placement": {
                    "3": 26,
                    "2": 18,
                    "1": 34
                  },
                  "winPercentage": 1611
                }
              }
            }
          },
          "result": {
            "place": 1,
            "finishOrder": 1,
            "kmTime": {
              "minutes": 1,
              "seconds": 9,
              "tenths": 6
            },
            "prizeMoney": 110000,
            "finalOdds": 3.86,
            "startNumber": 4
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 386,
              "finalOdds": 386
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 163,
              "maxOdds": 163,
              "odds": 163
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1892,
              "potentialPayout": {
                "value": 4970000
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_11_5",
          "number": 5,
          "postPosition": 5,
          "distance": 1640,
          "horse": {
            "id": 793506,
            "name": "Chanel Trio",
            "nationality": "IT",
            "age": 6,
            "sex": "mare",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 7
              }
            },
            "trainer": {
              "id": 762470,
              "firstName": "Veikko",
              "lastName": "Haapakangas",
              "shortName": "Haa Ve",
              "location": "Fjärås",
              "birth": 2000,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, blå hängs. och sva/silv ärm; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 111,
                    "earnings": 68300000,
                    "placement": {
                      "3": 9,
                      "2": 4,
                      "1": 6
                    },
                    "winPercentage": 540
                  },
                  "2024": {
                    "starts": 258,
                    "earnings": 328975800,
                    "placement": {
                      "3": 21,
                      "2": 25,
                      "1": 34
                    },
                    "winPercentage": 1317
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": true,
                "changed": true
              },
              "back": {
                "hasShoe": true,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 653763,
            "color": "brun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 243490,
              "name": "Denco HB",
              "location": "Kållered"
            },
            "breeder": {
              "id": 723468,
              "name": "Scuderia Trio S.R.L.",
              "location": "Italien"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 14,
                  "earnings": 20580000,
                  "placement": {
                    "3": 2,
                    "2": 3,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 7
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 8,
                  "earnings": 26440000,
                  "placement": {
                    "3": 2,
                    "2": 2,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 1
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 54,
                "earnings": 65376300,
                "placement": {
                  "3": 7,
                  "2": 7,
                  "1": 7
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 7
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 1
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 3
                    },
                    "place": 3,
                    "year": "2024"
                  }
                ],
                "winPercentage": 1296,
                "placePercentage": 3888,
                "earningsPerStart": 1210672,
                "startPoints": 3389
              },
              "lastFiveStarts": {
                "averageOdds": 744
              }
            },
            "pedigree": {
              "father": {
                "id": 739485,
                "name": "Nad Al Sheba",
                "nationality": "IT"
              },
              "mother": {
                "id": 789199,
                "name": "Lory Trio",
                "nationality": "IT"
              },
              "grandfather": {
                "id": 484805,
                "name": "Scarlet Knight",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 578436,
            "firstName": "Linus",
            "lastName": "Lönn",
            "shortName": "Lön Li",
            "location": "Bollnäs",
            "birth": 1999,
            "homeTrack": {
              "id": 12,
              "name": "Bollnäs"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Mörkblå, svart/vitt bröstband; mblå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 145,
                  "earnings": 139640000,
                  "placement": {
                    "3": 14,
                    "2": 11,
                    "1": 12
                  },
                  "winPercentage": 827
                },
                "2024": {
                  "starts": 322,
                  "earnings": 235715000,
                  "placement": {
                    "3": 26,
                    "2": 20,
                    "1": 27
                  },
                  "winPercentage": 838
                }
              }
            }
          },
          "result": {
            "place": 6,
            "finishOrder": 6,
            "kmTime": {
              "minutes": 1,
              "seconds": 10,
              "tenths": 2
            },
            "prizeMoney": 10000,
            "finalOdds": 83.31,
            "startNumber": 5
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 8331
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 1171,
              "maxOdds": 1171
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 60,
              "potentialPayout": {
                "value": 463256800
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900671557043",
              "timestamp": "2024-09-21T17:21:24"
            },
            {
              "mediaId": "1900672581188",
              "timestamp": "2024-09-21T17:31:40"
            },
            {
              "mediaId": "1900675141400",
              "timestamp": "2024-09-21T17:45:15"
            }
          ]
        },
        {
          "id": "2024-09-21_15_11_6",
          "number": 6,
          "postPosition": 6,
          "distance": 1640,
          "horse": {
            "id": 773856,
            "name": "Chimi",
            "age": 5,
            "sex": "stallion",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 8
              }
            },
            "trainer": {
              "id": 161607,
              "firstName": "Björn",
              "lastName": "Goop",
              "shortName": "Goo Bj",
              "location": "Karlstad",
              "birth": 1976,
              "homeTrack": {
                "id": 15,
                "name": "Färjestad"
              },
              "license": "A-tränare: (Sv/utland): träna, köra",
              "silks": "Mblå, guldf.midjeband, sömmar; guld",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 1115,
                    "earnings": 2449819200,
                    "placement": {
                      "3": 116,
                      "2": 126,
                      "1": 159
                    },
                    "winPercentage": 1426
                  },
                  "2024": {
                    "starts": 635,
                    "earnings": 1251650300,
                    "placement": {
                      "3": 78,
                      "2": 86,
                      "1": 94
                    },
                    "winPercentage": 1480
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 769000,
            "color": "ljusbrun",
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "owner": {
              "id": 830698,
              "name": "Emanér AB & La Cala AB"
            },
            "breeder": {
              "id": 462401,
              "name": "Goop Annika",
              "location": "Kil"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 16,
                  "earnings": 41650000,
                  "placement": {
                    "3": 0,
                    "2": 5,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 2
                      },
                      "place": 6
                    }
                  ]
                },
                "2024": {
                  "starts": 4,
                  "earnings": 29500000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 8
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 22,
                "earnings": 76900000,
                "placement": {
                  "3": 1,
                  "2": 5,
                  "1": 10
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 8
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 1
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 6
                    },
                    "place": 1,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 2
                    },
                    "place": 6,
                    "year": "2023"
                  }
                ],
                "winPercentage": 4545,
                "placePercentage": 7272,
                "earningsPerStart": 3495454,
                "startPoints": 4850
              },
              "lastFiveStarts": {
                "averageOdds": 598
              }
            },
            "pedigree": {
              "father": {
                "id": 741746,
                "name": "Bold Eagle",
                "nationality": "FR"
              },
              "mother": {
                "id": 522955,
                "name": "Face for Ever"
              },
              "grandfather": {
                "id": 202234,
                "name": "Viking Kronos",
                "nationality": "IT"
              }
            }
          },
          "driver": {
            "id": 161607,
            "firstName": "Björn",
            "lastName": "Goop",
            "shortName": "Goo Bj",
            "location": "Karlstad",
            "birth": 1976,
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "license": "A-tränare: (Sv/utland): träna, köra",
            "silks": "Mblå, guldf.midjeband, sömmar; guld",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1240,
                  "earnings": 3961444800,
                  "placement": {
                    "3": 131,
                    "2": 145,
                    "1": 204
                  },
                  "winPercentage": 1645
                },
                "2024": {
                  "starts": 846,
                  "earnings": 2704607700,
                  "placement": {
                    "3": 103,
                    "2": 102,
                    "1": 124
                  },
                  "winPercentage": 1465
                }
              }
            }
          },
          "result": {
            "place": 2,
            "finishOrder": 2,
            "kmTime": {
              "minutes": 1,
              "seconds": 10,
              "tenths": 1
            },
            "prizeMoney": 55000,
            "finalOdds": 9.72,
            "startNumber": 6
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 972
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 289,
              "maxOdds": 289,
              "odds": 289
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1317,
              "potentialPayout": {
                "value": 12225100
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900670533147",
              "timestamp": "2024-09-21T17:22:34"
            }
          ]
        },
        {
          "id": "2024-09-21_15_11_7",
          "number": 7,
          "postPosition": 7,
          "distance": 1640,
          "horse": {
            "id": 765482,
            "name": "Mellby Jail",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 0
              }
            },
            "trainer": {
              "id": 9921,
              "firstName": "Timo",
              "lastName": "Nurmos",
              "shortName": "Nur Ti",
              "location": "Tullinge",
              "birth": 1959,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "A-tränare kat2: träna, köra",
              "silks": "Grå, mblå axelparti,mblå/grå ärm; mblå",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 429,
                    "earnings": 2900319900,
                    "placement": {
                      "3": 39,
                      "2": 68,
                      "1": 145
                    },
                    "winPercentage": 3379
                  },
                  "2024": {
                    "starts": 212,
                    "earnings": 1239650000,
                    "placement": {
                      "3": 17,
                      "2": 33,
                      "1": 70
                    },
                    "winPercentage": 3301
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 614500,
            "color": "brun",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 212799,
              "name": "Mellby Gård AB",
              "location": "Malmö"
            },
            "breeder": {
              "id": 212799,
              "name": "Mellby Gård AB",
              "location": "Malmö"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 3,
                  "earnings": 12200000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 3
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 15,
                        "tenths": 2
                      },
                      "place": 2
                    }
                  ]
                },
                "2024": {
                  "starts": 5,
                  "earnings": 39450000,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 0
                      },
                      "place": 0
                    }
                  ]
                }
              },
              "life": {
                "starts": 12,
                "earnings": 61450000,
                "placement": {
                  "3": 3,
                  "2": 2,
                  "1": 5
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 0
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 4
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 2
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2023"
                  }
                ],
                "winPercentage": 4166,
                "placePercentage": 8333,
                "earningsPerStart": 5120833,
                "startPoints": 5045
              },
              "lastFiveStarts": {
                "averageOdds": 332
              }
            },
            "pedigree": {
              "father": {
                "id": 721257,
                "name": "Readly Express"
              },
              "mother": {
                "id": 742250,
                "name": "New Sheriff'n Town",
                "nationality": "US"
              },
              "grandfather": {
                "id": 501073,
                "name": "Credit Winner",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 740606,
            "firstName": "Magnus A",
            "lastName": "Djuse",
            "shortName": "Dju MA",
            "location": "Upplands Väsby",
            "birth": 2000,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "Körlicens kategori 1: köra",
            "silks": "Gul,blå/vit randig, blå ärmb; blå",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1501,
                  "earnings": 4916246500,
                  "placement": {
                    "3": 170,
                    "2": 213,
                    "1": 279
                  },
                  "winPercentage": 1858
                },
                "2024": {
                  "starts": 1163,
                  "earnings": 3358662500,
                  "placement": {
                    "3": 112,
                    "2": 150,
                    "1": 223
                  },
                  "winPercentage": 1917
                }
              }
            }
          },
          "result": {
            "finishOrder": 40,
            "kmTime": {
              "code": "u"
            },
            "galloped": true,
            "disqualified": true,
            "prizeMoney": 2500,
            "finalOdds": 13.36,
            "startNumber": 7
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 1336
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 334,
              "maxOdds": 334
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 609,
              "potentialPayout": {
                "value": 26948200
              }
            }
          },
          "out": true
        },
        {
          "id": "2024-09-21_15_11_8",
          "number": 8,
          "postPosition": 8,
          "distance": 1640,
          "horse": {
            "id": 789446,
            "name": "D'Apper",
            "nationality": "US",
            "age": 4,
            "sex": "stallion",
            "record": {
              "code": "aaK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 9,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 185518,
              "firstName": "Daniel",
              "lastName": "Redén",
              "shortName": "Red Da",
              "location": "Örsundsbro",
              "birth": 1979,
              "homeTrack": {
                "id": 5,
                "name": "Solvalla"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Brun, sv axelp och vita hängsl; svart",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 513,
                    "earnings": 3369779100,
                    "placement": {
                      "3": 61,
                      "2": 72,
                      "1": 147
                    },
                    "winPercentage": 2865
                  },
                  "2024": {
                    "starts": 528,
                    "earnings": 3436221200,
                    "placement": {
                      "3": 59,
                      "2": 86,
                      "1": 141
                    },
                    "winPercentage": 2670
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "VA",
                "text": "Vanlig",
                "engText": "Standard",
                "changed": false
              },
              "colour": {
                "code": "GU",
                "text": "Gul",
                "engText": "Yellow",
                "changed": false
              }
            },
            "money": 845472,
            "color": "brun",
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "owner": {
              "id": 843569,
              "name": "Brixton Medical AB",
              "location": "(Redén Daniel)"
            },
            "breeder": {
              "id": 837701,
              "name": "Stewart Steve H"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 11,
                  "earnings": 29843300,
                  "placement": {
                    "3": 2,
                    "2": 0,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aaK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 9,
                        "tenths": 9
                      },
                      "place": 3
                    }
                  ]
                },
                "2024": {
                  "starts": 7,
                  "earnings": 28900000,
                  "placement": {
                    "3": 0,
                    "2": 0,
                    "1": 3
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 0
                      },
                      "place": 1
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 1
                    }
                  ]
                }
              },
              "life": {
                "starts": 22,
                "earnings": 84547200,
                "placement": {
                  "3": 2,
                  "2": 0,
                  "1": 8
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 9
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 6
                    },
                    "place": 6,
                    "year": "2024"
                  },
                  {
                    "code": "aaK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 9,
                      "tenths": 9
                    },
                    "place": 3,
                    "year": "2023"
                  }
                ],
                "winPercentage": 3636,
                "placePercentage": 4545,
                "earningsPerStart": 3843054,
                "startPoints": 3375
              },
              "lastFiveStarts": {
                "averageOdds": 738
              }
            },
            "pedigree": {
              "father": {
                "id": 762068,
                "name": "Walner",
                "nationality": "CA"
              },
              "mother": {
                "id": 701516,
                "name": "D'One"
              },
              "grandfather": {
                "id": 635179,
                "name": "Donato Hanover",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 125542,
            "firstName": "Erik",
            "lastName": "Adielsson",
            "shortName": "Adi Er",
            "location": "Upplands Väsby",
            "birth": 1974,
            "homeTrack": {
              "id": 5,
              "name": "Solvalla"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Blå, vita ärmbindlar; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 530,
                  "earnings": 2095922500,
                  "placement": {
                    "3": 54,
                    "2": 50,
                    "1": 58
                  },
                  "winPercentage": 1094
                },
                "2024": {
                  "starts": 422,
                  "earnings": 1496106300,
                  "placement": {
                    "3": 54,
                    "2": 30,
                    "1": 42
                  },
                  "winPercentage": 995
                }
              }
            }
          },
          "result": {
            "finishOrder": 39,
            "kmTime": {
              "code": "u"
            },
            "galloped": true,
            "disqualified": true,
            "prizeMoney": 2500,
            "finalOdds": 6.13,
            "startNumber": 8
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 613
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 213,
              "maxOdds": 213
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 1168,
              "potentialPayout": {
                "value": 6866600
              }
            }
          },
          "out": true
        },
        {
          "id": "2024-09-21_15_11_9",
          "number": 9,
          "postPosition": 9,
          "distance": 1640,
          "horse": {
            "id": 776080,
            "name": "Orlando Young",
            "nationality": "NO",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "aM",
              "startMethod": "auto",
              "distance": "medium",
              "time": {
                "minutes": 1,
                "seconds": 12,
                "tenths": 0
              }
            },
            "trainer": {
              "id": 143661,
              "firstName": "Geir Vegard",
              "lastName": "Gundersen",
              "shortName": "Gun GV",
              "location": "Norge",
              "birth": 1975,
              "license": "A-tränare (utland): träna, köra",
              "silks": "Svart, röd/vita detaljer; svart"
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false
              },
              "back": {
                "hasShoe": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 888549,
            "color": "brun",
            "owner": {
              "id": 226009,
              "name": "Gundersen Magnus T & Skage B",
              "location": "Norge"
            },
            "breeder": {
              "id": 701964,
              "name": "Runden Per K.",
              "location": "Norge"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 13,
                  "earnings": 37634500,
                  "placement": {
                    "3": 1,
                    "2": 4,
                    "1": 5
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 0
                      },
                      "place": 2
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 6
                      },
                      "place": 1
                    }
                  ]
                },
                "2024": {
                  "starts": 5,
                  "earnings": 25806700,
                  "placement": {
                    "3": 1,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 5
                      },
                      "place": 1
                    },
                    {
                      "code": "L",
                      "startMethod": "volte",
                      "distance": "long",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 4
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 27,
                "earnings": 88854900,
                "placement": {
                  "3": 2,
                  "2": 8,
                  "1": 10
                },
                "records": [
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 4
                    },
                    "place": 6,
                    "year": "2024"
                  }
                ],
                "winPercentage": 3703,
                "placePercentage": 7407,
                "earningsPerStart": 3290922,
                "startPoints": 3329
              },
              "lastFiveStarts": {
                "averageOdds": 1635
              }
            },
            "pedigree": {
              "father": {
                "id": 617124,
                "name": "Orlando Vici",
                "nationality": "FR"
              },
              "mother": {
                "id": 710883,
                "name": "Miss Young",
                "nationality": "NO"
              },
              "grandfather": {
                "id": 572882,
                "name": "Mr Commissioner",
                "nationality": "US"
              }
            },
            "foreignOwned": true
          },
          "driver": {
            "id": 722458,
            "firstName": "Magnus Teien",
            "lastName": "Gundersen",
            "shortName": "Gun MT",
            "location": "Norge",
            "birth": 1996,
            "license": "Körlicens, utländsk",
            "silks": "Mörkblå, vit/röd sömmar; mblå"
          },
          "result": {
            "place": 3,
            "finishOrder": 3,
            "kmTime": {
              "minutes": 1,
              "seconds": 10,
              "tenths": 1
            },
            "prizeMoney": 32000,
            "finalOdds": 25.1,
            "startNumber": 9
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 2510
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 447,
              "maxOdds": 447,
              "odds": 447
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 225,
              "potentialPayout": {
                "value": 83150500
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900668485470",
              "timestamp": "2024-09-21T17:23:29"
            },
            {
              "mediaId": "1900673093400",
              "timestamp": "2024-09-21T17:34:21"
            }
          ]
        },
        {
          "id": "2024-09-21_15_11_10",
          "number": 10,
          "postPosition": 10,
          "distance": 1640,
          "horse": {
            "id": 775479,
            "name": "Spartakus",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 10,
                "tenths": 4
              }
            },
            "trainer": {
              "id": 588181,
              "firstName": "Christoffer",
              "lastName": "Eriksson",
              "shortName": "Eri Ch",
              "location": "Sjöbo",
              "birth": 1987,
              "homeTrack": {
                "id": 6,
                "name": "Åby"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, blå/vitt axelsk, ärmbindel; vit",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 348,
                    "earnings": 853871600,
                    "placement": {
                      "3": 35,
                      "2": 45,
                      "1": 52
                    },
                    "winPercentage": 1494
                  },
                  "2024": {
                    "starts": 327,
                    "earnings": 574364500,
                    "placement": {
                      "3": 34,
                      "2": 46,
                      "1": 45
                    },
                    "winPercentage": 1376
                  }
                }
              }
            },
            "shoes": {
              "reported": true,
              "front": {
                "hasShoe": false,
                "changed": false
              },
              "back": {
                "hasShoe": false,
                "changed": false
              }
            },
            "sulky": {
              "reported": true,
              "type": {
                "code": "AM",
                "text": "Amerikansk",
                "engText": "American",
                "changed": false
              },
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 833202,
            "color": "brun",
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "owner": {
              "id": 842891,
              "name": "Leksaksjätten I Sverige AB"
            },
            "breeder": {
              "id": 731160,
              "name": "Bruland Stein Inge",
              "location": "Schweiz"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 9,
                  "earnings": 16700000,
                  "placement": {
                    "3": 0,
                    "2": 2,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 1
                      },
                      "place": 2
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 14,
                        "tenths": 9
                      },
                      "place": 0
                    }
                  ]
                },
                "2024": {
                  "starts": 13,
                  "earnings": 53170200,
                  "placement": {
                    "3": 0,
                    "2": 4,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 10,
                        "tenths": 4
                      },
                      "place": 0
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 4
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 29,
                "earnings": 83320200,
                "placement": {
                  "3": 0,
                  "2": 6,
                  "1": 7
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 10,
                      "tenths": 4
                    },
                    "place": 0,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 4
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 2
                    },
                    "place": 2,
                    "year": "2024"
                  }
                ],
                "winPercentage": 2413,
                "placePercentage": 4482,
                "earningsPerStart": 2873110,
                "startPoints": 3775
              },
              "lastFiveStarts": {
                "averageOdds": 1301
              }
            },
            "pedigree": {
              "father": {
                "id": 748142,
                "name": "Father Patrick",
                "nationality": "US"
              },
              "mother": {
                "id": 654691,
                "name": "Je T'aime Lane"
              },
              "grandfather": {
                "id": 198885,
                "name": "Lindy Lane",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 588181,
            "firstName": "Christoffer",
            "lastName": "Eriksson",
            "shortName": "Eri Ch",
            "location": "Sjöbo",
            "birth": 1987,
            "homeTrack": {
              "id": 6,
              "name": "Åby"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, blå/vitt axelsk, ärmbindel; vit",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 294,
                  "earnings": 467382200,
                  "placement": {
                    "3": 30,
                    "2": 37,
                    "1": 34
                  },
                  "winPercentage": 1156
                },
                "2024": {
                  "starts": 165,
                  "earnings": 209490000,
                  "placement": {
                    "3": 17,
                    "2": 27,
                    "1": 11
                  },
                  "winPercentage": 666
                }
              }
            }
          },
          "result": {
            "place": 4,
            "finishOrder": 4,
            "kmTime": {
              "minutes": 1,
              "seconds": 10,
              "tenths": 1
            },
            "prizeMoney": 19000,
            "finalOdds": 25.41,
            "startNumber": 10
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 2541
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 479,
              "maxOdds": 479
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 135,
              "potentialPayout": {
                "value": 65356700
              }
            }
          },
          "videos": [
            {
              "mediaId": "1900680261164",
              "timestamp": "2024-09-21T17:47:34"
            },
            {
              "mediaId": "1900685893225",
              "timestamp": "2024-09-21T17:57:44"
            }
          ]
        },
        {
          "id": "2024-09-21_15_11_11",
          "number": 11,
          "scratched": true,
          "postPosition": 11,
          "distance": 1640,
          "horse": {
            "id": 773530,
            "name": "Peter Pan",
            "age": 5,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 9
              }
            },
            "trainer": {
              "id": 161607,
              "firstName": "Björn",
              "lastName": "Goop",
              "shortName": "Goo Bj",
              "location": "Karlstad",
              "birth": 1976,
              "homeTrack": {
                "id": 15,
                "name": "Färjestad"
              },
              "license": "A-tränare: (Sv/utland): träna, köra",
              "silks": "Mblå, guldf.midjeband, sömmar; guld",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 1115,
                    "earnings": 2449819200,
                    "placement": {
                      "3": 116,
                      "2": 126,
                      "1": 159
                    },
                    "winPercentage": 1426
                  },
                  "2024": {
                    "starts": 635,
                    "earnings": 1251650300,
                    "placement": {
                      "3": 78,
                      "2": 86,
                      "1": 94
                    },
                    "winPercentage": 1480
                  }
                }
              }
            },
            "shoes": {
              "reported": false
            },
            "sulky": {
              "reported": false,
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 599500,
            "color": "brun",
            "homeTrack": {
              "id": 15,
              "name": "Färjestad"
            },
            "owner": {
              "id": 798920,
              "name": "RYKA Invest AB"
            },
            "breeder": {
              "id": 782914,
              "name": "Conradsson Ove",
              "location": "Petmax AB&Karlander O"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 12,
                  "earnings": 27750000,
                  "placement": {
                    "3": 3,
                    "2": 1,
                    "1": 1
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 9
                      },
                      "place": 3
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 7
                      },
                      "place": 6
                    }
                  ]
                },
                "2024": {
                  "starts": 6,
                  "earnings": 20950000,
                  "placement": {
                    "3": 2,
                    "2": 0,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 2
                      },
                      "place": 3
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 0
                      },
                      "place": 3
                    }
                  ]
                }
              },
              "life": {
                "starts": 21,
                "earnings": 59950000,
                "placement": {
                  "3": 5,
                  "2": 2,
                  "1": 5
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 9
                    },
                    "place": 3,
                    "year": "2023"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 2
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 9
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 0
                    },
                    "place": 3,
                    "year": "2024"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 7
                    },
                    "place": 6,
                    "year": "2023"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 15,
                      "tenths": 3
                    },
                    "place": 5,
                    "year": "2023"
                  }
                ],
                "winPercentage": 2380,
                "placePercentage": 5714,
                "earningsPerStart": 2854761,
                "startPoints": 2920
              },
              "lastFiveStarts": {
                "averageOdds": 1703
              }
            },
            "pedigree": {
              "father": {
                "id": 553396,
                "name": "S.J.'s Caviar",
                "nationality": "US"
              },
              "mother": {
                "id": 646926,
                "name": "Moviestar"
              },
              "grandfather": {
                "id": 484292,
                "name": "Juliano Star",
                "nationality": "FR"
              }
            }
          },
          "driver": {
            "id": 145716,
            "firstName": "Stefan",
            "lastName": "Persson",
            "shortName": "Per St",
            "location": "Halmstad",
            "birth": 1973,
            "homeTrack": {
              "id": 18,
              "name": "Halmstad"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, ljusblå sidor; svart",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 1495,
                  "earnings": 2001121400,
                  "placement": {
                    "3": 159,
                    "2": 156,
                    "1": 197
                  },
                  "winPercentage": 1317
                },
                "2024": {
                  "starts": 969,
                  "earnings": 1289433300,
                  "placement": {
                    "3": 96,
                    "2": 122,
                    "1": 123
                  },
                  "winPercentage": 1269
                }
              }
            }
          },
          "result": {
            "finishOrder": 61,
            "finalOdds": 0.0,
            "startNumber": 11
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 0
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 0,
              "maxOdds": 0
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 3,
              "potentialPayout": {
                "jackpot": true
              }
            }
          }
        },
        {
          "id": "2024-09-21_15_11_12",
          "number": 12,
          "scratched": true,
          "postPosition": 12,
          "distance": 1640,
          "horse": {
            "id": 768255,
            "name": "Swish the Cash",
            "age": 6,
            "sex": "gelding",
            "record": {
              "code": "aK",
              "startMethod": "auto",
              "distance": "short",
              "time": {
                "minutes": 1,
                "seconds": 11,
                "tenths": 6
              }
            },
            "trainer": {
              "id": 171504,
              "firstName": "Adrian",
              "lastName": "Kolgjini",
              "shortName": "Kol Ad",
              "location": "Veberöd",
              "birth": 1993,
              "homeTrack": {
                "id": 7,
                "name": "Jägersro"
              },
              "license": "A-tränare: träna, köra",
              "silks": "Svart, vinrött/vitt axelsk, ärmb; sv",
              "statistics": {
                "years": {
                  "2023": {
                    "starts": 515,
                    "earnings": 1485227700,
                    "placement": {
                      "3": 54,
                      "2": 64,
                      "1": 74
                    },
                    "winPercentage": 1436
                  },
                  "2024": {
                    "starts": 430,
                    "earnings": 995466300,
                    "placement": {
                      "3": 37,
                      "2": 41,
                      "1": 64
                    },
                    "winPercentage": 1488
                  }
                }
              }
            },
            "shoes": {
              "reported": false
            },
            "sulky": {
              "reported": false,
              "colour": {
                "code": "BL",
                "text": "Blå",
                "engText": "Blue",
                "changed": false
              }
            },
            "money": 872000,
            "color": "brun",
            "homeTrack": {
              "id": 7,
              "name": "Jägersro"
            },
            "owner": {
              "id": 841724,
              "name": "Vallro AB",
              "location": "Classic Goal AB&Bernerup N-O"
            },
            "breeder": {
              "id": 237107,
              "name": "Stall Escapade AB",
              "location": "Norrtälje"
            },
            "statistics": {
              "years": {
                "2023": {
                  "starts": 11,
                  "earnings": 21650000,
                  "placement": {
                    "3": 1,
                    "2": 2,
                    "1": 2
                  },
                  "records": [
                    {
                      "code": "aM",
                      "startMethod": "auto",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 8
                      },
                      "place": 1
                    },
                    {
                      "code": "K",
                      "startMethod": "volte",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 12,
                        "tenths": 9
                      },
                      "place": 6
                    }
                  ]
                },
                "2024": {
                  "starts": 10,
                  "earnings": 41000000,
                  "placement": {
                    "3": 0,
                    "2": 1,
                    "1": 4
                  },
                  "records": [
                    {
                      "code": "aK",
                      "startMethod": "auto",
                      "distance": "short",
                      "time": {
                        "minutes": 1,
                        "seconds": 11,
                        "tenths": 6
                      },
                      "place": 1
                    },
                    {
                      "code": "M",
                      "startMethod": "volte",
                      "distance": "medium",
                      "time": {
                        "minutes": 1,
                        "seconds": 13,
                        "tenths": 4
                      },
                      "place": 2
                    }
                  ]
                }
              },
              "life": {
                "starts": 32,
                "earnings": 87200000,
                "placement": {
                  "3": 2,
                  "2": 4,
                  "1": 9
                },
                "records": [
                  {
                    "code": "aK",
                    "startMethod": "auto",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 11,
                      "tenths": 6
                    },
                    "place": 1,
                    "year": "2024"
                  },
                  {
                    "code": "aM",
                    "startMethod": "auto",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 0
                    },
                    "place": 6,
                    "year": "2024"
                  },
                  {
                    "code": "aL",
                    "startMethod": "auto",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 9
                    },
                    "place": 2,
                    "year": "2023"
                  },
                  {
                    "code": "K",
                    "startMethod": "volte",
                    "distance": "short",
                    "time": {
                      "minutes": 1,
                      "seconds": 12,
                      "tenths": 9
                    },
                    "place": 6,
                    "year": "2023"
                  },
                  {
                    "code": "M",
                    "startMethod": "volte",
                    "distance": "medium",
                    "time": {
                      "minutes": 1,
                      "seconds": 13,
                      "tenths": 4
                    },
                    "place": 2,
                    "year": "2024"
                  },
                  {
                    "code": "L",
                    "startMethod": "volte",
                    "distance": "long",
                    "time": {
                      "minutes": 1,
                      "seconds": 14,
                      "tenths": 7
                    },
                    "place": 2,
                    "year": "2023"
                  }
                ],
                "winPercentage": 2812,
                "placePercentage": 4687,
                "earningsPerStart": 2725000,
                "startPoints": 3025
              },
              "lastFiveStarts": {
                "averageOdds": 895
              }
            },
            "pedigree": {
              "father": {
                "id": 667295,
                "name": "Ready Cash",
                "nationality": "FR"
              },
              "mother": {
                "id": 634358,
                "name": "Aisle Stand"
              },
              "grandfather": {
                "id": 484805,
                "name": "Scarlet Knight",
                "nationality": "US"
              }
            }
          },
          "driver": {
            "id": 171504,
            "firstName": "Adrian",
            "lastName": "Kolgjini",
            "shortName": "Kol Ad",
            "location": "Veberöd",
            "birth": 1993,
            "homeTrack": {
              "id": 7,
              "name": "Jägersro"
            },
            "license": "A-tränare: träna, köra",
            "silks": "Svart, vinrött/vitt axelsk, ärmb; sv",
            "statistics": {
              "years": {
                "2023": {
                  "starts": 446,
                  "earnings": 1358160800,
                  "placement": {
                    "3": 46,
                    "2": 55,
                    "1": 73
                  },
                  "winPercentage": 1636
                },
                "2024": {
                  "starts": 354,
                  "earnings": 748676300,
                  "placement": {
                    "3": 30,
                    "2": 35,
                    "1": 66
                  },
                  "winPercentage": 1864
                }
              }
            }
          },
          "result": {
            "finishOrder": 62,
            "finalOdds": 0.0,
            "startNumber": 12
          },
          "pools": {
            "vinnare": {
              "@type": ".VinnareStartPool",
              "odds": 0
            },
            "plats": {
              "@type": ".PlatsStartPool",
              "minOdds": 0,
              "maxOdds": 0
            },
            "V75": {
              "@type": ".MarkingBetStartPool",
              "betDistribution": 52,
              "potentialPayout": {
                "jackpot": true
              }
            }
          }
        }
      ],
      "mergedPools": [
        {
          "name": "A",
          "betTypes": ["vinnare", "plats", "komb", "tvilling", "trio"]
        }
      ]
    }
  ],
  "currentVersion": 1727341470178,
  "newBettingSystem": true,
  "type": "V75"
}
