const API_KEY = 'b76fe790913e7ce1c176c26f041355d2';

/** 일별 박스오피스 정보 조회 */
export async function getMovieList() {
    const API_URL= 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
    const targetDate = '20260422';

    try{
        const listResponse = await fetch(`${API_URL}?key=${API_KEY}&targetDt=${targetDate}`);

        if(!listResponse.ok) throw new Error('영화 목록을 가져올 수 없습니다.');

        // 1. JSON 변환
        const data = await listResponse.json();
        
        // 2. 실제 데이터 배열 찾아 Return
        return data.boxOfficeResult.dailyBoxOfficeList;

    } catch(error) {
        console.error(error);
        return [];
    } 
};


/** 영화 코드 전달하여 영화 상세 정보 조회 */
export async function getMovieDetailByMovieCd(movieCd) {
    const API_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json'

    try{
        const detailResponse = await fetch(`${API_URL}?key=${API_KEY}&movieCd=${movieCd}`)

        if(!detailResponse.ok) throw new Error('영화 상세정보를 가져올 수 없습니다.');

        const data = await detailResponse.json();
        return data.movieInfoResult.movieInfo;
    } catch(error) {
        console.error(error);
        return [];
    } 
};


/** 일별 박스오피스 목록 중 영화 이름 검색하여 영화 목록 반환 */
export function getMovieBySearch(movieList, searchName) {
    return movieList.filter(movie => movie.movieNm.includes(searchName));
}