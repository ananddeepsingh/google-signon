
export const handleError = (error) => {
  return {
    response: null,
    error
  }
}

export const authHeader = (customHeaderProps) => {
  const TOKEN = "";

  if (TOKEN) {
    return {
      "Authorization": TOKEN,
      "Content-Type": "application/json",
      ...customHeaderProps
    }
  }

  return {};
}

export const validateStatusCode = (res) => {
  if (!res.ok) {
    throw Error(res.statusText)
  }

  return res.json();
}

