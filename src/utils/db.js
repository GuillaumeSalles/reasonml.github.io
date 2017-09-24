// Generated by BUCKLESCRIPT VERSION 1.9.2, PLEASE EDIT WITH CARE
'use strict';

var List        = require("bs-platform/lib/js/list");
var $$String    = require("bs-platform/lib/js/string");
var Caml_obj    = require("bs-platform/lib/js/caml_obj");
var Caml_float  = require("bs-platform/lib/js/caml_float");
var Caml_int32  = require("bs-platform/lib/js/caml_int32");
var Pervasives  = require("bs-platform/lib/js/pervasives");
var Caml_format = require("bs-platform/lib/js/caml_format");
var Caml_string = require("bs-platform/lib/js/caml_string");

var f0_001 = /* :: */[
  /* tuple */[
    (function (prim) {
        return -prim | 0;
      }),
    "(~-)"
  ],
  /* :: */[
    /* tuple */[
      (function (prim) {
          return prim;
        }),
      "(~+)"
    ],
    /* :: */[
      /* tuple */[
        (function (prim) {
            return prim + 1 | 0;
          }),
        "succ"
      ],
      /* :: */[
        /* tuple */[
          (function (prim) {
              return prim - 1 | 0;
            }),
          "pred"
        ],
        /* :: */[
          /* tuple */[
            Pervasives.abs,
            "abs"
          ],
          /* :: */[
            /* tuple */[
              Pervasives.lnot,
              "lnot"
            ],
            /* [] */0
          ]
        ]
      ]
    ]
  ]
];

var f0 = /* tuple */[
  "int -> int",
  f0_001
];

var f1_001 = /* :: */[
  /* tuple */[
    (function (prim) {
        return -prim;
      }),
    "(~-.)"
  ],
  /* :: */[
    /* tuple */[
      (function (prim) {
          return prim;
        }),
      "(~+.)"
    ],
    /* :: */[
      /* tuple */[
        (function (prim) {
            return Math.sqrt(prim);
          }),
        "sqrt"
      ],
      /* :: */[
        /* tuple */[
          (function (prim) {
              return Math.exp(prim);
            }),
          "exp"
        ],
        /* :: */[
          /* tuple */[
            (function (prim) {
                return Math.log(prim);
              }),
            "log"
          ],
          /* :: */[
            /* tuple */[
              (function (prim) {
                  return Math.log10(prim);
                }),
              "log10"
            ],
            /* :: */[
              /* tuple */[
                Caml_float.caml_expm1_float,
                "expm1"
              ],
              /* :: */[
                /* tuple */[
                  (function (prim) {
                      return Math.cos(prim);
                    }),
                  "cos"
                ],
                /* :: */[
                  /* tuple */[
                    (function (prim) {
                        return Math.sin(prim);
                      }),
                    "sin"
                  ],
                  /* :: */[
                    /* tuple */[
                      (function (prim) {
                          return Math.tan(prim);
                        }),
                      "tan"
                    ],
                    /* :: */[
                      /* tuple */[
                        (function (prim) {
                            return Math.acos(prim);
                          }),
                        "acos"
                      ],
                      /* :: */[
                        /* tuple */[
                          (function (prim) {
                              return Math.asin(prim);
                            }),
                          "asin"
                        ],
                        /* :: */[
                          /* tuple */[
                            (function (prim) {
                                return Math.atan(prim);
                              }),
                            "atan"
                          ],
                          /* :: */[
                            /* tuple */[
                              (function (prim) {
                                  return Math.cosh(prim);
                                }),
                              "cosh"
                            ],
                            /* :: */[
                              /* tuple */[
                                (function (prim) {
                                    return Math.sinh(prim);
                                  }),
                                "sinh"
                              ],
                              /* :: */[
                                /* tuple */[
                                  (function (prim) {
                                      return Math.tanh(prim);
                                    }),
                                  "tanh"
                                ],
                                /* :: */[
                                  /* tuple */[
                                    (function (prim) {
                                        return Math.ceil(prim);
                                      }),
                                    "ceil"
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      (function (prim) {
                                          return Math.floor(prim);
                                        }),
                                      "floor"
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        (function (prim) {
                                            return Math.abs(prim);
                                          }),
                                        "abs_float"
                                      ],
                                      /* [] */0
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var f1 = /* tuple */[
  "float -> float",
  f1_001
];

var f2_001 = /* :: */[
  /* tuple */[
    (function (prim, prim$1) {
        return prim + prim$1 | 0;
      }),
    "(+)"
  ],
  /* :: */[
    /* tuple */[
      (function (prim, prim$1) {
          return prim - prim$1 | 0;
        }),
      "(-)"
    ],
    /* :: */[
      /* tuple */[
        Caml_int32.imul,
        "(*)"
      ],
      /* :: */[
        /* tuple */[
          Caml_int32.div,
          "(/)"
        ],
        /* :: */[
          /* tuple */[
            Caml_int32.mod_,
            "(mod)"
          ],
          /* :: */[
            /* tuple */[
              (function (prim, prim$1) {
                  return prim & prim$1;
                }),
              "(land)"
            ],
            /* :: */[
              /* tuple */[
                (function (prim, prim$1) {
                    return prim | prim$1;
                  }),
                "(lor)"
              ],
              /* :: */[
                /* tuple */[
                  (function (prim, prim$1) {
                      return prim ^ prim$1;
                    }),
                  "(lxor)"
                ],
                /* :: */[
                  /* tuple */[
                    (function (prim, prim$1) {
                        return (prim << prim$1);
                      }),
                    "(lsl)"
                  ],
                  /* :: */[
                    /* tuple */[
                      (function (prim, prim$1) {
                          return (prim >>> prim$1) | 0;
                        }),
                      "(lsr)"
                    ],
                    /* :: */[
                      /* tuple */[
                        (function (prim, prim$1) {
                            return (prim >> prim$1);
                          }),
                        "(asr)"
                      ],
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var f2 = /* tuple */[
  "int -> int -> int",
  f2_001
];

var f3_001 = /* :: */[
  /* tuple */[
    (function (prim, prim$1) {
        return prim + prim$1;
      }),
    "(+.)"
  ],
  /* :: */[
    /* tuple */[
      (function (prim, prim$1) {
          return prim - prim$1;
        }),
      "(-.)"
    ],
    /* :: */[
      /* tuple */[
        (function (prim, prim$1) {
            return prim * prim$1;
          }),
        "(*.)"
      ],
      /* :: */[
        /* tuple */[
          (function (prim, prim$1) {
              return prim / prim$1;
            }),
          "(/.)"
        ],
        /* :: */[
          /* tuple */[
            (function (prim, prim$1) {
                return Math.pow(prim, prim$1);
              }),
            "(**)"
          ],
          /* :: */[
            /* tuple */[
              (function (prim, prim$1) {
                  return Math.atan2(prim, prim$1);
                }),
              "atan2"
            ],
            /* :: */[
              /* tuple */[
                Caml_float.caml_hypot_float,
                "hypot"
              ],
              /* :: */[
                /* tuple */[
                  Caml_float.caml_copysign_float,
                  "copysign"
                ],
                /* :: */[
                  /* tuple */[
                    (function (prim, prim$1) {
                        return prim % prim$1;
                      }),
                    "mod_float"
                  ],
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var f3 = /* tuple */[
  "float -> float -> float",
  f3_001
];

var f4_001 = /* :: */[
  /* tuple */[
    Caml_string.get,
    "String.get"
  ],
  /* [] */0
];

var f4 = /* tuple */[
  "string -> int -> char",
  f4_001
];

var f5_001 = /* :: */[
  /* tuple */[
    $$String.make,
    "String.make"
  ],
  /* [] */0
];

var f5 = /* tuple */[
  "int -> char -> string",
  f5_001
];

var f6_001 = /* :: */[
  /* tuple */[
    $$String.init,
    "String.init"
  ],
  /* [] */0
];

var f6 = /* tuple */[
  "int -> (int -> char) -> string",
  f6_001
];

var f7_001 = /* :: */[
  /* tuple */[
    $$String.sub,
    "String.sub"
  ],
  /* [] */0
];

var f7 = /* tuple */[
  "string -> int -> int -> string",
  f7_001
];

var f8_001 = /* :: */[
  /* tuple */[
    $$String.mapi,
    "String.mapi"
  ],
  /* [] */0
];

var f8 = /* tuple */[
  "(int -> char -> char) -> string -> string",
  f8_001
];

var f9_001 = /* :: */[
  /* tuple */[
    $$String.map,
    "String.map"
  ],
  /* [] */0
];

var f9 = /* tuple */[
  "(char -> char) -> string -> string",
  f9_001
];

var f10_001 = /* :: */[
  /* tuple */[
    $$String.trim,
    "String.trim"
  ],
  /* :: */[
    /* tuple */[
      $$String.escaped,
      "String.escaped"
    ],
    /* :: */[
      /* tuple */[
        $$String.uppercase,
        "String.uppercase"
      ],
      /* :: */[
        /* tuple */[
          $$String.lowercase,
          "String.lowercase"
        ],
        /* :: */[
          /* tuple */[
            $$String.capitalize,
            "String.capitalize"
          ],
          /* :: */[
            /* tuple */[
              $$String.uncapitalize,
              "String.uncapitalize"
            ],
            /* [] */0
          ]
        ]
      ]
    ]
  ]
];

var f10 = /* tuple */[
  "string -> string",
  f10_001
];

var f11_001 = /* :: */[
  /* tuple */[
    $$String.index,
    "String.index"
  ],
  /* :: */[
    /* tuple */[
      $$String.rindex,
      "String.rindex"
    ],
    /* [] */0
  ]
];

var f11 = /* tuple */[
  "string -> char -> int",
  f11_001
];

var f12_001 = /* :: */[
  /* tuple */[
    $$String.index_from,
    "String.index_from"
  ],
  /* :: */[
    /* tuple */[
      $$String.rindex_from,
      "String.rindex_from"
    ],
    /* [] */0
  ]
];

var f12 = /* tuple */[
  "string -> int -> char -> int",
  f12_001
];

var f13_001 = /* :: */[
  /* tuple */[
    $$String.contains,
    "String.contains"
  ],
  /* [] */0
];

var f13 = /* tuple */[
  "string -> char -> bool",
  f13_001
];

var f14_001 = /* :: */[
  /* tuple */[
    $$String.contains_from,
    "String.contains_from"
  ],
  /* :: */[
    /* tuple */[
      $$String.rcontains_from,
      "String.rcontains_from"
    ],
    /* [] */0
  ]
];

var f14 = /* tuple */[
  "string -> int -> char -> bool",
  f14_001
];

var f15_001 = /* :: */[
  /* tuple */[
    Pervasives.$caret,
    "(^)"
  ],
  /* [] */0
];

var f15 = /* tuple */[
  "string -> string -> string",
  f15_001
];

var f16_001 = /* :: */[
  /* tuple */[
    Pervasives.string_of_bool,
    "string_of_bool"
  ],
  /* [] */0
];

var f16 = /* tuple */[
  "bool -> string",
  f16_001
];

var f17_001 = /* :: */[
  /* tuple */[
    Pervasives.bool_of_string,
    "bool_of_string"
  ],
  /* [] */0
];

var f17 = /* tuple */[
  "string -> bool",
  f17_001
];

var f18_001 = /* :: */[
  /* tuple */[
    Pervasives.string_of_int,
    "string_of_int"
  ],
  /* [] */0
];

var f18 = /* tuple */[
  "int -> string",
  f18_001
];

var f19_001 = /* :: */[
  /* tuple */[
    Caml_format.caml_int_of_string,
    "int_of_string"
  ],
  /* :: */[
    /* tuple */[
      (function (prim) {
          return prim.length;
        }),
      "String.length"
    ],
    /* [] */0
  ]
];

var f19 = /* tuple */[
  "string -> int",
  f19_001
];

var f20_001 = /* :: */[
  /* tuple */[
    Pervasives.string_of_float,
    "string_of_float"
  ],
  /* [] */0
];

var f20 = /* tuple */[
  "float -> string",
  f20_001
];

var f21_001 = /* :: */[
  /* tuple */[
    Caml_format.caml_float_of_string,
    "float_of_string"
  ],
  /* [] */0
];

var f21 = /* tuple */[
  "string -> float",
  f21_001
];

var f22_001 = /* :: */[
  /* tuple */[
    Caml_obj.caml_equal,
    "(==)"
  ],
  /* [] */0
];

var f22 = /* tuple */[
  "'a -> 'a -> bool",
  f22_001
];

var f23_001 = /* :: */[
  /* tuple */[
    Pervasives.$at,
    "(@)"
  ],
  /* :: */[
    /* tuple */[
      List.append,
      "List.append"
    ],
    /* :: */[
      /* tuple */[
        List.rev_append,
        "List.rev_append"
      ],
      /* [] */0
    ]
  ]
];

var f23 = /* tuple */[
  "'a list -> 'a list -> 'a list",
  f23_001
];

var f24_001 = /* :: */[
  /* tuple */[
    List.length,
    "List.length"
  ],
  /* [] */0
];

var f24 = /* tuple */[
  "'a list -> int",
  f24_001
];

var f25_001 = /* :: */[
  /* tuple */[
    List.hd,
    "List.hd"
  ],
  /* [] */0
];

var f25 = /* tuple */[
  "'a list -> 'a",
  f25_001
];

var f26_001 = /* :: */[
  /* tuple */[
    List.tl,
    "List.tl"
  ],
  /* :: */[
    /* tuple */[
      List.rev,
      "List.rev"
    ],
    /* [] */0
  ]
];

var f26 = /* tuple */[
  "'a list -> 'a list",
  f26_001
];

var f27_001 = /* :: */[
  /* tuple */[
    List.nth,
    "List.nth"
  ],
  /* [] */0
];

var f27 = /* tuple */[
  "'a list -> int -> 'a",
  f27_001
];

var f28_001 = /* :: */[
  /* tuple */[
    List.concat,
    "List.concat"
  ],
  /* :: */[
    /* tuple */[
      List.flatten,
      "List.flatten"
    ],
    /* [] */0
  ]
];

var f28 = /* tuple */[
  "'a list list -> 'a list",
  f28_001
];

var f29_001 = /* :: */[
  /* tuple */[
    List.map,
    "List.map"
  ],
  /* :: */[
    /* tuple */[
      List.rev_map,
      "List.rev_map"
    ],
    /* [] */0
  ]
];

var f29 = /* tuple */[
  "('a -> 'b) -> 'a list -> 'b list",
  f29_001
];

var f30_001 = /* :: */[
  /* tuple */[
    List.mapi,
    "List.mapi"
  ],
  /* [] */0
];

var f30 = /* tuple */[
  "(int -> 'a -> 'b) -> 'a list -> 'b list",
  f30_001
];

var f31_001 = /* :: */[
  /* tuple */[
    List.fold_left,
    "List.fold_left"
  ],
  /* [] */0
];

var f31 = /* tuple */[
  "('a -> 'b -> 'a) -> 'a -> 'b list -> 'a",
  f31_001
];

var f32_001 = /* :: */[
  /* tuple */[
    List.fold_right,
    "List.fold_right"
  ],
  /* [] */0
];

var f32 = /* tuple */[
  "('a -> 'b -> 'b) -> 'a list -> 'b -> 'b",
  f32_001
];

var f33_001 = /* :: */[
  /* tuple */[
    List.map2,
    "List.map2"
  ],
  /* :: */[
    /* tuple */[
      List.rev_map2,
      "List.rev_map2"
    ],
    /* [] */0
  ]
];

var f33 = /* tuple */[
  "('a -> 'b -> 'c) -> 'a list -> 'b list -> 'c list",
  f33_001
];

var f34_001 = /* :: */[
  /* tuple */[
    List.fold_left2,
    "List.fold_left2"
  ],
  /* [] */0
];

var f34 = /* tuple */[
  "('a -> 'b -> 'c -> 'a) -> 'a -> 'b list -> 'c list -> 'a",
  f34_001
];

var f35_001 = /* :: */[
  /* tuple */[
    List.fold_right2,
    "List.fold_right2"
  ],
  /* [] */0
];

var f35 = /* tuple */[
  "('a -> 'b -> 'c -> 'c) -> 'a list -> 'b list -> 'c -> 'c",
  f35_001
];

var f36_001 = /* :: */[
  /* tuple */[
    List.exists,
    "List.exists"
  ],
  /* [] */0
];

var f36 = /* tuple */[
  "('a -> bool) -> 'a list -> bool",
  f36_001
];

var f37_001 = /* :: */[
  /* tuple */[
    List.exists2,
    "List.exists2"
  ],
  /* [] */0
];

var f37 = /* tuple */[
  "('a -> 'b -> bool) -> 'a list -> 'b list -> bool",
  f37_001
];

var f38_001 = /* :: */[
  /* tuple */[
    List.mem,
    "List.mem"
  ],
  /* :: */[
    /* tuple */[
      List.memq,
      "List.memq"
    ],
    /* [] */0
  ]
];

var f38 = /* tuple */[
  "'a -> 'a list -> bool",
  f38_001
];

var f39_001 = /* :: */[
  /* tuple */[
    List.find,
    "List.find"
  ],
  /* [] */0
];

var f39 = /* tuple */[
  "('a -> bool) -> 'a list -> 'a",
  f39_001
];

var f40_001 = /* :: */[
  /* tuple */[
    List.filter,
    "List.filter"
  ],
  /* :: */[
    /* tuple */[
      List.find_all,
      "List.find_all"
    ],
    /* [] */0
  ]
];

var f40 = /* tuple */[
  "('a -> bool) -> 'a list -> 'a list",
  f40_001
];

var f41_001 = /* :: */[
  /* tuple */[
    List.sort,
    "List.sort"
  ],
  /* :: */[
    /* tuple */[
      List.stable_sort,
      "List.stable_sort"
    ],
    /* :: */[
      /* tuple */[
        List.fast_sort,
        "List.fast_sort"
      ],
      /* :: */[
        /* tuple */[
          List.sort_uniq,
          "List.sort_uniq"
        ],
        /* [] */0
      ]
    ]
  ]
];

var f41 = /* tuple */[
  "('a -> 'a -> int) -> 'a list -> 'a list",
  f41_001
];

var f42_001 = /* :: */[
  /* tuple */[
    List.merge,
    "List.merge"
  ],
  /* [] */0
];

var f42 = /* tuple */[
  "('a -> 'a -> int) -> 'a list -> 'a list -> 'a list",
  f42_001
];

exports.f0  = f0;
exports.f1  = f1;
exports.f2  = f2;
exports.f3  = f3;
exports.f4  = f4;
exports.f5  = f5;
exports.f6  = f6;
exports.f7  = f7;
exports.f8  = f8;
exports.f9  = f9;
exports.f10 = f10;
exports.f11 = f11;
exports.f12 = f12;
exports.f13 = f13;
exports.f14 = f14;
exports.f15 = f15;
exports.f16 = f16;
exports.f17 = f17;
exports.f18 = f18;
exports.f19 = f19;
exports.f20 = f20;
exports.f21 = f21;
exports.f22 = f22;
exports.f23 = f23;
exports.f24 = f24;
exports.f25 = f25;
exports.f26 = f26;
exports.f27 = f27;
exports.f28 = f28;
exports.f29 = f29;
exports.f30 = f30;
exports.f31 = f31;
exports.f32 = f32;
exports.f33 = f33;
exports.f34 = f34;
exports.f35 = f35;
exports.f36 = f36;
exports.f37 = f37;
exports.f38 = f38;
exports.f39 = f39;
exports.f40 = f40;
exports.f41 = f41;
exports.f42 = f42;
/* List Not a pure module */