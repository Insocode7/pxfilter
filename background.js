chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
        // Правило для by-price
        {
            id: 1,
            priority: 1,
            action: {
                type: "redirect",
                redirect: {
                    transform: {
                        queryTransform: {
                            addOrReplaceParams: [{ key: "limit", value: "50", replaceOnly: true }]
                        }
                    }
                }
            },
            condition: {
                urlFilter: "||notpixel.org/api/v1/battle-canvas/pixels/by-price?*limit=10",
                resourceTypes: ["xmlhttprequest"]
            }
        },
        // Правило для by-squad
        {
            id: 2,
            priority: 1,
            action: {
                type: "redirect",
                redirect: {
                    transform: {
                        queryTransform: {
                            addOrReplaceParams: [{ key: "limit", value: "50", replaceOnly: true }]
                        }
                    }
                }
            },
            condition: {
                urlFilter: "||notpixel.org/api/v1/battle-canvas/pixels/by-squad?*limit=10",
                resourceTypes: ["xmlhttprequest"]
            }
        }
    ],
    removeRuleIds: [1, 2] // Очистка старых правил
});