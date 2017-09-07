//@flow
export type GoogleResponse = {
  profileObj: {
    googleId: string
  }
}

export type TodoData = {
  googleId:? string,
  description: string,
  id: number,
  isComplete: boolean,
  title: string
}