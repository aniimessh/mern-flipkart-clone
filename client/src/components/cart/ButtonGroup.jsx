import { ButtonGroup, Button, styled } from "@mui/material";

const Wrapper =  styled(ButtonGroup)({
    marginTop: "30px"
})

const StyledButton =  styled(Button)({
    borderRadius: "50%"
})

const GroupButton = () => {
  return (
    <Wrapper>
      <StyledButton>-</StyledButton>
      <Button disabled>1</Button>
      <StyledButton>+</StyledButton>
    </Wrapper>
  );
};

export default GroupButton;
