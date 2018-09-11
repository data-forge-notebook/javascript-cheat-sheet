const baseName = "javascript-cheat-sheet";
const notebook = {
    "version": 1,
    "sheet": {
        "id": "7ce8e710-950a-11e8-a35e-85e807ef6fba",
        "cells": [
            {
                "id": "8a6ad970-950a-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "# JavaScript data wrangling cheat sheet\r\n\r\nSnippets of JS code that are good for working with data.\r\n\r\nFrom the book [Data Wrangling with JavaScript](http://bit.ly/2t2cJu2)",
                "lastEvaluationDate": "2018-09-05T17:38:34.438+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "1be0db20-950b-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "## LOGGING\r\n\r\nLogging is your best friend. It's the easiest way to inspect and check your data.",
                "lastEvaluationDate": "2018-09-05T17:38:34.438+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "26774650-950b-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "console.log(\"Your logging here\"); // General text logging for debugging.",
                "lastEvaluationDate": "2018-09-05T17:38:34.438+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "Your logging here\n",
                                "displayType": "string"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "3efb8510-950b-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "const arr = [1, 2, 3];            // Your data.\r\nconsole.log(arr);",
                "lastEvaluationDate": "2018-09-05T17:38:34.440+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "[ 1, 2, 3 ]\n",
                                "displayType": "string"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "60220020-950b-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "const obj = { A: 1, B: 2, C: 3 }; // Your data\r\nconsole.log(obj);",
                "lastEvaluationDate": "2018-09-05T17:38:34.442+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "{ A: 1, B: 2, C: 3 }\n",
                                "displayType": "string"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "765ff860-950b-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "In Data-Forge Notebook you can also use the `display` function for formatted output:",
                "lastEvaluationDate": "2018-09-05T17:38:34.443+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "79336e40-950c-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "const obj = { A: 1, B: 2, C: 3 }; // Your data\r\n\r\ndisplay(obj);",
                "lastEvaluationDate": "2018-09-05T17:38:34.443+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "A": 1,
                                    "B": 2,
                                    "C": 3
                                },
                                "displayType": "object"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "a78c0e00-950c-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "## OBJECTS\r\n\r\nTechniques for creating and modifying JavaScript objects",
                "lastEvaluationDate": "2018-09-05T17:38:34.448+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "1c74f2e0-950d-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Extract a field",
                "lastEvaluationDate": "2018-09-05T17:38:34.448+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "2812e300-950d-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let o = { A: 1, B: 2 };                 // Your data\r\nlet v1 = o[\"A\"];                        // Extract field value\r\ndisplay(v1);\r\n\r\nlet v2 = o.A;\r\ndisplay(v2);",
                "lastEvaluationDate": "2018-09-05T17:38:34.448+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "1",
                                "displayType": "string"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": "1",
                                "displayType": "string"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "2aad8b10-950d-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Set a field",
                "lastEvaluationDate": "2018-09-05T17:38:34.450+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "42378b50-950d-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let o = {};                             // Empty object\r\no[\"A\"] = 3;                             // Set field value\r\no.A = 3;\r\n\r\ndisplay(o);",
                "lastEvaluationDate": "2018-09-05T17:38:34.450+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "A": 3
                                },
                                "displayType": "object"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "8946eb80-950d-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Delete a field",
                "lastEvaluationDate": "2018-09-05T17:38:34.454+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "8f291d70-950d-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "\r\nlet o = { A: 1, B: 2 };\r\ndelete o[\"A\"];                          // Delete a field value\r\ndelete o.A;\r\n\r\ndisplay(o);",
                "lastEvaluationDate": "2018-09-05T17:38:34.454+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "B": 2
                                },
                                "displayType": "object"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "c9f7e4e0-950d-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Clone an object",
                "lastEvaluationDate": "2018-09-05T17:38:34.459+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "df227150-950d-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let o = { A: 1, B: 2 };\r\nlet c = Object.assign({}, o);           // Clone an object\r\nc.A = 300;\r\nc.B = 500;\r\n\r\ndisplay(o);                             // Original object is unchanged\r\ndisplay(c);                             // Cloned object is modified",
                "lastEvaluationDate": "2018-09-05T17:38:34.459+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "A": 1,
                                    "B": 2
                                },
                                "displayType": "object"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": {
                                    "A": 300,
                                    "B": 500
                                },
                                "displayType": "object"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "05ab6700-950e-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Replace fields in an object",
                "lastEvaluationDate": "2018-09-05T17:38:34.474+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "4516c100-950e-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let o = { A: 1, B: 2 };\r\nlet ovr = { B: 200 };\r\nlet c = Object.assign({}, o, ovr);      // Clone and override fields\r\n\r\ndisplay(o);                             // Original object is unchanged\r\ndisplay(c);                             // Cloned object has specified fields changed",
                "lastEvaluationDate": "2018-09-05T17:38:34.474+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "A": 1,
                                    "B": 2
                                },
                                "displayType": "object"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": {
                                    "A": 1,
                                    "B": 200
                                },
                                "displayType": "object"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "92ec7190-950e-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "## ARRAYS\r\n\r\nTechniques for creating and modifying JavaScript arrays",
                "lastEvaluationDate": "2018-09-05T17:38:34.480+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b0a58b40-950e-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Visit each item",
                "lastEvaluationDate": "2018-09-05T17:38:34.480+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b57a92f0-950e-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3];                      // Your data\r\na.forEach(item => {\r\n    console.log(item);                  // Visit each item in the array\r\n});\r\n\r\n// Or (old-style JS)\r\nfor (let i = 0; i < a.length; ++i) {\r\n    const item = a[i];\r\n    // Visit each item\r\n}\r\n\r\n// Or (using modern JS iterators)\r\nfor (const item of a) {\r\n    // Visit each item\r\n}",
                "lastEvaluationDate": "2018-09-05T17:38:34.480+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "1\n",
                                "displayType": "string"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": "2\n",
                                "displayType": "string"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": "3\n",
                                "displayType": "string"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "01860ad0-950f-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Getting and setting values",
                "lastEvaluationDate": "2018-09-05T17:38:34.483+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "08bb2290-950f-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5, 6];             // Your data\r\nlet v = a[5];                           // Get value at index\r\ndisplay(v);\r\n\r\na[3] = 32;                              // Set value at index\r\ndisplay(a);",
                "lastEvaluationDate": "2018-09-05T17:38:34.483+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "6",
                                "displayType": "string"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": [
                                    1,
                                    2,
                                    3,
                                    32,
                                    5,
                                    6
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "4fa52070-950f-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Adding and removing items",
                "lastEvaluationDate": "2018-09-05T17:38:34.491+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "55cac400-950f-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3];\r\n\r\na.push(\"new end item\");                 // Add to end of array\r\ndisplay(a);\r\n\r\nlet last = a.pop();                     // Remove last element\r\ndisplay(last);\r\ndisplay(a);\r\n\r\na.unshift(\"new start item\");            // Add to start of array\r\ndisplay(a);\r\n\r\nlet first = a.shift();                  // Remove first element\r\ndisplay(first);\r\ndisplay(a);",
                "lastEvaluationDate": "2018-09-05T17:38:34.491+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    1,
                                    2,
                                    3,
                                    "new end item"
                                ],
                                "displayType": "array"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": "new end item",
                                "displayType": "string"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": [
                                    1,
                                    2,
                                    3
                                ],
                                "displayType": "array"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": [
                                    "new start item",
                                    1,
                                    2,
                                    3
                                ],
                                "displayType": "array"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": "new start item",
                                "displayType": "string"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": [
                                    1,
                                    2,
                                    3
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "a150df40-950f-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Concatenate arrays",
                "lastEvaluationDate": "2018-09-05T17:38:34.504+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b0fc8f70-950f-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a1 = [1, 2, 3];\r\nlet a2 = [4, 5, 6];\r\nlet a = a1.concat(a2);              // Concatenate arrays\r\ndisplay(a);",
                "lastEvaluationDate": "2018-09-05T17:38:34.504+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "df60ef00-950f-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Extracting portions of an array",
                "lastEvaluationDate": "2018-09-05T17:38:34.511+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "e5adc9a0-950f-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\n\r\nlet e = a.slice(0, 3);                  // Extract first 3 elements\r\ndisplay(e);",
                "lastEvaluationDate": "2018-09-05T17:38:34.511+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    1,
                                    2,
                                    3
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "f6cdf160-950f-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];\r\n\r\nlet e = a.slice(5, 11);                 // Extract elements 5 to 10\r\ndisplay(e);",
                "lastEvaluationDate": "2018-09-05T17:38:34.515+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "116b7330-9510-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\r\n\r\nlet e = a.slice(-4, -1);                // Negative indicies relative to end of the array\r\ndisplay(e);",
                "lastEvaluationDate": "2018-09-05T17:38:34.522+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    7,
                                    8,
                                    9
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "254a93e0-9510-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\r\n\r\nlet e = a.slice(-3);                    // Extract last three elements\r\ndisplay(e);",
                "lastEvaluationDate": "2018-09-05T17:38:34.526+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    8,
                                    9,
                                    10
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "34bfa3b0-9510-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Clone an array",
                "lastEvaluationDate": "2018-09-05T17:38:34.535+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "386e05b0-9510-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\nlet c = a.slice();                      // Clone array\r\nc[2] = 2230;\r\ndisplay(a);                             // Original array is unchanged\r\ndisplay(c);                             // Cloned array is modified",
                "lastEvaluationDate": "2018-09-05T17:38:34.535+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ],
                                "displayType": "array"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": [
                                    1,
                                    2,
                                    2230,
                                    4,
                                    5
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "90c2a1d0-9510-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Find an element in an array",
                "lastEvaluationDate": "2018-09-05T17:38:34.544+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "994ff690-9510-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\nlet i = a.indexOf(3);                   // Find index of item in array\r\nif (i >= 0) {\r\n    let v = a[i];                       // The value exists, extract it\r\n    display(v);                         \r\n}",
                "lastEvaluationDate": "2018-09-05T17:38:34.544+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "3",
                                "displayType": "string"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "cef8fe40-9510-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Sorting an array",
                "lastEvaluationDate": "2018-09-05T17:38:34.546+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "d44cabd0-9510-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [\"Pineapple\", \"Orange\", \"Apple\", \"Bananna\"];\r\na.sort();\r\ndisplay(a);",
                "lastEvaluationDate": "2018-09-05T17:38:34.546+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    "Apple",
                                    "Bananna",
                                    "Orange",
                                    "Pineapple"
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "06426f80-9511-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [\"Pineapple\", \"Orange\", \"Apple\", \"Bananna\"];\r\nlet c = a.slice();                      // Clone the original\r\nc.sort();                               // Sort array without modifying the original\r\ndisplay(a);                             // Original array is unmodified\r\ndisplay(c);                             // Cloned array is sorted",
                "lastEvaluationDate": "2018-09-05T17:38:34.552+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    "Pineapple",
                                    "Orange",
                                    "Apple",
                                    "Bananna"
                                ],
                                "displayType": "array"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": [
                                    "Apple",
                                    "Bananna",
                                    "Orange",
                                    "Pineapple"
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "19e79470-9511-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [10, 20, 8, 15, 12, 33];\r\na.sort((a, b) => b - a);                // Customize sort with a user-defined function\r\ndisplay(a);",
                "lastEvaluationDate": "2018-09-05T17:38:34.560+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    33,
                                    20,
                                    15,
                                    12,
                                    10,
                                    8
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "3f323dc0-9511-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "## FUNCTIONAL JAVASCRIPT\r\n\r\nFunctional-style array manipulation techniques",
                "lastEvaluationDate": "2018-09-05T17:38:34.565+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "578bea10-9511-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Filter\r\n\r\nFilter an array with `filter` and a user-defined predicate function",
                "lastEvaluationDate": "2018-09-05T17:38:34.565+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "643c3490-9511-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [10, 20, 8, 15, 12, 33];\r\n\r\nfunction predicate(value) {\r\n    return value > 10;                  // Retain values > 10\r\n}\r\n\r\nlet f = a.filter(v => predicate(v));    // Filter array\r\ndisplay(f);",
                "lastEvaluationDate": "2018-09-05T17:38:34.565+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    20,
                                    15,
                                    12,
                                    33
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "a84ef690-9511-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Transform\r\n\r\nTransform an array with `map` and a user-defined transformation function",
                "lastEvaluationDate": "2018-09-05T17:38:34.570+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b9dab160-9511-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\n\r\nfunction transform(value) {\r\n    return value + 1;                   // Increment all values by one.\r\n}\r\n\r\nlet t = a.map(v => transform(v));       // Transform array\r\ndisplay(t);",
                "lastEvaluationDate": "2018-09-05T17:38:34.570+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "decdebe0-9511-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Aggregation\r\n\r\nAggregate an array with `reduce` and a user-defined aggregation function",
                "lastEvaluationDate": "2018-09-05T17:38:34.576+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "ecf39850-9511-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\n\r\nfunction sum(a, b) {\r\n    return a + b;                       // Produces the sum of all values.\r\n}\r\n\r\nlet t = a.reduce(sum, 0)  // Reduce the array by summing the total of all values.\r\ndisplay(t);",
                "lastEvaluationDate": "2018-09-05T17:38:34.576+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "15",
                                "displayType": "string"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "2049fd70-9512-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "## REGULAR EXPRESSIONS\r\n\r\nUse regular expressions to match and extract search patterns in text",
                "lastEvaluationDate": "2018-09-05T17:38:34.579+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "2ed6f730-9512-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let re = /search pattern/;              // Define regular expression\r\n\r\n// Or\r\nre = new RegExp(\"search pattern\");\r\n\r\n// Or add options\r\nre = /search pattern/ig                 // Case insensitive + global\r\n\r\nlet source = \"your text data that contains the search pattern\";\r\nlet match = re.exec(source);           // Find first match.\r\ndisplay(match);\r\n\r\nwhile ((match = re.exec(source)) !== null) {\r\n    // Find each  match in turn.\r\n}",
                "lastEvaluationDate": "2018-09-05T17:38:34.579+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    "search pattern"
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            }
        ]
    }
};