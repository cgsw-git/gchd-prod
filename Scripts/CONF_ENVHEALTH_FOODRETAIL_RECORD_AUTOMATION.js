{
	"EnvHealth/Food Retail/*/Renewal": {
		"ConvertToRealCAPAfter": [
			{
				"metadata": {
					"description": "to automate completion of task upon submission of renewal",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"disabled": false,
					"balanceAllowed": false
				},
				"action": {
					"updateTask": [
						{
							"task": "Permit Renewal",
							"status": "Renewed"
						}
					]
				},
				"postScript": ""
			}
		]
	}
}