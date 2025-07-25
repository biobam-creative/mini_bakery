import React, { useState } from "react";
import { FormBox, PageWrapper, SectionTitle } from "../styledComponents";
import PinInput from "../ui/PinInput";

const SaveTransactionPin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]);

  return (
    <PageWrapper place="center" direction="column">
      <FormBox width={"40%"}>
        <SectionTitle>Save Transaction Pin</SectionTitle>
        <PinInput />
      </FormBox>
    </PageWrapper>
  );
};

export default SaveTransactionPin;
