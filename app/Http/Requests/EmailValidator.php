<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmailValidator extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'=>'required',
            'body' => 'required|max:500',
            'subject' => 'required|max:255'
        ];
    }
}
