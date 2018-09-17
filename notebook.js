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
                "lastEvaluationDate": "2018-09-17T11:16:47.539+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "1be0db20-950b-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "## LOGGING\r\n\r\nLogging is your best friend. It's the easiest way to inspect and check your data.",
                "lastEvaluationDate": "2018-09-17T11:16:47.539+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "26774650-950b-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "console.log(\"Your logging here\"); // General text logging for debugging.",
                "lastEvaluationDate": "2018-09-17T11:16:47.539+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.545+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.548+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.550+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "79336e40-950c-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "const obj = { A: 1, B: 2, C: 3 }; // Your data\r\n\r\ndisplay(obj);",
                "lastEvaluationDate": "2018-09-17T11:16:47.550+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.555+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "1c74f2e0-950d-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Extract a field",
                "lastEvaluationDate": "2018-09-17T11:16:47.555+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "2812e300-950d-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let o = { A: 1, B: 2 };                 // Your data\r\nlet v1 = o[\"A\"];                        // Extract field value\r\ndisplay(v1);\r\n\r\nlet v2 = o.A;\r\ndisplay(v2);",
                "lastEvaluationDate": "2018-09-17T11:16:47.555+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.557+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "42378b50-950d-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let o = {};                             // Empty object\r\no[\"A\"] = 3;                             // Set field value\r\no.A = 3;\r\n\r\ndisplay(o);",
                "lastEvaluationDate": "2018-09-17T11:16:47.557+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.561+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "8f291d70-950d-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "\r\nlet o = { A: 1, B: 2 };\r\ndelete o[\"A\"];                          // Delete a field value\r\ndelete o.A;\r\n\r\ndisplay(o);",
                "lastEvaluationDate": "2018-09-17T11:16:47.561+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.565+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "df227150-950d-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let o = { A: 1, B: 2 };\r\nlet c = Object.assign({}, o);           // Clone an object\r\nc.A = 300;\r\nc.B = 500;\r\n\r\ndisplay(o);                             // Original object is unchanged\r\ndisplay(c);                             // Cloned object is modified",
                "lastEvaluationDate": "2018-09-17T11:16:47.565+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.573+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "4516c100-950e-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let o = { A: 1, B: 2 };\r\nlet ovr = { B: 200 };\r\nlet c = Object.assign({}, o, ovr);      // Clone and override fields\r\n\r\ndisplay(o);                             // Original object is unchanged\r\ndisplay(c);                             // Cloned object has specified fields changed",
                "lastEvaluationDate": "2018-09-17T11:16:47.573+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.580+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b0a58b40-950e-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Visit each item",
                "lastEvaluationDate": "2018-09-17T11:16:47.580+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b57a92f0-950e-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3];                      // Your data\r\na.forEach(item => {\r\n    console.log(item);                  // Visit each item in the array\r\n});\r\n\r\n// Or (old-style JS)\r\nfor (let i = 0; i < a.length; ++i) {\r\n    const item = a[i];\r\n    // Visit each item\r\n}\r\n\r\n// Or (using modern JS iterators)\r\nfor (const item of a) {\r\n    // Visit each item\r\n}",
                "lastEvaluationDate": "2018-09-17T11:16:47.580+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.582+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "08bb2290-950f-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5, 6];             // Your data\r\nlet v = a[5];                           // Get value at index\r\ndisplay(v);\r\n\r\na[3] = 32;                              // Set value at index\r\ndisplay(a);",
                "lastEvaluationDate": "2018-09-17T11:16:47.582+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.589+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "55cac400-950f-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3];\r\n\r\na.push(\"new end item\");                 // Add to end of array\r\ndisplay(a);\r\n\r\nlet last = a.pop();                     // Remove last element\r\ndisplay(last);\r\ndisplay(a);\r\n\r\na.unshift(\"new start item\");            // Add to start of array\r\ndisplay(a);\r\n\r\nlet first = a.shift();                  // Remove first element\r\ndisplay(first);\r\ndisplay(a);",
                "lastEvaluationDate": "2018-09-17T11:16:47.589+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.603+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b0fc8f70-950f-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a1 = [1, 2, 3];\r\nlet a2 = [4, 5, 6];\r\nlet a = a1.concat(a2);              // Concatenate arrays\r\ndisplay(a);",
                "lastEvaluationDate": "2018-09-17T11:16:47.603+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.610+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "e5adc9a0-950f-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\n\r\nlet e = a.slice(0, 3);                  // Extract first 3 elements\r\ndisplay(e);",
                "lastEvaluationDate": "2018-09-17T11:16:47.610+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.619+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.626+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.630+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.635+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "386e05b0-9510-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\nlet c = a.slice();                      // Clone array\r\nc[2] = 2230;\r\ndisplay(a);                             // Original array is unchanged\r\ndisplay(c);                             // Cloned array is modified",
                "lastEvaluationDate": "2018-09-17T11:16:47.635+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.645+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "994ff690-9510-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\nlet i = a.indexOf(3);                   // Find index of item in array\r\nif (i >= 0) {\r\n    let v = a[i];                       // The value exists, extract it\r\n    display(v);                         \r\n}",
                "lastEvaluationDate": "2018-09-17T11:16:47.645+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.647+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "d44cabd0-9510-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [\"Pineapple\", \"Orange\", \"Apple\", \"Bananna\"];\r\na.sort();\r\ndisplay(a);",
                "lastEvaluationDate": "2018-09-17T11:16:47.647+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.653+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.662+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.668+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "578bea10-9511-11e8-a35e-85e807ef6fba",
                "cellType": "markdown",
                "code": "### Filter\r\n\r\nFilter an array with `filter` and a user-defined predicate function",
                "lastEvaluationDate": "2018-09-17T11:16:47.668+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "643c3490-9511-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [10, 20, 8, 15, 12, 33];\r\n\r\nfunction predicate(value) {\r\n    return value > 10;                  // Retain values > 10\r\n}\r\n\r\nlet f = a.filter(v => predicate(v));    // Filter array\r\ndisplay(f);",
                "lastEvaluationDate": "2018-09-17T11:16:47.668+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.673+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b9dab160-9511-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\n\r\nfunction transform(value) {\r\n    return value + 1;                   // Increment all values by one.\r\n}\r\n\r\nlet t = a.map(v => transform(v));       // Transform array\r\ndisplay(t);",
                "lastEvaluationDate": "2018-09-17T11:16:47.673+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.683+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "ecf39850-9511-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let a = [1, 2, 3, 4, 5];\r\n\r\nfunction sum(a, b) {\r\n    return a + b;                       // Produces the sum of all values.\r\n}\r\n\r\nlet t = a.reduce(sum, 0)  // Reduce the array by summing the total of all values.\r\ndisplay(t);",
                "lastEvaluationDate": "2018-09-17T11:16:47.683+10:00",
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
                "lastEvaluationDate": "2018-09-17T11:16:47.685+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "2ed6f730-9512-11e8-a35e-85e807ef6fba",
                "cellType": "code",
                "cellScope": "local",
                "code": "let re = /search pattern/;              // Define regular expression\r\n\r\n// Or\r\nre = new RegExp(\"search pattern\");\r\n\r\n// Or add options\r\nre = /search pattern/ig                 // Case insensitive + global\r\n\r\nlet source = \"your text data that contains the search pattern\";\r\nlet match = re.exec(source);           // Find first match.\r\ndisplay(match);\r\n\r\nwhile ((match = re.exec(source)) !== null) {\r\n    // Find each  match in turn.\r\n}",
                "lastEvaluationDate": "2018-09-17T11:16:47.685+10:00",
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
            },
            {
                "id": "44d87ee0-ba02-11e8-8778-9ff4ba8852c6",
                "cellType": "markdown",
                "code": "## READ AND WRITE TEXT FILES\r\n\r\nIn Node.js we can read and write text files using the functions `fs.readFileSync` and `fs.writeFileSync`.\r\n\r\nAfter you run this code cell, check out the contents of the file `my-text-file.txt` that has been written out to your file system.",
                "lastEvaluationDate": "2018-09-17T11:16:47.688+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "61e41a80-ba02-11e8-8778-9ff4ba8852c6",
                "cellType": "code",
                "cellScope": "local",
                "code": "const fs = require('fs');\r\n\r\nconst textData = \"My text data\";                                        // Example data to write to a text file.\r\nfs.writeFileSync(\"./my-text-file.txt\", textData);                       // Write the text data to a file.\r\n\r\nconst loadedTextData = fs.readFileSync(\"./my-text-file.txt\", \"utf8\");   // Read the text data back from the file.\r\ndisplay(loadedTextData);",
                "lastEvaluationDate": "2018-09-17T11:16:47.688+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "My text data",
                                "displayType": "string"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "0d86c5b0-ba01-11e8-8778-9ff4ba8852c6",
                "cellType": "markdown",
                "code": "## DATA FORMATS\r\n\r\n### Serialize and deserialize JSON data\r\n\r\nJavaScript already contains the functions you need to to serialize and deserialize data to and from the JSON format.\r\n\r\nUse `JSON.stringify` to convert your data to JSON, then use `JSON.parse` to convert it back.",
                "lastEvaluationDate": "2018-09-17T11:16:47.690+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "31e5fd90-ba01-11e8-8778-9ff4ba8852c6",
                "cellType": "code",
                "cellScope": "local",
                "code": "const data = [\r\n    { item: \"1\" },\r\n    { item: \"2\" },\r\n    { item: \"3\" }\r\n];\r\nconst jsonData = JSON.stringify(data);          // Serialize (encode) the array of data items to JSON data.\r\n\r\ndisplay(jsonData);\r\n\r\nconst deserialized = JSON.parse(jsonData);      // Deserialize (decode) the array of data items from JSON data.\r\ndisplay(deserialized);",
                "lastEvaluationDate": "2018-09-17T11:16:47.690+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "[{\"item\":\"1\"},{\"item\":\"2\"},{\"item\":\"3\"}]",
                                "displayType": "string"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": [
                                    {
                                        "item": "1"
                                    },
                                    {
                                        "item": "2"
                                    },
                                    {
                                        "item": "3"
                                    }
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "d39c7ff0-ba02-11e8-8778-9ff4ba8852c6",
                "cellType": "markdown",
                "code": "### Read and write JSON data files\r\n\r\nIf we combine the `fs` functions with the `JSON` functions we can now read and write JSON data files.\r\n\r\nAfter you run this code cell, check out the contents of the file `my-json-file.json` that has been written out to your file system.",
                "lastEvaluationDate": "2018-09-17T11:16:47.698+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "ed273230-ba02-11e8-8778-9ff4ba8852c6",
                "cellType": "code",
                "cellScope": "local",
                "code": "const fs = require('fs');\r\n\r\nconst data = [\r\n    { item: \"1\" },\r\n    { item: \"2\" },\r\n    { item: \"3\" }\r\n];\r\nfs.writeFileSync(\"./my-json-file.json\", JSON.stringify(data));                      // Serialize (encode) the data to JSON and write it to the text file.\r\n\r\nconst deserialized = JSON.parse(fs.readFileSync(\"./my-json-file.json\", \"utf8\"));    // Read the JSON data from the text file and then deserialize (decode) it.\r\ndisplay(deserialized);",
                "lastEvaluationDate": "2018-09-17T11:16:47.698+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    {
                                        "item": "1"
                                    },
                                    {
                                        "item": "2"
                                    },
                                    {
                                        "item": "3"
                                    }
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "679e0e80-ba03-11e8-8778-9ff4ba8852c6",
                "cellType": "markdown",
                "code": "### Serialize and deserialize CSV data\r\n\r\nLet's not forget about working with CSV data, it's a staple of the data science community!\r\n\r\nUnfortunately JavaScript doesn't provide us with functions to do this, so we'll turn to the excellent [PapaParse](https://www.npmjs.com/package/papaparse) library available via npm.\r\n\r\nNote the use of the `dynamicTyping` option - this is quite important as it causes PapaParse to deserialized CSV columns that contain numbers and booleans (unfortunately it doesn't help with dates).",
                "lastEvaluationDate": "2018-09-17T11:16:47.705+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b64714a0-ba03-11e8-8778-9ff4ba8852c6",
                "cellType": "code",
                "cellScope": "local",
                "code": "const Papa = require('papaparse');\r\n\r\nconst data = [\r\n    { item: \"1\", val: 100 },\r\n    { item: \"2\", val: 200 },\r\n    { item: \"3\", val: 300 }\r\n];\r\nconst csvData = Papa.unparse(data);                     // Serialize (encode) the array of data items to CSV data.\r\n\r\ndisplay(csvData);\r\n\r\nconst options = { dynamicTyping: true, header: true };\r\nconst deserialized = Papa.parse(csvData, options);      // Deserialize (decode) the array of data items from CSV data.\r\ndisplay(deserialized.data);",
                "lastEvaluationDate": "2018-09-17T11:16:47.705+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "item,val\r\n1,100\r\n2,200\r\n3,300",
                                "displayType": "string"
                            }
                        ]
                    },
                    {
                        "values": [
                            {
                                "data": [
                                    {
                                        "item": 1,
                                        "val": 100
                                    },
                                    {
                                        "item": 2,
                                        "val": 200
                                    },
                                    {
                                        "item": 3,
                                        "val": 300
                                    }
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "06efc5e0-ba05-11e8-8778-9ff4ba8852c6",
                "cellType": "markdown",
                "code": "### Read and write CSV data files\r\n\r\nWe can also combine the `fs` functions with PapaParse and be able to read and write CSV data files.\r\n\r\nAfter you run this code cell, check out the contents of the file `my-csv-file.csv` that has been written out to your file system.",
                "lastEvaluationDate": "2018-09-17T11:16:47.715+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "252a92b0-ba05-11e8-8778-9ff4ba8852c6",
                "cellType": "code",
                "cellScope": "local",
                "code": "const fs = require('fs');\r\nconst Papa = require('papaparse');\r\n\r\nconst data = [\r\n    { item: \"1\", val: 100 },\r\n    { item: \"2\", val: 200 },\r\n    { item: \"3\", val: 300 }\r\n];\r\nfs.writeFileSync(\"./my-csv-file.csv\", Papa.unparse(data));                                  // Serialize (encode) the data to CSV and write it to the text file.\r\n\r\nconst options = { dynamicTyping: true, header: true };\r\nconst deserialized = Papa.parse(fs.readFileSync(\"./my-csv-file.csv\", \"utf8\"), options);     // Read the CSV data from the text file and then deserialize (decode) it.\r\ndisplay(deserialized.data);",
                "lastEvaluationDate": "2018-09-17T11:16:47.715+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    {
                                        "item": 1,
                                        "val": 100
                                    },
                                    {
                                        "item": 2,
                                        "val": 200
                                    },
                                    {
                                        "item": 3,
                                        "val": 300
                                    }
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