<?php

namespace App\Http\Requests;

use App\Models\Story;
use Illuminate\Foundation\Http\FormRequest;

class SearchStoriesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'search' => 'string',
            'page' => 'numeric',
            'limit' => 'numeric'
        ];
    }

    public function searchStories()
    {

        return Story::search();
        // if($this->search){

        // }
        // return Story::where
    }
}
