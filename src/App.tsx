import { Column, Flex, Row } from "./components/flex"
import ProfileForm from "./components/profile-form"
import { Button } from './components/button'
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons/faSignInAlt"
import { Theme } from "./styles"
import { ToastManager } from "./components/toast"

export default function App() {
  return (
    <main>
      <Row style={{ flexDirection: "row-reverse", marginTop: Theme.spacing.s9, marginRight: Theme.spacing.s9 }}>
        <Button style={{ width: 120, height: 42 }} onClick={() => null} isLoading={false} buttonText="Entrar" icon={faSignInAlt} />
      </Row>
      <Flex justify="center">
        <Column justify="flex-end">
          <ProfileForm />
        </Column>
      </Flex>
      <ToastManager />
    </main>
  )
}
