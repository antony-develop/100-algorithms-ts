function domainType(domains: string[]): string[] {
    const descriptions = [];
    for (let domain of domains) {
        const domainParts = domain.split('.');
        const topLevelDescription = getTopLevelDescription(domainParts[domainParts.length-1]);
        descriptions.push(topLevelDescription);
    }

    return descriptions;
}

function getTopLevelDescription(topLevelDomain) {
    const descriptions = {
        'org': "organization",
        'com': "commercial",
        'net': "network",
        'info': "information"
    };

    return descriptions[topLevelDomain];
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));