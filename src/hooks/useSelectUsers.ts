import { useCallback, useState } from "react"
import { User } from "../types/api/user"

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}

export const useSelectUsers = () => {
  const [user, setUser] = useState<User | null>(null);
  const getUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setUser(targetUser!);
    onOpen()
  }, [])
  return { getUser, user }
}
