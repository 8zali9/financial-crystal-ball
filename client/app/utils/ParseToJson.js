export function parseResponseToJSON(response) {
    const match = response.res.match(/`([^`]*)`/);
    if (!match || match.length < 2) {
      return null;
    }
    const extractedString = match[1];
  
    let jsonString = extractedString.replace(/Agg\(/g, '{').replace(/\)/g, '}');
  
    jsonString = jsonString.replace(/=/g, ':');
    jsonString = jsonString.replace(/(\w+):/g, '"$1":');
  
    jsonString = jsonString.replace(/\bNone\b/g, 'null');
  
    const jsonData = JSON.parse('[' + jsonString + ']');
  
    return jsonData;
  }