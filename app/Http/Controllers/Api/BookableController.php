<?php

namespace App\Http\Controllers\Api;

use App\Models\Bookable;
use App\Http\Controllers\Controller;
use App\Http\Resources\BookableIndexResource;
use App\Http\Resources\BookableShowResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookableController extends Controller
{
    public function index()
    {
        //return Bookable::all();
        // for multiple objects use collection
        return BookableIndexResource::collection(Bookable::all());
    }


    public function show($id)
    {
        //return Bookable::findOrFail($id);
        return new BookableShowResource(Bookable::findOrFail($id));
    }
}
