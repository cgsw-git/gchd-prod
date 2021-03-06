{
  "EnvHealth/Food Retail/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Updates parent EnvHealth record",
          "operators": {}
        },
        "criteria": {
		  "disabled": false,
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
		  "expirationType": "",
          "expirationPeriod": "" ,          
		  "customExpirationFunction": "",
          "copyComponents": []
        },
        "postScript": "clearNotificationInfo"
      }
    ],
    "ConvertToRealCAPAfter": [
      {
        "metadata": {
          "description": "Sets the license status to Active to disable renewal button",
          "operators": {}
        },
        "criteria": {
		  "disabled": false,
          "balanceAllowed": false,
          "recordType": "EnvHealth/Food Retail/*/Renewal"
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "",
          "expirationPeriod": "",
          "customExpirationFunction": "",
          "copyComponents": []
        },
        "postScript": "clearNotificationInfo"
      }
    ]
  }
}

