{
	  "EnvHealth/Food Retail/Bakery/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_BAKERY_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_BAKERY_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},

	"EnvHealth/Food Retail/Bar/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_BAR_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_BAR_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Cafeteria/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_CAFETERIA",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_CAFETERIA",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Commissary/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_COMMISSARY_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_COMMISSARY_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},

	"EnvHealth/Food Retail/Elderly Nutrition Catered/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_ELDERLY_NUTRITION_CATERED",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_ELDERLY_NUTRITION_CATERED",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Farmers Market/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FARMERS_MARKET",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FARMERS_MARKET",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Food Catering/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FOOD_CATERING",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FOOD_CATERING",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Food Facility/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FOOD_FACILITY",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FOOD_FACILITY",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Food Stand/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FOOD_STAND_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FOOD_STAND_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Grocery/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_GROCERY_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_GROCERY_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Hospital Food/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_HOSPITAL_FOOD",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_HOSPITAL_FOOD",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Hotel Food/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_HOTEL_FOOD_SERVICE_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_HOTEL_FOOD_SERVICE_PERMIT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Limited Food/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_LIMITED_FOOD_SERVICE",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_LIMITED_FOOD_SERVICE",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Meat Market/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_MEAT_MARKET",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_MEAT_MARKET",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Mobile Food/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_MOBILE_FOOD",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_MOBILE_FOOD",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Pushcart Food/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_PUSHCART_FOOD_SERVICE",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_PUSHCART_FOOD_SERVICE",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Restaurant/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_RESTAURANT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_RESTAURANT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"Penalization": [
			{
				"metadata": {
					"description": "To assess and invoice the penalty when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_RESTAURANT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Shared Kitchen/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_SHARED_KITCHEN",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_SHARED_KITCHEN",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Snack Bar/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_SNACK_BAR",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_SNACK_BAR",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Temporary Food Establishment/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_TEMPORARY_FOOD_ESTABLISHMENT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_TEMPORARY_FOOD_ESTABLISHMENT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Establishment/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FOOD_ESTABLISHMENT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_FOOD_ESTABLISHMENT",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	},
	"EnvHealth/Food Retail/Vending Machine/Permit": {
		"WorkflowTaskUpdateAfter": [
			{
				"metadata": {
					"description": "To automate the fee by program element completed application review",
					"operators": {}
				},
				"preScript": "",
				"criteria": {
					"task": [
						"Permit Status"
					],
					"status": [
						"Invoice Fees"
					]
				},
				"action": {
					"assessFees": {
						"feeSchedule": "EH_VENDING_MACHINE",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		],
		"AnnualRenewal": [
			{
				"metadata": {
					"description": "To assess and invoice the fees when sending notifications",
					"operators": {}
				},
				"criteria": {},
				"preScript": "",
				"action": {
					"assessFees": {
						"feeSchedule": "EH_VENDING_MACHINE",
						"feeQuantity": 1,
						"feeInvoice": "Y",
						"feePeriod": "FINAL"
					}
				}
			}
		]
	}
}