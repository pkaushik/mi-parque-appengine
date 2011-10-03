define(function() {
return {
  "meta" : {
    "view" : {
      "id" : "3pqi-8pfr",
      "name" : "Average Daily Traffic Counts",
      "attribution" : "City of Chicago",
      "attributionLink" : "http://www.cityofchicago.org",
      "averageRating" : 0,
      "category" : "Transportation",
      "description" : "Average Daily Traffic (ADT) counts are analogous to a census count of vehicles on city streets. These counts provide a close approximation to the actual number of vehicles passing through a given location on an average weekday. Since it is not possible to count every vehicle on every city street, sample counts are taken along larger streets to get an estimate of traffic on half-mile or one-mile street segments. ADT counts are used by city planners, transportation engineers, real-estate developers, marketers and many others for myriad planning and operational purposes.\r\nData Owner: Transportation.\r\nTime Period: 2006.\r\nFrequency: A citywide count is taken approximately every 10 years. A limited number of traffic counts will be taken and added to the list periodically.\r\nRelated Applications: Traffic Information Interactive Map (http://webapps.cityofchicago.org/traffic/).",
      "displayType" : "map",
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
        "id" : 2459455,
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
        "id" : 2459456,
        "name" : "Traffic Volume Count Location  Address",
        "dataTypeName" : "text",
        "fieldName" : "traffic_volume_count_location_address",
        "position" : 2,
        "renderTypeName" : "text",
        "tableColumnId" : 1358386,
        "width" : 222
      }, {
        "id" : 2459457,
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
        "id" : 2459458,
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
        "id" : 2459459,
        "name" : "Total Passing Vehicle Volume",
        "dataTypeName" : "number",
        "fieldName" : "total_passing_vehicle_volume",
        "position" : 5,
        "renderTypeName" : "number",
        "tableColumnId" : 1358389,
        "width" : 172
      }, {
        "id" : 2459460,
        "name" : "Vehicle Volume By Each Direction of Traffic",
        "dataTypeName" : "text",
        "fieldName" : "vehicle_volume_by_each_direction_of_traffic",
        "position" : 6,
        "renderTypeName" : "text",
        "tableColumnId" : 1358390,
        "width" : 250
      }, {
        "id" : 2459462,
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
        "id" : 2459461,
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
        "id" : 2741073,
        "name" : "Location",
        "dataTypeName" : "location",
        "fieldName" : "location",
        "position" : 11,
        "renderTypeName" : "location",
        "tableColumnId" : 1474923,
        "width" : 100,
        "subColumnTypes" : [ "human_address", "latitude", "longitude", "machine_address", "needs_recoding" ]
      } ],
      "displayFormat" : {
        "viewport" : {
          "center" : {
            "lng" : -87.65649709780415,
            "lat" : 41.85084982600055
          },
          "ymin" : 41.803521,
          "ymax" : 41.898143,
          "zoom" : 12,
          "xmin" : -87.82009,
          "xmax" : -87.492904
        },
        "plotStyle" : "point",
        "type" : "google",
        "plot" : {
          "locationId" : 1474923
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
            "Frequency" : " A citywide count is taken approximately every 10 years. A limited number o.f traffic counts will be taken and added to the list periodically"
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
            "value" : "AND",
            "children" : [ {
              "type" : "operator",
              "value" : "GREATER_THAN",
              "children" : [ {
                "columnId" : 2741073,
                "type" : "column",
                "value" : "LONGITUDE"
              }, {
                "type" : "literal",
                "value" : "-87.82009"
              } ]
            }, {
              "type" : "operator",
              "value" : "LESS_THAN",
              "children" : [ {
                "columnId" : 2741073,
                "type" : "column",
                "value" : "LONGITUDE"
              }, {
                "type" : "literal",
                "value" : "-87.492904"
              } ]
            }, {
              "type" : "operator",
              "value" : "GREATER_THAN",
              "children" : [ {
                "columnId" : 2741073,
                "type" : "column",
                "value" : "LATITUDE"
              }, {
                "type" : "literal",
                "value" : "41.803521"
              } ]
            }, {
              "type" : "operator",
              "value" : "LESS_THAN",
              "children" : [ {
                "columnId" : 2741073,
                "type" : "column",
                "value" : "LATITUDE"
              }, {
                "type" : "literal",
                "value" : "41.898143"
              } ]
            } ]
          } ]
        }
      },
      "rights" : [ "read" ],
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
          "value" : "AND",
          "children" : [ {
            "type" : "operator",
            "value" : "GREATER_THAN",
            "children" : [ {
              "columnId" : 2741073,
              "type" : "column",
              "value" : "LONGITUDE"
            }, {
              "type" : "literal",
              "value" : "-87.82009"
            } ]
          }, {
            "type" : "operator",
            "value" : "LESS_THAN",
            "children" : [ {
              "columnId" : 2741073,
              "type" : "column",
              "value" : "LONGITUDE"
            }, {
              "type" : "literal",
              "value" : "-87.492904"
            } ]
          }, {
            "type" : "operator",
            "value" : "GREATER_THAN",
            "children" : [ {
              "columnId" : 2741073,
              "type" : "column",
              "value" : "LATITUDE"
            }, {
              "type" : "literal",
              "value" : "41.803521"
            } ]
          }, {
            "type" : "operator",
            "value" : "LESS_THAN",
            "children" : [ {
              "columnId" : 2741073,
              "type" : "column",
              "value" : "LATITUDE"
            }, {
              "type" : "literal",
              "value" : "41.898143"
            } ]
          } ]
        } ]
      },
      "flags" : [ "unsaved" ]
    }
  },
  "data" : [ [ 13, "3AF3E9AE-1FB8-4592-A3BC-82FCE5C38CB6", 13, 1273092889, "386464", 1273092889, "386464", null, "14", "4107 South", "Cottage Grove Ave", 1143705600, "10800", "North Bound: 5600 / South Bound: 5200", "41.820171", "-87.606798", [ null, "41.820171", "-87.606798", null, false ] ]
, [ 14, "B17C9446-0C7A-4DE3-A1BA-1387257C95FA", 14, 1273092889, "386464", 1273092889, "386464", null, "15", "4750 South", "Cottage Grove Ave", 1141200000, "14200", "North Bound: 7000 / South Bound: 7200", "41.807987", "-87.606532", [ null, "41.807987", "-87.606532", null, false ] ]
, [ 22, "A491C770-D168-4209-85E4-9E80445639FB", 22, 1273092889, "386464", 1273092889, "386464", null, "24", "1603 South", "Damen Ave", 1141286400, "18800", "North Bound: 9600 / South Bound: 9200", "41.859378", "-87.676043", [ null, "41.859378", "-87.676043", null, false ] ]
, [ 23, "82CEAED5-10AC-4DA8-A4FF-188A45FF9793", 23, 1273092889, "386464", 1273092889, "386464", null, "25", "1959 South", "Damen Ave", 1141286400, "15300", "North Bound: 7700 / South Bound: 7600", "41.854926", "-87.67592", [ null, "41.854926", "-87.67592", null, false ] ]
, [ 24, "94BA0C91-A441-47F4-88F6-C4AF85B8AB26", 24, 1273092889, "386464", 1273092889, "386464", null, "26", "2259 South", "Damen Ave", 1141286400, "14800", "North Bound: 8000 / South Bound: 6800", "41.850395", "-87.67579", [ null, "41.850395", "-87.67579", null, false ] ]
, [ 25, "684A5E99-FF52-4327-AE08-ACF9E3DF1F78", 25, 1273092889, "386464", 1273092889, "386464", null, "27", "2566 South", "Damen Ave", 1147158000, "28000", "North Bound: 13800 / South Bound: 14200", "41.844875", "-87.675652", [ null, "41.844875", "-87.675652", null, false ] ]
, [ 26, "B8683D41-08C9-4B91-B254-EDF189356585", 26, 1273092889, "386464", 1273092889, "386464", null, "28", "3460 South", "Damen Ave", 1141286400, "8100", "North Bound: 3800 / South Bound: 4300", "41.830389", "-87.675279", [ null, "41.830389", "-87.675279", null, false ] ]
, [ 27, "25DF38DE-E51F-4C40-AAA6-504D2DC169EC", 27, 1273092889, "386464", 1273092889, "386464", null, "29", "3630 South", "Damen Ave", 1141200000, "7000", "North Bound: 3200 / South Bound: 3800", "41.827625", "-87.675208", [ null, "41.827625", "-87.675208", null, false ] ]
, [ 28, "0E7CC54D-CEC2-427B-A212-DBE281E8DF98", 28, 1273092889, "386464", 1273092889, "386464", null, "31", "4936 South", "Damen Ave", 1141891200, "10900", "North Bound: 5900 / South Bound: 5000", "41.803741", "-87.674569", [ null, "41.803741", "-87.674569", null, false ] ]
, [ 32, "CF221517-5D56-4B97-A371-F14C7835A2A4", 32, 1273092889, "386464", 1273092889, "386464", null, "36", "3030 South", "Dr Martin Luther King Jr Dr", 1142323200, "19900", "North Bound: 10000 / South Bound: 9900", "41.838419", "-87.617465", [ null, "41.838419", "-87.617465", null, false ] ]
, [ 33, "89B54939-133E-4DC8-9650-5666D8C2AA40", 33, 1273092889, "386464", 1273092889, "386464", null, "37", "3748 South", "Dr Martin Luther King Jr Dr", 1141286400, "15600", "North Bound: 7300 / South Bound: 8300", "41.825982", "-87.617039", [ null, "41.825982", "-87.617039", null, false ] ]
, [ 34, "EDC91D48-DBAC-4DB0-8D52-79C77BA5F65D", 34, 1273092889, "386464", 1273092889, "386464", null, "38", "4358 South", "Dr Martin Luther King Jr Dr", 1141286400, "14500", "North Bound: 6600 / South Bound: 7900", "41.814852", "-87.616741", [ null, "41.814852", "-87.616741", null, false ] ]
, [ 41, "7408DD10-5FD3-44B1-AF52-718FA549FA74", 41, 1273092889, "386464", 1273092889, "386464", null, "47", "1407 South", "Indiana Ave", 1146553200, "8300", "North Bound: 4900 / South Bound: 3400", "41.863938", "-87.622471", [ null, "41.863938", "-87.622471", null, false ] ]
, [ 42, "5B763D53-487B-4235-84B9-07B6AD90EFF1", 42, 1273092889, "386464", 1273092889, "386464", null, "48", "1933 South", "Indiana Ave", 1141286400, "6100", "North Bound: 3800 / South Bound: 2300", "41.85566", "-87.62228", [ null, "41.85566", "-87.62228", null, false ] ]
, [ 43, "3D1405A5-CAB7-426B-AE3C-BBB32DC3F93D", 43, 1273092889, "386464", 1273092889, "386464", null, "52", "3420 South", "Indiana Ave", 1146553200, "7400", "North Bound: 7400 / / Oneway North Bound", "41.832167", "-87.621788", [ null, "41.832167", "-87.621788", null, false ] ]
, [ 44, "607A205D-0B4E-412F-B215-9BABB4442BAE", 44, 1273092889, "386464", 1273092889, "386464", null, "53", "3654 South", "Indiana Ave", 1141286400, "6000", "North Bound: 6000 / / Oneway North Bound", "41.828022", "-87.621694", [ null, "41.828022", "-87.621694", null, false ] ]
, [ 55, "F1C78084-FA90-41B4-A05E-5E118D02320E", 55, 1273092889, "386464", 1273092889, "386464", null, "66", "2350 South", "Dr Martin Luther King Jr Dr", 1146553200, "18100", "North Bound: 10700 / South Bound: 7400", "41.849344", "-87.618459", [ null, "41.849344", "-87.618459", null, false ] ]
, [ 57, "B4B2777D-C961-4BD0-8801-55C4F32C8CFA", 57, 1273092889, "386464", 1273092889, "386464", null, "68", "1255 South", "Michigan Ave", 1141286400, "20600", "North Bound: 11200 / South Bound: 9400", "41.865924", "-87.624115", [ null, "41.865924", "-87.624115", null, false ] ]
, [ 58, "515793C4-DE43-4418-92B1-C090FC357C2D", 58, 1273092889, "386464", 1273092889, "386464", null, "69", "2317 South", "Michigan Ave", 1141286400, "13000", "North Bound: 5800 / South Bound: 7200", "41.850595", "-87.623745", [ null, "41.850595", "-87.623745", null, false ] ]
, [ 59, "5C4192AC-7188-4518-9362-5D745070A41D", 59, 1273092889, "386464", 1273092889, "386464", null, "70", "2950 South", "Michigan Ave", 1141286400, "13200", "North Bound: 5100 / South Bound: 8100", "41.839562", "-87.623493", [ null, "41.839562", "-87.623493", null, false ] ]
, [ 60, "A529E873-1069-4C03-98CB-A785D4D6477A", 60, 1273092889, "386464", 1273092889, "386464", null, "71", "3311 South", "Michigan Ave", 1141286400, "8100", "South Bound: 8100/ Oneway South Bound", "41.834369", "-87.623323", [ null, "41.834369", "-87.623323", null, false ] ]
, [ 61, "F0B42A62-826E-4143-B22B-F2BEB6322715", 61, 1273092889, "386464", 1273092889, "386464", null, "72", "3721 South", "Michigan Ave", 1141286400, "8000", "South Bound: 8000/ Oneway South Bound", "41.826807", "-87.623149", [ null, "41.826807", "-87.623149", null, false ] ]
, [ 62, "298FB4C2-5B58-42C2-83D6-923ADD2C5C09", 62, 1273092889, "386464", 1273092889, "386464", null, "73", "4563 South", "Michigan Ave", 1141286400, "7900", "South Bound: 7900/ Oneway South Bound", "41.811191", "-87.622886", [ null, "41.811191", "-87.622886", null, false ] ]
, [ 68, "BF48E23A-CA44-496B-9C02-9F031950CF85", 68, 1273092889, "386464", 1273092889, "386464", null, "81", "1420 South", "State St", 1146553200, "23100", "North Bound: 13500 / South Bound: 9600", "41.863436", "-87.62733", [ null, "41.863436", "-87.62733", null, false ] ]
, [ 69, "DACDAF74-D24C-48E5-9503-47B1D1289899", 69, 1273092889, "386464", 1273092889, "386464", null, "82", "3333 South", "State St", 1141718400, "10100", "North Bound: 6700 / South Bound: 3400", "41.833661", "-87.626468", [ null, "41.833661", "-87.626468", null, false ] ]
, [ 70, "744B6790-B638-42BE-8ACB-374279BB7770", 70, 1273092889, "386464", 1273092889, "386464", null, "83", "4605 South", "State St", 1146553200, "21500", "North Bound: 11200 / South Bound: 10300", "41.810903", "-87.626128", [ null, "41.810903", "-87.626128", null, false ] ]
, [ 77, "734BDE91-5409-4243-8D02-2E49A0273E5A", 77, 1273092889, "386464", 1273092889, "386464", null, "90", "2130 South", "Wentworth Ave", 1141718400, "4500", "North Bound: 2300 / South Bound: 2200", "41.853156", "-87.631785", [ null, "41.853156", "-87.631785", null, false ] ]
, [ 80, "F9251982-9262-4840-B1CF-78968A1A31AC", 80, 1273092889, "386464", 1273092889, "386464", null, "93", "3430 South", "Archer Ave", 1141804800, "23400", "North Bound: 11300 / South Bound: 12100", "41.831501", "-87.67584", [ null, "41.831501", "-87.67584", null, false ] ]
, [ 81, "4B168A3A-CF52-4B03-9845-23E05C09F56B", 81, 1273092889, "386464", 1273092889, "386464", null, "94", "2140 South", "Archer Ave", 1141804800, "11800", "North Bound: 5200 / South Bound: 6600", "41.853553", "-87.633392", [ null, "41.853553", "-87.633392", null, false ] ]
, [ 82, "F7A1C838-1D58-4BB1-99F7-B864032F66AE", 82, 1273092889, "386464", 1273092889, "386464", null, "95", "4709 South", "Archer Ave", 1141804800, "27800", "North Bound: 13600 / South Bound: 14200", "41.807818", "-87.714468", [ null, "41.807818", "-87.714468", null, false ] ]
, [ 83, "430B4B89-7D01-451E-BE0D-F4ECF1255DD8", 83, 1273092889, "386464", 1273092889, "386464", null, "96", "2345 South", "Archer Ave", 1141804800, "13300", "North Bound: 7100 / South Bound: 6200", "41.849975", "-87.64032", [ null, "41.849975", "-87.64032", null, false ] ]
, [ 84, "55448F65-7BD7-46C7-8728-E08FA13742C2", 84, 1273092889, "386464", 1273092889, "386464", null, "97", "3247 South", "Archer Ave", 1141804800, "15100", "North Bound: 8200 / South Bound: 6900", "41.835106", "-87.669954", [ null, "41.835106", "-87.669954", null, false ] ]
, [ 85, "8E942AB7-F3FB-41E2-AB1F-74AF8B393BF0", 85, 1273092889, "386464", 1273092889, "386464", null, "98", "320 South", "Ashland Ave", 1142928000, "29300", "North Bound: 15200 / South Bound: 14100", "41.876934", "-87.666676", [ null, "41.876934", "-87.666676", null, false ] ]
, [ 86, "D56E43E0-DA15-47CB-9761-F2F64ED631F2", 86, 1273092889, "386464", 1273092889, "386464", null, "99", "711 South", "Ashland Ave", 1142928000, "38700", "North Bound: 21100 / South Bound: 17600", "41.872567", "-87.66656", [ null, "41.872567", "-87.66656", null, false ] ]
, [ 87, "60150B92-FC87-412B-B43D-52CD0BCF86AB", 87, 1273092889, "386464", 1273092889, "386464", null, "100", "1447 South", "Ashland Ave", 1142928000, "38300", "North Bound: 19800 / South Bound: 18500", "41.861874", "-87.666256", [ null, "41.861874", "-87.666256", null, false ] ]
, [ 94, "51AC104F-6DCF-448E-BCA7-20107F9E8A89", 94, 1273092889, "386464", 1273092889, "386464", null, "109", "719 South", "Clark St", 1142409600, "13600", "North Bound: 6500 / South Bound: 7100", "41.873009", "-87.630632", [ null, "41.873009", "-87.630632", null, false ] ]
, [ 95, "24BB5139-6C24-4162-B2E0-B0422EA746B2", 95, 1273092889, "386464", 1273092889, "386464", null, "110", "996 South", "Clark St", 1143014400, "22600", "North Bound: 12500 / South Bound: 10100", "41.869893", "-87.630511", [ null, "41.869893", "-87.630511", null, false ] ]
, [ 96, "585EC606-1A3F-40B8-9CA7-4423DE373FDD", 96, 1273092889, "386464", 1273092889, "386464", null, "111", "1515 South", "Clark St", 1143014400, "23000", "North Bound: 12700 / South Bound: 10300", "41.861478", "-87.630255", [ null, "41.861478", "-87.630255", null, false ] ]
, [ 97, "5E62A12B-3E7E-42DF-BF79-04F7870EEE2E", 97, 1273092889, "386464", 1273092889, "386464", null, "112", "1918 South", "Clark St", 1142409600, "14800", "North Bound: 8500 / South Bound: 6300", "41.855964", "-87.630176", [ null, "41.855964", "-87.630176", null, false ] ]
, [ 98, "4ED3755A-EB9D-4874-A8EA-593DCC3C93A0", 98, 1273092889, "386464", 1273092889, "386464", null, "113", "2123 South", "Clark St", 1142409600, "12800", "North Bound: 7300 / South Bound: 5500", "41.853467", "-87.630093", [ null, "41.853467", "-87.630093", null, false ] ]
, [ 99, "6B924538-DBC9-4341-BFEA-0A876C96F119", 99, 1273092889, "386464", 1273092889, "386464", null, "114", "700 South", "Halsted St", 1142928000, "15600", "North Bound: 6700 / South Bound: 8900", "41.87346", "-87.647091", [ null, "41.87346", "-87.647091", null, false ] ]
, [ 100, "CF0A7C85-7E71-44E1-AC78-3C7E22886EA4", 100, 1273092889, "386464", 1273092889, "386464", null, "115", "1302 South", "Halsted St", 1142928000, "13400", "North Bound: 5900 / South Bound: 7500", "41.865313", "-87.646862", [ null, "41.865313", "-87.646862", null, false ] ]
, [ 101, "643D1236-9B41-47F3-B294-D866778E17CC", 101, 1273092889, "386464", 1273092889, "386464", null, "116", "3541 South", "Halsted St", 1142928000, "15300", "North Bound: 7900 / South Bound: 7400", "41.829513", "-87.646078", [ null, "41.829513", "-87.646078", null, false ] ]
, [ 113, "9CE8EAA8-A68F-44B9-AAAE-CAC1A93E0FDB", 113, 1273092889, "386464", 1273092889, "386464", null, "130", "721 South", "Western Ave", 1143014400, "29500", "North Bound: 14900 / South Bound: 14600", "41.872427", "-87.686197", [ null, "41.872427", "-87.686197", null, false ] ]
, [ 114, "326E02D5-DD44-4BC3-83DB-D2AC04D7F830", 114, 1273092889, "386464", 1273092889, "386464", null, "131", "2446 South", "Western Ave", 1142323200, "25500", "North Bound: 12800 / South Bound: 12700", "41.847006", "-87.685499", [ null, "41.847006", "-87.685499", null, false ] ]
, [ 115, "AE46679A-B3B2-420B-80C5-23F14E7B0B09", 115, 1273092889, "386464", 1273092889, "386464", null, "132", "3225 South", "Western Ave", 1143014400, "35300", "North Bound: 18100 / South Bound: 17200", "41.834882", "-87.684561", [ null, "41.834882", "-87.684561", null, false ] ]
, [ 116, "D214FE58-9289-418A-BE30-4719C3E01443", 116, 1273092889, "386464", 1273092889, "386464", null, "133", "4028 South", "Western Ave", 1142323200, "25600", "North Bound: 12900 / South Bound: 12700", "41.820278", "-87.684745", [ null, "41.820278", "-87.684745", null, false ] ]
, [ 204, "3AA59B2E-F9E9-49A9-AD40-274BCED592A9", 204, 1273092889, "386464", 1273092889, "386464", null, "225", "1359 South", "Loomis St", 1143014400, "4200", "North Bound: 2300 / South Bound: 1900", "41.863965", "-87.661484", [ null, "41.863965", "-87.661484", null, false ] ]
, [ 205, "B46D850D-5380-4B74-A5DC-70C35390DFA5", 205, 1273092889, "386464", 1273092889, "386464", null, "226", "1905 South", "Loomis St", 1141891200, "5300", "North Bound: 2300 / South Bound: 3000", "41.855898", "-87.661264", [ null, "41.855898", "-87.661264", null, false ] ]
, [ 212, "4B64D0A8-9620-4F2D-96A7-EC09BFF19DF1", 212, 1273092889, "386464", 1273092889, "386464", null, "233", "1031 South", "Racine Ave", 1143705600, "10700", "North Bound: 6400 / South Bound: 4300", "41.86852", "-87.656729", [ null, "41.86852", "-87.656729", null, false ] ]
, [ 213, "566C607C-4ACF-4D99-8968-9F5A93E8C9F1", 213, 1273092889, "386464", 1273092889, "386464", null, "234", "1340 South", "Racine Ave", 1143014400, "5400", "North Bound: 2500 / South Bound: 2900", "41.864029", "-87.656597", [ null, "41.864029", "-87.656597", null, false ] ]
, [ 214, "784AC3C5-021E-4167-8647-00D674B25B12", 214, 1273092889, "386464", 1273092889, "386464", null, "235", "3538 South", "Racine Ave", 1143100800, "2600", "North Bound: 1100 / South Bound: 1500", "41.829325", "-87.655686", [ null, "41.829325", "-87.655686", null, false ] ]
, [ 215, "C9D3D409-AED1-4024-BF50-99530C0BA3EE", 215, 1273092889, "386464", 1273092889, "386464", null, "236", "4411 South", "Racine Ave", 1143100800, "6700", "North Bound: 3400 / South Bound: 3300", "41.813903", "-87.655287", [ null, "41.813903", "-87.655287", null, false ] ]
, [ 222, "92099EA1-0701-443A-95CC-663DD725EB50", 222, 1273092889, "386464", 1273092889, "386464", null, "243", "2263 West", "18th Street", 1143705600, "6700", "East Bound: 3200 / West Bound: 3500", "41.857573", "-87.683337", [ null, "41.857573", "-87.683337", null, false ] ]
, [ 223, "4F4FE442-39DB-4D28-83D9-82CEF54ADDC8", 223, 1273092889, "386464", 1273092889, "386464", null, "244", "223 West", "18th Street", 1143705600, "8500", "East Bound: 4300 / West Bound: 4200", "41.85774", "-87.632821", [ null, "41.85774", "-87.632821", null, false ] ]
, [ 224, "41E5F2AD-C61D-4F61-9AA7-68FD32910559", 224, 1273092889, "386464", 1273092889, "386464", null, "245", "68 West", "18th St", 1146034800, "8100", "East Bound: 3900 / West Bound: 4200", "41.857869", "-87.624476", [ null, "41.857869", "-87.624476", null, false ] ]
, [ 225, "AE427EBE-31E4-41FE-A7E1-C8E3B43F1E8B", 225, 1273092889, "386464", 1273092889, "386464", null, "246", "118 West", "18th St", 1145948400, "3800", "East Bound: 1900 / West Bound: 1900", "41.85789", "-87.622993", [ null, "41.85789", "-87.622993", null, false ] ]
, [ 226, "DBBF9937-52DD-4F11-BD10-887B70429B05", 226, 1273092889, "386464", 1273092889, "386464", null, "247", "943 West", "31st St", 1143705600, "10000", "East Bound: 4800 / West Bound: 5200", "41.837991", "-87.650405", [ null, "41.837991", "-87.650405", null, false ] ]
, [ 227, "5CE6C1AE-3DBD-4007-990A-9B68FBCB94EB", 227, 1273092889, "386464", 1273092889, "386464", null, "248", "1139 West", "31st St", 1143705600, "8200", "East Bound: 4100 / West Bound: 4100", "41.837927", "-87.655", [ null, "41.837927", "-87.655", null, false ] ]
, [ 228, "8C2C6A7B-3E92-4736-8517-0617878958C8", 228, 1273092889, "386464", 1273092889, "386464", null, "249", "315 West", "31st St", 1146726000, "16100", "East Bound: 8100 / West Bound: 8000", "41.838196", "-87.634756", [ null, "41.838196", "-87.634756", null, false ] ]
, [ 229, "E9E7E5E8-6E9B-4E13-9776-0D7581B3B55C", 229, 1273092889, "386464", 1273092889, "386464", null, "250", "20 West", "31st St", 1145948400, "14400", "East Bound: 6900 / West Bound: 7500", "41.838289", "-87.627562", [ null, "41.838289", "-87.627562", null, false ] ]
, [ 230, "849F3E20-CFA0-4385-A588-8542AF6670CC", 230, 1273092889, "386464", 1273092889, "386464", null, "252", "217 East", "31st St", 1145948400, "14000", "East Bound: 6000 / West Bound: 8000", "41.838373", "-87.621143", [ null, "41.838373", "-87.621143", null, false ] ]
, [ 231, "54FA4A0D-F1A7-455F-A6DC-637E49973401", 231, 1273092889, "386464", 1273092889, "386464", null, "253", "2307 West", "35th St", 1143705600, "10200", "East Bound: 5300 / West Bound: 4900", "41.830303", "-87.682868", [ null, "41.830303", "-87.682868", null, false ] ]
, [ 232, "418248BC-7CF5-4BC1-8EE2-58A199C9B9DA", 232, 1273092889, "386464", 1273092889, "386464", null, "254", "2017 West", "35th St", 1143619200, "15200", "East Bound: 7800 / West Bound: 7400", "41.830382", "-87.67602", [ null, "41.830382", "-87.67602", null, false ] ]
, [ 233, "14E06369-7809-48F0-AFF8-801EA76F3BF3", 233, 1273092889, "386464", 1273092889, "386464", null, "255", "1301 West", "35th St", 1145948400, "17000", "East Bound: 9100 / West Bound: 7900", "41.830598", "-87.657426", [ null, "41.830598", "-87.657426", null, false ] ]
, [ 234, "757C4BA1-67F4-4062-A25A-81C0B3AE0EAE", 234, 1273092889, "386464", 1273092889, "386464", null, "256", "507 West", "35th St", 1145948400, "15900", "East Bound: 6500 / West Bound: 9400", "41.830843", "-87.639107", [ null, "41.830843", "-87.639107", null, false ] ]
, [ 235, "2CAAA168-EF4B-4DAC-8E73-AC352BE5B8AB", 235, 1273092889, "386464", 1273092889, "386464", null, "257", "256 East", "35th St", 1143619200, "10200", "East Bound: 4800 / West Bound: 5400", "41.831081", "-87.619334", [ null, "41.831081", "-87.619334", null, false ] ]
, [ 236, "839C6946-88DF-4B1E-B513-C58426BCFCC5", 236, 1273092889, "386464", 1273092889, "386464", null, "258", "521 East", "35th St", 1147158000, "9600", "East Bound: 4000 / West Bound: 5600", "41.831199", "-87.613631", [ null, "41.831199", "-87.613631", null, false ] ]
, [ 237, "A8F6D8CE-D487-4B6D-B37D-AFA1BE55CD86", 237, 1273092889, "386464", 1273092889, "386464", null, "259", "1623 West", "43rd St", 1143619200, "6100", "East Bound: 3200 / West Bound: 2900", "41.815858", "-87.666235", [ null, "41.815858", "-87.666235", null, false ] ]
, [ 238, "701693F4-09F8-4E64-8312-E19F9824B8A1", 238, 1273092889, "386464", 1273092889, "386464", null, "260", "1430 West", "43rd St", 1143619200, "4800", "East Bound: 2800 / West Bound: 2000", "41.815847", "-87.661488", [ null, "41.815847", "-87.661488", null, false ] ]
, [ 239, "A7A812A0-6BD1-420B-B7BE-6215E628AB5C", 239, 1273092889, "386464", 1273092889, "386464", null, "261", "506 West", "43rd St", 1145948400, "6800", "East Bound: 2700 / West Bound: 4100", "41.816301", "-87.638721", [ null, "41.816301", "-87.638721", null, false ] ]
, [ 240, "50FC8356-B5DA-4CB4-86E0-7AEE856CF833", 240, 1273092889, "386464", 1273092889, "386464", null, "263", "450 East", "43rd St", 1145948400, "8900", "East Bound: 4500 / West Bound: 4400", "41.816676", "-87.614468", [ null, "41.816676", "-87.614468", null, false ] ]
, [ 241, "DA44E396-46DA-4BC6-A1F4-843087702574", 241, 1273092889, "386464", 1273092889, "386464", null, "264", "1707 West", "47th St", 1143619200, "18100", "East Bound: 9100 / West Bound: 9000", "41.808578", "-87.667723", [ null, "41.808578", "-87.667723", null, false ] ]
, [ 242, "F3988FD6-6720-424B-A604-DBEF45EE11D0", 242, 1273092889, "386464", 1273092889, "386464", null, "265", "1439 West", "47th St", 1143619200, "16000", "East Bound: 7800 / West Bound: 8200", "41.808649", "-87.661622", [ null, "41.808649", "-87.661622", null, false ] ]
, [ 243, "D10001D2-7303-43F4-825C-844AE012B6F1", 243, 1273092889, "386464", 1273092889, "386464", null, "266", "20 West", "47th St", 1145948400, "15300", "East Bound: 6200 / West Bound: 9100", "41.809221", "-87.626946", [ null, "41.809221", "-87.626946", null, false ] ]
, [ 244, "A43D39FA-6751-4D75-AE87-9651BF26F07D", 244, 1273092889, "386464", 1273092889, "386464", null, "267", "410 East", "47th St", 1146121200, "14700", "East Bound: 7100 / West Bound: 7600", "41.809396", "-87.615874", [ null, "41.809396", "-87.615874", null, false ] ]
, [ 245, "E0A8BDB6-DD57-4ECC-8287-CA1CD511BAD9", 245, 1273092889, "386464", 1273092889, "386464", null, "268", "1048 East", "47th St", 1146121200, "17200", "East Bound: 8800 / West Bound: 8400", "41.809607", "-87.599776", [ null, "41.809607", "-87.599776", null, false ] ]
, [ 261, "0983A19A-7693-4B12-8314-AB352662FBD4", 261, 1273092889, "386464", 1273092889, "386464", null, "286", "2525 South", "Blue Island Ave", 1143705600, "18100", "North Bound: 9200 / South Bound: 8900", "41.846463", "-87.681163", [ null, "41.846463", "-87.681163", null, false ] ]
, [ 262, "CDA839B7-0EF6-49FA-9677-95287AA419DE", 262, 1273092889, "386464", 1273092889, "386464", null, "287", "2358 South", "Blue Island Ave", 1143705600, "13400", "North Bound: 6700 / South Bound: 6700", "41.849394", "-87.673525", [ null, "41.849394", "-87.673525", null, false ] ]
, [ 263, "CD8BB57D-D8AB-405E-BC5F-8C80A6B247A1", 263, 1273092889, "386464", 1273092889, "386464", null, "288", "1623 South", "Blue Island Ave", 1143705600, "5200", "North Bound: 2100 / South Bound: 3100", "41.859146", "-87.660062", [ null, "41.859146", "-87.660062", null, false ] ]
, [ 264, "7D8394E4-8E64-42E7-B938-CF9C5A2FA82B", 264, 1273092889, "386464", 1273092889, "386464", null, "289", "2235 West", "Cermak Rd", 1143705600, "13700", "East Bound: 7500 / West Bound: 6200", "41.852078", "-87.682174", [ null, "41.852078", "-87.682174", null, false ] ]
, [ 265, "73D7E6E2-4DD3-4DE2-8B82-30473F1E690F", 265, 1273092889, "386464", 1273092889, "386464", null, "290", "1730 West", "Cermak Rd", 1143705600, "11500", "East Bound: 5300 / West Bound: 6200", "41.852265", "-87.669817", [ null, "41.852265", "-87.669817", null, false ] ]
, [ 266, "A5ED8AFA-7533-4469-9A18-636160166D46", 266, 1273092889, "386464", 1273092889, "386464", null, "291", "1248 West", "Cermak Rd", 1145948400, "17300", "East Bound: 9000 / West Bound: 8300", "41.852464", "-87.658227", [ null, "41.852464", "-87.658227", null, false ] ]
, [ 267, "FF829EA2-953C-4BF5-83A4-0BE50ABD2F74", 267, 1273092889, "386464", 1273092889, "386464", null, "292", "234 West", "Cermak Rd", 1147158000, "16700", "East Bound: 6400 / West Bound: 10300", "41.852859", "-87.633451", [ null, "41.852859", "-87.633451", null, false ] ]
, [ 268, "307CE9DA-B72C-42BB-9FB8-A1D0698866E3", 268, 1273092889, "386464", 1273092889, "386464", null, "293", "415 West", "Cermak Rd", 1147071600, "12300", "East Bound: 5200 / West Bound: 7100", "41.852812", "-87.637573", [ null, "41.852812", "-87.637573", null, false ] ]
, [ 269, "71C029C3-C088-44C7-83A4-0803340B0B2D", 269, 1273092889, "386464", 1273092889, "386464", null, "294", "20 West", "Cermak Rd", 1145948400, "19900", "East Bound: 9500 / West Bound: 10400", "41.852874", "-87.627827", [ null, "41.852874", "-87.627827", null, false ] ]
, [ 270, "B0D84958-AF65-4A27-A73F-4A273916D588", 270, 1273092889, "386464", 1273092889, "386464", null, "295", "67 East", "Cermak Rd", 1145948400, "14700", "East Bound: 7500 / West Bound: 7200", "41.852861", "-87.624414", [ null, "41.852861", "-87.624414", null, false ] ]
, [ 271, "E0FD8C63-D684-4D9E-B9B1-C27A23854506", 271, 1273092889, "386464", 1273092889, "386464", null, "296", "120 East", "Cermak Rd", 1146553200, "15800", "East Bound: 6300 / West Bound: 9500", "41.852881", "-87.622835", [ null, "41.852881", "-87.622835", null, false ] ]
, [ 279, "F766B501-DF47-4A2D-8708-C4924CCDECF5", 279, 1273092889, "386464", 1273092889, "386464", null, "305", "3610 South", "Morgan St", 1141891200, "5300", "North Bound: 2600 / South Bound: 2700", "41.828474", "-87.65091", [ null, "41.828474", "-87.65091", null, false ] ]
, [ 282, "66715F6E-63AB-486A-B39E-739F72F3C101", 282, 1273092889, "386464", 1273092889, "386464", null, "308", "1431 West", "Pershing Rd", 1145948400, "19500", "East Bound: 9500 / West Bound: 10000", "41.823191", "-87.662035", [ null, "41.823191", "-87.662035", null, false ] ]
, [ 283, "2B2F625B-B720-4F21-A529-FF13512C133C", 283, 1273092889, "386464", 1273092889, "386464", null, "309", "340 West", "Pershing Rd", 1145948400, "15400", "East Bound: 7800 / West Bound: 7600", "41.823602", "-87.634859", [ null, "41.823602", "-87.634859", null, false ] ]
, [ 284, "A56A9A52-8396-43EA-B6DB-9B011E34D3B0", 284, 1273092889, "386464", 1273092889, "386464", null, "310", "268 East", "Pershing Rd", 1145948400, "7200", "East Bound: 3400 / West Bound: 3800", "41.823805", "-87.619176", [ null, "41.823805", "-87.619176", null, false ] ]
, [ 285, "0C4E38BE-6566-4034-85A2-164926DCD778", 285, 1273092889, "386464", 1273092889, "386464", null, "311", "750 East", "Pershing Rd", 1145948400, "9800", "East Bound: 4600 / West Bound: 5200", "41.823948", "-87.607812", [ null, "41.823948", "-87.607812", null, false ] ]
, [ 286, "5512B675-2322-4338-9772-BA36FB36D1D5", 286, 1273092889, "386464", 1273092889, "386464", null, "312", "1640 West", "Roosevelt Rd", 1145948400, "28200", "East Bound: 13900 / West Bound: 14300", "41.86686", "-87.668106", [ null, "41.86686", "-87.668106", null, false ] ]
, [ 287, "5EA3A650-6907-4BFF-82EF-28B6EC611597", 287, 1273092889, "386464", 1273092889, "386464", null, "313", "813 West", "Roosevelt Rd", 1145948400, "31600", "East Bound: 15300 / West Bound: 16300", "41.867145", "-87.647525", [ null, "41.867145", "-87.647525", null, false ] ]
, [ 288, "A4D6D3EA-74B2-4631-B166-75ED12D6A822", 288, 1273092889, "386464", 1273092889, "386464", null, "314", "412 West", "Roosevelt Rd", 1145948400, "41300", "East Bound: 19200 / West Bound: 22100", "41.867266", "-87.638052", [ null, "41.867266", "-87.638052", null, false ] ]
, [ 289, "0609A4D0-2FF9-4CAD-84BC-229F080EDA4E", 289, 1273092889, "386464", 1273092889, "386464", null, "315", "52 East", "Roosevelt RD", 1146726000, "33200", "East Bound: 16600 / West Bound: 16600", "41.867439", "-87.625406", [ null, "41.867439", "-87.625406", null, false ] ]
, [ 290, "940978FD-BC9C-48DA-B964-0A0DE6FBCB42", 290, 1273092889, "386464", 1273092889, "386464", null, "316", "125 East", "24th St", 1143705600, "700", "East Bound: 400 / West Bound: 300", "41.849302", "-87.622658", [ null, "41.849302", "-87.622658", null, false ] ]
, [ 291, "D9D6174B-23FC-47D9-A4DC-D1F44A95A497", 291, 1273092889, "386464", 1273092889, "386464", null, "317", "575 West", "26TH  ST", 1143532800, "6900", "East Bound: 2500 / West Bound: 4400", "41.845391", "-87.641581", [ null, "41.845391", "-87.641581", null, false ] ]
, [ 292, "3E3645FD-E584-4ACD-8AE5-34802E4F66BD", 292, 1273092889, "386464", 1273092889, "386464", null, "318", "140 East", "26th St", 1143532800, "7800", "East Bound: 3700 / West Bound: 4100", "41.84566", "-87.622137", [ null, "41.84566", "-87.622137", null, false ] ]
, [ 299, "4816CBC7-AD8C-4CC2-A91E-E29EFF49FBD6", 299, 1273092889, "386464", 1273092889, "386464", null, "325", "77 East", "Balbo Ave", 1146034800, "10500", "East Bound: 4200 / West Bound: 6300", "41.873149", "-87.624836", [ null, "41.873149", "-87.624836", null, false ] ]
, [ 300, "D6234535-B980-4F58-98AA-4FA947F3154A", 300, 1273092889, "386464", 1273092889, "386464", null, "326", "271 East", "Balbo Dr", 1146034800, "12400", "East Bound: 4500 / West Bound: 7900", "41.873213", "-87.620591", [ null, "41.873213", "-87.620591", null, false ] ]
, [ 302, "5A0E7EA1-B738-4150-B3EE-F19E45A72824", 302, 1273092889, "386464", 1273092889, "386464", null, "328", "1073 South", "Columbus Dr", 1146034800, "37900", "North Bound: 19000 / South Bound: 18900", "41.869368", "-87.620509", [ null, "41.869368", "-87.620509", null, false ] ]
, [ 307, "3812DD1F-D675-409F-BE76-FD798F090E7F", 307, 1273092889, "386464", 1273092889, "386464", null, "333", "3319 West", "Harrison St", 1143532800, "2300", "East Bound: 2300 / / Oneway East Bound", "41.873649", "-87.709133", [ null, "41.873649", "-87.709133", null, false ] ]
, [ 308, "38E7F6F5-5144-45BD-A436-7F6DB50A9955", 308, 1273092889, "386464", 1273092889, "386464", null, "334", "2380 West", "Harrison St", 1143532800, "5300", "East Bound: 2400 / West Bound: 2900", "41.87389", "-87.686234", [ null, "41.87389", "-87.686234", null, false ] ]
, [ 309, "1136EC99-0B0C-4418-A643-9896D88A6D89", 309, 1273092889, "386464", 1273092889, "386464", null, "335", "1973 West", "Harrison St", 1146034800, "7900", "East Bound: 3500 / West Bound: 4400", "41.874043", "-87.676455", [ null, "41.874043", "-87.676455", null, false ] ]
, [ 310, "2A908D5F-A118-4FC3-A4E9-2798B4491017", 310, 1273092889, "386464", 1273092889, "386464", null, "336", "1739 West", "Harrison St", 1143532800, "10600", "East Bound: 4800 / West Bound: 5800", "41.874122", "-87.670619", [ null, "41.874122", "-87.670619", null, false ] ]
, [ 311, "EC35675A-186D-49C7-B36A-8186987447A1", 311, 1273092889, "386464", 1273092889, "386464", null, "337", "1519 West", "Harrison St", 1146034800, "8800", "East Bound: 4400 / West Bound: 4400", "41.874199", "-87.665037", [ null, "41.874199", "-87.665037", null, false ] ]
, [ 312, "3CCC2F56-2F3B-4472-9116-A5E8DCC3CCE3", 312, 1273092889, "386464", 1273092889, "386464", null, "338", "1015 West", "Harrison St", 1146034800, "15000", "East Bound: 6700 / West Bound: 8300", "41.87436", "-87.652225", [ null, "41.87436", "-87.652225", null, false ] ]
, [ 313, "5924EAF3-E153-4BD0-96CC-0BD1F0A5928A", 313, 1273092889, "386464", 1273092889, "386464", null, "339", "15 East", "Harrison ST", 1143532800, "5900", "East Bound: 2500 / West Bound: 3400", "41.87438", "-87.627297", [ null, "41.87438", "-87.627297", null, false ] ]
, [ 314, "7243FC63-9E5C-4A1E-8E63-1F2AC427E69B", 314, 1273092889, "386464", 1273092889, "386464", null, "340", "754 West", "Harrison St", 1146034800, "11000", "East Bound: 5600 / West Bound: 5400", "41.874327", "-87.646119", [ null, "41.874327", "-87.646119", null, false ] ]
, [ 315, "4B869ACE-9667-4AB4-98E7-61040C244AA7", 315, 1273092889, "386464", 1273092889, "386464", null, "341", "1219 South", "Jefferson St", 1143532800, "4800", "North Bound: 2600 / South Bound: 2200", "41.866652", "-87.64217", [ null, "41.866652", "-87.64217", null, false ] ]
, [ 316, "D80469D0-CB76-4EDD-8FE1-EE422473C34E", 316, 1273092889, "386464", 1273092889, "386464", null, "342", "651 South", "Jefferson St", 1146034800, "6400", "North Bound: 6400 / / Oneway North Bound", "41.873569", "-87.642397", [ null, "41.873569", "-87.642397", null, false ] ]
, [ 318, "20A95D80-00CB-4A90-A439-964C34B6F64C", 318, 1273092889, "386464", 1273092889, "386464", null, "344", "830 East", "Oakwood Blvd", 1143532800, "4900", "East Bound: 3300 / West Bound: 1600", "41.823134", "-87.605367", [ null, "41.823134", "-87.605367", null, false ] ]
, [ 319, "139FB133-C92F-407B-B3C9-C4035EEFF8AA", 319, 1273092889, "386464", 1273092889, "386464", null, "345", "188 West", "Polk St", 1146553200, "8900", "East Bound: 5100 / West Bound: 3800", "41.872155", "-87.633321", [ null, "41.872155", "-87.633321", null, false ] ]
, [ 323, "64ABBA22-91F6-417E-8F3E-299FE1A48D56", 323, 1273092889, "386464", 1273092889, "386464", null, "350", "2010 South", "Calumet Ave", 1161068400, "2400", "North Bound: 1700 / South Bound: 700", "41.855226", "-87.619095", [ null, "41.855226", "-87.619095", null, false ] ]
, [ 324, "389AF4CB-4FF5-4DF5-AAEE-4B37EF9F941B", 324, 1273092889, "386464", 1273092889, "386464", null, "351", "460 South", "Canal St", 1159772400, "15600", "North Bound: 10400 / South Bound: 5200", "41.875514", "-87.639626", [ null, "41.875514", "-87.639626", null, false ] ]
, [ 325, "3A94C0AF-8FF6-4D0A-BF06-15651AE5480E", 325, 1273092889, "386464", 1273092889, "386464", null, "352", "538 South", "Clinton St", 1159772400, "7300", "South Bound: 7300/ Oneway South Bound", "41.874389", "-87.640956", [ null, "41.874389", "-87.640956", null, false ] ]
, [ 327, "5495F149-584A-40C7-A698-BF00EAE8F281", 327, 1273092889, "386464", 1273092889, "386464", null, "355", "1161 South", "Columbus Dr", 1158822000, "37800", "North Bound: 19600 / South Bound: 18200", "41.867512", "-87.620401", [ null, "41.867512", "-87.620401", null, false ] ]
, [ 329, "599F7530-CD11-47CF-8A2B-098440199406", 329, 1273092889, "386464", 1273092889, "386464", null, "357", "637 South", "Dearborn St", 1158649200, "7800", "North Bound: 7800 / / Oneway North Bound ", "41.873925", "-87.62919", [ null, "41.873925", "-87.62919", null, false ] ]
, [ 330, "E0FB2E98-E5AD-45A7-8669-00106853E1E2", 330, 1273092889, "386464", 1273092889, "386464", null, "358", "682 South", "Des Plaines St", 1159858800, "6300", "South Bound: 6300/ Oneway South Bound", "41.873531", "-87.643862", [ null, "41.873531", "-87.643862", null, false ] ]
, [ 334, "2AAB7EB7-AE06-47BB-A86D-0B6E12842DBF", 334, 1273092889, "386464", 1273092889, "386464", null, "363", "3027 South", "Pitney Ct", 1146726000, "1800", "North Bound: 800 / South Bound: 1000", "41.838528", "-87.662425", [ null, "41.838528", "-87.662425", null, false ] ]
, [ 339, "347F8F75-AD14-4345-9AC6-2A3C365458F9", 339, 1273092889, "386464", 1273092889, "386464", null, "368", "634 South", "Wabash Ave", 1146553200, "9100", "North Bound: 3300 / South Bound: 5800", "41.873661", "-87.62598", [ null, "41.873661", "-87.62598", null, false ] ]
, [ 340, "2DADC2CD-F744-4584-9BA6-F0FB6A02B2BE", 340, 1273092889, "386464", 1273092889, "386464", null, "369", "1130 South", "Wabash Ave", 1146553200, "11500", "North Bound: 5000 / South Bound: 6500", "41.86832", "-87.625851", [ null, "41.86832", "-87.625851", null, false ] ]
, [ 341, "FF71CF77-5304-4067-BD79-3928C4AC5D2F", 341, 1273092889, "386464", 1273092889, "386464", null, "370", "1040 South", "Wells St", 1147330800, "4200", "North Bound: 2000 / South Bound: 2200", "41.869272", "-87.633488", [ null, "41.869272", "-87.633488", null, false ] ]
, [ 343, "50D07492-1106-4512-8ADE-AC3BA14A1A56", 343, 1273092889, "386464", 1273092889, "386464", null, "372", "1760 West", "Ogden Ave", 1147158000, "20100", "East Bound: 9700 / West Bound: 10400", "41.876773", "-87.671635", [ null, "41.876773", "-87.671635", null, false ] ]
, [ 344, "A781244B-0C33-4781-9CC7-2D1AD9C6DFDC", 344, 1273092889, "386464", 1273092889, "386464", null, "373", "2124 West", "Ogden Ave", 1147158000, "22700", "East Bound: 11900 / West Bound: 10800", "41.869995", "-87.679727", [ null, "41.869995", "-87.679727", null, false ] ]
, [ 345, "BAF74704-A329-43BD-A6C1-F68DEDC2395E", 345, 1273092889, "386464", 1273092889, "386464", null, "374", "2653 West", "Ogden Ave", 1147158000, "23900", "East Bound: 11900 / West Bound: 12000", "41.862371", "-87.692771", [ null, "41.862371", "-87.692771", null, false ] ]
, [ 346, "AAE1ECD6-9314-45A1-B284-023CE01F7C7D", 346, 1273092889, "386464", 1273092889, "386464", null, "375", "2701 West", "Pope John Paul II", 1147158000, "7000", "West Bound: 7000/ Oneway West Bound", "41.815579", "-87.692019", [ null, "41.815579", "-87.692019", null, false ] ]
, [ 347, "E198A34D-B9C8-47B3-977C-5F193EDC1E8E", 347, 1273092889, "386464", 1273092889, "386464", null, "376", "742 West", "Root St", 1147158000, "3200", "East Bound: 1400 / West Bound: 1800", "41.818962", "-87.645802", [ null, "41.818962", "-87.645802", null, false ] ]
, [ 349, "691C98AC-5A93-49AA-8DD2-3E80DA389E22", 349, 1273092889, "386464", 1273092889, "386464", null, "378", "4929 South", "Woodlawn Ave", 1146553200, "5500", "North Bound: 2900 / South Bound: 2600", "41.805123", "-87.596753", [ null, "41.805123", "-87.596753", null, false ] ]
, [ 350, "C20536E9-6CE4-4A84-9102-6A4BE11A6D3D", 350, 1273092889, "386464", 1273092889, "386464", null, "379", "4624 South", "Woodlawn Ave", 1146553200, "3000", "North Bound: 1500 / South Bound: 1500", "41.810689", "-87.596855", [ null, "41.810689", "-87.596855", null, false ] ]
, [ 351, "E785D1FF-3758-4FDF-8AC1-44552872EDEA", 351, 1273092889, "386464", 1273092889, "386464", null, "380", "1550 South", "Lake Shore Dr", 1144220400, "165200", "North Bound: 86200 / South Bound: 79000", "41.860562", "-87.617934", [ null, "41.860562", "-87.617934", null, false ] ]
, [ 369, "F59CCD99-E233-4282-9F1B-05991D485616", 369, 1273092889, "386464", 1273092889, "386464", null, "398", "1600 West", "Ogden Ave", 1160636400, "19900", "North Bound: 9500 / South Bound: 10400", "41.880815", "-87.666819", [ null, "41.880815", "-87.666819", null, false ] ]
, [ 370, "39AF3CEA-6169-4522-918E-B754156032E7", 370, 1273092889, "386464", 1273092889, "386464", null, "399", "133 South", "Ashland Ave", 1157007600, "31700", "North Bound: 16800 / South Bound: 14900", "41.879119", "-87.666752", [ null, "41.879119", "-87.666752", null, false ] ]
, [ 371, "8B6FD97B-6A97-4E17-A86D-DF9A69B68213", 371, 1273092889, "386464", 1273092889, "386464", null, "400", "120 South", "Des Plaines St", 1159772400, "8800", "South Bound: 8800/ Oneway South Bound", "41.879863", "-87.644062", [ null, "41.879863", "-87.644062", null, false ] ]
, [ 372, "8D8D6017-8358-4A91-A569-FD474EBEEB4E", 372, 1273092889, "386464", 1273092889, "386464", null, "401", "852 North", "Ashland Ave", 1157007600, "34400", "North Bound: 17100 / South Bound: 17300", "41.897607", "-87.667335", [ null, "41.897607", "-87.667335", null, false ] ]
, [ 373, "70EF57A4-2095-401E-8D44-3B4680E6482C", 373, 1273092889, "386464", 1273092889, "386464", null, "402", "2535 West", "Pershing Rd", 1159254000, "12300", "East Bound: 6000 / West Bound: 6300", "41.822902", "-87.688714", [ null, "41.822902", "-87.688714", null, false ] ]
, [ 378, "348B1B9D-CBAB-4EEF-B983-E2D3DAC0F5EE", 378, 1273092889, "386464", 1273092889, "386464", null, "407", "1423 West", "Lake St", 1161241200, "9700", "East Bound: 5400 / West Bound: 4300", "41.885403", "-87.663033", [ null, "41.885403", "-87.663033", null, false ] ]
, [ 383, "E513986A-5B54-4710-9AAB-1691C73CDEC8", 383, 1273092889, "386464", 1273092889, "386464", null, "412", "5862 West", "Jackson Blvd", 1163491200, "9800", "East Bound: 4100 / West Bound: 5700", "41.877113", "-87.77081", [ null, "41.877113", "-87.77081", null, false ] ]
, [ 384, "C340B150-E23E-4AE2-8B3D-11C4F55E933F", 384, 1273092889, "386464", 1273092889, "386464", null, "413", "5700 West", "Washington St", 1161241200, "10800", "East Bound: 4600 / West Bound: 6200", "41.882191", "-87.768235", [ null, "41.882191", "-87.768235", null, false ] ]
, [ 385, "3D1B0FD0-D811-499D-9FEE-22BFC63924CA", 385, 1273092889, "386464", 1273092889, "386464", null, "414", "5838 West", "Lake St", 1163491200, "7100", "East Bound: 3600 / West Bound: 3500", "41.887904", "-87.771064", [ null, "41.887904", "-87.771064", null, false ] ]
, [ 397, "D3C09DAE-0A9E-4AF3-899A-35FDD0BA3C84", 397, 1273092889, "386464", 1273092889, "386464", null, "428", "2900 West", "26th St", 1160982000, "13700", "East Bound: 2600 / West Bound: 11100", "41.844657", "-87.697733", [ null, "41.844657", "-87.697733", null, false ] ]
, [ 399, "EB20CC7E-6DAE-4B15-AC2B-2A4701744130", 399, 1273092889, "386464", 1273092889, "386464", null, "430", "2738 West", "47th St", 1155193200, "23700", "East Bound: 12000 / West Bound: 11700", "41.808295", "-87.693288", [ null, "41.808295", "-87.693288", null, false ] ]
, [ 400, "B74E5D7D-58B4-4FAA-9893-9EE199942063", 400, 1273092889, "386464", 1273092889, "386464", null, "431", "2703 West", "Cermak Rd", 1158217200, "14200", "East Bound: 7600 / West Bound: 6600", "41.851933", "-87.693114", [ null, "41.851933", "-87.693114", null, false ] ]
, [ 401, "04481121-434D-4719-8451-550767A1ED43", 401, 1273092889, "386464", 1273092889, "386464", null, "432", "2700 West", "Roosevelt Rd", 1161241200, "18300", "East Bound: 8200 / West Bound: 10100", "41.866535", "-87.693471", [ null, "41.866535", "-87.693471", null, false ] ]
, [ 402, "2F761A3F-9949-4801-82BF-4B50BF9F05A2", 402, 1273092889, "386464", 1273092889, "386464", null, "433", "2439 West", "43rd St", 1155798000, "4200", "West Bound: 4200/ Oneway West Bound ", "41.81567", "-87.686204", [ null, "41.81567", "-87.686204", null, false ] ]
, [ 404, "40C31175-6848-4E78-9EEA-0244A4ABBE55", 404, 1273092889, "386464", 1273092889, "386464", null, "435", "3654 West", "16th St", 1158217200, "9500", "East Bound: 4400 / West Bound: 5100", "41.858949", "-87.717426", [ null, "41.858949", "-87.717426", null, false ] ]
, [ 408, "908EC7B9-5D8D-44DF-900A-CA89CD3803C7", 408, 1273092889, "386464", 1273092889, "386464", null, "439", "3656 West", "Washington St", 1161241200, "11800", "East Bound: 5800 / West Bound: 6000", "41.881668", "-87.718383", [ null, "41.881668", "-87.718383", null, false ] ]
, [ 409, "B1880ED4-6AC1-4A21-9AFA-99CC62A10A4C", 409, 1273092889, "386464", 1273092889, "386464", null, "440", "3433 West", "Madison St", 1160636400, "15600", "East Bound: 7800 / West Bound: 7800", "41.880898", "-87.712441", [ null, "41.880898", "-87.712441", null, false ] ]
, [ 412, "1F396AF8-55CD-4D15-8737-005B3CE9BDF7", 412, 1273092889, "386464", 1273092889, "386464", null, "443", "4637 West", "Roosevelt Rd", 1161241200, "22600", "East Bound: 11500 / West Bound: 11100", "41.865941", "-87.741303", [ null, "41.865941", "-87.741303", null, false ] ]
, [ 413, "66644681-81D3-48F6-8854-C1AE1C6986E5", 413, 1273092889, "386464", 1273092889, "386464", null, "445", "4444 West", "Chicago Ave", 1161241200, "21400", "East Bound: 9800 / West Bound: 11600", "41.895151", "-87.737793", [ null, "41.895151", "-87.737793", null, false ] ]
, [ 418, "15D096B5-2235-43A6-AC83-1F27CC8BDF99", 418, 1273092889, "386464", 1273092889, "386464", null, "450", "54 West", "Chicago Ave", 1158649200, "23000", "East Bound: 11700 / West Bound: 11300", "41.896651", "-87.630189", [ null, "41.896651", "-87.630189", null, false ] ]
, [ 419, "0BA73A71-1ED5-4243-A556-6D2081D783FE", 419, 1273092889, "386464", 1273092889, "386464", null, "451", "51 West", "Ontario St", 1159254000, "18400", "West Bound: 18400/ Oneway West Bound ", "41.893244", "-87.630017", [ null, "41.893244", "-87.630017", null, false ] ]
, [ 421, "4F07711D-EEF8-480C-AF53-CCA8995FD387", 421, 1273092889, "386464", 1273092889, "386464", null, "453", "105 West", "Congress Pkwy", 1159340400, "76700", "East Bound: 37000 / West Bound: 39700", "41.875606", "-87.630878", [ null, "41.875606", "-87.630878", null, false ] ]
, [ 425, "4CEBB5E3-E151-4439-AAD5-5B653F297F57", 425, 1273092889, "386464", 1273092889, "386464", null, "458", "1828 West", "Chicago Ave", 1163491200, "17400", "East Bound: 9000 / West Bound: 8400", "41.895971", "-87.67335", [ null, "41.895971", "-87.67335", null, false ] ]
, [ 426, "72CC7EAE-0539-4D14-998A-773FF3A1240B", 426, 1273092889, "386464", 1273092889, "386464", null, "459", "25 West", "Van Buren St", 1158735600, "7400", "West Bound: 7400/ Oneway West Bound ", "41.87691", "-87.628624", [ null, "41.87691", "-87.628624", null, false ] ]
, [ 427, "FD09DBF8-A775-4A61-8416-FA66BEBCAD86", 427, 1273092889, "386464", 1273092889, "386464", null, "460", "19 West", "Jackson Blvd", 1159426800, "10100", "East Bound: 10100 / / Oneway East Bound ", "41.878174", "-87.628405", [ null, "41.878174", "-87.628405", null, false ] ]
, [ 428, "1F4BD0CC-616E-4AC5-9B63-D52B972A7E7B", 428, 1273092889, "386464", 1273092889, "386464", null, "461", "15 West", "Adams St", 1159858800, "11200", "West Bound: 11200/ Oneway West Bound", "41.879452", "-87.628325", [ null, "41.879452", "-87.628325", null, false ] ]
, [ 429, "B05BA344-1ED5-48E5-A088-F3A496FE26C4", 429, 1273092889, "386464", 1273092889, "386464", null, "462", "30 East", "Monroe St", 1158649200, "13000", "East Bound: 13000 / / Oneway East Bound ", "41.880775", "-87.626654", [ null, "41.880775", "-87.626654", null, false ] ]
, [ 430, "3CB04D0A-0DB7-491A-909F-00EF3AE15424", 430, 1273092889, "386464", 1273092889, "386464", null, "463", "15 West", "Madison St", 1159858800, "11500", "West Bound: 11500/ Oneway West Bound", "41.882024", "-87.628403", [ null, "41.882024", "-87.628403", null, false ] ]
, [ 431, "41F65980-BDB2-4291-9B2E-B1B519B6B71A", 431, 1273092889, "386464", 1273092889, "386464", null, "464", "10 West", "Lake St", 1159772400, "13700", "East Bound: 13700 / / Oneway East Bound", "41.885747", "-87.628288", [ null, "41.885747", "-87.628288", null, false ] ]
, [ 432, "0467A975-5CA9-4F36-894A-14A8E21D1DE3", 432, 1273092889, "386464", 1273092889, "386464", null, "465", "27 West", "Washington St", 1159254000, "14300", "East Bound: 14300 / / Oneway East Bound ", "41.883215", "-87.628926", [ null, "41.883215", "-87.628926", null, false ] ]
, [ 433, "02C5577E-D453-416C-963A-67A09805BC32", 433, 1273092889, "386464", 1273092889, "386464", null, "466", "24 West", "Randolph St", 1158649200, "18000", "West Bound: 18000/ Oneway West Bound ", "41.884485", "-87.628798", [ null, "41.884485", "-87.628798", null, false ] ]
, [ 443, "8EE8B206-0BB8-4532-860A-120185C087EB", 443, 1273092889, "386464", 1273092889, "386464", null, "477", "3535 West", "47th St", 1156230000, "23600", "East Bound: 12300 / West Bound: 11300", "41.808006", "-87.712716", [ null, "41.808006", "-87.712716", null, false ] ]
, [ 444, "DE9FE6A4-BFAB-4982-A3AB-685AA72AA7EF", 444, 1273092889, "386464", 1273092889, "386464", null, "478", "4706 West", "47th St", 1163491200, "30300", "East Bound: 14300 / West Bound: 16000", "41.807648", "-87.741014", [ null, "41.807648", "-87.741014", null, false ] ]
, [ 445, "BD1F3A4E-9840-49EA-BEB8-A70964196A07", 445, 1273092889, "386464", 1273092889, "386464", null, "479", "2719 West", "35th St", 1159254000, "11600", "East Bound: 4800 / West Bound: 6800", "41.830119", "-87.693144", [ null, "41.830119", "-87.693144", null, false ] ]
, [ 446, "B5673603-37D4-496C-9BDD-A9272CA2A6EF", 446, 1273092889, "386464", 1273092889, "386464", null, "480", "3142 West", "16th St", 1158217200, "2900", "East Bound: 1500 / West Bound: 1400", "41.859094", "-87.704686", [ null, "41.859094", "-87.704686", null, false ] ]
, [ 447, "DE963EE2-71D5-49E0-B3AE-5C0C37456C48", 447, 1273092889, "386464", 1273092889, "386464", null, "481", "4733 West", "Lake St", 1161241200, "16100", "East Bound: 6600 / West Bound: 9500", "41.886549", "-87.744388", [ null, "41.886549", "-87.744388", null, false ] ]
, [ 459, "8E890E25-E94D-47AD-BED2-EA59DE09BCA5", 459, 1273092889, "386464", 1273092889, "386464", null, "494", "3947 West", "Jackson Blvd", 1161154800, "13300", "East Bound: 6600 / West Bound: 6700", "41.877093", "-87.725018", [ null, "41.877093", "-87.725018", null, false ] ]
, [ 460, "C17B0783-3DBA-4A0D-AE04-8C6E9C1CB1B6", 460, 1273092889, "386464", 1273092889, "386464", null, "495", "2345 West", "Jackson Blvd", 1160031600, "4900", "East Bound: 3300 / West Bound: 1600", "41.877558", "-87.685609", [ null, "41.877558", "-87.685609", null, false ] ]
, [ 461, "16164395-68F3-47DA-BF97-B021FFFAD0CE", 461, 1273092889, "386464", 1273092889, "386464", null, "496", "1645 West", "Jackson Blvd", 1160031600, "5500", "East Bound: 5500 / / Oneway East Bound ", "41.877595", "-87.668568", [ null, "41.877595", "-87.668568", null, false ] ]
, [ 462, "BE4D2DA1-04E2-4A79-A70E-2E3660A530E5", 462, 1273092889, "386464", 1273092889, "386464", null, "497", "1540 West", "Jackson Blvd", 1160031600, "6600", "East Bound: 6600 / / Oneway East Bound ", "41.877635", "-87.665993", [ null, "41.877635", "-87.665993", null, false ] ]
, [ 463, "4E62576D-D4EC-4B2B-9EC4-3C9193D33AD3", 463, 1273092889, "386464", 1273092889, "386464", null, "498", "350 East", "Jackson Dr", 1159426800, "17600", "East Bound: 8900 / West Bound: 8700", "41.878356", "-87.618837", [ null, "41.878356", "-87.618837", null, false ] ]
, [ 464, "E2DB5A68-E843-4EEF-96BF-039B10F52169", 464, 1273092889, "386464", 1273092889, "386464", null, "499", "1880 West", "Adams St", 1160031600, "3500", "West Bound: 3500/ Oneway West Bound ", "41.87878", "-87.674129", [ null, "41.87878", "-87.674129", null, false ] ]
, [ 465, "557F514C-F949-47E7-8B6B-FC35AB717B3E", 465, 1273092889, "386464", 1273092889, "386464", null, "500", "2344 West", "Adams St", 1160031600, "3400", "East Bound: 1700 / West Bound: 1700", "41.878596", "-87.685749", [ null, "41.878596", "-87.685749", null, false ] ]
, [ 466, "DBDEBD55-7510-4451-94C7-53997EAEBD64", 466, 1273092889, "386464", 1273092889, "386464", null, "501", "3932 West", "Madison St", 1163577600, "19300", "East Bound: 9600 / West Bound: 9700", "41.88074", "-87.724539", [ null, "41.88074", "-87.724539", null, false ] ]
, [ 467, "AB71C739-C4BE-4C22-864C-2475D5A4613A", 467, 1273092889, "386464", 1273092889, "386464", null, "502", "3542 West", "Lake St", 1163404800, "9400", "East Bound: 3700 / West Bound: 5700", "41.884876", "-87.715267", [ null, "41.884876", "-87.715267", null, false ] ]
, [ 468, "FD862642-BE6C-46B9-9F72-674FDD4F1B1D", 468, 1273092889, "386464", 1273092889, "386464", null, "503", "3116 West", "Lake St", 1163404800, "5700", "East Bound: 3000 / West Bound: 2700", "41.884246", "-87.704407", [ null, "41.884246", "-87.704407", null, false ] ]
, [ 469, "0C952B19-F3C7-436F-9BA5-BFF0ED905836", 469, 1273092889, "386464", 1273092889, "386464", null, "504", "10 East", "Washington St", 1159254000, "12700", "East Bound: 12700 / / Oneway East Bound ", "41.883218", "-87.627549", [ null, "41.883218", "-87.627549", null, false ] ]
, [ 470, "771E0820-75A8-46B8-B304-3254F722FAD2", 470, 1273092889, "386464", 1273092889, "386464", null, "505", "2324 West", "Warren Blvd", 1163577600, "6500", "East Bound: 6500 / / Oneway East Bound", "41.882102", "-87.685013", [ null, "41.882102", "-87.685013", null, false ] ]
, [ 471, "8445E035-2239-49D9-8C9B-BC3B78DC5A18", 471, 1273092889, "386464", 1273092889, "386464", null, "506", "2335 West", "Madison St", 1160636400, "13200", "East Bound: 5100 / West Bound: 8100", "41.881177", "-87.6854", [ null, "41.881177", "-87.6854", null, false ] ]
, [ 472, "7228081A-9021-44D6-8352-B3C073A4FF7F", 472, 1273092889, "386464", 1273092889, "386464", null, "507", "1931 West", "Lake St", 1161241200, "6900", "East Bound: 3400 / West Bound: 3500", "41.885023", "-87.675556", [ null, "41.885023", "-87.675556", null, false ] ]
, [ 473, "151C8078-03C4-49B5-B9EE-A6B05D3CA6E2", 473, 1273092889, "386464", 1273092889, "386464", null, "508", "3165 West", "Franklin Blvd", 1160636400, "3900", "East Bound: 1700 / West Bound: 2200", "41.890069", "-87.706392", [ null, "41.890069", "-87.706392", null, false ] ]
, [ 474, "63F326F5-F214-45BB-BE4B-056A72C17792", 474, 1273092889, "386464", 1273092889, "386464", null, "509", "1926 West", "Grand Ave", 1161586800, "19600", "East Bound: 9700 / West Bound: 9900", "41.890846", "-87.675563", [ null, "41.890846", "-87.675563", null, false ] ]
, [ 475, "16D6BEEF-9DAF-4D33-A6B3-ACE530E652DB", 475, 1273092889, "386464", 1273092889, "386464", null, "511", "777 West", "Chicago Ave", 1158649200, "27600", "East Bound: 13000 / West Bound: 14600", "41.896397", "-87.647745", [ null, "41.896397", "-87.647745", null, false ] ]
, [ 476, "BE75E90E-13B2-4F43-ACB1-80617C0DCAA8", 476, 1273092889, "386464", 1273092889, "386464", null, "512", "1521 West", "Chicago Ave", 1161154800, "17100", "East Bound: 8100 / West Bound: 9000", "41.896097", "-87.665698", [ null, "41.896097", "-87.665698", null, false ] ]
, [ 482, "335B8295-4676-47B8-8A13-223E99BF53F6", 482, 1273092889, "386464", 1273092889, "386464", null, "518", "161 East", "Chicago Ave", 1159858800, "18100", "East Bound: 9700 / West Bound: 8400", "41.89675", "-87.623095", [ null, "41.89675", "-87.623095", null, false ] ]
, [ 483, "E00B760B-AFF1-4082-A602-0723F4E34715", 483, 1273092889, "386464", 1273092889, "386464", null, "519", "303 East", "Chicago Ave", 1159858800, "11900", "East Bound: 6800 / West Bound: 5100", "41.896787", "-87.620252", [ null, "41.896787", "-87.620252", null, false ] ]
, [ 484, "9B024C4C-6B70-4AFD-841C-04D1F1E2CA2D", 484, 1273092889, "386464", 1273092889, "386464", null, "520", "206 West", "Van Buren St", 1158735600, "10500", "West Bound: 10500/ Oneway West Bound ", "41.876846", "-87.633902", [ null, "41.876846", "-87.633902", null, false ] ]
, [ 494, "BBC64E31-39C8-469D-B7A4-440002C1E796", 494, 1273092889, "386464", 1273092889, "386464", null, "530", "3900 West", "31st St", 1158217200, "20100", "East Bound: 9100 / West Bound: 11000", "41.836923", "-87.721956", [ null, "41.836923", "-87.721956", null, false ] ]
, [ 496, "2227C277-03AA-4E90-BC13-E3E54099ED2C", 496, 1273092889, "386464", 1273092889, "386464", null, "532", "537 South", "Dearborn St", 1158649200, "11500", "North Bound: 11500 / / Oneway North Bound ", "41.874957", "-87.629219", [ null, "41.874957", "-87.629219", null, false ] ]
, [ 497, "DA5EBCE5-75D0-4B24-8394-8BB4323AD5BF", 497, 1273092889, "386464", 1273092889, "386464", null, "533", "513 South", "Damen Ave", 1155711600, "33600", "North Bound: 16200 / South Bound: 17400", "41.874597", "-87.676475", [ null, "41.874597", "-87.676475", null, false ] ]
, [ 498, "3C21EE07-C30D-4D53-8AEE-91D02194EE71", 498, 1273092889, "386464", 1273092889, "386464", null, "534", "3515 West", "Washington St", 1161241200, "10500", "East Bound: 5100 / West Bound: 5400", "41.881363", "-87.714203", [ null, "41.881363", "-87.714203", null, false ] ]
, [ 499, "FBE68C99-14BC-4BFE-9D16-79719AA5882C", 499, 1273092889, "386464", 1273092889, "386464", null, "535", "3252 West", "31st St", 1158217200, "20600", "East Bound: 9100 / West Bound: 11500", "41.837188", "-87.706989", [ null, "41.837188", "-87.706989", null, false ] ]
, [ 501, "BC895AB9-B35A-48C9-8CC2-C850D46B9B82", 501, 1273092889, "386464", 1273092889, "386464", null, "537", "230 South", "La Salle St", 1158822000, "7700", "North Bound: 3600 / South Bound: 4100", "41.878543", "-87.632267", [ null, "41.878543", "-87.632267", null, false ] ]
, [ 502, "8D0499C5-8DF5-454D-95A5-B7C79E5572E3", 502, 1273092889, "386464", 1273092889, "386464", null, "538", "210 South", "Des Plaines St", 1159945200, "6300", "South Bound: 6300/ Oneway South Bound", "41.878908", "-87.644032", [ null, "41.878908", "-87.644032", null, false ] ]
, [ 503, "560FF84E-6E9B-4BCC-A594-8E7758AD40F3", 503, 1273092889, "386464", 1273092889, "386464", null, "539", "210 South", "Clinton St", 1159772400, "11600", "South Bound: 11600/ Oneway South Bound", "41.878904", "-87.641098", [ null, "41.878904", "-87.641098", null, false ] ]
, [ 504, "692EEC02-AFD4-42C2-BCCF-E16C25F185B7", 504, 1273092889, "386464", 1273092889, "386464", null, "540", "225 South", "Canal St", 1159858800, "12100", "North Bound: 12100/ Oneway North Bound", "41.878519", "-87.639575", [ null, "41.878519", "-87.639575", null, false ] ]
, [ 505, "4ADC8893-97A2-4DE5-B074-BFA420FDB50B", 505, 1273092889, "386464", 1273092889, "386464", null, "541", "209 South", "Wells St", 1158649200, "11600", "South Bound: 11600/ Oneway South Bound ", "41.87909", "-87.633752", [ null, "41.87909", "-87.633752", null, false ] ]
, [ 506, "ED0C8764-7620-4C46-85AB-8C02680F2055", 506, 1273092889, "386464", 1273092889, "386464", null, "542", "210 South", "Clark St", 1158735600, "16500", "South Bound: 16500/ Oneway South Bound ", "41.879069", "-87.630811", [ null, "41.879069", "-87.630811", null, false ] ]
, [ 507, "78896D5A-BD08-4AC8-ABA9-ECD17441573E", 507, 1273092889, "386464", 1273092889, "386464", null, "543", "239 South", "Dearborn St", 1158735600, "17900", "North Bound: 17900 / / Oneway North Bound ", "41.878484", "-87.629312", [ null, "41.878484", "-87.629312", null, false ] ]
, [ 508, "CD03BE1B-8428-4C79-9B30-62DA81820E43", 508, 1273092889, "386464", 1273092889, "386464", null, "544", "400 South", "Kostner Ave", 1157439600, "18700", "North Bound: 13700 / South Bound: 5000", "41.875108", "-87.735281", [ null, "41.875108", "-87.735281", null, false ] ]
, [ 509, "B153839F-631A-40B8-96A7-8514B9552685", 509, 1273092889, "386464", 1273092889, "386464", null, "545", "210 South", "Kedzie Ave", 1160377200, "15500", "North Bound: 7500 / South Bound: 8000", "41.878056", "-87.706035", [ null, "41.878056", "-87.706035", null, false ] ]
, [ 510, "79632542-80E4-4218-BF7F-64FCC8D8DC04", 510, 1273092889, "386464", 1273092889, "386464", null, "546", "603 West", "Monroe St", 1158735600, "13800", "East Bound: 13800 / / Oneway East Bound ", "41.880547", "-87.642755", [ null, "41.880547", "-87.642755", null, false ] ]
, [ 514, "1F8FFC6E-A812-40C2-A32C-6E46868D9957", 514, 1273092889, "386464", 1273092889, "386464", null, "550", "2857 West", "Pershing Rd", 1159254000, "7800", "East Bound: 4300 / West Bound: 3500", "41.822739", "-87.696963", [ null, "41.822739", "-87.696963", null, false ] ]
, [ 515, "82DA3E2A-CDD5-4340-A894-9EFF2B69D977", 515, 1273092889, "386464", 1273092889, "386464", null, "551", "2825 West", "31st St", 1158217200, "17700", "East Bound: 8800 / West Bound: 8900", "41.837394", "-87.696", [ null, "41.837394", "-87.696", null, false ] ]
, [ 516, "1AA08577-B633-4554-A233-045D86F159C9", 516, 1273092889, "386464", 1273092889, "386464", null, "552", "3260 West", "Warren Blvd", 1160031600, "5900", "East Bound: 5900 / / Oneway East Bound", "41.881848", "-87.708484", [ null, "41.881848", "-87.708484", null, false ] ]
, [ 517, "3BC431EB-BA91-4643-8F1F-F16703F27226", 517, 1273092889, "386464", 1273092889, "386464", null, "553", "3233 West", "Washington St", 1160031600, "8200", "West Bound: 8200/ Oneway West Bound", "41.882781", "-87.707473", [ null, "41.882781", "-87.707473", null, false ] ]
, [ 521, "275CF452-A035-4AD5-A28D-98ACE10F7948", 521, 1273092889, "386464", 1273092889, "386464", null, "557", "650 West", "Washington St", 1159340400, "19000", "East Bound: 19000 / / Oneway East Bound ", "41.883162", "-87.644644", [ null, "41.883162", "-87.644644", null, false ] ]
, [ 523, "ACF0974B-561C-4221-9BE6-1A6D3746166A", 523, 1273092889, "386464", 1273092889, "386464", null, "559", "4631 West", "Harrison St", 1161154800, "11500", "East Bound: 7600 / West Bound: 3900", "41.873224", "-87.741379", [ null, "41.873224", "-87.741379", null, false ] ]
, [ 524, "84D88917-D4A9-4C43-8DC4-C3806067C937", 524, 1273092889, "386464", 1273092889, "386464", null, "560", "4224 West", "31st St", 1163577600, "20500", "East Bound: 9900 / West Bound: 10600", "41.836814", "-87.730379", [ null, "41.836814", "-87.730379", null, false ] ]
, [ 525, "F95BE5AB-FD3E-40B9-A479-A3F347625E6F", 525, 1273092889, "386464", 1273092889, "386464", null, "561", "4040 West", "Ogden St", 1163577600, "20500", "East Bound: 10200 / West Bound: 10300", "41.850584", "-87.726087", [ null, "41.850584", "-87.726087", null, false ] ]
, [ 530, "4452FB04-3174-455D-9557-39DD0F7E362A", 530, 1273092889, "386464", 1273092889, "386464", null, "566", "155 West", "Grand Ave", 1162886400, "14200", "West Bound: 14200/ Oneway West Bound", "41.891595", "-87.633278", [ null, "41.891595", "-87.633278", null, false ] ]
, [ 537, "F8BC7331-C8B9-420E-91B7-5656058DA8E1", 537, 1273092889, "386464", 1273092889, "386464", null, "574", "206 South", "Cicero Ave", 1161586800, "33700", "North Bound: 16800 / South Bound: 16900", "41.878378", "-87.745201", [ null, "41.878378", "-87.745201", null, false ] ]
, [ 538, "3FAF633F-6E6A-425D-B2B7-A2A34D8A30D9", 538, 1273092889, "386464", 1273092889, "386464", null, "575", "135 South", "Pulaski Rd", 1159945200, "24200", "North Bound: 12100 / South Bound: 12100", "41.878768", "-87.725604", [ null, "41.878768", "-87.725604", null, false ] ]
, [ 539, "EE30E74E-EDDD-45FD-8E84-A46DA8B52EB9", 539, 1273092889, "386464", 1273092889, "386464", null, "576", "49 South", "Jefferson St", 1159772400, "9100", "North Bound: 9100 / / Oneway North Bound", "41.880549", "-87.642619", [ null, "41.880549", "-87.642619", null, false ] ]
, [ 565, "338CDE8E-7ECE-4FFE-A6D3-81C9067BC64A", 565, 1273092889, "386464", 1273092889, "386464", null, "605", "4647 South", "Archer Ave", 1160550000, "33300", "North Bound: 16400 / South Bound: 16900", "41.809086", "-87.712401", [ null, "41.809086", "-87.712401", null, false ] ]
, [ 566, "4B9D805A-54A7-4934-92DC-7F6ACDBA2328", 566, 1273092889, "386464", 1273092889, "386464", null, "606", "4611 South", "Kedzie Ave", 1155193200, "29200", "North Bound: 14600 / South Bound: 14600", "41.809606", "-87.704033", [ null, "41.809606", "-87.704033", null, false ] ]
, [ 567, "488C58F2-7C8C-43F2-86CC-9BED25E8D0B0", 567, 1273092889, "386464", 1273092889, "386464", null, "607", "4637 South", "California Ave", 1156230000, "20800", "North Bound: 10600 / South Bound: 10200", "41.80897", "-87.694224", [ null, "41.80897", "-87.694224", null, false ] ]
, [ 568, "38208E4E-807F-49A0-BBFB-EBF4866F38C7", 568, 1273092889, "386464", 1273092889, "386464", null, "608", "3835 South", "Damen Ave", 1155798000, "25800", "North Bound: 12200 / South Bound: 13600", "41.82387", "-87.675108", [ null, "41.82387", "-87.675108", null, false ] ]
, [ 569, "58A16D0C-FE5C-4E45-B2E8-34C693CF3783", 569, 1273092889, "386464", 1273092889, "386464", null, "609", "3030 South", "Kostner Ave", 1158044400, "9600", "North Bound: 4400 / South Bound: 5200", "41.837654", "-87.734096", [ null, "41.837654", "-87.734096", null, false ] ]
, [ 570, "F0558567-F855-4B83-8CF5-3DCB7EB18505", 570, 1273092889, "386464", 1273092889, "386464", null, "610", "3001 South", "Kedzie Ave", 1155193200, "25400", "North Bound: 12500 / South Bound: 12900", "41.839026", "-87.704872", [ null, "41.839026", "-87.704872", null, false ] ]
, [ 571, "14398FB3-509A-4C34-B0DB-8B33F9ABEE52", 571, 1273092889, "386464", 1273092889, "386464", null, "611", "3026 South", "California Ave", 1155798000, "23400", "North Bound: 11800 / South Bound: 11600", "41.838385", "-87.695058", [ null, "41.838385", "-87.695058", null, false ] ]
, [ 572, "1AB14A44-43E7-400C-A84F-CD0B45C3B317", 572, 1273092889, "386464", 1273092889, "386464", null, "612", "2501 South", "Hamlin Ave", 1158217200, "3200", "South Bound: 3200/ Oneway South Bound ", "41.846135", "-87.719725", [ null, "41.846135", "-87.719725", null, false ] ]
, [ 573, "68BDC44B-A90B-450A-B383-445B251F0E1D", 573, 1273092889, "386464", 1273092889, "386464", null, "613", "2130 South", "Marshall Blvd", 1158217200, "18800", "North Bound: 8600 / South Bound: 10200", "41.852795", "-87.699117", [ null, "41.852795", "-87.699117", null, false ] ]
, [ 574, "CD94CD1D-20FF-4200-8B6F-53A4C9AB56F9", 574, 1273092889, "386464", 1273092889, "386464", null, "614", "2149 South", "California Ave", 1155625200, "17700", "North Bound: 8800 / South Bound: 8900", "41.852259", "-87.695456", [ null, "41.852259", "-87.695456", null, false ] ]
, [ 575, "DFA2CE38-A92C-4CDD-9D50-08E9F8A48323", 575, 1273092889, "386464", 1273092889, "386464", null, "615", "2157 South", "Damen Ave", 1155798000, "24700", "North Bound: 12800 / South Bound: 11900", "41.852275", "-87.675844", [ null, "41.852275", "-87.675844", null, false ] ]
, [ 576, "A30ECE6E-8B37-4C7B-9B60-8AF8398B7615", 576, 1273092889, "386464", 1273092889, "386464", null, "616", "1531 South", "Kostner Ave", 1158217200, "19500", "North Bound: 8800 / South Bound: 10700", "41.859611", "-87.734761", [ null, "41.859611", "-87.734761", null, false ] ]
, [ 577, "21DC6168-C5C8-4887-B79A-8C6AB55D3745", 577, 1273092889, "386464", 1273092889, "386464", null, "617", "1539 South", "Pulaski Rd", 1158044400, "21700", "North Bound: 11600 / South Bound: 10100", "41.859508", "-87.724975", [ null, "41.859508", "-87.724975", null, false ] ]
, [ 578, "6A745EAD-7968-4643-A4B3-67B2E52C5157", 578, 1273092889, "386464", 1273092889, "386464", null, "618", "1142 South", "Sacramento Ave", 1160463600, "20000", "North Bound: 10400 / South Bound: 9600", "41.866927", "-87.700802", [ null, "41.866927", "-87.700802", null, false ] ]
, [ 580, "AA514151-13B1-405E-A1DA-6DE52540D036", 580, 1273092889, "386464", 1273092889, "386464", null, "620", "211 South", "Central Ave", 1161154800, "25400", "North Bound: 10900 / South Bound: 14500", "41.877492", "-87.764763", [ null, "41.877492", "-87.764763", null, false ] ]
, [ 581, "290DDCC0-2095-4DD3-83B1-0492F25D7C9B", 581, 1273092889, "386464", 1273092889, "386464", null, "621", "190 South", "Laramie Ave", 1161586800, "21100", "North Bound: 11400 / South Bound: 9700", "41.878472", "-87.754997", [ null, "41.878472", "-87.754997", null, false ] ]
, [ 582, "54DD7936-A19C-4FB3-8B60-9E050F3B5EB6", 582, 1273092889, "386464", 1273092889, "386464", null, "622", "857 West", "Austin Ave", 1161846000, "24800", "North Bound: 11900 / South Bound: 12900", "41.896495", "-87.775191", [ null, "41.896495", "-87.775191", null, false ] ]
, [ 651, "80015577-8531-42E4-B938-A1FB73CD3EFE", 651, 1273092889, "386464", 1273092889, "386464", null, "695", "324 South", "Racine Ave", 1161586800, "12500", "North Bound: 7500 / South Bound: 5000", "41.876982", "-87.657007", [ null, "41.876982", "-87.657007", null, false ] ]
, [ 652, "8C7FFD50-5B94-46FE-894B-CA401796A11C", 652, 1273092889, "386464", 1273092889, "386464", null, "696", "220 South", "Wabash Ave", 1158649200, "10900", "South Bound: 10900/ Oneway South Bound ", "41.879007", "-87.626108", [ null, "41.879007", "-87.626108", null, false ] ]
, [ 653, "0F31D0C4-D05A-4F49-9C79-75925BAAE44D", 653, 1273092889, "386464", 1273092889, "386464", null, "697", "200 South", "Michigan Ave", 1159254000, "39000", "North Bound: 22400 / South Bound: 16600", "41.879529", "-87.624351", [ null, "41.879529", "-87.624351", null, false ] ]
, [ 654, "265BC016-11CD-47A4-90C3-442D16B39121", 654, 1273092889, "386464", 1273092889, "386464", null, "698", "249 South", "Columbus Dr", 1162886400, "30100", "North Bound: 13900 / South Bound: 16200", "41.878842", "-87.620705", [ null, "41.878842", "-87.620705", null, false ] ]
, [ 655, "EBAFFC6F-9FA1-4422-B962-530F7D0D9B91", 655, 1273092889, "386464", 1273092889, "386464", null, "699", "114 North", "Hamlin Ave", 1160636400, "15500", "North Bound: 8200 / South Bound: 7300", "41.882384", "-87.720836", [ null, "41.882384", "-87.720836", null, false ] ]
, [ 656, "E29B6CDB-D0DC-4AA9-8404-87FE2589FCBC", 656, 1273092889, "386464", 1273092889, "386464", null, "700", "323 North", "Pulaski Rd", 1159945200, "24800", "North Bound: 12000 / South Bound: 12800", "41.886148", "-87.725824", [ null, "41.886148", "-87.725824", null, false ] ]
, [ 657, "77F236B5-377D-4C29-9C68-D40E6536B841", 657, 1273092889, "386464", 1273092889, "386464", null, "701", "267 North", "Central Park Ave", 1163404800, "8800", "North Bound: 4300 / South Bound: 4500", "41.886115", "-87.71603", [ null, "41.886115", "-87.71603", null, false ] ]
, [ 658, "BBD4E727-BB1E-43DE-BCA4-F1A75D1C3A9D", 658, 1273092889, "386464", 1273092889, "386464", null, "702", "243 North", "Homan Ave", 1159340400, "12600", "North Bound: 6300 / South Bound: 6300", "41.88602", "-87.711158", [ null, "41.88602", "-87.711158", null, false ] ]
, [ 659, "56E83450-96DF-4486-9647-B1B23F0C563C", 659, 1273092889, "386464", 1273092889, "386464", null, "703", "222 North", "Kedzie Ave", 1160377200, "14500", "North Bound: 7500 / South Bound: 7000", "41.885154", "-87.706241", [ null, "41.885154", "-87.706241", null, false ] ]
, [ 660, "B929FDE0-8F4E-4B18-B76E-5953C248CD74", 660, 1273092889, "386464", 1273092889, "386464", null, "704", "220 North", "Western Ave", 1161673200, "34400", "North Bound: 16800 / South Bound: 17600", "41.885258", "-87.686545", [ null, "41.885258", "-87.686545", null, false ] ]
, [ 661, "555B774A-BF90-442F-B0F3-66B30DD87FAD", 661, 1273092889, "386464", 1273092889, "386464", null, "705", "209 North", "Damen Ave", 1155711600, "20300", "North Bound: 11400 / South Bound: 8900", "41.885313", "-87.676747", [ null, "41.885313", "-87.676747", null, false ] ]
, [ 662, "03928FED-F39B-45AE-B11D-F32EBFE7AF3F", 662, 1273092889, "386464", 1273092889, "386464", null, "706", "210 North", "Halsted St", 1159772400, "20300", "North Bound: 9400 / South Bound: 10900", "41.886044", "-87.647485", [ null, "41.886044", "-87.647485", null, false ] ]
, [ 663, "F5E907B9-0E0E-4955-BBCC-F0FD548A5C8B", 663, 1273092889, "386464", 1273092889, "386464", null, "708", "549 North", "Milwaukee Ave", 1161673200, "11100", "North Bound: 5100 / South Bound: 6000", "41.892395", "-87.64944", [ null, "41.892395", "-87.64944", null, false ] ]
, [ 664, "FCDC1C2A-96E2-46F4-BE3C-E8EA395C3D57", 664, 1273092889, "386464", 1273092889, "386464", null, "709", "640 North", "Wabash Ave", 1158649200, "7400", "South Bound: 7400/ Oneway South Bound ", "41.893693", "-87.626772", [ null, "41.893693", "-87.626772", null, false ] ]
, [ 665, "E6316453-BEEA-4153-861A-9664E7B286C7", 665, 1273092889, "386464", 1273092889, "386464", null, "710", "840 North", "Halsted St", 1158562800, "23100", "North Bound: 11200 / South Bound: 11900", "41.897792", "-87.647818", [ null, "41.897792", "-87.647818", null, false ] ]
, [ 669, "0743FCBA-0A96-48FA-A634-2596FB7FB3B7", 669, 1273092889, "386464", 1273092889, "386464", null, "715", "835 North", "Clark St", 1158735600, "16500", "South Bound: 16500/ Oneway South Bound ", "41.897747", "-87.631275", [ null, "41.897747", "-87.631275", null, false ] ]
, [ 684, "44E90D2E-6E03-4D60-A9EF-79C746F6EB71", 684, 1273092889, "386464", 1273092889, "386464", null, "730", "1300 West", "Washington St", 1163491200, "5900", "East Bound: 5900 / / Oneway East Bound", "41.882936", "-87.659747", [ null, "41.882936", "-87.659747", null, false ] ]
, [ 685, "1F23E229-63C9-460B-A3B7-E48E087FE46D", 685, 1273092889, "386464", 1273092889, "386464", null, "731", "1234 West", "Randolph St", 1160031600, "6000", "West Bound: 6000/ Oneway West Bound", "41.88422", "-87.658216", [ null, "41.88422", "-87.658216", null, false ] ]
, [ 686, "E8E6F2F7-B974-4FA3-BB66-7A7E1F890D2F", 686, 1273092889, "386464", 1273092889, "386464", null, "733", "645 North", "State St", 1168329600, "23100", "North Bound: 10500 / South Bound: 12600", "41.893306", "-87.628117", [ null, "41.893306", "-87.628117", null, false ] ]
, [ 687, "20B8EA1D-809B-4367-94B2-DA76D9C494D0", 687, 1273092889, "386464", 1273092889, "386464", null, "734", "640 North", "La Salle St", 1158822000, "39000", "North Bound: 21100 / South Bound: 17900", "41.893609", "-87.63265", [ null, "41.893609", "-87.63265", null, false ] ]
, [ 688, "53BD2EBF-E4FB-4B1B-A078-4B1787E19653", 688, 1273092889, "386464", 1273092889, "386464", null, "735", "635 North", "Dearborn St", 1158735600, "16400", "North Bound: 16400 / / Oneway North Bound ", "41.893431", "-87.629699", [ null, "41.893431", "-87.629699", null, false ] ]
, [ 689, "B63EF24F-33AE-415D-A9B9-93D37A208AD5", 689, 1273092889, "386464", 1273092889, "386464", null, "736", "641 North", "Clark St", 1159426800, "21200", "South Bound: 21200/ Oneway South Bound ", "41.89363", "-87.631177", [ null, "41.89363", "-87.631177", null, false ] ]
, [ 690, "5C4A2D77-6F05-490F-842A-54CC3DDB8504", 690, 1273092889, "386464", 1273092889, "386464", null, "737", "633 North", "Wells St", 1158735600, "9400", "South Bound: 9400/ Oneway South Bound ", "41.89337", "-87.634114", [ null, "41.89337", "-87.634114", null, false ] ]
, [ 692, "916D87DE-7770-4029-8353-E9CC15ECDB2D", 692, 1273092889, "386464", 1273092889, "386464", null, "740", "4306 West", "26th St", 1158044400, "8400", "East Bound: 4500 / West Bound: 3900", "41.844157", "-87.731356", [ null, "41.844157", "-87.731356", null, false ] ]
, [ 694, "6512E662-A575-4E26-AB78-B612DCEEF954", 694, 1273092889, "386464", 1273092889, "386464", null, "742", "180 North", "La Salle St", 1158822000, "22800", "North Bound: 12300 / South Bound: 10500", "41.885449", "-87.632438", [ null, "41.885449", "-87.632438", null, false ] ]
, [ 695, "1DBF2AAF-878D-4C53-88FB-CB006F1E7C0E", 695, 1273092889, "386464", 1273092889, "386464", null, "743", "180 North", "Wabash Ave", 1162886400, "8200", "South Bound: 8200/ Oneway South Bound ", "41.88535", "-87.626269", [ null, "41.88535", "-87.626269", null, false ] ]
, [ 696, "3CD86F86-EE31-455C-BA79-19DF0D6FE8BA", 696, 1273092889, "386464", 1273092889, "386464", null, "744", "163 North", "Dearborn St", 1159254000, "14100", "North Bound: 14100 / / Oneway North Bound ", "41.884893", "-87.629469", [ null, "41.884893", "-87.629469", null, false ] ]
, [ 697, "843F040F-7D6D-42D4-9C48-2C58E693ECDB", 697, 1273092889, "386464", 1273092889, "386464", null, "745", "175 North", "Clark St", 1159426800, "14500", "South Bound: 14500/ Oneway South Bound ", "41.885107", "-87.630954", [ null, "41.885107", "-87.630954", null, false ] ]
, [ 698, "045D198B-F131-4356-BBF4-A134076A5C12", 698, 1273092889, "386464", 1273092889, "386464", null, "746", "176 North", "Wells St", 1158649200, "10600", "South Bound: 10600/ Oneway South Bound ", "41.885249", "-87.633916", [ null, "41.885249", "-87.633916", null, false ] ]
, [ 699, "8AFC36A9-A0B6-413A-9F91-17860EF1FE71", 699, 1273092889, "386464", 1273092889, "386464", null, "747", "162 North", "Franklin St", 1162886400, "16800", "North Bound: 16800 / / Oneway North Bound", "41.884874", "-87.635389", [ null, "41.884874", "-87.635389", null, false ] ]
, [ 700, "98AA293F-6C92-4D39-AC30-B7EB1C100E7A", 700, 1273092889, "386464", 1273092889, "386464", null, "748", "156 North", "Jefferson St", 1159772400, "8300", "North Bound: 8300 / / Oneway North Bound", "41.8848", "-87.642746", [ null, "41.8848", "-87.642746", null, false ] ]
, [ 701, "408D1976-1BD2-45D3-B1E0-A3292A658F24", 701, 1273092889, "386464", 1273092889, "386464", null, "749", "186 North", "Des Plaines St", 1159772400, "7300", "South Bound: 7300/ Oneway South Bound", "41.885696", "-87.644242", [ null, "41.885696", "-87.644242", null, false ] ]
, [ 711, "7188A30D-4142-4679-92C3-AB16FFFAE80B", 711, 1273092889, "386464", 1273092889, "386464", null, "762", "3121 South", "Pulaski Rd", 1158217200, "29500", "North Bound: 15400 / South Bound: 14100", "41.836244", "-87.724337", [ null, "41.836244", "-87.724337", null, false ] ]
, [ 712, "F565B828-9D35-41A0-A490-87F93A3DB93A", 712, 1273092889, "386464", 1273092889, "386464", null, "763", "2235 South", "Damen Ave", 1155798000, "24000", "North Bound: 12900 / South Bound: 11100", "41.851171", "-87.675811", [ null, "41.851171", "-87.675811", null, false ] ]
, [ 713, "1F6E22C8-7CBE-48D8-BE81-F215956E5912", 713, 1273092889, "386464", 1273092889, "386464", null, "764", "1659 South", "Homan Ave", 1158217200, "5100", "North Bound: 3200 / South Bound: 1900", "41.857335", "-87.710287", [ null, "41.857335", "-87.710287", null, false ] ]
, [ 714, "ECBFFDA4-3F37-422A-B3E1-EEA241EDE32A", 714, 1273092889, "386464", 1273092889, "386464", null, "765", "323 South", "Central Ave", 1161154800, "26600", "North Bound: 12800 / South Bound: 13800", "41.875738", "-87.764697", [ null, "41.875738", "-87.764697", null, false ] ]
, [ 731, "E25214CA-1654-47A8-9DB5-B2CD95E9536D", 731, 1273092889, "386464", 1273092889, "386464", null, "784", "3150 South", "State St", 1161154800, "21800", "North Bound: 11100 / South Bound: 10700", "41.836451", "-87.626742", [ null, "41.836451", "-87.626742", null, false ] ]
, [ 732, "0C0CADDE-16BA-42A1-A55E-663F2148055B", 732, 1273092889, "386464", 1273092889, "386464", null, "786", "715 South", "Kedzie Ave", 1160463600, "16300", "North Bound: 8800 / South Bound: 7500", "41.872254", "-87.705864", [ null, "41.872254", "-87.705864", null, false ] ]
, [ 733, "E8041091-6421-4743-8309-FF46923B3AC0", 733, 1273092889, "386464", 1273092889, "386464", null, "787", "750 North", "Central Park Ave", 1160636400, "10300", "North Bound: 5200 / South Bound: 5100", "41.895238", "-87.716306", [ null, "41.895238", "-87.716306", null, false ] ]
, [ 734, "EB78527C-D258-41F9-8321-C2F2E7FE0825", 734, 1273092889, "386464", 1273092889, "386464", null, "788", "700 South", "Pulaski Rd", 1159945200, "23700", "North Bound: 13300 / South Bound: 10400", "41.872493", "-87.725399", [ null, "41.872493", "-87.725399", null, false ] ]
, [ 735, "07181571-96FF-40CB-813C-42172162EB63", 735, 1273092889, "386464", 1273092889, "386464", null, "789", "338 South", "Homan Ave", 1159340400, "15000", "North Bound: 7700 / South Bound: 7300", "41.876095", "-87.710846", [ null, "41.876095", "-87.710846", null, false ] ]
, [ 736, "9C40A0E4-52C1-49FF-B8F4-2D68F5D86B9F", 736, 1273092889, "386464", 1273092889, "386464", null, "790", "194 North", "Damen Ave", 1162368000, "18800", "North Bound: 10400 / South Bound: 8400", "41.884983", "-87.676739", [ null, "41.884983", "-87.676739", null, false ] ]
, [ 737, "48C80EB6-C978-44BE-A1BC-2B35ECB6664D", 737, 1273092889, "386464", 1273092889, "386464", null, "791", "465 North", "Desplaines St", 1159772400, "4500", "North Bound: 2000 / South Bound: 2500", "41.891012", "-87.644365", [ null, "41.891012", "-87.644365", null, false ] ]
, [ 738, "25A764D5-E152-4BFD-A6AB-6FD803802913", 738, 1273092889, "386464", 1273092889, "386464", null, "792", "667 North", "Sacramento Ave", 1160377200, "21400", "North Bound: 11100 / South Bound: 10300", "41.893745", "-87.70215", [ null, "41.893745", "-87.70215", null, false ] ]
, [ 741, "C3BB4E68-B4E7-42E6-81CF-9E6F14CA5A03", 741, 1273092889, "386464", 1273092889, "386464", null, "795", "745 North", "Fairbanks Ct", 1162281600, "10700", "North Bound: 6400 / South Bound: 4300", "41.896368", "-87.620359", [ null, "41.896368", "-87.620359", null, false ] ]
, [ 743, "BB5A0F60-01EA-4F9D-8016-EBBF793308DA", 743, 1273092889, "386464", 1273092889, "386464", null, "798", "4732 South", "Pulaski Rd", 1155625200, "45700", "North Bound: 23900 / South Bound: 21800", "41.806868", "-87.723555", [ null, "41.806868", "-87.723555", null, false ] ]
, [ 744, "6CA1DD77-3460-404F-81C1-7C82B2739028", 744, 1273092889, "386464", 1273092889, "386464", null, "799", "3110 South", "California Ave", 1155798000, "30800", "North Bound: 15900 / South Bound: 14900", "41.836927", "-87.695017", [ null, "41.836927", "-87.695017", null, false ] ]
, [ 748, "57D13221-BEBB-4DFB-98CE-310432A34FB9", 748, 1273092889, "386464", 1273092889, "386464", null, "804", "22 West", "Congress Pkwy", 1159340400, "62700", "East Bound: 29900 / West Bound: 32800", "41.875633", "-87.628433", [ null, "41.875633", "-87.628433", null, false ] ]
, [ 750, "647F0949-92F0-4BC0-96DD-7EDC4F16CB00", 750, 1273092889, "386464", 1273092889, "386464", null, "806", "1 West", "Grand Ave", 1158822000, "18800", "West Bound: 18800/ Oneway West Bound ", "41.891671", "-87.628113", [ null, "41.891671", "-87.628113", null, false ] ]
, [ 754, "EA57A890-B5D3-4B48-B633-EE9DF0D9EE78", 754, 1273092889, "386464", 1273092889, "386464", null, "810", "408 South", "Clark St", 1158735600, "13000", "South Bound: 13000/ Oneway South Bound ", "41.876698", "-87.630742", [ null, "41.876698", "-87.630742", null, false ] ]
, [ 755, "24C15918-349B-46D5-ABEC-CA933BC1C4AD", 755, 1273092889, "386464", 1273092889, "386464", null, "811", "322 South", "California Ave", 1160463600, "13100", "North Bound: 6900 / South Bound: 6200", "41.876736", "-87.696174", [ null, "41.876736", "-87.696174", null, false ] ]
, [ 763, "94B1373F-95E6-4EE1-8D7D-70DB8B653D03", 763, 1273092889, "386464", 1273092889, "386464", null, "819", "2641 West", "Pershing Rd", 1159254000, "11000", "East Bound: 5800 / West Bound: 5200", "41.822852", "-87.691118", [ null, "41.822852", "-87.691118", null, false ] ]
, [ 764, "6CCE4495-F58A-494F-95ED-576B123B61E6", 764, 1273092889, "386464", 1273092889, "386464", null, "820", "4418 West", "26th St", 1163664000, "14800", "East Bound: 7300 / West Bound: 7500", "41.844102", "-87.735004", [ null, "41.844102", "-87.735004", null, false ] ]
, [ 765, "7CC2A4C2-2FFF-4D95-BF01-5DFD825382EB", 765, 1273092889, "386464", 1273092889, "386464", null, "821", "4042 West", "Cermak Rd", 1163491200, "23200", "East Bound: 12800 / West Bound: 10400", "41.851522", "-87.726497", [ null, "41.851522", "-87.726497", null, false ] ]
, [ 773, "0D8B5EC4-C6EC-4137-9B88-4B3CECB01A57", 773, 1273092889, "386464", 1273092889, "386464", null, "831", "45 West", "31st St", 1161154800, "14100", "East Bound: 7600 / West Bound: 6500", "41.838279", "-87.628571", [ null, "41.838279", "-87.628571", null, false ] ]
, [ 774, "D7D16008-D6D6-42D4-AA07-5C0CF2544853", 774, 1273092889, "386464", 1273092889, "386464", null, "832", "4035 West", "Madison St", 1160722800, "21200", "East Bound: 10200 / West Bound: 11000", "41.880707", "-87.727098", [ null, "41.880707", "-87.727098", null, false ] ]
, [ 777, "B582CC67-84CA-4768-A2CC-3BB24ABB775E", 777, 1273092889, "386464", 1273092889, "386464", null, "836", "10 East", "Grand Ave", 1162886400, "20100", "West Bound: 20100/ Oneway West Bound ", "41.891676", "-87.627665", [ null, "41.891676", "-87.627665", null, false ] ]
, [ 778, "6272A5F1-FDDD-4FDB-BB00-B12A0C89AF46", 778, 1273092889, "386464", 1273092889, "386464", null, "837", "112 North", "California Ave", 1160377200, "5100", "North Bound: 3200 / South Bound: 1900", "41.883343", "-87.696348", [ null, "41.883343", "-87.696348", null, false ] ]
, [ 779, "2EC73474-3FF6-485D-83A1-20F0B0106429", 779, 1273092889, "386464", 1273092889, "386464", null, "838", "25 North", "Cicero Ave", 1161586800, "37000", "North Bound: 18300 / South Bound: 18700", "41.881365", "-87.745317", [ null, "41.881365", "-87.745317", null, false ] ]
, [ 780, "98FDDC80-E31B-44F2-9912-80F3FA544A9A", 780, 1273092889, "386464", 1273092889, "386464", null, "839", "173 West", "Ohio St", 1158822000, "37700", "East Bound: 37700 / / Oneway East Bound ", "41.892388", "-87.634088", [ null, "41.892388", "-87.634088", null, false ] ]
, [ 782, "EBCE3034-9EE0-42DE-A35B-7ABADAFD36B7", 782, 1273092889, "386464", 1273092889, "386464", null, "841", "2430 West", "Ogden Ave", 1162454400, "29900", "East Bound: 15800 / West Bound: 14100", "41.864394", "-87.687068", [ null, "41.864394", "-87.687068", null, false ] ]
, [ 788, "AE442D99-912C-47F3-BDCD-DE83B91AE2C2", 788, 1273092889, "386464", 1273092889, "386464", null, "847", "1420 West", "Madison St", 1160636400, "12400", "East Bound: 5300 / West Bound: 7100", "41.881522", "-87.66285", [ null, "41.881522", "-87.66285", null, false ] ]
, [ 798, "455B8070-E49F-4CB4-AF69-09A610696C66", 798, 1273092889, "386464", 1273092889, "386464", null, "857", "10 South", "Canal St", 1158649200, "12100", "North Bound: 12100 / / Oneway North Bound", "41.881585", "-87.639674", [ null, "41.881585", "-87.639674", null, false ] ]
, [ 846, "0E426C98-1052-4919-8052-6709B3E00459", 846, 1273092889, "386464", 1273092889, "386464", null, "911", "71 South", "Wacker Dr", 1158649200, "21200", "North Bound: 11100 / South Bound: 10100", "41.8807", "-87.636735", [ null, "41.8807", "-87.636735", null, false ] ]
, [ 887, "4D52405D-482E-4D17-A796-AD6742B28FD5", 887, 1273092889, "386464", 1273092889, "386464", null, "952", "3915 West", "Roosevelt Rd", 1161241200, "23900", "East Bound: 11200 / West Bound: 12700", "41.866196", "-87.723436", [ null, "41.866196", "-87.723436", null, false ] ]
, [ 935, "A047BC47-A0CB-490C-AC0E-C1D0EA2BE429", 935, 1273092889, "386464", 1273092889, "386464", null, "1002", "901 South", "Ashland Ave", 1157007600, "42500", "North Bound: 22300 / South Bound: 20200", "41.870413", "-87.666487", [ null, "41.870413", "-87.666487", null, false ] ]
, [ 937, "F60DE4D6-76B1-44B9-B06D-D44B4A54060E", 937, 1273092889, "386464", 1273092889, "386464", null, "1004", "1031 South", "Austin Ave", 1161846000, "26100", "North Bound: 12800 / South Bound: 13300", "41.868169", "-87.774229", [ null, "41.868169", "-87.774229", null, false ] ]
, [ 938, "5DF4B7EF-36DB-4103-992D-2DD796D2AE2C", 938, 1273092889, "386464", 1273092889, "386464", null, "1005", "148 North", "Austin Ave", 1161846000, "31500", "North Bound: 16400 / South Bound: 15100", "41.883496", "-87.77476", [ null, "41.883496", "-87.77476", null, false ] ]
, [ 939, "D167B6DC-BDEB-4D1E-BAA5-450CDC60405A", 939, 1273092889, "386464", 1273092889, "386464", null, "1006", "643 North", "Central Ave", 1161154800, "24800", "North Bound: 10400 / South Bound: 14400", "41.892407", "-87.765299", [ null, "41.892407", "-87.765299", null, false ] ]
, [ 940, "9F121C6D-D74C-4665-8D7F-1764E5C31C77", 940, 1273092889, "386464", 1273092889, "386464", null, "1007", "725 South", "Central Park Ave", 1160636400, "10700", "North Bound: 4600 / South Bound: 6100", "41.871785", "-87.715588", [ null, "41.871785", "-87.715588", null, false ] ]
, [ 941, "50777CAB-37D8-47C5-8871-06E504A20093", 941, 1273092889, "386464", 1273092889, "386464", null, "1008", "815 South", "Cicero Ave", 1161846000, "35200", "North Bound: 17800 / South Bound: 17400", "41.869875", "-87.744879", [ null, "41.869875", "-87.744879", null, false ] ]
, [ 942, "DD931A39-9630-43AC-9CD6-9B0035AE5A06", 942, 1273092889, "386464", 1273092889, "386464", null, "1009", "2532 West", "Washington St", 1160031600, "7000", "East Bound: 7000 / / Oneway East Bound", "41.882972", "-87.689807", [ null, "41.882972", "-87.689807", null, false ] ]
, [ 943, "1DD35891-A3A0-460D-A4BB-5D59AC597F1F", 943, 1273092889, "386464", 1273092889, "386464", null, "1010", "220 West", "Washington St", 1159254000, "14600", "East Bound: 14600 / / Oneway East Bound ", "41.883208", "-87.634482", [ null, "41.883208", "-87.634482", null, false ] ]
, [ 944, "FFF48752-D359-4B41-9267-5754890F48B7", 944, 1273092889, "386464", 1273092889, "386464", null, "1011", "855 West", "Washington St", 1158649200, "9500", "East Bound: 9500 / / Oneway East Bound", "41.883107", "-87.649602", [ null, "41.883107", "-87.649602", null, false ] ]
, [ 945, "D430D383-7BCA-4F70-B547-F739D5322A28", 945, 1273092889, "386464", 1273092889, "386464", null, "1012", "3935 West", "Washington St", 1163577600, "16300", "East Bound: 8300 / West Bound: 8000", "41.881907", "-87.724652", [ null, "41.881907", "-87.724652", null, false ] ]
, [ 947, "C0F10E14-CB8B-433E-86B1-9436C5440C1D", 947, 1273092889, "386464", 1273092889, "386464", null, "1014", "516 North", "Wells St", 1158649200, "16300", "South Bound: 16300/ Oneway South Bound ", "41.891353", "-87.634063", [ null, "41.891353", "-87.634063", null, false ] ]
, [ 948, "BE6615D7-2198-4C87-942E-B7CA99A1FED0", 948, 1273092889, "386464", 1273092889, "386464", null, "1015", "15 South", "Wells St", 1158649200, "9900", "South Bound: 9900/ Oneway South Bound ", "41.881401", "-87.633811", [ null, "41.881401", "-87.633811", null, false ] ]
, [ 950, "59543A12-D960-414E-8B8E-88F000749519", 950, 1273092889, "386464", 1273092889, "386464", null, "1018", "652 North", "Western Ave", 1160031600, "32400", "North Bound: 16800 / South Bound: 15600", "41.893685", "-87.68678", [ null, "41.893685", "-87.68678", null, false ] ]
, [ 951, "33C32524-A497-47AE-9C2F-10718C7CAB6E", 951, 1273092889, "386464", 1273092889, "386464", null, "1019", "350 South", "Western Ave", 1161673200, "33900", "North Bound: 17400 / South Bound: 16500", "41.876083", "-87.686271", [ null, "41.876083", "-87.686271", null, false ] ]
, [ 952, "CAB0849C-95DD-44F1-A72D-F71D4E0DE70A", 952, 1273092889, "386464", 1273092889, "386464", null, "1020", "1314 West", "18th St", 1160982000, "9500", "East Bound: 5000 / West Bound: 4500", "41.857903", "-87.659605", [ null, "41.857903", "-87.659605", null, false ] ]
, [ 953, "7F081A28-216F-432C-99DE-C96A193C60B2", 953, 1273092889, "386464", 1273092889, "386464", null, "1021", "3734 West", "26th St", 1158217200, "18400", "East Bound: 9000 / West Bound: 9400", "41.844328", "-87.718582", [ null, "41.844328", "-87.718582", null, false ] ]
, [ 954, "85E106D1-5C59-4E9F-A7E7-160EBB1F643E", 954, 1273092889, "386464", 1273092889, "386464", null, "1022", "4344 West", "26th St", 1158044400, "17300", "East Bound: 8100 / West Bound: 9200", "41.844137", "-87.732725", [ null, "41.844137", "-87.732725", null, false ] ]
, [ 955, "DBAF4C5E-A258-4016-9046-E1150F76D49D", 955, 1273092889, "386464", 1273092889, "386464", null, "1023", "891 South", "Damen Ave", 1155711600, "31400", "North Bound: 15300 / South Bound: 16100", "41.8702", "-87.676347", [ null, "41.8702", "-87.676347", null, false ] ]
, [ 958, "53E90677-A065-493B-AE76-7FE9B97161B1", 958, 1273092889, "386464", 1273092889, "386464", null, "1026", "700 South", "Halsted St", 1161759600, "25300", "North Bound: 11800 / South Bound: 13500", "41.87346", "-87.647091", [ null, "41.87346", "-87.647091", null, false ] ]
, [ 959, "C7D55805-6FBF-4144-9CD0-53FD3C9B03E6", 959, 1273092889, "386464", 1273092889, "386464", null, "1027", "5212 West", "Harrison St", 1163577600, "6500", "East Bound: 3300 / West Bound: 3200", "41.872939", "-87.755447", [ null, "41.872939", "-87.755447", null, false ] ]
, [ 961, "9CA1364F-6836-4ECF-9FEE-D2C8A726A779", 961, 1273092889, "386464", 1273092889, "386464", null, "1029", "750 South", "Kostner Ave", 1157439600, "17500", "North Bound: 8900 / South Bound: 8600", "41.870966", "-87.735136", [ null, "41.870966", "-87.735136", null, false ] ]
, [ 962, "E6621D32-2647-488D-971F-E695AAAE271C", 962, 1273092889, "386464", 1273092889, "386464", null, "1031", "250 North", "Kostner Ave", 1157439600, "5700", "South Bound: 5700/ Oneway South Bound ", "41.884822", "-87.735612", [ null, "41.884822", "-87.735612", null, false ] ]
, [ 963, "6D37E6B6-2CE8-4603-9E7E-D20B4E6FD5FA", 963, 1273092889, "386464", 1273092889, "386464", null, "1032", "5124 West", "Lake St", 1161241200, "11400", "East Bound: 5600 / West Bound: 5800", "41.887117", "-87.753983", [ null, "41.887117", "-87.753983", null, false ] ]
, [ 964, "A4A96A8B-5BF9-4474-8490-74C44A3C766F", 964, 1273092889, "386464", 1273092889, "386464", null, "1033", "850 South", "Laramie Ave", 1161586800, "18800", "North Bound: 9100 / South Bound: 9700", "41.869233", "-87.754655", [ null, "41.869233", "-87.754655", null, false ] ]
, [ 965, "DB67A742-66FB-40C3-A72E-5449B32768BF", 965, 1273092889, "386464", 1273092889, "386464", null, "1034", "511 North", "Laramie Ave", 1161586800, "20600", "North Bound: 9600 / South Bound: 11000", "41.889649", "-87.755407", [ null, "41.889649", "-87.755407", null, false ] ]
, [ 966, "7B730109-5CD0-475E-B93C-08D93FF6AE83", 966, 1273092889, "386464", 1273092889, "386464", null, "1035", "5937 West", "Madison St", 1165996800, "13400", "East Bound: 5500 / West Bound: 7900", "41.880108", "-87.773266", [ null, "41.880108", "-87.773266", null, false ] ]
, [ 967, "1C66390F-46D6-4D73-BD1C-5B311A9F19D6", 967, 1273092889, "386464", 1273092889, "386464", null, "1036", "4640 West", "Madison St", 1160636400, "24700", "East Bound: 11200 / West Bound: 13500", "41.880537", "-87.741833", [ null, "41.880537", "-87.741833", null, false ] ]
, [ 968, "8C511272-0914-4BEC-A8B5-1A77F81A1EC6", 968, 1273092889, "386464", 1273092889, "386464", null, "1037", "803 South", "Racine Ave", 1158735600, "14400", "North Bound: 6800 / South Bound: 7600", "41.871676", "-87.656828", [ null, "41.871676", "-87.656828", null, false ] ]
, [ 969, "3D82A7F5-11F0-40B4-A612-10E418C69BA3", 969, 1273092889, "386464", 1273092889, "386464", null, "1038", "5253 West", "Roosevelt Rd", 1161241200, "21700", "East Bound: 10800 / West Bound: 10900", "41.865714", "-87.759312", [ null, "41.865714", "-87.759312", null, false ] ]
, [ 970, "DD50DC89-D79A-4D2F-BE9A-C3E923D55D58", 970, 1273092889, "386464", 1273092889, "386464", null, "1039", "3300 West", "Roosevelt Rd", 1161241200, "20300", "East Bound: 9000 / West Bound: 11300", "41.866377", "-87.708143", [ null, "41.866377", "-87.708143", null, false ] ]
, [ 971, "A95A5F2E-26FC-4913-BB29-EE9D07AC76BB", 971, 1273092889, "386464", 1273092889, "386464", null, "1041", "250 East", "26th St", 1161068400, "8400", "East Bound: 3600 / West Bound: 4800", "41.845685", "-87.620482", [ null, "41.845685", "-87.620482", null, false ] ]
, [ 972, "662BD73D-FDC8-408B-9BB6-D7A4A228E8FC", 972, 1273092889, "386464", 1273092889, "386464", null, "1042", "310 West", "31st St", 1161241200, "14300", "East Bound: 6900 / West Bound: 7400", "41.838197", "-87.634579", [ null, "41.838197", "-87.634579", null, false ] ]
, [ 973, "65F097AC-ED67-472D-B609-1E6522493D48", 973, 1273092889, "386464", 1273092889, "386464", null, "1043", "52 East", "31st St", 1161154800, "11700", "East Bound: 6100 / West Bound: 5600", "41.838327", "-87.624762", [ null, "41.838327", "-87.624762", null, false ] ]
, [ 974, "2BD8F077-A99A-4A8A-869C-2100EAA17832", 974, 1273092889, "386464", 1273092889, "386464", null, "1044", "452 West", "47th St", 1161241200, "19800", "East Bound: 9500 / West Bound: 10300", "41.809005", "-87.637985", [ null, "41.809005", "-87.637985", null, false ] ]
, [ 979, "FFD38885-8F8F-4230-9727-4161F8698043", 979, 1273092889, "386464", 1273092889, "386464", null, "1049", "1233 West", "Adams St", 1160031600, "3800", "West Bound: 3800/ Oneway West Bound ", "41.879037", "-87.658396", [ null, "41.879037", "-87.658396", null, false ] ]
, [ 980, "C7381FAB-DBF7-4C25-BCE6-2C8826FA2AF5", 980, 1273092889, "386464", 1273092889, "386464", null, "1050", "555 West", "Adams St", 1158735600, "11700", "West Bound: 11700/ Oneway West Bound", "41.879284", "-87.641796", [ null, "41.879284", "-87.641796", null, false ] ]
, [ 981, "3972AEDC-80EB-442B-812E-BDF1802A5BA6", 981, 1273092889, "386464", 1273092889, "386464", null, "1051", "222 West", "Adams St", 1158735600, "16400", "West Bound: 16400/ Oneway West Bound", "41.879377", "-87.634436", [ null, "41.879377", "-87.634436", null, false ] ]
, [ 982, "31DD7CA2-6123-4262-ACCB-6CBD80CD53D7", 982, 1273092889, "386464", 1273092889, "386464", null, "1052", "1020 West", "Adams St", 1158649200, "5100", "West Bound: 5100/ Oneway West Bound ", "41.879125", "-87.652799", [ null, "41.879125", "-87.652799", null, false ] ]
, [ 983, "47554F58-F846-4A17-A47B-AB4571BBBC26", 983, 1273092889, "386464", 1273092889, "386464", null, "1053", "2224 South", "Archer Ave", 1161241200, "15300", "North Bound: 8100 / South Bound: 7200", "41.852403", "-87.635761", [ null, "41.852403", "-87.635761", null, false ] ]
, [ 984, "F8748C0D-343C-443B-983C-9D6117921F21", 984, 1273092889, "386464", 1273092889, "386464", null, "1054", "755 North", "Ashland Ave", 1161846000, "30500", "North Bound: 15800 / South Bound: 14700", "41.89604", "-87.667289", [ null, "41.89604", "-87.667289", null, false ] ]
, [ 986, "A2317FDD-8498-4997-948F-433834542F67", 986, 1273092889, "386464", 1273092889, "386464", null, "1056", "320 South", "Ashland Ave", 1157007600, "35700", "North Bound: 19100 / South Bound: 16600", "41.876934", "-87.666676", [ null, "41.876934", "-87.666676", null, false ] ]
, [ 990, "2873DDFE-17CD-4ADD-9960-5CD3ECD301AF", 990, 1273092889, "386464", 1273092889, "386464", null, "1060", "165 North", "Canal St", 1169625600, "10200", "North Bound: 10200 / / Oneway North Bound", "41.885079", "-87.639827", [ null, "41.885079", "-87.639827", null, false ] ]
, [ 991, "7F492BA4-F8B5-44DE-B725-4A93F0D1D6A1", 991, 1273092889, "386464", 1273092889, "386464", null, "1061", "536 North", "Central Park Ave", 1163404800, "7600", "North Bound: 4500 / South Bound: 3100", "41.891097", "-87.716199", [ null, "41.891097", "-87.716199", null, false ] ]
, [ 992, "772F9DF5-F806-4B9E-BF64-85F2AFE541E1", 992, 1273092889, "386464", 1273092889, "386464", null, "1062", "64 North", "Central Park Ave", 1160636400, "12500", "North Bound: 5700 / South Bound: 6800", "41.879533", "-87.715851", [ null, "41.879533", "-87.715851", null, false ] ]
, [ 993, "638A5BA9-8A78-4077-943C-DF55D9B9491C", 993, 1273092889, "386464", 1273092889, "386464", null, "1063", "303 East", "Cermak Rd", 1161068400, "25700", "East Bound: 10900 / West Bound: 14800", "41.852872", "-87.620534", [ null, "41.852872", "-87.620534", null, false ] ]
, [ 994, "27671090-FFAC-4752-BC26-16915CADC592", 994, 1273092889, "386464", 1273092889, "386464", null, "1065", "3652 West", "Chicago Ave", 1163491200, "20000", "East Bound: 10600 / West Bound: 9400", "41.895439", "-87.718427", [ null, "41.895439", "-87.718427", null, false ] ]
, [ 995, "EB078D7A-CE21-4042-8900-258CA380D475", 995, 1273092889, "386464", 1273092889, "386464", null, "1066", "1020 West", "Chicago Ave", 1161154800, "25500", "East Bound: 13200 / West Bound: 12300", "41.896292", "-87.653604", [ null, "41.896292", "-87.653604", null, false ] ]
, [ 996, "02226DFC-CD6B-4C27-9B79-329B25F51117", 996, 1273092889, "386464", 1273092889, "386464", null, "1067", "2650 West", "Chicago Ave", 1161154800, "18800", "East Bound: 8900 / West Bound: 9900", "41.895673", "-87.693867", [ null, "41.895673", "-87.693867", null, false ] ]
, [ 997, "3F713681-F3B8-4FB2-8788-E3B78F26FA1A", 997, 1273092889, "386464", 1273092889, "386464", null, "1068", "406 North", "Clark St", 1159340400, "20700", "South Bound: 20700/ Oneway South Bound ", "41.889469", "-87.631064", [ null, "41.889469", "-87.631064", null, false ] ]
, [ 998, "14A69425-1DD8-4986-865E-A11C42AD1D49", 998, 1273092889, "386464", 1273092889, "386464", null, "1069", "670 South", "Clark St", 1158735600, "20400", "North Bound: 9100 / South Bound: 11300", "41.873368", "-87.630642", [ null, "41.873368", "-87.630642", null, false ] ]
, [ 999, "AFF0E2DA-7CE2-4F61-B407-38CAB7EE6634", 999, 1273092889, "386464", 1273092889, "386464", null, "1070", "16 South", "Clark St", 1159340400, "15500", "South Bound: 15500/ Oneway South Bound ", "41.881592", "-87.630875", [ null, "41.881592", "-87.630875", null, false ] ]
, [ 1000, "B6B5521B-22B2-4DB8-8922-F1004CAAF195", 1000, 1273092889, "386464", 1273092889, "386464", null, "1071", "613 North", "Clark St", 1159340400, "17300", "South Bound: 17300/ Oneway South Bound ", "41.892773", "-87.631157", [ null, "41.892773", "-87.631157", null, false ] ]
, [ 1001, "7E1ABF0C-4A74-4E2C-A9D5-12974BE0EE3B", 1001, 1273092889, "386464", 1273092889, "386464", null, "1072", "1101 South", "Clark St", 1158822000, "25800", "North Bound: 14300 / South Bound: 11500", "41.869119", "-87.630476", [ null, "41.869119", "-87.630476", null, false ] ]
, [ 1002, "39F738E1-9657-41D6-BA73-6B67BC609876", 1002, 1273092889, "386464", 1273092889, "386464", null, "1074", "168 North", "Clinton St", 1170144000, "6900", "South Bound: 6900/ Oneway South Bound", "41.8852", "-87.641298", [ null, "41.8852", "-87.641298", null, false ] ]
, [ 1003, "A93D707C-DDC4-45F8-B54E-B0D1189B4560", 1003, 1273092889, "386464", 1273092889, "386464", null, "1075", "101 South", "Clinton St", 1159772400, "11500", "South Bound: 11500/ Oneway South Bound", "41.880534", "-87.64115", [ null, "41.880534", "-87.64115", null, false ] ]
, [ 1004, "D1643D1A-7D46-4878-885C-CAD14006BA44", 1004, 1273092889, "386464", 1273092889, "386464", null, "1077", "843 South", "Columbus Dr", 1158649200, "37000", "North Bound: 18700 / South Bound: 18300", "41.87138", "-87.620556", [ null, "41.87138", "-87.620556", null, false ] ]
, [ 1005, "9BDD5969-1FCF-413A-ACC3-0F90542E6087", 1005, 1273092889, "386464", 1273092889, "386464", null, "1078", "85 West", "Congress Pkwy", 1159340400, "72400", "East Bound: 36200 / West Bound: 36200", "41.875611", "-87.630673", [ null, "41.875611", "-87.630673", null, false ] ]
, [ 1006, "DE0BEE8E-3902-47EB-93D4-A965BB4FA144", 1006, 1273092889, "386464", 1273092889, "386464", null, "1079", "40 East", "Congress Pkwy", 1172044800, "40700", "East Bound: 20400 / West Bound: 20300", "41.875684", "-87.626134", [ null, "41.875684", "-87.626134", null, false ] ]
, [ 1007, "7C69C060-0C23-4FE6-AA04-96A2DF161E6A", 1007, 1273092889, "386464", 1273092889, "386464", null, "1080", "730 North", "Damen Ave", 1155711600, "15600", "North Bound: 8200 / South Bound: 7400", "41.895021", "-87.677026", [ null, "41.895021", "-87.677026", null, false ] ]
, [ 1008, "26141DC3-132A-4147-91D9-65498328C6C4", 1008, 1273092889, "386464", 1273092889, "386464", null, "1081", "300 South", "Damen Ave", 1155798000, "21500", "North Bound: 10500 / South Bound: 11000", "41.877446", "-87.676545", [ null, "41.877446", "-87.676545", null, false ] ]
, [ 1010, "C8A28E18-64A3-43B6-9BD2-CB6B80D6A0D6", 1010, 1273092889, "386464", 1273092889, "386464", null, "1083", "50 North", "Damen Ave", 1155711600, "18200", "North Bound: 10100 / South Bound: 8100", "41.88276", "-87.676677", [ null, "41.88276", "-87.676677", null, false ] ]
, [ 1011, "E67A6730-3AB4-4EEC-92DD-A2EBDB5CAF68", 1011, 1273092889, "386464", 1273092889, "386464", null, "1084", "415 North", "Dearborn St", 1158649200, "16100", "North Bound: 16100 / / Oneway North Bound ", "41.889784", "-87.629599", [ null, "41.889784", "-87.629599", null, false ] ]
, [ 1012, "76408CAF-B2F5-4E81-979C-9846C1D9D54E", 1012, 1273092889, "386464", 1273092889, "386464", null, "1085", "77 South", "Dearborn St", 1158649200, "18500", "North Bound: 18500 / / Oneway North Bound ", "41.880734", "-87.629368", [ null, "41.880734", "-87.629368", null, false ] ]
, [ 1017, "40C26525-50FB-4227-AFCE-6E12517E354A", 1017, 1273092889, "386464", 1273092889, "386464", null, "1091", "3454 West", "Franklin St", 1161241200, "5000", "East Bound: 2200 / West Bound: 2800", "41.890003", "-87.713444", [ null, "41.890003", "-87.713444", null, false ] ]
, [ 1019, "7DBB9BD2-FA37-44B1-86BF-DB108729C58E", 1019, 1273092889, "386464", 1273092889, "386464", null, "1093", "1475 West", "Grand Ave", 1161586800, "19700", "East Bound: 10500 / West Bound: 9200", "41.891001", "-87.66523", [ null, "41.891001", "-87.66523", null, false ] ]
, [ 1020, "E076175F-0B56-43BD-8344-3D0DF4124C71", 1020, 1273092889, "386464", 1273092889, "386464", null, "1094", "242 East", "Grand Ave", 1163577600, "16400", "West Bound: 16400/ Oneway West Bound ", "41.891791", "-87.62091", [ null, "41.891791", "-87.62091", null, false ] ]
, [ 1022, "5C7751B0-0DD4-4A89-B584-D2B2E6346775", 1022, 1273092889, "386464", 1273092889, "386464", null, "1096", "2666 West", "Grand Ave", 1163404800, "18800", "East Bound: 9500 / West Bound: 9300", "41.893314", "-87.694126", [ null, "41.893314", "-87.694126", null, false ] ]
, [ 1023, "7F1E013B-E9CC-49FD-B907-E0769EAC354D", 1023, 1273092889, "386464", 1273092889, "386464", null, "1097", "2312 West", "Grand Ave", 1161586800, "18400", "East Bound: 9000 / West Bound: 9400", "41.890693", "-87.684779", [ null, "41.890693", "-87.684779", null, false ] ]
, [ 1024, "8C07BC96-31A1-4548-A4A2-F0CC12CB6466", 1024, 1273092889, "386464", 1273092889, "386464", null, "1099", "573 North", "Halsted St", 1158562800, "19000", "North Bound: 9000 / South Bound: 10000", "41.892362", "-87.647604", [ null, "41.892362", "-87.647604", null, false ] ]
, [ 1025, "FA878CCD-B40F-48C7-93AF-C9DC205E470F", 1025, 1273092889, "386464", 1273092889, "386464", null, "1100", "332 South", "Halsted St", 1159772400, "20400", "North Bound: 10200 / South Bound: 10200", "41.876932", "-87.647211", [ null, "41.876932", "-87.647211", null, false ] ]
, [ 1026, "877F8156-126F-4A57-A1C9-C3FEBB653CDF", 1026, 1273092889, "386464", 1273092889, "386464", null, "1101", "159 North", "Halsted St", 1159772400, "20000", "North Bound: 10200 / South Bound: 9800", "41.884845", "-87.64745", [ null, "41.884845", "-87.64745", null, false ] ]
, [ 1027, "981FBC7B-0A8F-4AA1-976A-C7828992F190", 1027, 1273092889, "386464", 1273092889, "386464", null, "1104", "626 North", "Homan Ave", 1159340400, "10700", "North Bound: 5300 / South Bound: 5400", "41.892668", "-87.71135", [ null, "41.892668", "-87.71135", null, false ] ]
, [ 1028, "533DF652-0B99-4754-A391-C800BCD4ECA3", 1028, 1273092889, "386464", 1273092889, "386464", null, "1105", "713 South", "Homan Ave", 1159340400, "15700", "North Bound: 8100 / South Bound: 7600", "41.872269", "-87.710736", [ null, "41.872269", "-87.710736", null, false ] ]
, [ 1029, "C26A45B8-AC1E-464E-8E29-E68D294B9A96", 1029, 1273092889, "386464", 1273092889, "386464", null, "1106", "2128 South", "Indiana Ave", 1161068400, "11200", "North Bound: 6600 / South Bound: 4600", "41.853372", "-87.622268", [ null, "41.853372", "-87.622268", null, false ] ]
, [ 1031, "C022F219-05D2-4202-B8B5-90ED8CEB8F57", 1031, 1273092889, "386464", 1273092889, "386464", null, "1108", "2500 West", "Jackson Blvd", 1160031600, "6000", "East Bound: 2700 / West Bound: 3300", "41.877521", "-87.688801", [ null, "41.877521", "-87.688801", null, false ] ]
, [ 1032, "6C75AC7D-3941-4E22-85CF-BD53984DC622", 1032, 1273092889, "386464", 1273092889, "386464", null, "1109", "3434 West", "Jackson Blvd", 1161154800, "10200", "East Bound: 4300 / West Bound: 5900", "41.877258", "-87.712307", [ null, "41.877258", "-87.712307", null, false ] ]
, [ 1033, "152338A3-8B33-4DDE-AA4E-D56DD79879B6", 1033, 1273092889, "386464", 1273092889, "386464", null, "1110", "625 West", "Jackson Blvd", 1159426800, "11900", "East Bound: 11900 / / Oneway East Bound ", "41.877989", "-87.643682", [ null, "41.877989", "-87.643682", null, false ] ]
, [ 1034, "C1EDC630-6F24-47DF-B0AD-AD563F31ADEE", 1034, 1273092889, "386464", 1273092889, "386464", null, "1111", "223 West", "Jackson Blvd", 1159426800, "11300", "East Bound: 11300 / / Oneway East Bound ", "41.878111", "-87.634405", [ null, "41.878111", "-87.634405", null, false ] ]
, [ 1035, "116EB1E9-E512-4690-A59B-99BC3B4C2382", 1035, 1273092889, "386464", 1273092889, "386464", null, "1112", "1026 West", "Jackson Blvd", 1158649200, "8600", "West Bound: 8600/ Oneway West Bound ", "41.877853", "-87.652996", [ null, "41.877853", "-87.652996", null, false ] ]
, [ 1036, "EDC227F1-785E-4417-AA72-33477B6235B9", 1036, 1273092889, "386464", 1273092889, "386464", null, "1113", "630 North", "Kedzie Ave", 1160377200, "14900", "North Bound: 7400 / South Bound: 7500", "41.892841", "-87.706475", [ null, "41.892841", "-87.706475", null, false ] ]
, [ 1037, "B5F1E8EA-FF62-42A8-99E0-A722698B8CFB", 1037, 1273092889, "386464", 1273092889, "386464", null, "1114", "901 West", "Lake St", 1163491200, "14100", "East Bound: 7200 / West Bound: 6900", "41.885625", "-87.649854", [ null, "41.885625", "-87.649854", null, false ] ]
, [ 1038, "3969B5B0-4FA2-4E6A-8B82-CE5771C3FDCB", 1038, 1273092889, "386464", 1273092889, "386464", null, "1115", "2335 West", "Lake St", 1161241200, "7700", "East Bound: 4300 / West Bound: 3400", "41.884665", "-87.685501", [ null, "41.884665", "-87.685501", null, false ] ]
, [ 1039, "6A94EE1F-4E9C-4B9F-BD25-CA0EECBA9B7A", 1039, 1273092889, "386464", 1273092889, "386464", null, "1116", "435 North", "La Salle St", 1158822000, "32300", "North Bound: 17700 / South Bound: 14600", "41.890186", "-87.632548", [ null, "41.890186", "-87.632548", null, false ] ]
, [ 1040, "4CB1474F-13FE-47B0-9683-D6083A03E708", 1040, 1273092889, "386464", 1273092889, "386464", null, "1117", "37 South", "La Salle St", 1158822000, "16200", "North Bound: 8500 / South Bound: 7700", "41.880972", "-87.632336", [ null, "41.880972", "-87.632336", null, false ] ]
, [ 1041, "029B58CA-990C-4FC8-A102-FE31CF9A9783", 1041, 1273092889, "386464", 1273092889, "386464", null, "1118", "1650 West", "Madison St", 1160031600, "10500", "East Bound: 6000 / West Bound: 4500", "41.881427", "-87.668678", [ null, "41.881427", "-87.668678", null, false ] ]
, [ 1042, "E243B739-2BED-41C3-8EB0-4291D080C503", 1042, 1273092889, "386464", 1273092889, "386464", null, "1119", "1061 West", "Madison St", 1158649200, "15800", "East Bound: 7400 / West Bound: 8400", "41.881657", "-87.65456", [ null, "41.881657", "-87.65456", null, false ] ]
, [ 1043, "46704028-5E73-45A6-A13C-16F38B8581CA", 1043, 1273092889, "386464", 1273092889, "386464", null, "1120", "600 West", "Madison St", 1158735600, "17400", "West Bound: 17400/ Oneway West Bound ", "41.881836", "-87.642708", [ null, "41.881836", "-87.642708", null, false ] ]
, [ 1044, "CABF6266-35A4-4A53-AD51-86600ED2C00C", 1044, 1273092889, "386464", 1273092889, "386464", null, "1121", "1251 South", "Michigan Ave", 1163664000, "21600", "North Bound: 12500 / South Bound: 9100", "41.866034", "-87.624114", [ null, "41.866034", "-87.624114", null, false ] ]
, [ 1045, "3C57A2BC-881B-471B-96CB-14D7BF610E59", 1045, 1273092889, "386464", 1273092889, "386464", null, "1122", "1631 South", "Michigan Ave", 1161068400, "22500", "North Bound: 12500 / South Bound: 10000", "41.859365", "-87.623968", [ null, "41.859365", "-87.623968", null, false ] ]
, [ 1046, "24D3D497-1C20-4969-A63D-83C6354D3BEF", 1046, 1273092889, "386464", 1273092889, "386464", null, "1123", "3060 South", "Michigan Ave", 1161154800, "18900", "North Bound: 8000 / South Bound: 10900", "41.838343", "-87.623444", [ null, "41.838343", "-87.623444", null, false ] ]
, [ 1049, "ADA02F82-C6D8-4914-BEDF-04910148F81C", 1049, 1273092889, "386464", 1273092889, "386464", null, "1126", "624 South", "Michigan Ave", 1159254000, "33100", "North Bound: 16400 / South Bound: 16700", "41.873905", "-87.624218", [ null, "41.873905", "-87.624218", null, false ] ]
, [ 1050, "7512AD3E-2B01-4DE3-9AF2-844095F00D8E", 1050, 1273092889, "386464", 1273092889, "386464", null, "1127", "30 South", "Michigan Ave", 1162886400, "46500", "North Bound: 25400 / South Bound: 21100", "41.881365", "-87.624349", [ null, "41.881365", "-87.624349", null, false ] ]
, [ 1051, "C8C38DE7-225C-47BA-8D70-E77E14075651", 1051, 1273092889, "386464", 1273092889, "386464", null, "1128", "646 North", "Michigan Ave", 1161759600, "42200", "North Bound: 21200 / South Bound: 21000", "41.893982", "-87.624231", [ null, "41.893982", "-87.624231", null, false ] ]
, [ 1053, "E939FE8E-5FA3-4B66-A127-430FEC56D62D", 1053, 1273092889, "386464", 1273092889, "386464", null, "1130", "660 North", "Ogden Ave", 1161068400, "20900", "North Bound: 7000 / South Bound: 13900", "41.894073", "-87.656489", [ null, "41.894073", "-87.656489", null, false ] ]
, [ 1054, "75E827E4-0681-42A8-9435-F2F4A892E56B", 1054, 1273092889, "386464", 1273092889, "386464", null, "1133", "57 West", "Ohio St", 1158822000, "32800", "East Bound: 32800 / / Oneway East Bound ", "41.892439", "-87.630272", [ null, "41.892439", "-87.630272", null, false ] ]
, [ 1055, "77C71805-6E8E-4E60-B746-350518DA0BBD", 1055, 1273092889, "386464", 1273092889, "386464", null, "1134", "230 East", "Ohio St", 1158822000, "12300", "East Bound: 12300 / / Oneway East Bound ", "41.892579", "-87.621433", [ null, "41.892579", "-87.621433", null, false ] ]
, [ 1057, "886990DB-0636-4325-8C70-1CB5A410A737", 1057, 1273092889, "386464", 1273092889, "386464", null, "1137", "928 North", "Pulaski Rd", 1159945200, "23900", "North Bound: 12400 / South Bound: 11500", "41.898079", "-87.726166", [ null, "41.898079", "-87.726166", null, false ] ]
, [ 1058, "793F9692-FBB2-41F0-824A-CB5A18B0B26A", 1058, 1273092889, "386464", 1273092889, "386464", null, "1138", "346 South", "Pulaski Rd", 1159945200, "23800", "North Bound: 12200 / South Bound: 11600", "41.875691", "-87.725497", [ null, "41.875691", "-87.725497", null, false ] ]
, [ 1059, "38C96B61-11CB-4766-A487-272F55FE8959", 1059, 1273092889, "386464", 1273092889, "386464", null, "1139", "34 North", "Pulaski Rd", 1159945200, "23500", "North Bound: 12300 / South Bound: 11200", "41.881938", "-87.725706", [ null, "41.881938", "-87.725706", null, false ] ]
, [ 1061, "5C37323B-8C94-4E01-908F-255B7136A6DB", 1061, 1273092889, "386464", 1273092889, "386464", null, "1141", "35 South", "Racine Ave", 1163491200, "11300", "North Bound: 6200 / South Bound: 5100", "41.880487", "-87.657103", [ null, "41.880487", "-87.657103", null, false ] ]
, [ 1062, "CBDA6F16-6485-4B62-BE9E-182A07E738C8", 1062, 1273092889, "386464", 1273092889, "386464", null, "1142", "225 West", "Randolph St", 1158649200, "18500", "West Bound: 18500/ Oneway West Bound ", "41.884466", "-87.634637", [ null, "41.884466", "-87.634637", null, false ] ]
, [ 1063, "690736BD-3033-49F7-9D9E-A377020B8C18", 1063, 1273092889, "386464", 1273092889, "386464", null, "1143", "908 West", "Randolph St", 1160031600, "9300", "West Bound: 9300/ Oneway West Bound", "41.884359", "-87.650176", [ null, "41.884359", "-87.650176", null, false ] ]
, [ 1064, "67CD6981-7F31-4D7E-958C-8A217B12191E", 1064, 1273092889, "386464", 1273092889, "386464", null, "1144", "615 West", "Randolph St", 1158649200, "18200", "West Bound: 18200/ Oneway West Bound ", "41.884431", "-87.643422", [ null, "41.884431", "-87.643422", null, false ] ]
, [ 1065, "DA772D51-CBA3-431E-B94C-47147BB4868C", 1065, 1273092889, "386464", 1273092889, "386464", null, "1146", "270 North", "Sacramento Ave", 1160377200, "20500", "North Bound: 10500 / South Bound: 10000", "41.886224", "-87.70135", [ null, "41.886224", "-87.70135", null, false ] ]
, [ 1066, "2255097F-73C6-43AB-A8A1-FCF02D31156E", 1066, 1273092889, "386464", 1273092889, "386464", null, "1147", "115 South", "Sacramento Ave", 1160377200, "22100", "North Bound: 11200 / South Bound: 10900", "41.879204", "-87.701155", [ null, "41.879204", "-87.701155", null, false ] ]
, [ 1067, "0D57A379-8DB7-491D-81BF-8FA32A219ABC", 1067, 1273092889, "386464", 1273092889, "386464", null, "1148", "1635 South", "State St", 1161068400, "22400", "North Bound: 12700 / South Bound: 9700", "41.859198", "-87.627233", [ null, "41.859198", "-87.627233", null, false ] ]
, [ 1068, "DDE0B3DB-CDD0-45C9-950F-DF9C44616F6D", 1068, 1273092889, "386464", 1273092889, "386464", null, "1149", "2035 South", "State St", 1162886400, "18500", "North Bound: 10900 / South Bound: 7600", "41.854398", "-87.627117", [ null, "41.854398", "-87.627117", null, false ] ]
, [ 1069, "274D57C5-82A2-46B1-A561-4F72D5D748C6", 1069, 1273092889, "386464", 1273092889, "386464", null, "1150", "3050 South", "State St", 1161154800, "23100", "North Bound: 11600 / South Bound: 11500", "41.838301", "-87.626773", [ null, "41.838301", "-87.626773", null, false ] ]
, [ 1072, "7A6DFD2E-9684-43F3-8EAF-765D55ACD613", 1072, 1273092889, "386464", 1273092889, "386464", null, "1154", "806 North", "State St", 1158822000, "21100", "North Bound: 9900 / South Bound: 11200", "41.896924", "-87.628206", [ null, "41.896924", "-87.628206", null, false ] ]
, [ 1073, "97D8BAE2-272E-4259-A000-DF6FD3C90FA7", 1073, 1273092889, "386464", 1273092889, "386464", null, "1155", "646 South", "State St", 1158649200, "31400", "North Bound: 20200 / South Bound: 11200", "41.873424", "-87.627576", [ null, "41.873424", "-87.627576", null, false ] ]
, [ 1074, "8B2595D8-B575-4164-90C4-475C1DFF18D1", 1074, 1273092889, "386464", 1273092889, "386464", null, "1156", "839 West", "Van Buren St", 1158649200, "10500", "East Bound: 3000 / West Bound: 7500", "41.87665", "-87.648742", [ null, "41.87665", "-87.648742", null, false ] ]
, [ 1075, "FC81A1B9-395A-4764-8385-9CC927E06E80", 1075, 1273092889, "386464", 1273092889, "386464", null, "1158", "444 North", "Wabash Ave", 1158649200, "8800", "North Bound: 2800 / South Bound: 6000", "41.890636", "-87.626681", [ null, "41.890636", "-87.626681", null, false ] ]
, [ 1076, "8C499561-F0FC-4B01-85BD-50C5DB3FE042", 1076, 1273092889, "386464", 1273092889, "386464", null, "1160", "30 South", "Wabash Ave", 1159254000, "9200", "South Bound: 9200/ Oneway South Bound ", "41.88133", "-87.626189", [ null, "41.88133", "-87.626189", null, false ] ]
, [ 1077, "B413C678-7D48-44D9-8BC4-CE0E82918DEC", 1077, 1273092889, "386464", 1273092889, "386464", null, "1161", "250 South", "Wacker Dr", 1158649200, "14700", "North Bound: 7600 / South Bound: 7100", "41.878077", "-87.636914", [ null, "41.878077", "-87.636914", null, false ] ]
, [ 1078, "475A76F2-11DF-4A01-90B5-48F1CE794985", 1078, 1273092889, "386464", 1273092889, "386464", null, "1162", "55 West", "Wacker Dr", 1162886400, "29900", "East Bound: 13700 / West Bound: 16200", "41.886817", "-87.630054", [ null, "41.886817", "-87.630054", null, false ] ]
, [ 1079, "143B8542-10F5-4AA7-A90B-CC3D28A2EAD7", 1079, 1273092889, "386464", 1273092889, "386464", null, "1163", "150 North", "Wacker Dr", 1163664000, "23800", "North Bound: 11100 / South Bound: 12700", "41.884486", "-87.637068", [ null, "41.884486", "-87.637068", null, false ] ]
, [ 1080, "FFB2848D-E6A2-481C-9C34-752FD2A893B2", 1080, 1273092889, "386464", 1273092889, "386464", null, "1164", "2434 West", "Warren Blvd", 1160031600, "6000", "East Bound: 6000 / / Oneway East Bound", "41.882074", "-87.687892", [ null, "41.882074", "-87.687892", null, false ] ]
, [ 1081, "00B368F1-3F59-440C-8497-62A7B77DC170", 1081, 1273092889, "386464", 1273092889, "386464", null, "1165", "1629 West", "Warren Blvd", 1160031600, "4500", "East Bound: 4500 / / Oneway East Bound", "41.882362", "-87.668041", [ null, "41.882362", "-87.668041", null, false ] ]
, [ 1082, "955426CA-2511-4E05-8F10-2BCA25794C27", 1082, 1273092889, "386464", 1273092889, "386464", null, "1166", "2550 West", "31st St", 1160550000, "14900", "East Bound: 7000 / West Bound: 7900", "41.838156", "-87.689438", [ null, "41.838156", "-87.689438", null, false ] ]
, [ 1083, "B31320BF-23A0-41EB-B35C-C57F9F234267", 1083, 1273092889, "386464", 1273092889, "386464", null, "1167", "3750 West", "31st St", 1158217200, "18800", "East Bound: 9000 / West Bound: 9800", "41.836974", "-87.719101", [ null, "41.836974", "-87.719101", null, false ] ]
, [ 1084, "7266B2E3-A1A2-440E-8F11-8C71AE46A535", 1084, 1273092889, "386464", 1273092889, "386464", null, "1168", "1347 South", "Ashland Ave", 1161846000, "38700", "North Bound: 20300 / South Bound: 18400", "41.863688", "-87.666307", [ null, "41.863688", "-87.666307", null, false ] ]
, [ 1085, "B8E0B6F7-917C-4BC5-A81A-72DDCD87D884", 1085, 1273092889, "386464", 1273092889, "386464", null, "1169", "2444 South", "Blue Island Ave", 1155798000, "22100", "East Bound: 10300 / West Bound: 11800", "41.847901", "-87.677408", [ null, "41.847901", "-87.677408", null, false ] ]
, [ 1086, "05C9DF4E-CB9A-476C-9702-8FD253088AF8", 1086, 1273092889, "386464", 1273092889, "386464", null, "1170", "2126 South", "Central Park Ave", 1158217200, "9100", "North Bound: 4400 / South Bound: 4700", "41.852621", "-87.715027", [ null, "41.852621", "-87.715027", null, false ] ]
, [ 1087, "7F61DE8A-911E-4EB1-ACC7-0AE5B229468B", 1087, 1273092889, "386464", 1273092889, "386464", null, "1171", "2505 South", "Central Park Ave", 1158217200, "10300", "North Bound: 4500 / South Bound: 5800", "41.846067", "-87.714837", [ null, "41.846067", "-87.714837", null, false ] ]
, [ 1088, "6734CACF-D972-4425-95CE-807D88B5615A", 1088, 1273092889, "386464", 1273092889, "386464", null, "1173", "3658 West", "Cermak Rd", 1158217200, "18000", "East Bound: 8900 / West Bound: 9100", "41.851632", "-87.717386", [ null, "41.851632", "-87.717386", null, false ] ]
, [ 1089, "22692839-2AC6-4646-B22D-B368522C8F11", 1089, 1273092889, "386464", 1273092889, "386464", null, "1174", "4550 West", "Cermak Rd", 1158044400, "24000", "East Bound: 12200 / West Bound: 11800", "41.851353", "-87.738835", [ null, "41.851353", "-87.738835", null, false ] ]
, [ 1090, "7083E19D-04B0-4467-B427-E4FEBD0B7686", 1090, 1273092889, "386464", 1273092889, "386464", null, "1175", "2222 South", "Halsted St", 1161673200, "21900", "North Bound: 10800 / South Bound: 11100", "41.851922", "-87.646473", [ null, "41.851922", "-87.646473", null, false ] ]
, [ 1091, "D416BA60-CBBF-437F-8361-4E701354DEBA", 1091, 1273092889, "386464", 1273092889, "386464", null, "1176", "3026 South", "Homan Ave", 1158217200, "2000", "North Bound: 2000 / / Oneway North Bound ", "41.83815", "-87.709739", [ null, "41.83815", "-87.709739", null, false ] ]
, [ 1092, "0B2465FE-8E06-42A4-9594-490633F4F570", 1092, 1273092889, "386464", 1273092889, "386464", null, "1177", "3425 South", "Kedzie Ave", 1155193200, "32800", "North Bound: 15300 / South Bound: 17500", "41.831089", "-87.704652", [ null, "41.831089", "-87.704652", null, false ] ]
, [ 1093, "A7468246-9172-473F-A5A7-BF673BF909A2", 1093, 1273092889, "386464", 1273092889, "386464", null, "1178", "2004 South", "Kostner Ave", 1158044400, "19200", "North Bound: 10000 / South Bound: 9200", "41.854103", "-87.734588", [ null, "41.854103", "-87.734588", null, false ] ]
, [ 1094, "2A430A6A-C8DE-48A5-AD0C-33FFAE4BA860", 1094, 1273092889, "386464", 1273092889, "386464", null, "1179", "3242 West", "Ogden Ave", 1162454400, "26200", "East Bound: 12700 / West Bound: 13500", "41.857111", "-87.707844", [ null, "41.857111", "-87.707844", null, false ] ]
, [ 1095, "45333E8C-28E5-4C4C-BBA0-8D49B4C7CE11", 1095, 1273092889, "386464", 1273092889, "386464", null, "1181", "2455 South", "Pulaski Rd", 1158217200, "21500", "North Bound: 11600 / South Bound: 9900", "41.846235", "-87.72462", [ null, "41.846235", "-87.72462", null, false ] ]
, [ 1096, "4CD82C51-C382-4E55-B2F6-A1DD8899BB13", 1096, 1273092889, "386464", 1273092889, "386464", null, "1182", "2119 South", "Pulaski Rd", 1158044400, "20200", "North Bound: 10600 / South Bound: 9600", "41.852808", "-87.724789", [ null, "41.852808", "-87.724789", null, false ] ]
, [ 1097, "A81C2B9B-BD88-41FB-AB39-33E6C2E47555", 1097, 1273092889, "386464", 1273092889, "386464", null, "1183", "1941 West", "Roosevelt Rd", 1161241200, "28900", "East Bound: 14900 / West Bound: 14000", "41.866765", "-87.67545", [ null, "41.866765", "-87.67545", null, false ] ]
, [ 1098, "97CF31B6-CF08-4352-B945-8EC5B0FE601F", 1098, 1273092889, "386464", 1273092889, "386464", null, "1184", "1257 West", "Roosevelt Rd", 1161241200, "26800", "East Bound: 13700 / West Bound: 13100", "41.866958", "-87.659", [ null, "41.866958", "-87.659", null, false ] ]
, [ 1099, "39EEAC7E-0DCE-45FF-8F80-DFE92804D6C2", 1099, 1273092889, "386464", 1273092889, "386464", null, "1185", "1837 South", "Western Ave", 1156230000, "41500", "North Bound: 22400 / South Bound: 19100", "41.856527", "-87.685756", [ null, "41.856527", "-87.685756", null, false ] ]
, [ 1100, "9B4237F3-011A-4A06-9734-5BD922BEB5BE", 1100, 1273092889, "386464", 1273092889, "386464", null, "1186", "3016 West", "47th St", 1155193200, "26300", "East Bound: 12500 / West Bound: 13800", "41.808188", "-87.699833", [ null, "41.808188", "-87.699833", null, false ] ]
, [ 1101, "4C7C810A-E311-420C-AD71-A1464F240919", 1101, 1273092889, "386464", 1273092889, "386464", null, "1187", "3642 West", "47th St", 1155193200, "22300", "East Bound: 11200 / West Bound: 11100", "41.807974", "-87.715402", [ null, "41.807974", "-87.715402", null, false ] ]
, [ 1113, "EAD699E9-0AFA-49CA-AA4E-40BEA82E74A2", 1113, 1273092889, "386464", 1273092889, "386464", null, "1199", "4281 South", "Archer Ave", 1155193200, "30600", "North Bound: 15800 / South Bound: 14800", "41.815505", "-87.701939", [ null, "41.815505", "-87.701939", null, false ] ]
, [ 1114, "9A49678B-2382-4DF2-977B-5CAED45D19C4", 1114, 1273092889, "386464", 1273092889, "386464", null, "1200", "4401 South", "Archer Ave", 1155193200, "30500", "North Bound: 14200 / South Bound: 16300", "41.813362", "-87.705427", [ null, "41.813362", "-87.705427", null, false ] ]
, [ 1116, "06BAADA0-8FD0-48EF-B9FD-F4BB55EBEF84", 1116, 1273092889, "386464", 1273092889, "386464", null, "1202", "3751 South", "California Ave", 1155798000, "25300", "North Bound: 11800 / South Bound: 13500", "41.824905", "-87.694671", [ null, "41.824905", "-87.694671", null, false ] ]
, [ 1117, "88FD0D6B-72D2-4A2E-B0BE-2410C3994C61", 1117, 1273092889, "386464", 1273092889, "386464", null, "1203", "4310 South", "Cicero Ave", 1161586800, "67200", "North Bound: 33600 / South Bound: 33600", "41.814595", "-87.743349", [ null, "41.814595", "-87.743349", null, false ] ]
, [ 1122, "3210915A-CB52-44C6-BF2B-435C0D3A7F84", 1122, 1273092889, "386464", 1273092889, "386464", null, "1208", "660 West", "Grand Ave", 1158822000, "19000", "East Bound: 8400 / West Bound: 10600", "41.891218", "-87.645288", [ null, "41.891218", "-87.645288", null, false ] ]
, [ 1124, "F3A64942-EA72-4F88-9023-2285E07F6A25", 1124, 1273092889, "386464", 1273092889, "386464", null, "1210", "4740 South", "Kedzie Ave", 1156230000, "34700", "North Bound: 17400 / South Bound: 17300", "41.80691", "-87.703942", [ null, "41.80691", "-87.703942", null, false ] ]
, [ 1126, "A98C863D-AFFE-4F64-9FA6-C6FCBA016C70", 1126, 1273092889, "386464", 1273092889, "386464", null, "1212", "3837 West", "Lake St", 1161241200, "13100", "East Bound: 5700 / West Bound: 7400", "41.88529", "-87.722446", [ null, "41.88529", "-87.722446", null, false ] ]
, [ 1127, "EDC83B17-5115-4B62-805A-5804DB0A8373", 1127, 1273092889, "386464", 1273092889, "386464", null, "1213", "233 West", "Lake St", 1162886400, "13200", "East Bound: 13200 / / Oneway East Bound", "41.885733", "-87.63502", [ null, "41.885733", "-87.63502", null, false ] ]
, [ 1131, "84EE9DB3-D86B-4678-AC67-142478DCF02A", 1131, 1273092889, "386464", 1273092889, "386464", null, "1217", "230 East", "Ontario St", 1162281600, "13400", "West Bound: 13400/ Oneway West Bound ", "41.893383", "-87.621457", [ null, "41.893383", "-87.621457", null, false ] ]
, [ 1132, "241ADAE7-72C3-40C6-9190-6E3884309F80", 1132, 1273092889, "386464", 1273092889, "386464", null, "1218", "4201 South", "Pulaski Rd", 1155625200, "56700", "North Bound: 30700 / South Bound: 26000", "41.816892", "-87.723904", [ null, "41.816892", "-87.723904", null, false ] ]
, [ 1135, "DFF8DB96-52BA-463A-8CFE-D8AF5A9C64A5", 1135, 1273092889, "386464", 1273092889, "386464", null, "1221", "3636 South", "Western Ave", 1161846000, "32200", "North Bound: 15600 / South Bound: 16600", "41.827315", "-87.684942", [ null, "41.827315", "-87.684942", null, false ] ]
, [ 1136, "C2AB2C94-B164-4DB6-846A-207E00538CF2", 1136, 1273092889, "386464", 1273092889, "386464", null, "1222", "469 West", "26th St", 1161241200, "9300", "East Bound: 4500 / West Bound: 4800", "41.845422", "-87.6394", [ null, "41.845422", "-87.6394", null, false ] ]
, [ 1137, "3FA89EDD-0A8C-4C6D-858D-F59728C23BAC", 1137, 1273092889, "386464", 1273092889, "386464", null, "1223", "1229 West", "31st St", 1161241200, "8600", "East Bound: 5500 / West Bound: 3100", "41.837896", "-87.657173", [ null, "41.837896", "-87.657173", null, false ] ]
, [ 1138, "4F5D5A38-D2E3-4340-B845-D8BEC1A28714", 1138, 1273092889, "386464", 1273092889, "386464", null, "1224", "2122 West", "35th St", 1159254000, "10700", "East Bound: 4800 / West Bound: 5900", "41.830349", "-87.678909", [ null, "41.830349", "-87.678909", null, false ] ]
, [ 1144, "B7A6D49C-6958-4796-BC33-56040EAA1679", 1144, 1273092889, "386464", 1273092889, "386464", null, "1230", "3393 South", "Archer Ave", 1155798000, "19200", "East Bound: 9400 / West Bound: 9800", "41.832267", "-87.674585", [ null, "41.832267", "-87.674585", null, false ] ]
, [ 1145, "CBA7C0A4-7B5E-4E58-8BED-1A9032E2866A", 1145, 1273092889, "386464", 1273092889, "386464", null, "1231", "4432 South", "Ashland Ave", 1160550000, "39400", "North Bound: 21100 / South Bound: 18300", "41.813049", "-87.665083", [ null, "41.813049", "-87.665083", null, false ] ]
, [ 1149, "9991DBF4-18EF-411F-B734-B11FCF530A17", 1149, 1273092889, "386464", 1273092889, "386464", null, "1235", "3402 South", "Damen Ave", 1155798000, "27600", "North Bound: 12200 / South Bound: 15400", "41.83206", "-87.675321", [ null, "41.83206", "-87.675321", null, false ] ]
, [ 1150, "108B8AAF-14D1-4D17-BCF4-842C3C5CDEAC", 1150, 1273092889, "386464", 1273092889, "386464", null, "1236", "3210 South", "Halsted St", 1161846000, "17600", "North Bound: 9200 / South Bound: 8400", "41.836075", "-87.646231", [ null, "41.836075", "-87.646231", null, false ] ]
, [ 1154, "4B2F69C5-419D-4F76-A48D-5E69DD5672EC", 1154, 1273092889, "386464", 1273092889, "386464", null, "1240", "3610 South", "Morgan St", 1161241200, "6900", "North Bound: 2300 / South Bound: 4600", "41.828474", "-87.65091", [ null, "41.828474", "-87.65091", null, false ] ]
, [ 1156, "19BEEDBE-402F-45F6-93B4-1C0A71FCDB0E", 1156, 1273092889, "386464", 1273092889, "386464", null, "1242", "1450 West", "Pershing Rd", 1160550000, "23300", "East Bound: 11200 / West Bound: 12100", "41.823185", "-87.662505", [ null, "41.823185", "-87.662505", null, false ] ]
, [ 1157, "21139D74-1B1F-4B46-B162-6A4AEE071D24", 1157, 1273092889, "386464", 1273092889, "386464", null, "1243", "4550 South", "Racine Ave", 1161241200, "9000", "North Bound: 4400 / South Bound: 4600", "41.810881", "-87.655209", [ null, "41.810881", "-87.655209", null, false ] ]
, [ 1159, "495C0ACB-EA96-445B-9EAA-C2B6C71D078A", 1159, 1273092889, "386464", 1273092889, "386464", null, "1245", "1599 South", "Racine Ave", 1159945200, "13100", "North Bound: 6600 / South Bound: 6500", "41.859764", "-87.65648", [ null, "41.859764", "-87.65648", null, false ] ]
, [ 1161, "6665310E-56CC-4553-8CA3-1D44A7386442", 1161, 1273092889, "386464", 1273092889, "386464", null, "1250", "440 East", "31st St", 1160636400, "16600", "East Bound: 8200 / West Bound: 8400", "41.838445", "-87.615498", [ null, "41.838445", "-87.615498", null, false ] ]
, [ 1162, "D35CF5CD-6176-4DEB-AAF0-8ED89A210D43", 1162, 1273092889, "386464", 1273092889, "386464", null, "1251", "505 East", "Pershing Rd", 1160550000, "12400", "East Bound: 6000 / West Bound: 6400", "41.82387", "-87.614241", [ null, "41.82387", "-87.614241", null, false ] ]
, [ 1163, "71E38EA8-F98C-4259-B6BC-FFFB2EFF8B82", 1163, 1273092889, "386464", 1273092889, "386464", null, "1252", "723 East", "43rd St", 1160636400, "7600", "East Bound: 3900 / West Bound: 3700", "41.816788", "-87.608238", [ null, "41.816788", "-87.608238", null, false ] ]
, [ 1164, "1A140530-003D-4484-A044-9F90D044535D", 1164, 1273092889, "386464", 1273092889, "386464", null, "1253", "428 East", "47th St", 1161673200, "14200", "East Bound: 7100 / West Bound: 7100", "41.809405", "-87.615129", [ null, "41.809405", "-87.615129", null, false ] ]
, [ 1170, "EDE20653-EA25-44B9-9D66-48C97BCBB6A0", 1170, 1273092889, "386464", 1273092889, "386464", null, "1259", "3836 South", "Cottage Grove Ave", 1161068400, "11100", "North Bound: 5600 / South Bound: 5500", "41.825153", "-87.607512", [ null, "41.825153", "-87.607512", null, false ] ]
, [ 1175, "BEB7FDAE-9941-4AFD-9E65-98D6F7AEA23F", 1175, 1273092889, "386464", 1273092889, "386464", null, "1264", "4006 South", "Dr Martin Luther King Jr Dr", 1160982000, "19400", "North Bound: 9800 / South Bound: 9600", "41.821807", "-87.616942", [ null, "41.821807", "-87.616942", null, false ] ]
, [ 1227, "36C49DBF-E056-4A45-9B66-44044BFFF0FA", 1227, 1273092889, "386464", 1273092889, "386464", null, "1323", "4855 South", "Western Ave", 1162281600, "35100", "North Bound: 17000 / South Bound: 18100", "41.804938", "-87.684364", [ null, "41.804938", "-87.684364", null, false ] ]
, [ 1229, "839DA944-B16E-4114-B1C2-295B22270F3F", 1229, 1273092889, "386464", 1273092889, "386464", null, "1326", "350 North", "Michigan Ave", 1162886400, "44000", "North Bound: 21300 / South Bound: 22700", "41.887944", "-87.624537", [ null, "41.887944", "-87.624537", null, false ] ]
, [ 1230, "1E37CD9C-CBE2-4C20-BEF3-8A413D47A829", 1230, 1273092889, "386464", 1273092889, "386464", null, "1327", "350 North", "Michigan Lower Ave", 1158822000, "18200", "North Bound: 11500 / South Bound: 6700", "41.888071", "-87.624601", [ null, "41.888071", "-87.624601", null, false ] ]
, [ 1231, "B0AAF675-DFD6-45F0-9E10-261568E20354", 1231, 1273092889, "386464", 1273092889, "386464", null, "1328", "333 North", "Wabash Ave", 1158649200, "10400", "North Bound: 2500 / South Bound: 7900", "41.888062", "-87.626842", [ null, "41.888062", "-87.626842", null, false ] ]
, [ 1232, "9F12E089-ED73-4782-A9AB-7C65A94BF225", 1232, 1273092889, "386464", 1273092889, "386464", null, "1329", "299 North", "State St", 1159254000, "19700", "North Bound: 9500 / South Bound: 10200", "41.887471", "-87.628001", [ null, "41.887471", "-87.628001", null, false ] ]
, [ 1233, "DD4625DA-5280-44C2-BDBF-2F44D79EB985", 1233, 1273092889, "386464", 1273092889, "386464", null, "1330", "299 North", "Dearborn St", 1168329600, "16600", "North Bound: 16600 / / Oneway North Bound", "41.886932", "-87.629531", [ null, "41.886932", "-87.629531", null, false ] ]
, [ 1234, "0C1A3108-211F-44D2-B884-9C69289E6400", 1234, 1273092889, "386464", 1273092889, "386464", null, "1331", "299 North", "Clark St", 1162972800, "18700", "South Bound: 18700/ Oneway South Bound ", "41.886935", "-87.631008", [ null, "41.886935", "-87.631008", null, false ] ]
, [ 1235, "21837610-9C60-437D-86B2-94747CF928A3", 1235, 1273092889, "386464", 1273092889, "386464", null, "1332", "299 North", "La Salle St", 1158822000, "26900", "North Bound: 13800 / South Bound: 13100", "41.886928", "-87.632484", [ null, "41.886928", "-87.632484", null, false ] ]
, [ 1236, "C39D1BF9-D457-40DC-8988-3C92BFF397B2", 1236, 1273092889, "386464", 1273092889, "386464", null, "1333", "290 North", "Wells St", 1158649200, "12200", "South Bound: 12200/ Oneway South Bound ", "41.886932", "-87.633964", [ null, "41.886932", "-87.633964", null, false ] ]
, [ 1237, "C771D8A5-A5C0-4E13-9D57-45B6417C436D", 1237, 1273092889, "386464", 1273092889, "386464", null, "1334", "291 North", "Franklin St", 1159772400, "12600", "North Bound: 12600 / / Oneway North Bound", "41.886855", "-87.635441", [ null, "41.886855", "-87.635441", null, false ] ]
, [ 1238, "89DDFC59-2E97-46E3-85EB-DCE5104CB718", 1238, 1273092889, "386464", 1273092889, "386464", null, "1335", "355 West", "Lake St", 1159772400, "15000", "East Bound: 10700 / West Bound: 4300", "41.885725", "-87.636864", [ null, "41.885725", "-87.636864", null, false ] ]
, [ 1239, "271E1325-41EE-4675-835A-76F30FB6F22D", 1239, 1273092889, "386464", 1273092889, "386464", null, "1336", "400 West", "Randolph St", 1158649200, "18500", "West Bound: 18500/ Oneway West Bound ", "41.884455", "-87.637906", [ null, "41.884455", "-87.637906", null, false ] ]
, [ 1240, "D0C9D8E5-BD49-40FF-8D64-79115728DB40", 1240, 1273092889, "386464", 1273092889, "386464", null, "1337", "389 West", "Washington St", 1159254000, "17000", "East Bound: 17000 / / Oneway East Bound ", "41.883192", "-87.638103", [ null, "41.883192", "-87.638103", null, false ] ]
, [ 1241, "AA2FFF7C-BA75-424E-8015-F0DDFAE1A768", 1241, 1273092889, "386464", 1273092889, "386464", null, "1338", "410 West", "Madison St", 1159858800, "17100", "West Bound: 17100/ Oneway West Bound ", "41.881895", "-87.638745", [ null, "41.881895", "-87.638745", null, false ] ]
, [ 1242, "070C72C3-E5FD-455C-9C7A-FA195440C922", 1242, 1273092889, "386464", 1273092889, "386464", null, "1339", "390 West", "Monroe St", 1158735600, "16000", "East Bound: 16000 / / Oneway East Bound ", "41.880605", "-87.638285", [ null, "41.880605", "-87.638285", null, false ] ]
, [ 1243, "BB316974-E5F3-4DAE-A828-F863A9C3C854", 1243, 1273092889, "386464", 1273092889, "386464", null, "1340", "340 West", "Adams St", 1158735600, "14300", "West Bound: 14300/ Oneway West Bound", "41.879353", "-87.636437", [ null, "41.879353", "-87.636437", null, false ] ]
, [ 1244, "95DF252A-6F7F-45C5-BDBD-BFBF6BEC40EB", 1244, 1273092889, "386464", 1273092889, "386464", null, "1341", "380 West", "Jackson Blvd", 1159426800, "14300", "East Bound: 14300 / / Oneway East Bound ", "41.878068", "-87.637659", [ null, "41.878068", "-87.637659", null, false ] ]
, [ 1245, "8893FE16-876F-4DAE-91FB-01362BFB8997", 1245, 1273092889, "386464", 1273092889, "386464", null, "1342", "462 West", "Van Buren St", 1158735600, "10200", "West Bound: 10200/ Oneway West Bound ", "41.876771", "-87.639623", [ null, "41.876771", "-87.639623", null, false ] ]
, [ 1246, "854E4CFE-4E7B-4EF1-B436-B793F5A7BB69", 1246, 1273092889, "386464", 1273092889, "386464", null, "1343", "425 South", "Wacker Dr", 1158649200, "4900", "North Bound: 2400 / South Bound: 2500", "41.876342", "-87.636323", [ null, "41.876342", "-87.636323", null, false ] ]
, [ 1247, "AC10A14A-C6D6-4026-BC51-2AFF9A0BF343", 1247, 1273092889, "386464", 1273092889, "386464", null, "1344", "430 South", "Wacker Dr (lower)", 1158649200, "32000", "North Bound: 14700 / South Bound: 17300", "41.876142", "-87.636377", [ null, "41.876142", "-87.636377", null, false ] ]
, [ 1248, "9803A2B4-815A-4FD9-B0B3-E64E21B5920B", 1248, 1273092889, "386464", 1273092889, "386464", null, "1345", "480 South", "Franklin St", 1159772400, "9700", "North Bound: 9700 / / Oneway North Bound", "41.875561", "-87.635138", [ null, "41.875561", "-87.635138", null, false ] ]
, [ 1249, "F7B362BF-5DFF-480A-8BFC-BF0C271EC062", 1249, 1273092889, "386464", 1273092889, "386464", null, "1346", "411 South", "Wells St", 1158649200, "9900", "South Bound: 9900/ Oneway South Bound ", "41.876584", "-87.633684", [ null, "41.876584", "-87.633684", null, false ] ]
, [ 1250, "C1549A66-28A5-4F37-947B-F85203DBAEB7", 1250, 1273092889, "386464", 1273092889, "386464", null, "1347", "457 South", "Financial PL", 1158822000, "2800", "North Bound: 2200 / South Bound: 600", "41.87559", "-87.633082", [ null, "41.87559", "-87.633082", null, false ] ]
, [ 1251, "D05D805A-8CFB-441A-9024-2E9445A42DFC", 1251, 1273092889, "386464", 1273092889, "386464", null, "1348", "421 South", "La Salle St", 1162972800, "2100", "South Bound: 2100/ Oneway South Bound ", "41.876358", "-87.631755", [ null, "41.876358", "-87.631755", null, false ] ]
, [ 1252, "0AE13B22-7E5F-4A5F-A3DE-8AA5D021537B", 1252, 1273092889, "386464", 1273092889, "386464", null, "1350", "443 South", "Federal St", 1158822000, "2000", "North Bound: 700 / South Bound: 1300", "41.875841", "-87.629701", [ null, "41.875841", "-87.629701", null, false ] ]
, [ 1253, "E0C2B1E7-B945-4076-8405-E4982DFF89B3", 1253, 1273092889, "386464", 1273092889, "386464", null, "1351", "417 South", "Dearborn St", 1158735600, "15100", "North Bound: 15100 / / Oneway North Bound ", "41.876483", "-87.629253", [ null, "41.876483", "-87.629253", null, false ] ]
, [ 1254, "232944E7-F6A3-4BCC-AF3B-04E0660741FC", 1254, 1273092889, "386464", 1273092889, "386464", null, "1352", "406 South", "Plymouth CT", 1158649200, "3500", "North Bound: 1900 / South Bound: 1600", "41.876735", "-87.628733", [ null, "41.876735", "-87.628733", null, false ] ]
, [ 1255, "B2F97ACC-1253-4B62-B9B2-33E84223433F", 1255, 1273092889, "386464", 1273092889, "386464", null, "1353", "400 South", "State St", 1158649200, "24200", "North Bound: 14900 / South Bound: 9300", "41.876904", "-87.627651", [ null, "41.876904", "-87.627651", null, false ] ]
, [ 1256, "56F9FCF9-983B-4A29-BF0A-47273BB90127", 1256, 1273092889, "386464", 1273092889, "386464", null, "1354", "421 South", "Wabash Ave", 1158649200, "9600", "South Bound: 9600/ Oneway South Bound ", "41.876452", "-87.626044", [ null, "41.876452", "-87.626044", null, false ] ]
, [ 1257, "57380608-8278-4C32-960D-1DE6B67C147C", 1257, 1273092889, "386464", 1273092889, "386464", null, "1355", "430 South", "Michigan Ave", 1162281600, "33500", "North Bound: 17200 / South Bound: 16300", "41.876241", "-87.624273", [ null, "41.876241", "-87.624273", null, false ] ]
, [ 1258, "E232E92D-E7A1-4FBD-984E-0543F5FDEED2", 1258, 1273092889, "386464", 1273092889, "386464", null, "1356", "435 South", "Congress Plaza Dr", 1159254000, "7500", "North Bound: 6400 / South Bound: 1100", "41.876222", "-87.623366", [ null, "41.876222", "-87.623366", null, false ] ]
, [ 1259, "B0F52D66-6B14-4920-ABA5-B7EB24EECF24", 1259, 1273092889, "386464", 1273092889, "386464", null, "1357", "200 East", "Jackson Dr", 1159426800, "7900", "East Bound: 4000 / West Bound: 3900", "41.87831", "-87.622407", [ null, "41.87831", "-87.622407", null, false ] ]
, [ 1260, "86F1759E-7EEA-48EA-840C-8A582147C0D9", 1260, 1273092889, "386464", 1273092889, "386464", null, "1358", "197 East", "Monroe St", 1158735600, "13500", "East Bound: 8100 / West Bound: 5400", "41.88085", "-87.622687", [ null, "41.88085", "-87.622687", null, false ] ]
, [ 1261, "FD9CB99E-C7FB-41F0-BC1F-8992B10613DE", 1261, 1273092889, "386464", 1273092889, "386464", null, "1359", "120 East", "Randolph St", 1158649200, "19900", "East Bound: 10300 / West Bound: 9600", "41.884434", "-87.623595", [ null, "41.884434", "-87.623595", null, false ] ]
, [ 1262, "78D9F359-E447-4FE4-B36B-BFB6425C66E8", 1262, 1273092889, "386464", 1273092889, "386464", null, "1360", "180 East", "Lake St", 1162886400, "4600", "East Bound: 4600 / / Oneway East Bound", "41.885784", "-87.622306", [ null, "41.885784", "-87.622306", null, false ] ]
, [ 1263, "17C1AFA6-A550-41F9-A957-6BDD3000DF4E", 1263, 1273092889, "386464", 1273092889, "386464", null, "1361", "140 East", "South Water Lower St", 1159254000, "10600", "East Bound: 6400 / West Bound: 4200", "41.88673", "-87.623929", [ null, "41.88673", "-87.623929", null, false ] ]
, [ 1264, "856C3D4C-B8CE-4BBD-85F2-DC04E3CCDF0A", 1264, 1273092889, "386464", 1273092889, "386464", null, "1362", "222 East", "South Water Upper Ave", 1159254000, "5800", "East Bound: 3300 / West Bound: 2500", "41.886919", "-87.621577", [ null, "41.886919", "-87.621577", null, false ] ]
, [ 1265, "6EB48AE2-367D-4251-A5BD-1B75AE87720C", 1265, 1273092889, "386464", 1273092889, "386464", null, "1363", "111 East", "Wacker(upper) Dr", 1162886400, "15200", "East Bound: 8500 / West Bound: 6700", "41.888169", "-87.62409", [ null, "41.888169", "-87.62409", null, false ] ]
, [ 1266, "901709D4-DFF4-4DDA-9B5C-764DCC12E03C", 1266, 1273092889, "386464", 1273092889, "386464", null, "1364", "133 East", "Wacker Lower Dr", 1158649200, "34200", "East Bound: 14100 / West Bound: 20100", "41.888302", "-87.623405", [ null, "41.888302", "-87.623405", null, false ] ]
, [ 1273, "2394B7A6-480F-4442-9344-10711C707797", 1273, 1273092889, "386464", 1273092889, "386464", null, "1371", "3229 South", "Ashland Ave", 1156402800, "40900", "North Bound: 22100 / South Bound: 18800", "41.834721", "-87.665668", [ null, "41.834721", "-87.665668", null, false ] ]
, [ 1274, "C0D107BB-B667-46B3-A199-68022AD97757", 1274, 1273092889, "386464", 1273092889, "386464", null, "1372", "2134 South", "Ashland Ave", 1156402800, "44700", "North Bound: 22400 / South Bound: 22300", "41.853135", "-87.666031", [ null, "41.853135", "-87.666031", null, false ] ]
 ]
}
});