
export const getErrorMessage = (error) => error?.message?.data?.message || error?.message || error?.toString || "Something went wrong!!";
