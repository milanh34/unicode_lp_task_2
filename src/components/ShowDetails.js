function ShowDetails(props){
    return(
        <>
        <h1 class="mb-16 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl text-white">Registration <span class="text-blue-600 dark:text-blue-500">Details</span></h1>
        <div class="overflow-x-auto shadow-md sm:rounded-lg flex">
            <table class="w-full text-md text-left text-gray-300">
                <tbody>
                    <tr class="border-b-2 border-gray-500">
                        <th scope="row" class="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Full Name</th>
                        <td class="px-16 py-5 font-medium text-md">{props.fullname}</td>
                    </tr>
                    <tr class="border-b-2 border-gray-500">
                        <th scope="row" class="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Email</th>
                        <td class="px-16 py-5 font-medium text-md">{props.mail}</td>
                    </tr>
                    <tr class="border-b-2 border-gray-500">
                        <th scope="row" class="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Password</th>
                        <td class="px-16 py-5 font-medium text-md">{props.pass}</td>
                    </tr>
                    <tr class="border-b-2 border-gray-500">
                        <th scope="row" class="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Phone No.</th>
                        <td class="px-16 py-5 font-medium text-md">{props.phone}</td>
                    </tr>
                    <tr class="border-b-2 border-gray-500">
                        <th scope="row" class="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Gender</th>
                        <td class="px-16 py-5 font-medium text-md">{props.gender}</td>
                    </tr>
                    <tr class="border-b-2 border-gray-500">
                        <th scope="row" class="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Birth Date</th>
                        <td class="px-16 py-5 font-medium text-md">{props.bdate}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ShowDetails;