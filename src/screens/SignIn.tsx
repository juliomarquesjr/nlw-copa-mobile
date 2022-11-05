import { Center, Text, Icon } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";

export default function SiginIn() {
  const { signIn, user } = useAuth();
  console.log("DADOS DO USUARIO: ", user)

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Text color="white" fontSize={24}>
        <Logo width={212} height={40} />
      </Text>
      <Button
        type="SECONDARY"
        title="Entrar com o Google"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}

        onPress={signIn}
      />

      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {"\n"} do seu e-mail para criação
        de sua conta.
      </Text>
    </Center>
  );
}
