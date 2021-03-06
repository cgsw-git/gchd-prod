{
  "EnvHealth/*/*/Deprecated": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Updates parent EnvHealth record",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Renewal" 
          ],
          "status": [
            "Renewed"  
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Issued",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
		  "expirationType":"Expiration Code",
          "expirationPeriod": "",
          "customExpirationFunction": "",
          "copyComponents": [
                    "Contacts",
					"Custom Fields",
					"Custom Lists"
          ]
        },
        "postScript": ""
      }
    ]
  },
"EnvHealth/Rec Health/*/Deprecated": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Updates parent EnvHealth record",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Renewal" 
          ],
          "status": [
            "Renewed"  
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
		  "expirationType":"Expiration Code",
          "expirationPeriod": "",
          "customExpirationFunction": "",
          "copyComponents": []
        },
        "postScript": ""
      }
    ]
  }
}