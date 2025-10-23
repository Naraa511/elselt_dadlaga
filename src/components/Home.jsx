import NewsEnroll from './NewsEnroll'

import Content from './Content'
import Questions from './Questions';

// import CreateSchool from './CreateSchool';
// import CreateDepartment from './CreateDepartment';
// import useFetch from "../useFetch";

const Home = () => {
    // const { data: schools, isPending, error } = useFetch("http://localhost:8000/children");

    return (
        <>

        <NewsEnroll></NewsEnroll>

         <Content> </Content>
      {/* <CreateSchool></CreateSchool> */}
      {/* <CreateDepartment></CreateDepartment> */}

        </>
      );
}
 
export default Home;