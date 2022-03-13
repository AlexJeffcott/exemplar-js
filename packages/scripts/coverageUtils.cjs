const coverageSummary = require('../../coverage-tsc-node-only/coverage-summary.json');

function convertJsonToMD(coverageJSON) {
    const coverageJSONList = Object.entries(coverageJSON);
    return coverageJSONList
        .map((kv, i) => {
        const [title, details] = kv;
        const { lines, statements, functions, branches } = details;
        if (!i) {
            const overallPercentage = (lines.pct + statements.pct + functions.pct + branches.pct) / 4;
            const titleString = `## Overall Coverage of ${overallPercentage}%`;
            if (coverageJSONList.length === 1) {
                return `${titleString}\n## No files defined for coverage were changed in this PR`;
            }
            return titleString;
        }
        const percentage = (lines.pct + statements.pct + functions.pct + branches.pct) / 4;
        const cleanPath = title.split('src/')[1];
        return `${cleanPath} has ${percentage}%`;
    })
        .join('/n');
}
function removeKeysFromJson(coverageJSON, changedFiles) {
    return Object.entries(coverageJSON).reduce((acc, cur) => {
        const cleanedPath = cur[0].split('build/')[1];
        const changedFileMatchesCleanedPathOrTotal = cur[0] === 'total' ||
            changedFiles.some((filePath) => filePath.split('src/')[1] === cleanedPath);
        if (changedFileMatchesCleanedPathOrTotal) {
            return { ...acc, [cur[0]]: cur[1] };
        }
        return acc;
    }, {});
}

const getCoverageString = (changedFiles) => convertJsonToMD(removeKeysFromJson(coverageSummary, changedFiles))
module.exports = {getCoverageString};
