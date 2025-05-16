
import { useState } from "react"
import { H3, Paragraph } from "../typography"
import { Column, Flex } from "../flex"
import { Input } from "../input"
import { faEye, faEyeSlash, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Theme } from "../../styles"
import { Button } from "../button"
import { LinkButton } from "../link-button"
import { Separator } from "../separator"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { showToast } from "../toast"

const FAKE_LOADING_IN_MS = 2000;

const Title = () => {
    return <span style={{ paddingBottom: Theme.spacing.s7 }}>
        <H3>Crie o seu perfil</H3>
    </span>
}

export default function ProfileForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState<string>("");

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [fakeIsLoading, setFakeLoading] = useState(false);

    const onClick = () => {
        setFakeLoading(true);

        const formHasAnyError = !firstName || !surname || !user || !email || !password || passwordError;
        let toast = formHasAnyError
            ? { text: 'Preencha todos os campos corretamente!', variant: 'error' }
            : { text: 'Perfil criado com sucesso!', variant: 'success' };

        setTimeout(() => {
            setFakeLoading(false);
            showToast(toast);
        }, FAKE_LOADING_IN_MS);
    }

    const onClickIconShowPassword = () => {
        setShowPassword(value => !value);
    }

    const onChangePassword = (event: any) => {
        const value = event.target.value;
        setPassword(value);

        if (value.length == 0) {
            setPasswordError("");
            return;
        }

        if (value.length < 8) {
            setPasswordError("A senha deve ter ao menos 8 caracteres");
            return;
        }

        setPasswordError("");
    }

    return (
        <Column justify="center" align="center">
            <Title />
            <form style={{ maxWidth: 372 }}>
                <Flex style={{ paddingBottom: Theme.spacing.s6, maxWidth: 372 }}>
                    <Input
                        inputLabel="Primeiro nome"
                        placeholder="Peter"
                        value={firstName}
                        onChange={(e: any) => setFirstName(e.target.value)}
                        style={{ paddingRight: Theme.spacing.s3, width: 180 }}
                    />
                    <Input
                        inputLabel="Sobrenome"
                        placeholder="Parker"
                        value={surname}
                        onChange={(e: any) => setSurname(e.target.value)}
                        style={{ width: 180 }}
                    />
                </Flex>

                <Input
                    inputLabel="Usuário"
                    placeholder="peter_parker99"
                    value={user}
                    onChange={(e: any) => setUser(e.target.value)}
                    style={{ paddingBottom: Theme.spacing.s6 }}
                />

                <Input
                    inputLabel="E-mail"
                    placeholder="peter_parker@email.com"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    style={{ paddingBottom: Theme.spacing.s6 }}
                />

                <Input
                    inputLabel="Senha"
                    placeholder="****"
                    value={password}
                    onChange={onChangePassword}
                    icon={showPassword ? faEyeSlash : faEye}
                    iconStyle={{ cursor: "pointer" }}
                    onClickIcon={onClickIconShowPassword}
                    error={passwordError}
                    type={showPassword ? "text" : "password"}
                />

                <div style={{ paddingTop: Theme.spacing.s8 }} >
                    <Button onClick={onClick} isLoading={fakeIsLoading} icon={faPlus} buttonText="Criar" />
                </div>
            </form>


            <Separator>
            </Separator>

            <div style={{ paddingBottom: Theme.spacing.s10, display: "flex", width: "-webkit-fill-available", justifyContent: "space-evenly" }}>
                <LinkButton linkButtonText="FACEBOOK" icon={faFacebook} />
                <LinkButton linkButtonText="GOOGLE" icon={faGoogle} />
            </div>

            <Paragraph variant="small" style={{ color: Theme.colors.neutrals.white[100], width: 360 }}>
                Este site é protegido pela reCAPTCHA Enterprise.
                Aplicam-se a Política de Privacidade e os Termos de Uso do Google.
            </Paragraph>
        </Column >
    )
}
