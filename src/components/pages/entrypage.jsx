const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  margin: 0;
  transition: margin-left 0.3s;
`;

function EntryPage({ expandSidebar }) {
  let location = useLocation();
  const accessToken = localStorage.getItem("access_token");
  let path = location.pathname;

  return (
    <EntryContainer expandSidebar={expandSidebar}>
      <ComponentDisplay
        path={path}
        component={<Header expandSidebar={expandSidebar} />}
      />
      <ContentContainer expandSidebar={expandSidebar}></ContentContainer>
    </EntryContainer>
  );
}

export default EntryPage;
