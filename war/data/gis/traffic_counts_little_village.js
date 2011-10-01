define(function() {
return {
  "meta" : {
    "view" : {
      "id" : "ugv9-yyd5",
      "name" : "Average Daily Traffic Counts - Map",
      "attribution" : "City of Chicago",
      "attributionLink" : "http://www.cityofchicago.org",
      "averageRating" : 0,
      "category" : "Transportation",
      "description" : "Average Daily Traffic (ADT) counts are analogous to a census count of vehicles on city streets. These counts provide a close approximation to the actual number of vehicles passing through a given location on an average weekday. Since it is not possible to count every vehicle on every city street, sample counts are taken along larger streets to get an estimate of traffic on half-mile or one-mile street segments. ADT counts are used by city planners, transportation engineers, real-estate developers, marketers and many others for myriad planning and operational purposes.\r\nData Owner: Transportation.\r\nTime Period: 2006.\r\nFrequency: A citywide count is taken approximately every 10 years. A limited number of traffic counts will be taken and added to the list periodically.\r\nRelated Applications: Traffic Information Interactive Map (http://webapps.cityofchicago.org/traffic/).",
      "displayType" : "map",
      "moderationStatus" : true,
      "numberOfComments" : 0,
      "oid" : 0,
      "publicationAppendEnabled" : false,
      "publicationStage" : "unpublished",
      "rowClass" : "",
      "rowsUpdatedAt" : 1313894849,
      "rowsUpdatedBy" : "scy9-9wg4",
      "signed" : false,
      "tableId" : 216745,
      "totalTimesRated" : 0,
      "viewType" : "tabular",
      "columns" : [ {
        "id" : -1,
        "name" : "sid",
        "dataTypeName" : "meta_data",
        "fieldName" : "sid",
        "position" : 0,
        "renderTypeName" : "meta_data"
      }, {
        "id" : -1,
        "name" : "id",
        "dataTypeName" : "meta_data",
        "fieldName" : "id",
        "position" : 0,
        "renderTypeName" : "meta_data"
      }, {
        "id" : -1,
        "name" : "position",
        "dataTypeName" : "meta_data",
        "fieldName" : "position",
        "position" : 0,
        "renderTypeName" : "meta_data"
      }, {
        "id" : -1,
        "name" : "created_at",
        "dataTypeName" : "meta_data",
        "fieldName" : "created_at",
        "position" : 0,
        "renderTypeName" : "meta_data"
      }, {
        "id" : -1,
        "name" : "created_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : "created_meta",
        "position" : 0,
        "renderTypeName" : "meta_data"
      }, {
        "id" : -1,
        "name" : "updated_at",
        "dataTypeName" : "meta_data",
        "fieldName" : "updated_at",
        "position" : 0,
        "renderTypeName" : "meta_data"
      }, {
        "id" : -1,
        "name" : "updated_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : "updated_meta",
        "position" : 0,
        "renderTypeName" : "meta_data"
      }, {
        "id" : -1,
        "name" : "meta",
        "dataTypeName" : "meta_data",
        "fieldName" : "meta",
        "position" : 0,
        "renderTypeName" : "meta_data"
      }, {
        "id" : 2741410,
        "name" : "ID ",
        "dataTypeName" : "number",
        "fieldName" : "id_",
        "position" : 1,
        "renderTypeName" : "number",
        "tableColumnId" : 1358385,
        "width" : 50,
        "format" : {
          "aggregate" : "sum"
        }
      }, {
        "id" : 2741411,
        "name" : "Traffic Volume Count Location  Address",
        "dataTypeName" : "text",
        "fieldName" : "traffic_volume_count_location_address",
        "position" : 2,
        "renderTypeName" : "text",
        "tableColumnId" : 1358386,
        "width" : 222
      }, {
        "id" : 2741412,
        "name" : "Street",
        "dataTypeName" : "text",
        "fieldName" : "street",
        "position" : 3,
        "renderTypeName" : "text",
        "tableColumnId" : 1358387,
        "width" : 107,
        "format" : {
          "align" : "left"
        }
      }, {
        "id" : 2741413,
        "name" : "Date of Count",
        "dataTypeName" : "date",
        "fieldName" : "date_of_count",
        "position" : 4,
        "renderTypeName" : "date",
        "tableColumnId" : 1358388,
        "width" : 84,
        "format" : {
          "view" : "date"
        }
      }, {
        "id" : 2741414,
        "name" : "Total Passing Vehicle Volume",
        "dataTypeName" : "number",
        "fieldName" : "total_passing_vehicle_volume",
        "position" : 5,
        "renderTypeName" : "number",
        "tableColumnId" : 1358389,
        "width" : 172
      }, {
        "id" : 2741415,
        "name" : "Vehicle Volume By Each Direction of Traffic",
        "dataTypeName" : "text",
        "fieldName" : "vehicle_volume_by_each_direction_of_traffic",
        "position" : 6,
        "renderTypeName" : "text",
        "tableColumnId" : 1358390,
        "width" : 250
      }, {
        "id" : 2741416,
        "name" : "Latitude",
        "dataTypeName" : "number",
        "fieldName" : "latitude",
        "position" : 7,
        "renderTypeName" : "number",
        "tableColumnId" : 1358392,
        "width" : 84,
        "format" : {
          "precisionStyle" : "standard",
          "align" : "right",
          "noCommas" : "false"
        }
      }, {
        "id" : 2741417,
        "name" : "Longitude",
        "dataTypeName" : "number",
        "fieldName" : "longitude",
        "position" : 8,
        "renderTypeName" : "number",
        "tableColumnId" : 1358391,
        "width" : 76,
        "format" : {
          "precisionStyle" : "standard",
          "align" : "right",
          "noCommas" : "false"
        }
      }, {
        "id" : 2741418,
        "name" : "Location",
        "dataTypeName" : "location",
        "fieldName" : "location",
        "position" : 9,
        "renderTypeName" : "location",
        "tableColumnId" : 1474923,
        "width" : 100,
        "subColumnTypes" : [ "human_address", "latitude", "longitude", "machine_address", "needs_recoding" ]
      } ],
      "displayFormat" : {
        "viewport" : {
          "center" : {
            "lng" : -87.69499373059077,
            "lat" : 41.8566028964776
          },
          "ymin" : 41.8348,
          "ymax" : 41.878399,
          "zoom" : 13,
          "xmin" : -87.765289,
          "xmax" : -87.624698
        },
        "plotStyle" : "point",
        "type" : "google",
        "plot" : {
          "locationId" : 1474923,
          "descriptionColumns" : [ {
            "tableColumnId" : 1358387
          }, {
            "tableColumnId" : 1358389
          }, {
            "tableColumnId" : 1358390
          } ],
          "titleId" : 1358386
        }
      },
      "grants" : [ {
        "inherited" : true,
        "type" : "viewer",
        "flags" : [ "public" ]
      } ],
      "metadata" : {
        "custom_fields" : {
          "Metadata" : {
            "Time Period" : "Study completed in 2006",
            "Data Owner" : "Transportation",
            "Frequency" : " A citywide count is taken approximately every 10 years. A limited number of traffic counts will be taken and added to the list periodically,"
          }
        },
        "renderTypeConfig" : {
          "visible" : {
            "map" : true,
            "table" : true
          }
        },
        "availableDisplayTypes" : [ "map", "table", "fatrow", "page" ],
        "rdfSubject" : "0",
        "rowIdentifier" : "0",
        "rdfClass" : ""
      },
      "query" : {
        "filterCondition" : {
          "type" : "operator",
          "value" : "AND",
          "children" : [ {
            "type" : "operator",
            "value" : "OR",
            "children" : [ {
              "type" : "operator",
              "value" : "BETWEEN",
              "children" : [ {
                "columnId" : 2741417,
                "type" : "column"
              }, {
                "type" : "literal",
                "value" : "-87.688408"
              }, {
                "type" : "literal",
                "value" : "-87.73819"
              } ],
              "metadata" : {
                "freeform" : true
              }
            } ],
            "metadata" : {
              "tableColumnId" : {
                "216745" : 1358391
              },
              "operator" : "BETWEEN"
            }
          }, {
            "type" : "operator",
            "value" : "OR",
            "children" : [ {
              "type" : "operator",
              "value" : "BETWEEN",
              "children" : [ {
                "columnId" : 2741416,
                "type" : "column"
              }, {
                "type" : "literal",
                "value" : "41.856647"
              }, {
                "type" : "literal",
                "value" : "41.822117"
              } ],
              "metadata" : {
                "freeform" : true
              }
            } ],
            "metadata" : {
              "tableColumnId" : {
                "216745" : 1358392
              },
              "operator" : "BETWEEN"
            }
          }, {
            "type" : "operator",
            "value" : "AND",
            "children" : [ {
              "type" : "operator",
              "value" : "GREATER_THAN",
              "children" : [ {
                "columnId" : 2741418,
                "type" : "column",
                "value" : "LONGITUDE"
              }, {
                "type" : "literal",
                "value" : "-87.765289"
              } ]
            }, {
              "type" : "operator",
              "value" : "LESS_THAN",
              "children" : [ {
                "columnId" : 2741418,
                "type" : "column",
                "value" : "LONGITUDE"
              }, {
                "type" : "literal",
                "value" : "-87.624698"
              } ]
            }, {
              "type" : "operator",
              "value" : "GREATER_THAN",
              "children" : [ {
                "columnId" : 2741418,
                "type" : "column",
                "value" : "LATITUDE"
              }, {
                "type" : "literal",
                "value" : "41.824823"
              } ]
            }, {
              "type" : "operator",
              "value" : "LESS_THAN",
              "children" : [ {
                "columnId" : 2741418,
                "type" : "column",
                "value" : "LATITUDE"
              }, {
                "type" : "literal",
                "value" : "41.868429"
              } ]
            } ]
          } ],
          "metadata" : {
            "unifiedVersion" : 2
          }
        },
        "orderBys" : [ {
          "ascending" : true,
          "expression" : {
            "columnId" : 2741416,
            "type" : "column"
          }
        } ]
      },
      "rights" : [ "read" ],
      "sortBys" : [ {
        "id" : 0,
        "viewColumnId" : 2741416,
        "flags" : [ "asc" ]
      } ],
      "tableAuthor" : {
        "id" : "scy9-9wg4",
        "displayName" : "cocadmin",
        "emailUnsubscribed" : false,
        "privacyControl" : "login",
        "profileImageUrlLarge" : "/images/profile/4783/7574/CitySeal_Small_large.jpg",
        "profileImageUrlMedium" : "/images/profile/4783/7574/CitySeal_Small_thumb.jpg",
        "profileImageUrlSmall" : "/images/profile/4783/7574/CitySeal_Small_tiny.jpg",
        "profileLastModified" : 1316007354,
        "roleName" : "administrator",
        "screenName" : "cocadmin",
        "rights" : [ "create_datasets", "edit_others_datasets", "edit_sdp", "edit_site_theme", "moderate_comments", "manage_users", "chown_datasets", "edit_nominations", "approve_nominations", "feature_items", "federations", "manage_stories", "manage_approval", "change_configurations", "view_domain", "view_others_datasets" ]
      },
      "tags" : [ "traffic", "streets" ],
      "viewFilters" : {
        "type" : "operator",
        "value" : "AND",
        "children" : [ {
          "type" : "operator",
          "value" : "OR",
          "children" : [ {
            "type" : "operator",
            "value" : "BETWEEN",
            "children" : [ {
              "columnId" : 2741417,
              "type" : "column"
            }, {
              "type" : "literal",
              "value" : "-87.688408"
            }, {
              "type" : "literal",
              "value" : "-87.73819"
            } ],
            "metadata" : {
              "freeform" : true
            }
          } ],
          "metadata" : {
            "tableColumnId" : {
              "216745" : 1358391
            },
            "operator" : "BETWEEN"
          }
        }, {
          "type" : "operator",
          "value" : "OR",
          "children" : [ {
            "type" : "operator",
            "value" : "BETWEEN",
            "children" : [ {
              "columnId" : 2741416,
              "type" : "column"
            }, {
              "type" : "literal",
              "value" : "41.856647"
            }, {
              "type" : "literal",
              "value" : "41.822117"
            } ],
            "metadata" : {
              "freeform" : true
            }
          } ],
          "metadata" : {
            "tableColumnId" : {
              "216745" : 1358392
            },
            "operator" : "BETWEEN"
          }
        }, {
          "type" : "operator",
          "value" : "AND",
          "children" : [ {
            "type" : "operator",
            "value" : "GREATER_THAN",
            "children" : [ {
              "columnId" : 2741418,
              "type" : "column",
              "value" : "LONGITUDE"
            }, {
              "type" : "literal",
              "value" : "-87.765289"
            } ]
          }, {
            "type" : "operator",
            "value" : "LESS_THAN",
            "children" : [ {
              "columnId" : 2741418,
              "type" : "column",
              "value" : "LONGITUDE"
            }, {
              "type" : "literal",
              "value" : "-87.624698"
            } ]
          }, {
            "type" : "operator",
            "value" : "GREATER_THAN",
            "children" : [ {
              "columnId" : 2741418,
              "type" : "column",
              "value" : "LATITUDE"
            }, {
              "type" : "literal",
              "value" : "41.824823"
            } ]
          }, {
            "type" : "operator",
            "value" : "LESS_THAN",
            "children" : [ {
              "columnId" : 2741418,
              "type" : "column",
              "value" : "LATITUDE"
            }, {
              "type" : "literal",
              "value" : "41.868429"
            } ]
          } ]
        } ],
        "metadata" : {
          "unifiedVersion" : 2
        }
      },
      "flags" : [ "unsaved" ]
    }
  },
  "data" : [ [ 1116, "06BAADA0-8FD0-48EF-B9FD-F4BB55EBEF84", 1116, 1273092889, "386464", 1273092889, "386464", null, "1202", "3751 South", "California Ave", 1155798000, "25300", "North Bound: 11800 / South Bound: 13500", "41.824905", "-87.694671", [ null, "41.824905", "-87.694671", null, false ] ]
, [ 445, "BD1F3A4E-9840-49EA-BEB8-A70964196A07", 445, 1273092889, "386464", 1273092889, "386464", null, "479", "2719 West", "35th St", 1159254000, "11600", "East Bound: 4800 / West Bound: 6800", "41.830119", "-87.693144", [ null, "41.830119", "-87.693144", null, false ] ]
, [ 1092, "0B2465FE-8E06-42A4-9594-490633F4F570", 1092, 1273092889, "386464", 1273092889, "386464", null, "1177", "3425 South", "Kedzie Ave", 1155193200, "32800", "North Bound: 15300 / South Bound: 17500", "41.831089", "-87.704652", [ null, "41.831089", "-87.704652", null, false ] ]
, [ 711, "7188A30D-4142-4679-92C3-AB16FFFAE80B", 711, 1273092889, "386464", 1273092889, "386464", null, "762", "3121 South", "Pulaski Rd", 1158217200, "29500", "North Bound: 15400 / South Bound: 14100", "41.836244", "-87.724337", [ null, "41.836244", "-87.724337", null, false ] ]
, [ 524, "84D88917-D4A9-4C43-8DC4-C3806067C937", 524, 1273092889, "386464", 1273092889, "386464", null, "560", "4224 West", "31st St", 1163577600, "20500", "East Bound: 9900 / West Bound: 10600", "41.836814", "-87.730379", [ null, "41.836814", "-87.730379", null, false ] ]
, [ 494, "BBC64E31-39C8-469D-B7A4-440002C1E796", 494, 1273092889, "386464", 1273092889, "386464", null, "530", "3900 West", "31st St", 1158217200, "20100", "East Bound: 9100 / West Bound: 11000", "41.836923", "-87.721956", [ null, "41.836923", "-87.721956", null, false ] ]
, [ 744, "6CA1DD77-3460-404F-81C1-7C82B2739028", 744, 1273092889, "386464", 1273092889, "386464", null, "799", "3110 South", "California Ave", 1155798000, "30800", "North Bound: 15900 / South Bound: 14900", "41.836927", "-87.695017", [ null, "41.836927", "-87.695017", null, false ] ]
, [ 1083, "B31320BF-23A0-41EB-B35C-C57F9F234267", 1083, 1273092889, "386464", 1273092889, "386464", null, "1167", "3750 West", "31st St", 1158217200, "18800", "East Bound: 9000 / West Bound: 9800", "41.836974", "-87.719101", [ null, "41.836974", "-87.719101", null, false ] ]
, [ 499, "FBE68C99-14BC-4BFE-9D16-79719AA5882C", 499, 1273092889, "386464", 1273092889, "386464", null, "535", "3252 West", "31st St", 1158217200, "20600", "East Bound: 9100 / West Bound: 11500", "41.837188", "-87.706989", [ null, "41.837188", "-87.706989", null, false ] ]
, [ 515, "82DA3E2A-CDD5-4340-A894-9EFF2B69D977", 515, 1273092889, "386464", 1273092889, "386464", null, "551", "2825 West", "31st St", 1158217200, "17700", "East Bound: 8800 / West Bound: 8900", "41.837394", "-87.696", [ null, "41.837394", "-87.696", null, false ] ]
, [ 569, "58A16D0C-FE5C-4E45-B2E8-34C693CF3783", 569, 1273092889, "386464", 1273092889, "386464", null, "609", "3030 South", "Kostner Ave", 1158044400, "9600", "North Bound: 4400 / South Bound: 5200", "41.837654", "-87.734096", [ null, "41.837654", "-87.734096", null, false ] ]
, [ 1091, "D416BA60-CBBF-437F-8361-4E701354DEBA", 1091, 1273092889, "386464", 1273092889, "386464", null, "1176", "3026 South", "Homan Ave", 1158217200, "2000", "North Bound: 2000 / / Oneway North Bound ", "41.83815", "-87.709739", [ null, "41.83815", "-87.709739", null, false ] ]
, [ 1082, "955426CA-2511-4E05-8F10-2BCA25794C27", 1082, 1273092889, "386464", 1273092889, "386464", null, "1166", "2550 West", "31st St", 1160550000, "14900", "East Bound: 7000 / West Bound: 7900", "41.838156", "-87.689438", [ null, "41.838156", "-87.689438", null, false ] ]
, [ 571, "14398FB3-509A-4C34-B0DB-8B33F9ABEE52", 571, 1273092889, "386464", 1273092889, "386464", null, "611", "3026 South", "California Ave", 1155798000, "23400", "North Bound: 11800 / South Bound: 11600", "41.838385", "-87.695058", [ null, "41.838385", "-87.695058", null, false ] ]
, [ 570, "F0558567-F855-4B83-8CF5-3DCB7EB18505", 570, 1273092889, "386464", 1273092889, "386464", null, "610", "3001 South", "Kedzie Ave", 1155193200, "25400", "North Bound: 12500 / South Bound: 12900", "41.839026", "-87.704872", [ null, "41.839026", "-87.704872", null, false ] ]
, [ 764, "6CCE4495-F58A-494F-95ED-576B123B61E6", 764, 1273092889, "386464", 1273092889, "386464", null, "820", "4418 West", "26th St", 1163664000, "14800", "East Bound: 7300 / West Bound: 7500", "41.844102", "-87.735004", [ null, "41.844102", "-87.735004", null, false ] ]
, [ 954, "85E106D1-5C59-4E9F-A7E7-160EBB1F643E", 954, 1273092889, "386464", 1273092889, "386464", null, "1022", "4344 West", "26th St", 1158044400, "17300", "East Bound: 8100 / West Bound: 9200", "41.844137", "-87.732725", [ null, "41.844137", "-87.732725", null, false ] ]
, [ 692, "916D87DE-7770-4029-8353-E9CC15ECDB2D", 692, 1273092889, "386464", 1273092889, "386464", null, "740", "4306 West", "26th St", 1158044400, "8400", "East Bound: 4500 / West Bound: 3900", "41.844157", "-87.731356", [ null, "41.844157", "-87.731356", null, false ] ]
, [ 953, "7F081A28-216F-432C-99DE-C96A193C60B2", 953, 1273092889, "386464", 1273092889, "386464", null, "1021", "3734 West", "26th St", 1158217200, "18400", "East Bound: 9000 / West Bound: 9400", "41.844328", "-87.718582", [ null, "41.844328", "-87.718582", null, false ] ]
, [ 397, "D3C09DAE-0A9E-4AF3-899A-35FDD0BA3C84", 397, 1273092889, "386464", 1273092889, "386464", null, "428", "2900 West", "26th St", 1160982000, "13700", "East Bound: 2600 / West Bound: 11100", "41.844657", "-87.697733", [ null, "41.844657", "-87.697733", null, false ] ]
, [ 1087, "7F61DE8A-911E-4EB1-ACC7-0AE5B229468B", 1087, 1273092889, "386464", 1273092889, "386464", null, "1171", "2505 South", "Central Park Ave", 1158217200, "10300", "North Bound: 4500 / South Bound: 5800", "41.846067", "-87.714837", [ null, "41.846067", "-87.714837", null, false ] ]
, [ 572, "1AB14A44-43E7-400C-A84F-CD0B45C3B317", 572, 1273092889, "386464", 1273092889, "386464", null, "612", "2501 South", "Hamlin Ave", 1158217200, "3200", "South Bound: 3200/ Oneway South Bound ", "41.846135", "-87.719725", [ null, "41.846135", "-87.719725", null, false ] ]
, [ 1095, "45333E8C-28E5-4C4C-BBA0-8D49B4C7CE11", 1095, 1273092889, "386464", 1273092889, "386464", null, "1181", "2455 South", "Pulaski Rd", 1158217200, "21500", "North Bound: 11600 / South Bound: 9900", "41.846235", "-87.72462", [ null, "41.846235", "-87.72462", null, false ] ]
, [ 525, "F95BE5AB-FD3E-40B9-A479-A3F347625E6F", 525, 1273092889, "386464", 1273092889, "386464", null, "561", "4040 West", "Ogden St", 1163577600, "20500", "East Bound: 10200 / West Bound: 10300", "41.850584", "-87.726087", [ null, "41.850584", "-87.726087", null, false ] ]
, [ 765, "7CC2A4C2-2FFF-4D95-BF01-5DFD825382EB", 765, 1273092889, "386464", 1273092889, "386464", null, "821", "4042 West", "Cermak Rd", 1163491200, "23200", "East Bound: 12800 / West Bound: 10400", "41.851522", "-87.726497", [ null, "41.851522", "-87.726497", null, false ] ]
, [ 1088, "6734CACF-D972-4425-95CE-807D88B5615A", 1088, 1273092889, "386464", 1273092889, "386464", null, "1173", "3658 West", "Cermak Rd", 1158217200, "18000", "East Bound: 8900 / West Bound: 9100", "41.851632", "-87.717386", [ null, "41.851632", "-87.717386", null, false ] ]
, [ 400, "B74E5D7D-58B4-4FAA-9893-9EE199942063", 400, 1273092889, "386464", 1273092889, "386464", null, "431", "2703 West", "Cermak Rd", 1158217200, "14200", "East Bound: 7600 / West Bound: 6600", "41.851933", "-87.693114", [ null, "41.851933", "-87.693114", null, false ] ]
, [ 574, "CD94CD1D-20FF-4200-8B6F-53A4C9AB56F9", 574, 1273092889, "386464", 1273092889, "386464", null, "614", "2149 South", "California Ave", 1155625200, "17700", "North Bound: 8800 / South Bound: 8900", "41.852259", "-87.695456", [ null, "41.852259", "-87.695456", null, false ] ]
, [ 1086, "05C9DF4E-CB9A-476C-9702-8FD253088AF8", 1086, 1273092889, "386464", 1273092889, "386464", null, "1170", "2126 South", "Central Park Ave", 1158217200, "9100", "North Bound: 4400 / South Bound: 4700", "41.852621", "-87.715027", [ null, "41.852621", "-87.715027", null, false ] ]
, [ 573, "68BDC44B-A90B-450A-B383-445B251F0E1D", 573, 1273092889, "386464", 1273092889, "386464", null, "613", "2130 South", "Marshall Blvd", 1158217200, "18800", "North Bound: 8600 / South Bound: 10200", "41.852795", "-87.699117", [ null, "41.852795", "-87.699117", null, false ] ]
, [ 1096, "4CD82C51-C382-4E55-B2F6-A1DD8899BB13", 1096, 1273092889, "386464", 1273092889, "386464", null, "1182", "2119 South", "Pulaski Rd", 1158044400, "20200", "North Bound: 10600 / South Bound: 9600", "41.852808", "-87.724789", [ null, "41.852808", "-87.724789", null, false ] ]
, [ 1093, "A7468246-9172-473F-A5A7-BF673BF909A2", 1093, 1273092889, "386464", 1273092889, "386464", null, "1178", "2004 South", "Kostner Ave", 1158044400, "19200", "North Bound: 10000 / South Bound: 9200", "41.854103", "-87.734588", [ null, "41.854103", "-87.734588", null, false ] ]
 ]
}
});