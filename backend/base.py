from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS, cross_origin
import os

df = pd.read_csv('MovieGenre.csv', encoding = "ISO-8859-1")
df['Genre']=df['Genre'].str.split("|", expand = False)
df.drop_duplicates(subset=['Title'], inplace=True)
df=df.dropna()

api = Flask(__name__)
cors = CORS(api)


@api.route('/action', methods=["GET"])
@cross_origin()
def get_action():
    genre='Action'
    data =[]
    for index, row in df.iterrows():
        if genre in row['Genre']: data.append(row)
    df_search = pd.DataFrame(data)
    result = df_search.sort_values('IMDB_Score',ascending=False)[['Title','IMDB_Score']].set_index('Title').rename_axis(None).head(5)
    result.columns = result.columns.str.replace('IMDB_Score', 'Top_5_movie')
    result=result.to_json()
    return result


@api.route('/romance', methods=["GET"])
@cross_origin()
def get_drama():
    genre='Romance'
    data =[]
    for index, row in df.iterrows():
        if genre in row['Genre']: data.append(row)
    df_search = pd.DataFrame(data)
    result = df_search.sort_values('IMDB_Score',ascending=False)[['Title','IMDB_Score']].set_index('Title').rename_axis(None).head(5)
    result.columns = result.columns.str.replace('IMDB_Score', 'Top_5_movie')
    result=result.to_json()
    return result


@api.route('/scifi', methods=["GET"])
@cross_origin()
def get_scifi():
    genre='Sci-Fi'
    data =[]
    for index, row in df.iterrows():
        if genre in row['Genre']: data.append(row)
    df_search = pd.DataFrame(data)
    result = df_search.sort_values('IMDB_Score',ascending=False)[['Title','IMDB_Score']].set_index('Title').rename_axis(None).head(5)
    result.columns = result.columns.str.replace('IMDB_Score', 'Top_5_movie')
    result=result.to_json()
    return result




if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    api.run(host='0.0.0.0', port=port)